import { createContext, useState } from "react";

const ThemeContextsProvider = ({ children }) => {
  //state
  const [theme, setTheme] = useState({
    isTheme: true,
    light: {
      background: "rgb(240,240,240)",
      color: "black",
    },
    dark: {
      background: "rgb(39,39,39)",
      color: "white",
    },
  });
  const themeContextData = { theme };
  return (
    <themeContexts.Provider value={themeContextData}>
      {children}
    </themeContexts.Provider>
  );
};
export const themeContexts = createContext();
export default ThemeContextsProvider;
