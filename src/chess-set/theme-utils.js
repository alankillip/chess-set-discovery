import {NUM_SQUARES, getRowNum, getColumnNum, isOdd} from "./utils";

export const getSize = props => props.theme.size;

export const getBorderColor = props => props.theme.borderColor;

export const getSquareSize = props => props.theme.size / NUM_SQUARES;

export const getSquareColor = props =>
  isOdd(getColumnNum(props.index) + getRowNum(props.index)) ? props.theme.darkSquare : props.theme.lightSquare;

export const getSquareTop = props => getRowNum(props.index) * getSquareSize(props);

export const getSquareLeft = props => getColumnNum(props.index) * getSquareSize(props);
