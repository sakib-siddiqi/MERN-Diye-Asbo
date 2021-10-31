import React, { createContext } from "react";
import useFetch from "../Hooks/useFetch";
export const DataContext = createContext();
const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={useFetch()}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
