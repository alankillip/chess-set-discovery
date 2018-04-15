import styled from 'styled-components';
import * as themeUtils from './theme-utils';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px;
`;

export const Board = styled.div`
  position: relative;
  border-style: solid;
  border-color: #000000;
  width: 500px;
  height: 500px;
`;

export const Square = styled.div`
  position: absolute;
  width: 62.5px;
  height: 62.5px;
  background-color: ${themeUtils.getSquareColor};
  top: ${themeUtils.getSquareTop}px;
  left: ${themeUtils.getSquareLeft}px;
`;

export const SquareContents = styled.div`
  position: absolute;
  border-color: #ff0000;
  width: 100%;
  height: 100%;
  border-width: 0.5px;
  `;