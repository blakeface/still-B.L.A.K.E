import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Song, Sequencer, Sampler } from 'react-music';

class App extends Component {
  render() {
    return (
      <Song temp={90} autoplay='true'>
        <Sequencer resolution={16} bars={1}>
          <Sampler
            sample="/samples/kick.wav"
            steps={[0, 4, 8, 12]}
          />
        </Sequencer>
      </Song>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
