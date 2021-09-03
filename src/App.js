import './App.css';
import React from 'react';
import ReactDom from 'react-dom';
import Game from './components/Game';


export default function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

ReactDom.render(<Game />, document.getElementById("root"));