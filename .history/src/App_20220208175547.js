// import { useState, useEffect, useContext } from "react"
import { Howl } from 'howler';
import { useContext, useEffect, useState } from 'react';
import { SceneContext } from './contexts/SceneContext';
import Explain from './scenes/Explain';
import Intro from './scenes/Intro';
import './styles/app.css'
import Image from './utils/elements/Image';
import GameContainer from './utils/GameContainer';
import { LoadImage } from './utils/loadImage';
import { LoadJson } from './utils/loadJson';
import Router from './utils/Router';

function App() {
  const [soundButton, setSoundButton] = useState(null);
  const [noSoundButton, setNoSoundButton] = useState(null);
  const [Load, setLoad] = useState(true);
  const [mute, setmute] = useState(false);
  const [BG_sound, setBG_sound] = useState(null);
  const { setTransition } = useContext(SceneContext);

  const loadBgImage = async () => {
    const unmute = await LoadImage(`internal/button/Buttons-20.svg`);
    const mute = await LoadImage(`internal/button/Buttons-26.svg`);
    setSoundButton(unmute);
    console.log(unmute)
    setNoSoundButton(mute);
  };
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
  const loadLottie = async () => {
    const data = await LoadJson(`internal/lottie/water-filling-animation.json`);
    setTransition(data);
  };

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

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 3000)
    loadBgImage()
    loadAudio()
    loadLottie()
  }, []);

  if (Load) return (
    <div class="circle">
      <div class="wave"></div>
    </div>
  )

  const toggleMute = () => { setmute(!mute) }

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
      <Router sceneId="/explain">
        <Explain />
      </Router>
    </GameContainer>
  );
}

export default App;