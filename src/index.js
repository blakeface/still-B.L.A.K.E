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
          <Sequencer resolution={16} bars={2}>
            <Synth
              type='sine'
              steps={[
                [0, 2, ["c5", "e5", "a5"]],
                [2, 2, ["c5", "e5", "a5"]],
                [4, 2, ["c5", "e5", "a5"]],
                [6, 2, ["c5", "e5", "a5"]],
                [8, 2, ["c5", "e5", "a5"]],
                [10, 2, ["c5", "e5", "a5"]],
                [12, 2, ["c5", "e5", "a5"]],
                [14, 2, ["c5", "e5", "a5"]],
                [0, 16, []],
              ]}
            />
          </Sequencer>
          <Sequencer resolution={16} bars={2}>
            <Synth
              type='sine'
              steps={[
                [0, 16, []],
                [0, 2, ["b5", "e5", "a5"]],
                [2, 2, ["b5", "e5", "a5"]],
                [4, 2, ["b5", "e5", "a5"]],
                [6, 2, ["b5", "e5", "d5"]],
                [8, 2, ["b5", "e5", "d5"]],
                [10, 2, ["b5", "e5", "d5"]],
                [12, 2, ["b5", "e5", "d5"]],
                [14, 2, ["b5", "e5", "d5"]],
                [16, 2, ["b5", "e5", "d5"]],
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
