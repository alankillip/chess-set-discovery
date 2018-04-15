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
  border-color: ${themeUtils.getBorderColor};
  width: ${themeUtils.getSize}px;
  height: ${themeUtils.getSize}px;
`;

export const Square = styled.div`
  position: absolute;
  width: ${themeUtils.getSquareSize}px;
  height: ${themeUtils.getSquareSize}px;
  background-color: ${props => props.selected ? '#999999' : themeUtils.getSquareColor};
  top: ${themeUtils.getSquareTop}px;
  left: ${themeUtils.getSquareLeft}px;
`;

export const SquareContents = styled.div`
  position: absolute;
  border-color: #ff0000;
  width: 100%;
  height: 100%;
  border-width: 0.5px;
  border-style: ${props => props.selected ? 'solid' : 'none'};
  z-index: ${props => props.selected ? 1000 : 'initial'};
  `;