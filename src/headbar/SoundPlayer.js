import React, { Component } from 'react';
import RockEye from "../images/rockEye.jpg"
import soundFile from "../images/rock.mp3"

class SoundPlayer extends Component {
  constructor(props) {
    super(props);
    this.audio = new Audio(soundFile);
  }

  render() {
    const playSound = () => {
        this.audio.play();
      }

    return (
      <div>
        <input className="header_img" type="image" src={RockEye} alt="I am the rock" onClick={playSound} />
      </div>
    );
  }
}

export default SoundPlayer;