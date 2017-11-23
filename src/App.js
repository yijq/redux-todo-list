import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducers';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

import TodoContainer from './containers/todoContainer/todoContainer';

const store = createStore(reducer,{},applyMiddleware(logger));

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
        <Provider store={store}>
          <TodoContainer />
        </Provider>

    );
  }
}

export default App;
