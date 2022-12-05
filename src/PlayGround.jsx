import React, { useState } from "react";
import ItemChoose from "./ItemChoose";
import HighNoon from "./HighNoon";

export default function PlayGround({ result, setResult }) {
  const [choosedItem, setChoosedItem] = useState(false);

  return (<>
    {choosedItem ? <HighNoon choosedItem={choosedItem}
      setResult={setResult} result={result} />
      : <ItemChoose setChoosedItem={setChoosedItem} />}
  </>)
}
