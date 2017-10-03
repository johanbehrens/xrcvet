import React, { Component } from 'react';
import '../../App.css';

class App extends Component {
    componentDidMount() {
        this.props.getRaces();
    }

  render() {
      const hostname = window && window.location && window.location.hostname;
    return (
      <div className="App">
          {hostname}

          {this.props.children}
      </div>
    );
  }
}

export default App;
