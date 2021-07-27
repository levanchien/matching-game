import { useEffect } from 'react';
import { FC } from 'react';
import GameCard from './GameCard';
import { GameCardObj } from './model';

type Props = {
  cards: GameCardObj[],
  handleSelectCard: Function
}

const GameMain: FC<Props> = ({ cards, handleSelectCard }) => {

  useEffect(() => () => { console.log('render'); }, [handleSelectCard])

  return (
    <div className="game-board-main">
      {
        cards.map(card => <GameCard selectCard={handleSelectCard} key={card.id} card={card} />)
      }
    </div>
  );
}


export default GameMain;