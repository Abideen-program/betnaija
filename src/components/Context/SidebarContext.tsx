import { createContext, useState } from "react";

type SidebarProp = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SidebarContext = createContext<SidebarProp>({
  showSidebar: true,
  setShowSidebar: () => {},
  showDropdown: false,
  setShowDropdown: () => {},
});

export const SidebarProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const value = { showSidebar, setShowSidebar, showDropdown, setShowDropdown };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
