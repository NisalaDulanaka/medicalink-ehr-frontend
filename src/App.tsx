import "./App.css";
import AppHeader from "./components/app-header/AppHeader";
import PatientInfo from "./components/patient-info/PatientInfo";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  // IMPORTANT: Do not change the classes in this component

  return (
    <>
      <div className="h-[100vh] flex flex-col">
        <div className="flex-initial">
          <AppHeader />{" "}
          {/* This is where you put the appbar. I just created a component named AppHeader change it as you like */}
        </div>

        <div className="flex-auto flex">
          <div className="flex-initial">
            <Sidebar /> {/* This is the sidebar */}
          </div>

          <div className="flex-auto bg-green-100">
            {/* This is where I'll add the tab component */}
            <PatientInfo
              name="Seneli Jayasinghe"
              dob="19/06/2004"
              identifier="200456456456"
              gender="F"
              address="243 2nd Cross Street, Colombo"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
