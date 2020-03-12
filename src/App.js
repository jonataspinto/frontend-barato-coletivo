import React from 'react';
import Routes from './containers/routes';
import addThemeProvider from './styles/addThemeProvider';

const App = () => addThemeProvider(<Routes />);

export default App;
