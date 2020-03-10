import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './containers/routes';
import { GlobalStyles, usePersistedThemeState, ThemeContext } from './styles';
import themes from './styles/themes';

export default function App() {
  const [theme, setTheme] = usePersistedThemeState('theme', 'dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={toggleTheme}>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
