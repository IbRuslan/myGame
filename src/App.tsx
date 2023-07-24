import React, {useEffect, useState} from 'react';
import './App.css';
import {BoardComponent} from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";
import {LostFigures} from "./components/LostFigures";
import {TimerGame} from "./components/Timer";

function App() {

    const [board, setBoard] = useState(new Board())
    const [whitePlayer, SetWhitePlayer] = useState(new Player(Colors.WHITE))
    const [blackPlayer, SetBlackPlayer] = useState(new Player(Colors.BLACK))
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

    useEffect(() => {
        restart()
        setCurrentPlayer(whitePlayer)
    }, [])

    function restart() {
        const newBoard = new Board()
        newBoard.initCells()
        newBoard.addFigures()
        setBoard(newBoard)
        setCurrentPlayer(whitePlayer)
    }

    function swapPlayer() {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
    }

  return (
    <div className="App">
        <TimerGame currentPlayer={currentPlayer} restart={restart}/>
        <BoardComponent board={board} setBoard={setBoard} swapPlayer={swapPlayer} currentPlayer={currentPlayer}/>
        <div>
            <LostFigures title={'Черные фигуры'} figures={board.lostBlackFigures}/>
            <LostFigures title={'Белые фигуры'} figures={board.lostWhiteFigures}/>
        </div>
    </div>
  );
}

export default App;
