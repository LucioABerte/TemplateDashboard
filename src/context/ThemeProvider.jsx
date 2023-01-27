import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';
  useEffect(() => {
    localStorage.setItem('darkMode', theme);
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, colorTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
