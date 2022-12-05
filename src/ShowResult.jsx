import React from "react";

function reloadApp() {
  window.location.reload();
}

export default function ShowResult({ result }) {
  let resultText;
  switch (result) {
    case 'win':
      resultText = 'YOU WIN';
      break;
    case 'lose':
      resultText = 'YOU LOSE';
      break;
    case 'draw':
      resultText = 'DRAW';
      break;
  }

  return (
    <div id="result-pane">
      {resultText ? <> <span>{resultText}</span>
      <button id="play-again-btn" onClick={reloadApp}>PLAY AGAIN</button></> : null }
    </div>
  )
}
