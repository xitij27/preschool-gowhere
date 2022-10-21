import React, { useContext, useState, useEffect } from "react";

const FilterContext = React.createContext();

export const useFilter = () => useContext(FilterContext);
export const FilterProvider = ({ children }) => {

    const [filteredPreschools,setFilteredPreschools] = useState(null);

    const value = {
        filteredPreschools,
        setFilteredPreschools,
    };

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    );
};