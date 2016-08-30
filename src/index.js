import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Contenct from './components/content';
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
        <Contenct />
        <Song temp={94} playing={this.state.playing}>
          <Sequencer resolution={16} bars={1}>
            <Sampler
              sample='/samples/kick.wav'
              steps={[0, 5, 8, 12]}
            />
            <Sampler
              sample='/samples/kick.wav'
              steps={[0, 5, 8, 12]}
            />
            <Sampler
              sample='/samples/snare.wav'
              steps={[4, 12]}
            />
            <Sampler
              sample='/samples/hh.wav'
              steps={[0, 2, 4, 6, 8, 10, 12, 14]}
            />
            <Sampler
              sample='/samples/hh-open.wav'
              steps={[2, 10]}
            />
          </Sequencer>
          <Sequencer resolution={8} bars={2}>
            <Synth
              type='sine'
              steps={[
                [0, 1, ["c5", "e5", "a5"]],
                [1, 1, ["c5", "e5", "a5"]],
                [2, 1, ["c5", "e5", "a5"]],
                [3, 1, ["c5", "e5", "a5"]],
                [4, 1, ["c5", "e5", "a5"]],
                [5, 1, ["c5", "e5", "a5"]],
                [6, 1, ["c5", "e5", "a5"]],
                [7, 1, ["c5", "e5", "a5"]],
                [8, 1, ["b5", "e5", "a5"]],
                [9, 1, ["b5", "e5", "a5"]],
                [10, 1, ["b5", "e5", "a5"]],
                [11, 1, ["b5", "e5", "d5"]],
                [12, 1, ["b5", "e5", "d5"]],
                [13, 1, ["b5", "e5", "d5"]],
                [14, 1, ["b5", "e5", "d5"]],
                [15, 1, ["b5", "e5", "d5"]],
              ]}
            />
          </Sequencer>
          <Sequencer resolution={4} bars={2}>
            <Synth
              type='square'
              steps={[
                [0, 1, "a1"],
                [3, 1, ["e2", "e3"]],
                [4, 1, "b1"],
                [7, 1, ["e3", "e2"]],
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
