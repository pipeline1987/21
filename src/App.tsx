import * as React from 'react';
import { Provider } from 'react-redux';
import Routes from './lib/routes/Routes';
import store from './lib/store/initialState';

import './App.css';

// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Provider store={store}>
          <Routes />
        </Provider>
      </div>
    );
  }
}

export default App;