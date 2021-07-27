import { FC } from 'react';

type Props = {
  reset: Function,
  start: Function,
  gameStarting: boolean
}

const GameFooter: FC<Props> = ({ reset, start, gameStarting }) => {
  return (
    <div className="game-footer">
      {
        gameStarting && <button onClick={() => reset()} className="button-reset">Reset Game</button>
      }
      {
        !gameStarting && <button onClick={() => start()} className="button-reset">Start Game</button>
      }
    </div>
  );
}

export default GameFooter;