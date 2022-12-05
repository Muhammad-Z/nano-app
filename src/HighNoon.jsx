import React, { useEffect, useState } from "react";
import Item from "./Item";
import choices from "./choices";
import rules from "./rules";
import ShowResult from "./ShowResult";

let botChoice;

export default function HighNoon({ choosedItem, result, setResult }) {
  const [bc, setBc] = useState(false);
  useEffect(() => {
    let botChoice = choices[Math.round((Math.random() * 10)) % choices.length];
    if (!bc) setTimeout(() => setBc(<Item name={botChoice.name} figure={botChoice.figure} />), 1000);
    if (bc) {
      if (botChoice.name === choosedItem.name) setResult('draw');
      //draw
      else if (rules[choosedItem.name] === botChoice.name) setResult('win');
      //win
      else //lose 
        setResult('lose');
    }
  }, [bc]);




  return (<>
    <div className="choice-container">
      <Item name={choosedItem.name} figure={choosedItem.figure} />
      YOU PICKED
    </div>
    <ShowResult result={result} />
    <div className="choice-container bot-choice-container">
        {/*  {botChoice &&
          <Item name={botChoice.name} figure={botChoice.figure} />
        } */}
        {/*    {botChoice && <BotChoice name={botChoice.name} figure={botChoice.figure} />} */}
        {bc && bc}
        THE HOUSE PICKED
      </div>
      

  </>);
}
