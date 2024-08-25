import { createContext, Key, useContext, useState } from "react";
import { HomeTab, PatientTab, SettingsTab } from "./TabNavigator";

export interface ITabProps {
    key: Key | number,
    title: String,
    element: React.ReactNode
}

export interface ITabContextProps {
    addTab: (tab: ITabProps) => void;
    removeTab: (index: number) => void;
    tabs: ITabProps[];
    setTabs: (element: ITabProps[]) => void;
    activeTab: number;
    setActiveTab: (index: number) => void;
}

export interface ITabContextProviderProps{
    children: React.ReactNode;
}

export const TabContext = createContext<ITabContextProps | undefined>(undefined);

export const useTabContext = () => {
    const context = useContext<ITabContextProps | undefined>(TabContext);

    if(! context) {
        throw new Error('useTabContext must be used within a TabProvider');
    }

    return context;
}

export default function TabContextProvider({children}: ITabContextProviderProps) {
    const [tabs, setTabs] = useState<ITabProps[]>([
        { key: 1, title: 'Home', element: <HomeTab /> },
        { key: 2, title: 'Seneli 20 yrs, Female, Radiology', element: <PatientTab /> },
        { key: 3, title: 'Settings', element: <SettingsTab /> },
        { key: 4, title: 'Counter Tab', element: <HomeTab /> }
    ]);
    const [activeTab, setActiveTab] = useState(0);

    const removeTab = (index: number) => {
        // Remove the tab and create a new list
        let newTabs = tabs.slice(0,index).concat(tabs.slice(index + 1, tabs.length));

        setTabs(newTabs);
    }

    const addTab = (tab: ITabProps) => {
        // Remove the tab and create a new list
        let newTabs = [...tabs];
        newTabs.push(tab);

        setTabs(newTabs);
    }

    return (
        <TabContext.Provider value={{
            addTab, removeTab, tabs, setTabs, activeTab, setActiveTab
        }}>
            {children}
        </TabContext.Provider>
    )
}