// src/SubContext.js
import React, { createContext, useState, useContext } from 'react';

const SubContext = createContext();

export function SubContextProvider({ children }) {
    const [subject, setSubject] = useState('');

    return (
        <SubContext.Provider value={{ subject, setSubject }}>
            {children}
        </SubContext.Provider>
    );
}

export function useSubject() {
    return useContext(SubContext);
}
