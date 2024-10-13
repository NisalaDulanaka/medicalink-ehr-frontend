import { useMediaQuery } from "@mui/material";
import "./App.css";
import "./responsive.css";
import AppHeader from "./components/app-header/AppHeader";
import AppRouter from "./components/navigation/router-navigation/AppRouter";
import TabContextProvider from "./components/navigation/tab-navigation/TabContext";
import TabNavigator from "./components/navigation/tab-navigation/TabNavigator";
import { AuthContextProvider, AuthWrapper } from "./contexts/AuthProvider";

function App() {
  // IMPORTANT: Do not change the classes in this component
  const isLargeScreen = useMediaQuery("(min-width:600px)");

  return (
    <AuthWrapper>
      <AuthContextProvider>
        <TabContextProvider>
          <div className="h-[100vh] flex flex-col">
            <div className="flex-initial">
              <AppHeader />
            </div>
            <div className="flex-auto flex">
              {isLargeScreen ? <TabNavigator /> : <AppRouter />}
            </div>
          </div>
        </TabContextProvider>
      </AuthContextProvider>
    </AuthWrapper>
  );
}

export default App;
