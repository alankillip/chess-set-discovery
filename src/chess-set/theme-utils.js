import {NUM_SQUARES, getRowNum, getColumnNum, isOdd} from "./utils";

export const getSize = props => 500;

export const getBorderColor = props => '#000000';

export const getSquareSize = props => getSize() / NUM_SQUARES;

export const getSquareColor = props =>
  isOdd(getColumnNum(props.index) + getRowNum(props.index)) ? '#000000' : '#ffffff';

export const getSquareTop = props => getRowNum(props.index) * getSquareSize(props);

export const getSquareLeft = props => getColumnNum(props.index) * getSquareSize(props);
