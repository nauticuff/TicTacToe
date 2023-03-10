import Square from '../square/square';
import calculateWinner from '../winner/winner';
import React from 'react';

function Board({xIsNext, squares, onPlay, color, handleColor, resetColor}) {

  function handleReset(){
    resetColor()
  }

    function handleClick(i) {
      if(squares[i] || calculateWinner(squares)){
        return
      } 
      const nextSquares = squares.slice();
      const nextColors = color.slice();
     
      
      if (xIsNext) {
        nextSquares[i] = "X";
        nextColors[i] = 'square dark';
      } else {
        nextSquares[i] = "O";
        nextColors[i] = 'square light';
      }
      onPlay(nextSquares);
      handleColor(nextColors);
      
    }
  
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
      setTimeout(() => {
        alert(`${winner} you beauty! You have won!`)
      }, 10);
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
  
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square style={color[0]} value={squares[0]} onSquareClick={() => handleClick(0)}/>
          <Square style={color[1]} value={squares[1]} onSquareClick={() => handleClick(1)}/>
          <Square style={color[2]} value={squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>
        <div className="board-row">
          <Square style={color[3]} value={squares[3]} onSquareClick={() => handleClick(3)}/>
          <Square style={color[4]} value={squares[4]} onSquareClick={() => handleClick(4)}/>
          <Square style={color[5]} value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>
        <div className="board-row">
          <Square style={color[6]} value={squares[6]} onSquareClick={() => handleClick(6)}/>
          <Square style={color[7]} value={squares[7]} onSquareClick={() => handleClick(7)}/>
          <Square style={color[8]} value={squares[8]} onSquareClick={() => handleClick(8)}/>
        <div><button onClick={() => handleReset()} className='m-6 py-2 px-4 border-none rounded bg-red-400 text-white cursor-pointer'>Reset</button></div>
        </div>
      </div>
    );
  }

export default Board;

 