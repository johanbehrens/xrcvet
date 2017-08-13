import React, { Component } from 'react';
import '../../App.css';

class App extends Component {
    componentDidMount() {
        this.props.getRaces();
    }

  render() {
    return (
      <div className="App">
          {this.props.children}
      </div>
    );
  }
}

export default App;
