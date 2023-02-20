import "/Users/jigyasa/codedamn_quiz_app/src/App.css";
import { useContext } from "react";
import { useState } from "react";
import { GameStateContext } from "../helpers/Context";
function Menu() {
    const {gameState, setGameState, userName, setUserName } = useContext(GameStateContext);
    return(
 <div className="Menu">
    <label>Enter your Name:</label>
    <input type="text" placeholder="Ex. Jigyasa" onChange={(event) => {
                setUserName(event.target.value)
            }}></input>
    <button onClick={() =>{
        setGameState("playing");
    }}>Start Quiz</button>
 </div>
    );
}
export default Menu;