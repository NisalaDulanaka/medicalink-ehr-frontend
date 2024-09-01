import { createContext, Key, useContext } from "react";

export interface ITabProps {
    key: Key | number,
    title: string,
    element: React.ReactNode
}

export interface ITabContextProps {
    addTab: (
        tab: {
            title: string,
            element: React.ReactNode
        }
    ) => void;
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