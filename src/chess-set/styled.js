import styled from 'styled-components';
import * as themeUtils from './theme-utils';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px;
`;

export const Board = styled.div`
  border-style: solid;
  border-color: ${themeUtils.getBorderColor};
  width: ${themeUtils.getSize}px;
  height: ${themeUtils.getSize}px;
  position: relative;
`;

export const Square = styled.div`
  width: ${themeUtils.getSquareSize}px;
  height: ${themeUtils.getSquareSize}px;
  background-color: ${themeUtils.getSquareColor};
  position: absolute;
  top: ${themeUtils.getSquareTop}px;
  left: ${themeUtils.getSquareLeft}px;
`;