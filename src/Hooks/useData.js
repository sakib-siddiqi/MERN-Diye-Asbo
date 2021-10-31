import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";

const useData = () => useContext(DataContext);
export default useData;
