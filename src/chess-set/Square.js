import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import {getColumnNum, getRowNum, isOdd, NUM_SQUARES} from "./utils";
import {BlackSquare, WhiteSquare, SquareContents} from "./styled";

const getStyleObj = (x, y, size) => (
  {
    left: x,
    top: y,
    width: size,
    height: size
  }
);

const getSquareSize = size => size / NUM_SQUARES;

const getSquareTop = (index, size) => getRowNum(index) * getSquareSize(size);

const getSquareLeft = (index, size) => getColumnNum(index) * getSquareSize(size);

const Square = ({index, selected, onClick, theme}) => {
  const Square = isOdd(getColumnNum(index) + getRowNum(index)) ? BlackSquare : WhiteSquare;
  const x = getSquareLeft(index, theme.size);
  const y = getSquareTop(index, theme.size);
  const squareSize = getSquareSize(theme.size);
  return (
    <Square
      key={index}
      index={index}
      onClick={() => onClick(index)}
      selected={selected}
      style={getStyleObj(x, y, squareSize)}
    >
      <SquareContents selected={selected} />
    </Square>
  );
};

Square.propTypes = {
  selected: PropTypes.bool,
  index: PropTypes.number,
  onClick: PropTypes.func
};

export default withTheme(Square);
