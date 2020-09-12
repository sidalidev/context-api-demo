import React from "react";
import { useCountContext } from "../../../contexts/CounterContext";

function CountIncrement() {
  const { increment } = useCountContext();

  return (
    <button
      onClick={() => {
        increment("Helloooooooooooooooooo");
      }}
    >
      +
    </button>
  );
}

export default CountIncrement;
