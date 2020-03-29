import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store';
import Routes from './containers/routes';
import addThemeProvider from './styles/addThemeProvider';

const App = () => (
  <Provider store={store}>{addThemeProvider(<Routes />)}</Provider>
);

export default App;
