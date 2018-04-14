import React from 'react';
import {
  Board,
  Container
} from './styled';
import getSquares from './getSquares';


class ChessSet extends React.Component{
  constructor() {
    super();
    this.state = {
      selected: -1
    }
  }

    squareClick = (index) => {
      this.setState({
        selected: index
      });
    }

   render() {
     return (
       <Container>
         <Board>
           {getSquares(this.squareClick, this.state.selected)}
         </Board>
       </Container>
     )
   }
};

export default ChessSet;
