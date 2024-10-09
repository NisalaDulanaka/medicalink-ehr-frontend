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

export const useTabContext = () => {
  const context = useContext<ITabContextProps | undefined>(TabContext);

  if (!context) {
    throw new Error("useTabContext must be used within a TabProvider");
  }

  return context;
};

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
};

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
