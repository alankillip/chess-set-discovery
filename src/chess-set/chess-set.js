import React from 'react';
import {
  Board,
  Container
} from './styled';
import getSquares from './getSquares';


const ChessSet = () => (
  <Container>
    <Board>
      {getSquares()}
    </Board>
  </Container>
);

export default ChessSet;
