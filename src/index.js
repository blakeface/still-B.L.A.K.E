import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Song, Sequencer, Sampler, Synth } from 'react-music';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {playing: true}
    this.handlePlayToggle = this.handlePlayToggle.bind(this)
  }
  handlePlayToggle() {
    this.setState({
      playing: !this.state.playing,
    });
  }
  render() {
    return (
      <div>
        <Song temp={90} playing={this.state.playing}>
          <Sequencer resolution={16} bars={1}>
            <Sampler
              sample='/samples/kick.wav'
              steps={[0, 2, 8, 10]}
            />
            <Sampler
              sample='/samples/snare.wav'
              steps={[4, 12,13,14,15]}
            />
          </Sequencer>
          <Sequencer resolution={8} bars={1}>
            <Synth
              type='sine'
              steps={[
                [0, 1, ["c5", "e5", "a5"]],
                [1, 1, ["b5", "e5", "a5"]],
                [2, 1, ["b5", "e5", "d5"]],
              ]}
            />
          </Sequencer>
        </Song>

        <button
          type='button'
          onClick={this.handlePlayToggle}>
          {this.state.playing ? 'Stop' : 'Play'}
        </button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
