import classes from "../assets/styles/TicTacToe.module.css";

import { useState } from "react";

export function TicTacToe() {
  // başlangıç hamleleri -> [null, null,null,null,null,null,null,null,null,]
  const [moves, setMoves] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const winner = checkWinner(moves);

  function makeMove(index) {
    //console.log(index, "****");

    if (winner) {
      return;
    }
    if (moves[index]) {
      return;
    }

    const newMoves = [...moves];
    newMoves[index] = isX ? "X" : "O";

    setIsX(!isX);
    setMoves(newMoves);
  }

  return (
    <>
      <h3>TicTacToe</h3>
      {winner && (
        <p className={classes.Message}>Tebrikler {winner}, kazandın!!!</p>
      )}
      <div className={classes.Board}>
        {moves.map((m, index) => (
          <Square key={index} index={index} content={m} onMakeMove={makeMove} />
        ))}
      </div>
    </>
  );
}

function Square({ index, content, onMakeMove }) {
  return (
    <div
      onClick={() => {
        onMakeMove(index);
      }}
    >
      {content}
    </div>
  );
}

//[ null, "X", "O", null ...]
function checkWinner(moves) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];

    if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
      return moves[a];
    }
  }

  /*if( moves.findIndex( (m)=>{} )  ){

    return "Maçın Kazananı yok"
        
  }

  */
  

  return false;
}
