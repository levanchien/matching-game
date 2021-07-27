import { useCallback, useRef } from "react";
import { useState } from "react";
import { STATUS } from "./constant";
import GameHeader from "./GameHeader";
import GameMain from "./GameMain";
import GameFooter from "./GameFooter";
import { GameCardObj } from "./model";
import { generateGameCard, randArray } from "../../utils/Fuction";
import useCounter from "../../hooks/useCounter";
import { useEffect } from "react";

const Game = () => {

  const [cards, setCards] = useState(randArray(generateGameCard(4, 4)));
  const [move, setMove] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [isPauseGame, setIsPauseGame] = useState(true);
  const [isGameStarting, setIsGameStarting] = useState(false);

  const {setIsActive} = useCounter(useCallback(() => setTime(time + 1), [time]), 1000, false);
  const ref: any = useRef();

  const startGame = () => {
    setIsActive(true);
    setIsPauseGame(false);
    setIsGameStarting(true);
  }

  const updateCardStatus = (cardId: number[], status: number) => {
    setCards([...cards.map(card => cardId.includes(card.id)? {...card, status  } : card)]);
  }

  const handleSelectCard = (card: GameCardObj) => {

    if (isPauseGame) { return; };
    if (ref.current) { return; }
    if (card.status === STATUS.DONE) { return; }
    if (card.status === STATUS.PENDING) { return; }

    setMove(move + 1);
    updateCardStatus([card.id], STATUS.PENDING);

    const existedPendingCard = cards.find(card => card.status === STATUS.PENDING);
    if (existedPendingCard) {
      if (existedPendingCard.value === card.value) {
        updateCardStatus([card.id, existedPendingCard.id], STATUS.DONE);
        setScore(score + 1);
        return;
      }

      ref.current = setTimeout(() => {
        updateCardStatus([card.id, existedPendingCard.id], STATUS.HIDE);
        ref.current = null;
      }, 1000);
    }
  }

  const resetGame = () => {
    setMove(0);
    setScore(0);
    setTime(0);
    setIsActive(false);
    setIsPauseGame(true);
    setCards(generateGameCard(4, 4));
    setIsGameStarting(false)
  }

  useEffect(() => {
    const done = cards.reduce((a, c) =>  a += (c.status === STATUS.DONE ? 1 : 0) , 0);
    if (done === cards.length) {
      setIsActive(false);
    }
  }, [cards, setIsActive])

  return (
   <div className="game-container">
    <GameHeader time={time} move={move} score={score} />
    <GameMain handleSelectCard={handleSelectCard} cards={cards} />
    <GameFooter gameStarting={isGameStarting}  start={startGame} reset={resetGame} />
   </div>
  );
}

export default Game;
