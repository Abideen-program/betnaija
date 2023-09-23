import { createContext, useState } from "react";

type SidebarProp = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SidebarContext = createContext<SidebarProp>({
  showSidebar: true,
  setShowSidebar: () => {},
});

export const SidebarProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  const value = { showSidebar, setShowSidebar };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
