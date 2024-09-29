import "./App.css";
import AppHeader from "./components/app-header/AppHeader";
import IBDForm from "./components/medical-form/IBDForm";
import TabContextProvider from "./components/tab-navigation/TabContext";
import TabNavigator from "./components/tab-navigation/TabNavigator";

function App() {
  // IMPORTANT: Do not change the classes in this component

  return (
    <>
      <div className="h-[100vh] flex flex-col">
        <TabContextProvider>
          <div className="flex-initial">
            <AppHeader />{" "}
            {/* This is where you put the appbar. I just created a component named AppHeader change it as you like */}
          </div>

          <div className="flex-auto flex">
            <TabNavigator />
          </div>
        </TabContextProvider>
      </div>
    </>
  );
}

export default App;
