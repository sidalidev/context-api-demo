import React from "react";
import { useCountContext } from "../../../contexts/CounterContext";

function CountDouble() {
  const { double } = useCountContext();

  return <button onClick={double}>x 2</button>;
}

export default CountDouble;
