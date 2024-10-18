import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { useTabContext } from "./tabUtils";
import AddIcon from "@mui/icons-material/Add";
import HomePage from "../../../pages/HomePage";

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
            onClick={() => addTab({ title: "Home", path: "/", element: <HomePage /> })}
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
