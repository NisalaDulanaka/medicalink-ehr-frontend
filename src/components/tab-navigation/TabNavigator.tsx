import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useTabContext } from "./tabUtils";
import AddIcon from "@mui/icons-material/Add";
import HomeNew from "../../pages/HomeNew";

interface TabProps {
  className?: string | undefined;
}

export default function TabNavigator() {
  const { activeTab, setActiveTab, tabs, removeTab, addTab } = useTabContext();

  return (
    <div className="w-full h-full">
      <div className="flex bg-gray-100 items-stretch h-[35px]">
        <button className="flex items-center px-2 text-gray-400" disabled>
          <ArrowBackIosIcon className="!text-[12px]" />
        </button>

        <div
          className="tabs flex items-stretch [&>div]:flex [&>div]:items-center [&>div]:gap-x-[10px] 
            [&>div]:px-4 [&>div]:text-[13px] [&>div]:leading-[13px] [&>div]:cursor-pointer text-[#00000093] [&>div]:font-medium"
        >
          {tabs.map((tab, index) => {
            return (
              <div
                key={tab.key}
                className={
                  index == activeTab
                    ? "bg-white border-b-[2.5px] border-[#2196F3] text-[#2196F3]"
                    : "hover:bg-gray-200"
                }
              >
                <span onClick={() => setActiveTab(index)}>{tab.title}</span>
                <button className="" onClick={() => removeTab(index)}>
                  <CloseIcon className="!text-[16px]" />
                </button>
              </div>
            );
          })}

          <div
            className="text-[#2196F3] !px-3 hover:bg-gray-200"
            onClick={() => addTab({ title: "Home", element: <HomeTabTest /> })}
          >
            <AddIcon />
          </div>
        </div>

        <button
          className="ms-auto flex items-center px-2 text-gray-400"
          disabled
        >
          <ArrowForwardIosIcon className="!text-[12px]" />
        </button>
      </div>

      <div className="bg-white">
        {tabs.map((tab, index) => {
          return (
            <div key={tab.key} className={index != activeTab ? "hidden" : ""}>
              {tab.element}
            </div>
          );
        })}
      </div>
    </div>
  );
}

//Only used for testing the tab system
export function HomeTabTest({ className }: TabProps) {
  const { addTab } = useTabContext();
  const [count, setCount] = useState(0);

  return (
    <div
      className={`flex flex-col justify-center items-center py-20 ${className}`}
    >
      <div>Home Tab</div>
      <p>{count}</p>
      <button
        className="bg-red-400 rounded-lg px-4 py-2"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <div className="flex mt-4 gap-x-3">
        <button
          className="rounded-lg bg-yellow-500 px-4 py-2"
          onClick={() =>
            addTab({ title: "Settings", element: <SettingsTabTest /> })
          }
        >
          Go to Settings
        </button>
        <button
          className="rounded-lg bg-yellow-500 px-4 py-2"
          onClick={() =>
            addTab({ title: "Patients", element: <PatientTabTest /> })
          }
        >
          Go to Patients
        </button>
        <button
          className="rounded-lg bg-yellow-500 px-4 py-2"
          onClick={() => addTab({ title: "Test", element: <TestTabTest /> })}
        >
          Go to Test
        </button>
        <button
          className="rounded-lg bg-green-500 px-4 py-2"
          onClick={() => addTab({ title: "HomeNew", element: <HomeNew /> })}
        >
          HomeNew
        </button>
      </div>
    </div>
  );
}

export function SettingsTabTest({ className }: TabProps) {
  const [count, setCount] = useState(0);

  return (
    <div
      className={`flex flex-col justify-center items-center py-20 ${className}`}
    >
      <div>Settings Tab</div>
      <p>{count}</p>
      <button
        className="bg-red-400 rounded-lg px-4 py-2"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export function PatientTabTest({ className }: TabProps) {
  const [count, setCount] = useState(0);

  return (
    <div
      className={`flex flex-col justify-center items-center py-20 ${className}`}
    >
      <div>Patient Tab</div>
      <input type="text" placeholder="Enter patients name...." />
      <p>{count}</p>
      <button
        className="bg-red-400 rounded-lg px-4 py-2"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export function TestTabTest({ className }: TabProps) {
  return (
    <div
      className={`flex flex-col justify-center items-center py-20 ${className}`}
    >
      <h1 className="text-2xl">
        This tab is just to check if the add tab is working
      </h1>
    </div>
  );
}

export function HomeNewTest({ className }: TabProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <h1 className="text-2xl mt-5 ml-5"></h1>
      <HomeNew />
    </div>
  );
}
