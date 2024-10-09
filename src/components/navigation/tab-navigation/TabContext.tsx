import { useEffect, useState } from "react";
import { getReOpenedTabs, ITabContextProviderProps, ITabProps, storeTabsInLocalStorage, TabContext } from "./tabUtils";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../config";
import { useMediaQuery } from "@mui/material";
import React from "react";

export default function TabContextProvider({
  children,
}: ITabContextProviderProps) {
  const [tabCount, setTabCount] = useState<number>(1);
  const [tabs, setTabs] = useState<ITabProps[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [pageReloaded, setPageReloaded] = useState(true);
  const isLargeScreen = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let openTabs = tabs;
    if (pageReloaded) {
      openTabs = JSON.parse(localStorage.getItem("openTabs") || "[]");
      setPageReloaded(false);
      if (openTabs) {
        openTabs = getReOpenedTabs(openTabs);
        setTabs(openTabs);
      }
      console.log(openTabs);
    }
    const nextTabIndex = location.state ? location.state.tab : undefined;
    console.log(nextTabIndex);

    const tab = openTabs.find(
      (tab, index) =>
        tab.path == location.pathname &&
        (!nextTabIndex || nextTabIndex == index)
    );
    if (tab) {
      setActiveTab(openTabs.indexOf(tab));
    } else {
      const newTab = routes.find((route) => route.path === location.pathname);
      if (newTab) {
        addTab({
          title: newTab.title,
          path: newTab.path || "/",
          element: newTab.Component && <newTab.Component />,
        });
      } else {
        navigate("*");
      }
    }
  }, [location.pathname]);

  const selectActiveTab = (index: number) => {
    setActiveTab(index);
    navigate(tabs[index].path, {
      state: {
        tab: index,
      },
    });
  };

  const removeTab = (index: number) => {
    // Remove the tab and create a new list
    const newTabs = tabs.filter((_tab, i) => index !== i);

    setTabs(newTabs);
    if (index == newTabs.length) {
      navigate(tabs[0].path, {
        state: {
          tab: 0,
        },
      });

      return;
    } else if (activeTab != 0 && activeTab > index) {
      navigate(tabs[activeTab - 1].path, {
        state: {
          tab: activeTab - 1,
        },
      });
    }
    localStorage.setItem("openTabs", JSON.stringify(newTabs));
  };

  const addTab = (tab: {
    title: string;
    path: string;
    element: React.ReactNode;
  }) => {
    if (isLargeScreen) {
      // create new list and add the tab
      const newTabs = [...tabs];
      newTabs.push({ ...tab, key: tabCount + 1 });

      setTabs(newTabs);
      setTabCount(tabCount + 1);
      navigate(tab.path, {
        state: {
          tab: newTabs.length - 1,
        },
      });
      storeTabsInLocalStorage(newTabs);
    } else {
      navigate(tab.path);
    }
  };

  return (
    <TabContext.Provider
      value={{
        addTab,
        removeTab,
        tabs,
        setTabs,
        activeTab,
        setActiveTab: selectActiveTab,
      }}
    >
      {children}
    </TabContext.Provider>
  );
}
