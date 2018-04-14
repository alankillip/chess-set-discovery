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
  background-color: ${props => props.selected ? '#999999' : themeUtils.getSquareColor};
  position: absolute;
  top: ${themeUtils.getSquareTop}px;
  left: ${themeUtils.getSquareLeft}px;
`;

export const SquareContents = styled.div`
  position: absolute;
  border-color: #ff0000;
  width: 100%;
  height: 100%;
  border-style: ${props => props.selected ? 'solid' : 'none'};
  border-width: 0.5px;
  z-index: ${props => props.selected ? 1000 : 'initial'};
  `;