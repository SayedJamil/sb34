// import { useState, useEffect, useContext } from "react"
import Intro from './scenes/Intro';
import './styles/app.css'
import GameContainer from './utils/GameContainer';
import Router from './utils/Router';

function App() {
  return (
    <GameContainer>
      <Router sceneId="/">
        <Intro />
      </Router>
    </GameContainer>
  );
}

export default App;
