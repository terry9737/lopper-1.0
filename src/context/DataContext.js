import { createContext } from "react";
import { useState } from "react";
import { NavData } from "./NavData";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
export const DataContext = createContext({});

const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const sliderControls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      sliderControls.start("active");
    } else {
      sliderControls.start("hidden");
    }
  });
  return (
    <DataContext.Provider
      value={{ open, setOpen, NavData, ref, sliderControls }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
