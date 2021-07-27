import { STATUS } from "../components/Game/constant";
import { GameCardObj } from "../components/Game/model"

export const randArray = (arr: any[]): any[] => {
  const randArr = [];
  const listUsedIndex: number[] = [];
  for (let i = 0; i < arr.length; i += 1) {
    let randIndex = Math.floor(Math.random() * arr.length);
    while(listUsedIndex.includes(randIndex)) {
      randIndex = Math.floor(Math.random() * arr.length);
    }
    listUsedIndex.push(randIndex);
    randArr.push(arr[randIndex]);
  }

  return randArr;
}

export const generateGameCard = (w: number = 4, h: number = 4): GameCardObj[] => {
  
  const arr: GameCardObj[] = [];
  const max = w * h / 2;

  for (let i = 1; i <= w * h; i += 1) {
    arr.push({
      id: i,
      status: STATUS.HIDE,
      value: i > max ? i - max : i
    });
  }

  return arr;
}

