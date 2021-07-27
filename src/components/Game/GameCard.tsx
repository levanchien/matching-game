import { FC } from 'react';
import { STATUS } from './constant';
import { GameCardObj } from './model';

type Props = {
  card: GameCardObj,
  selectCard: Function
}

const GameCard: FC<Props> = ({card, selectCard}) => {

  return (
    <div onClick={() => selectCard(card)} className={ 'game-card ' + (card.status === STATUS.HIDE ? '' : 'flipped') }>
      <figure className="front"></figure>
      <figure className="back">{ card.value }</figure>
    </div>
  );
}

export default GameCard;