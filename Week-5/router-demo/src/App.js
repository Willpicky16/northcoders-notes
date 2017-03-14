import React, { Component } from 'react';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Router Demo</h1>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default App;
