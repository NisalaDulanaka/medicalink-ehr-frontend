import "./App.css";
import AppHeader from "./components/app-header/AppHeader";
import Sidebar from "./components/sidebar/Sidebar";
import DenseTable from "./components/dense-table/DenseTable";

function App() {
  // IMPORTANT: Do not change the classes in this component

  return (
    <>
      <div className="h-[100vh] flex flex-col">

        <div className="flex-initial">
          <AppHeader /> {/* This is where you put the appbar. I just created a component named AppHeader change it as you like */}
        </div>

        <div className="flex-auto flex">

          <div className="flex-initial">
            <Sidebar /> {/* This is the sidebar */}
          </div>

          <div className="flex-auto bg-green-100">
            {/* This is where I'll add the tab component */}
            <DenseTable />
          </div>

        </div>

      </div>
    </>
  );
}

export default App;
