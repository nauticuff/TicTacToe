import Board from '../board/board'
import { useState } from 'react';
import React from 'react';

function Game(){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [style, setStyle] = useState(Array(9).fill('square'))
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function resetGame(){
        setCurrentMove(0);
        setHistory([Array(9).fill(null)]);
        setStyle(Array(9).fill('square'));
        setCurrentMove(0);
    }

    function changeColor(nextColors){
      // const nextStyle = [...style.slice(0, currentMove + 1), nextColors];
      setStyle(nextColors);
    }

    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
      
    }
  
    function jumpTo(nextMove) {
      setCurrentMove(nextMove);
    }
  
    const moves = history.map((squares, move) => {
      let description;
      if (move > 0) {
        description = 'Go to move #' + move;
      } else {
        description = 'Go to game start';
      }
      return (
        <li key={move}>
          <button className='border-none bg-indigo-800 text-white rounded text-base py-1 px-2' onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    });
  
    return (
      <div className="game">
        <div className='game-board-cont'>
            <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} color={style} handleColor={changeColor} resetColor={resetGame}/>
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
        </div>
        
      </div>
    );
  }

export default Game;