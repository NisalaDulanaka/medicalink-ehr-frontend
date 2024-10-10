import { createContext, Key, useContext } from "react";
import { routes } from "../config";
import React from "react";

export interface ITabProps {
  key: Key | number;
  path: string;
  title: string;
  element: React.ReactNode;
}

export interface ITabContextProps {
  addTab: (tab: {
    title: string;
    path: string;
    element: React.ReactNode;
  }) => void;
  removeTab: (index: number) => void;
  tabs: ITabProps[];
  setTabs: (element: ITabProps[]) => void;
  activeTab: number;
  setActiveTab: (index: number) => void;
}

export interface ITabContextProviderProps {
  children: React.ReactNode;
}

export const TabContext = createContext<ITabContextProps | undefined>(
  undefined
);

/**
 * A custom hook to use the tab context
 * @returns ITabContextProps
 * @throws Error - when acessing from outside of a provider
 */
export const useTabContext = () => {
  const context = useContext<ITabContextProps | undefined>(TabContext);

  if (!context) {
    throw new Error("useTabContext must be used within a TabProvider");
  }

  return context;
};

/**
 * Stores the tab information in local storage to preserve state when page reloads
 * @param tabs The tabs to be stored
 */
export const storeTabsInLocalStorage = (tabs: ITabProps[]) => {
  localStorage.setItem(
    "openTabs",
    JSON.stringify(
      tabs.map((tab) => ({
        key: tab.key,
        title: tab.title,
        path: tab.path,
      }))
    )
  );

  localStorage.setItem("lastTabKey", tabs[tabs.length - 1].key.toString());
};

/**
 * Retrieves the stored tab related information from local storage
 * @returns storedTabs - The list of tab props
 * @returns lastTabKey - The Key of the last tab in the list
 */
export const getStoredStates = (): {
  storedTabs: {
    key: Key | number;
    title: string;
    path: string;
  }[];
  lastTabKey: number;
} => {
  const storedTabs = JSON.parse(localStorage.getItem("openTabs") || "[]");
  const lastTabKey = Number.parseInt(localStorage.getItem("lastTabKey") || "0");

  return {
    storedTabs: storedTabs,
    lastTabKey,
  };
};

/**
 * Converts the local storage tab information into proper tab props and initializes there component
 * @param tabs The tab information retrieved from the local storage
 */
export const getReOpenedTabs = (
  tabs: {
    key: Key | number;
    title: string;
    path: string;
  }[]
): ITabProps[] => {
  return tabs.map((tab) => {
    const el = routes.find((route) => route.path == tab.path)?.Component;
    return {
      key: tab.key,
      title: tab.title,
      path: tab.path,
      element: el ? React.createElement(el) : null,
    };
  });
};
