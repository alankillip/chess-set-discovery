import React from 'react';
import {getSquareIndexes} from "./utils";
import Square from './Square';

const getSquare = (onClick, selected) => (index) => {
  return (
    <Square
      index={index}
      selected={index === selected}
      onClick={onClick}
      key={index}
    />
  );
}

const getSquares = (onClick, selected) => getSquareIndexes().map(getSquare(onClick, selected));

export default getSquares;
