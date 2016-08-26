import React, { Component } from 'react';

class Song extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Song tempo={90}>
        <Sequencer resolution={16} bars={1}>
          <Sampler
            sample="/samples/kick.wav"
            steps={[0, 4, 8, 12]}
          />
        </Sequencer>
      </Song>
    );
  }

}

export default Song;
