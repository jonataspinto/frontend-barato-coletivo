import React from 'react';
import { ThemeProvider } from 'styled-components';
import themes, { usePersistedThemeState } from './themes';
import GlobalStyles from './global';

export const ThemeContext = React.createContext({
  action: () => {},
});

function AddThemeProvider(child) {
  const [theme, setTheme] = usePersistedThemeState('theme', 'dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={toggleTheme}>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        {child}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default AddThemeProvider;
