import React, { useState } from "react";
import PlayGround from "./PlayGround";
import ShowResult from "./ShowResult";

export default function Main(props) {
  const [result, setResult] = useState(false);
  const [score, setScore] = useState (0);

  return (
    <main>
      <header>
        <h1>
          ROCK <br />
          Paper <br />
          Scissors
        </h1>
        <div id="score-panel">
          SCORE <br />
          <span id="score"></span>
        </div>
      </header>
      <div id="high-noon">
        <PlayGround result={result} setResult={setResult} />
      </div>
     {/*  <ShowResult result={result} /> */}
    </main>
  )
}
