import React from "react";
import { useCountContext } from "../../../contexts/CounterContext";

function CountDisplay() {
  const {
    state: { countValue },
  } = useCountContext();

  return <h3>Counter = {countValue}</h3>;
}

export default CountDisplay;
