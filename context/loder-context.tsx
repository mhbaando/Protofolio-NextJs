import React, { createContext, ReactNode, useContext, useState } from "react";

// define context type
type loaderContextType = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};

export const loaderContext = createContext<loaderContextType>({
  isVisible: false,
  setIsVisible: (isVisible) => {
    !isVisible;
  },
});

// define children type
type Props = {
  children: ReactNode;
};
export const ContextPorvider = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <loaderContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </loaderContext.Provider>
  );
};

// use context
export const useLoader = () => useContext(loaderContext);
