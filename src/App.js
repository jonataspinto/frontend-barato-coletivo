import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import { GlobalStyles } from './styles/themes/global';
import usePersistedThemeState from './utils/usePersistedThemeState';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

export default function App() {
  const [theme, setTheme] = usePersistedThemeState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}
