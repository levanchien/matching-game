import { FC } from 'react';

type Props = {
  move: number;
  score: number;
  time: number
}

const GameHeader: FC<Props> = ({ score, move, time }) => {

  return (
    <div className="game-header">
      <div className="title">Matching Game</div>
      <span className="move">Move: <span className="move-value">{move}</span></span>&nbsp;&nbsp;
      <span className="score">Score: <span className="score-value">{score}</span></span>&nbsp;&nbsp;
      <span className="time">Time: <span className="score-value"> {time}</span></span>
    </div>
  );
}

export default GameHeader;