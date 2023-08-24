import { useState } from "react";

const Moves = ({ moves }) => {
  let firstSubMoves = moves.slice(0, 10);
  const [subMoves, setSubMoves] = useState(firstSubMoves);

  const paginateNext = () => {
    let indexOfLastMove;
    moves.filter((move) => {
      if (move == subMoves[9]) {
        indexOfLastMove = moves.indexOf(move);
      }
    });
    if (indexOfLastMove + 1 == moves.length) {
      return;
    }
    if ((indexOfLastMove + 1) % 10 == 0) {
      setSubMoves(moves.slice(indexOfLastMove + 1, indexOfLastMove + 11));
    } else {
      return;
    }
  };

  const paginatePrevious = () => {
    let indexOfFirstMove;
    moves.filter((move) => {
      if (move == subMoves[0]) {
        indexOfFirstMove = moves.indexOf(move);
      }
    });
    if (indexOfFirstMove !== 0) {
      setSubMoves(moves.slice(indexOfFirstMove - 10, indexOfFirstMove));
    } else {
      return;
    }
  };

  return (
    <div className='moves-container'>
      <div className='moves-subcontainer'>
        {subMoves.map((moves) => (
          <p>{moves}</p>
        ))}
      </div>
      {moves.length > 10 ? (
        <div className='paginationBtns'>
          <button className='navBtn' onClick={() => paginatePrevious()}>
            ←
          </button>
          <button className='navBtn' onClick={() => paginateNext()}>
            →
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Moves;
