import React from 'react';
import Box from './Box';
import "./Board.css"
const Board = ({board,onClick}) => {
    return (
        <div className="board">
        {board.map((value,ind)=>{
            return <div><Box value={value} onClick={()=> value===null && onClick(ind)} /></div>
        })}
           
        </div>
    );
};

export default Board;