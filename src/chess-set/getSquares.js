import React from 'react';
import {getColumnNum, getRowNum, getSquareIndexes, isOdd} from "./utils";
import {WhiteSquare, BlackSquare, SquareContents} from './styled';

const getSquare = (onClick, selected) => (index) => {
  const Square = isOdd(getColumnNum(index) + getRowNum(index)) ? BlackSquare : WhiteSquare;
  return (
    <Square
      key={index}
      index={index}
      onClick={() => onClick(index)}
      selected={selected === index}
    >
      <SquareContents selected={selected === index} />
    </Square>
  );
}

const getSquares = (onClick, selected) => getSquareIndexes().map(getSquare(onClick, selected));

export default getSquares;
