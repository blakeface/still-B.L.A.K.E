import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <Song tempo={90} autoplay='true'>
        <Sequencer resolution={16} bars={1}>
          <Sampler
            sample='/samples/kick.aif'
            steps={[0, 4, 8, 12]}
          />
        </Sequencer>
      </Song>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
