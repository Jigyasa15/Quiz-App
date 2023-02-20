
import './App.css';
import { GameStateContext } from '/Users/jigyasa/codedamn_quiz_app/src/helpers/Context.js';
import { useState } from 'react';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import Menu from "/Users/jigyasa/codedamn_quiz_app/src/components/Menu.js";
function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider value={{gameState,setGameState, userName, setUserName,score,setScore}}>
      {gameState === "menu" && <Menu />}
      {gameState === "playing" && <Quiz />}
      {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
