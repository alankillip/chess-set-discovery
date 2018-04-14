import React, { Component } from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import ChessSet from './chess-set/chess-set';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">A styled Chess Board Component:</h1>
        </header>
        <ThemeProvider theme={theme}>
          <ChessSet />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
