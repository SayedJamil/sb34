// import { useState, useEffect, useContext } from "react"
import { useEffect, useState } from 'react';
import Intro from './scenes/Intro';
import './styles/app.css'
import GameContainer from './utils/GameContainer';
import { LoadImage } from './utils/loadImage';
import Router from './utils/Router';

function App() {
  const [soundButton, setSoundButton] = useState(null);
  const [noSoundButton, setNoSoundButton] = useState(null);
  // Load Part
  const [Load, setLoad] = useState(true);
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
  const [mute, setmute] = useState(false);
  useEffect(() => {
    if (BG_sound) {
      if (mute) {
        BG_sound?.mute(true)
      } else {
        BG_sound?.mute(false)
      }
    }
  }, [mute])

  const toggleMute = () => { setmute(!mute) }

  // Load Audio part
  const [BG_sound, setBG_sound] = useState(null);

  const loadAudio = () => {
    const bg_sound = new Howl({
      src: [`ee01_ow_thss_pl1/audio/Entire_video_song.mp3`],
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
      <Router sceneId="/">
        <Intro />
      </Router>
    </GameContainer>
  );
}

export default App;
