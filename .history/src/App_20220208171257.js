// import { useState, useEffect, useContext } from "react"
import { useState } from 'react';
import Intro from './scenes/Intro';
import './styles/app.css'
import GameContainer from './utils/GameContainer';
import Router from './utils/Router';

function App() {
  const [Load, setLoad] = useState(true);
  if (Load) return (
    <div class="circle">
      <div class="wave"></div>
    </div>
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
