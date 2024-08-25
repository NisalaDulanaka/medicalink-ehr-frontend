import "./App.css";
import AppHeader from "./components/app-header/AppHeader";
import Sidebar from "./components/sidebar/Sidebar";
import TabNavigator from "./components/tab-navigation/TabNavigator";

function App() {
  // IMPORTANT: Do not change the classes in this component

  return (
    <>
      <div className="h-[100vh] flex flex-col">

        <div className="flex-initial">
          <AppHeader /> {/* This is where you put the appbar. I just created a component named AppHeader change it as you like */}
        </div>

        <div className="flex-auto flex">

          <TabNavigator />

        </div>

      </div>
    </>
  );
}

export default App;
