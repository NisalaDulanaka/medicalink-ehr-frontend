import { useState } from "react";
import { HomeTabTest } from "./TabNavigator";
import { ITabContextProviderProps, ITabProps, TabContext } from "./tabUtils";

export default function TabContextProvider({children}: ITabContextProviderProps) {
    const [tabCount, setTabCount] = useState<number>(1);
    const [tabs, setTabs] = useState<ITabProps[]>([
        { key: 1, title: 'Home', element: <HomeTabTest /> },
    ]);
    const [activeTab, setActiveTab] = useState(0);

    const removeTab = (index: number) => {
        // Remove the tab and create a new list
        const newTabs = tabs.filter((_tab, i) => index !== i);
        
        setTabs(newTabs);
        if(index == newTabs.length) {
            setActiveTab(0);
        }
        else if(activeTab != 0 && activeTab > index) setActiveTab(activeTab - 1);
    }

    const addTab = (
        tab: {
            title: string,
            element: React.ReactNode
        }
    ) => {
        // create new list and add the tab
        const newTabs = [...tabs];
        newTabs.push({...tab, key: tabCount + 1});

        setTabs(newTabs);
        setTabCount(tabCount + 1);
        setActiveTab(newTabs.length - 1);
    }

    return (
        <TabContext.Provider value={{
            addTab, removeTab, tabs, setTabs, activeTab, setActiveTab
        }}>
            {children}
        </TabContext.Provider>
    )
}