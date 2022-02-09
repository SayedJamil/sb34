// import { useState, useEffect, useContext } from "react"
import { useEffect, useState } from 'react';
import Intro from './scenes/Intro';
import './styles/app.css'
import GameContainer from './utils/GameContainer';
import Router from './utils/Router';

function App() {

  // Load Part
  const [Load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 3000)
  }, []);
  if (Load) return (
    <div class="circle">
      <div class="wave"></div>
    </div>
  )
// Mute buttons part
  const [soundButton, setSoundButton] = useState(null);
  const [noSoundButton, setNoSoundButton] = useState(null);
  const loadBgImage = async () => {
    const unmute = await LoadImage(`ee01_ow_thss_pl1/button/Buttons-20.svg`);
    const mute = await LoadImage(`ee01_ow_thss_pl1/button/Buttons-26.svg`);
    setSoundButton(unmute);
    setNoSoundButton(mute);
  };
  const [mute, setmute] = useState(false);
  

  const [BG_sound, setBG_sound] = useState(null);

  useEffect(() => {
    if (BG_sound !== null) {
      BG_sound?.play()
      BG_sound.volume(0.1)
    }
  }, [BG_sound])

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

  return (
    <GameContainer>
      <Router sceneId="/">
        <Intro />
      </Router>
    </GameContainer>
  );
}

export default App;
