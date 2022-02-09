// import { useState, useEffect, useContext } from "react"
import { Howl } from 'howler';
import { useEffect, useState } from 'react';
import Intro from './scenes/Intro';
import './styles/app.css'
import Image from './utils/elements/Image';
import GameContainer from './utils/GameContainer';
import { LoadImage } from './utils/loadImage';
import Router from './utils/Router';

function App() {
  const [soundButton, setSoundButton] = useState(null);
  const [noSoundButton, setNoSoundButton] = useState(null);
  const [Load, setLoad] = useState(true);
  const [mute, setmute] = useState(false);
  const [BG_sound, setBG_sound] = useState(null);

  // Load Part

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 3000)
    loadBgImage()
    loadAudio()
  }, []);

  if (Load) return (
    <div class="circle">
      <div class="wave"></div>
    </div>
  )

  // Mute buttons part

  const loadBgImage = async () => {
    const unmute = await LoadImage(`ee01_ow_thss_pl1/button/Buttons-20.svg`);
    const mute = await LoadImage(`ee01_ow_thss_pl1/button/Buttons-26.svg`);
    setSoundButton(unmute);
    setNoSoundButton(mute);
  };

  // Mute part

 

  const toggleMute = () => { setmute(!mute) }

  // Load Audio part

  const loadAudio = () => {
    const bg_sound = new Howl({
      src: [`internal/audio/Entire_video_song.mp3`],
      loop: true,
      volume: 0.1,
      autoplay: true
    })
    bg_sound.play()
    setBG_sound(bg_sound)
  }

  useEffect(() => {
    if (BG_sound !== null) {
      BG_sound?.play()
      BG_sound.volume(0.1)
    }
  }, [BG_sound])



  return (
    <GameContainer>
      {
        mute
          ?
          <Image src={noSoundButton} alt="" className="music_button" onClick={toggleMute} />
          :
          <Image src={soundButton} alt="" className="music_button" onClick={toggleMute} />
      }
      <Router sceneId="/">
        <Intro />
      </Router>
    </GameContainer>
  );
}

export default App;
