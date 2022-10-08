import React from 'react';
import { Provider } from 'react-redux';
import './App.less';
import './App.scss';
import AppRoutes from './components/AppRoutes';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
