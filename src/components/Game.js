import {useState} from 'react';
import { calculateWinner } from '../helper';
import Board from "./Board"


export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";
  const handleClick = (i) => {
    const  historyPoint = history.clice(0, stepNumber + 1);
  }
  return (

  )
}