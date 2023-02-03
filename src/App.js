import React,{useState} from "react";
import './App.css';
import Scoreboard from "./Components/Scoreboard";

import Board from './Components/Board';
import Resetbutton from "./Components/Resetbutton";
function App() {
  const winCondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const [board,setBoard]=useState(Array(9).fill(null));
  const [xplaying,setXplaying]=useState(true);
  const [score,setScore]=useState({xScore:0,oScore:0});
  const [gameover,setGameover]=useState(false);

  const handleBoxClick=(boxInd)=>{
    const updateBoard=board.map((value,ind)=>{
      if(ind===boxInd){
        return xplaying===true?"x":"o";
      }else{
        return value;
      }
    })

    setBoard(updateBoard);
    setXplaying(!xplaying)
    const winner=checkWinner(updateBoard);
    if(winner){
      if(winner==="0"){
        let {oScore}=score;
        oScore+=1;
        setScore({...score,oScore})
      }else{
        let { xScore } = score;
        xScore += 1;
        setScore({ ...score, xScore })
      }
    }
  }

  const checkWinner=(board)=>{
    for (let i = 0; i < winCondition.length;i++){
      const [x, y, z] = winCondition[i];
      if(board[x] && board[x]===board[y] && board[y]===board[z]){
        setGameover(true);
        return board[x];
      }
    }
  }

  const setResetBoard=()=>{
    setGameover(false);
    setBoard(Array(9).fill(null))
  }
  return (
    <div className="App">
      <Scoreboard score={score} xplaying={xplaying}/>
      <Board board={board} onClick={gameover ? setResetBoard :handleBoxClick}/>
      <Resetbutton setResetBoard={setResetBoard}/>
     
    </div>
  );
}

export default App;
