// import { useState, useEffect, useContext } from "react"
import { useState } from 'react';
import Intro from './scenes/Intro';
import './styles/app.css'
import GameContainer from './utils/GameContainer';
import Router from './utils/Router';

function App() {
  const [Load, setLoad] = useState(true);
  if (Load) return (
    <div className="intro_Loading_screen">
      Loading
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div >
  )

  return (
    <GameContainer>
      <Router sceneId="/">
        <Intro />
      </Router>
    </GameContainer>
  );
}

export default App;
