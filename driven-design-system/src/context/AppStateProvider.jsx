import React, { createContext, useContext, useState } from 'react';

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
    // Global Watchlist State
    const [watchlist, setWatchlist] = useState([2, 5, 8]); // Mock initial watchlist ids

    const toggleWatchlist = (projectId) => {
        setWatchlist((prev) => 
            prev.includes(projectId) 
                ? prev.filter(id => id !== projectId)
                : [...prev, projectId]
        );
    };

    const value = {
        watchlist,
        toggleWatchlist,
        watchlistCount: watchlist.length,
    };

    return (
        <AppStateContext.Provider value={value}>
            {children}
        </AppStateContext.Provider>
    );
};

export const useAppState = () => {
    const context = useContext(AppStateContext);
    if (!context) {
        throw new Error('useAppState must be used within an AppStateProvider');
    }
    return context;
};
