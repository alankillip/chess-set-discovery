import React from 'react';
import {getSquareIndexes} from "./utils";
import {Square, SquareContents} from './styled';

const getSquare = (onClick, selected) => (index) => (
  <Square
    key={index}
    index={index}
    onClick={() => onClick(index)}
    selected={selected === index}
  >
    <SquareContents selected={selected === index} />
  </Square>
);

const getSquares = (onClick, selected) => getSquareIndexes().map(getSquare(onClick, selected));

export default getSquares;
