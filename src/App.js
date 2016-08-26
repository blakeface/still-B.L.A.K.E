import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Song tempo={90}>
        <Sequencer resolution={16} bars={4}>
          <Sampler>
            sample=""
            steps={[0,4,8,12]}
          </Sampler>
        </Sequencer>
      </Song>
    );
  }
}

export default App;
