import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Routes from './Components/Routes';
import Header from './Components/Header';
import './styles.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
