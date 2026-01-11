import React, { createContext, useContext, useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for class merging
function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const TabsContext = createContext(null);

export const Tabs = ({ value, onValueChange, defaultValue, className, children }) => {
    const [activeTab, setActiveTab] = useState(value || defaultValue);

    const handleTabChange = (newValue) => {
        if (onValueChange) {
            onValueChange(newValue);
        } else {
            setActiveTab(newValue);
        }
    };

    const currentTab = value !== undefined ? value : activeTab;

    return (
        <TabsContext.Provider value={{ activeTab: currentTab, setActiveTab: handleTabChange }}>
            <div className={cn("w-full", className)}>
                {children}
            </div>
        </TabsContext.Provider>
    );
};

export const TabsList = ({ className, children }) => {
    return (
        <div className={cn("inline-flex h-10 items-center justify-center rounded-md bg-slate-100 p-1 text-slate-500", className)}>
            {children}
        </div>
    );
};

export const TabsTrigger = ({ value, className, children }) => {
    const { activeTab, setActiveTab } = useContext(TabsContext);
    const isActive = activeTab === value;

    return (
        <button
            className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                isActive && "bg-white text-slate-950 shadow-sm",
                className
            )}
            onClick={() => setActiveTab(value)}
            data-state={isActive ? "active" : "inactive"}
        >
            {children}
        </button>
    );
};

export const TabsContent = ({ value, className, children }) => {
    const { activeTab } = useContext(TabsContext);

    if (activeTab !== value) return null;

    return (
        <div
            className={cn(
                "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2",
                className
            )}
        >
            {children}
        </div>
    );
};
