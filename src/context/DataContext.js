import { createContext } from "react";
import { useState } from "react";
import { NavData } from "./NavData";
export const DataContext = createContext({});

const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <DataContext.Provider value={{ open, setOpen, NavData }}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
