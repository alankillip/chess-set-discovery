import React from 'react';
import {getSquareIndexes} from "./utils";
import {Square} from './styled';

const getSquare = (index) => (
  <Square
    key={index}
    index={index}
  />
);

const getSquares = () => getSquareIndexes().map(getSquare);

export default getSquares;
