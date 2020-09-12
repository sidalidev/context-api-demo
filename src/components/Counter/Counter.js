import React, { memo } from "react";
import CountDisplay from "./components/CountDisplay";
import CountIncrement from "./components/CountIncrement";
import CountDouble from "./components/CountDouble";
import { CounterProvider } from "../../contexts/CounterContext";

function Counter() {
  return (
    <div>
      <CounterProvider>
        <CountDisplay />
        <CountIncrement />
        <CountDouble />
      </CounterProvider>
    </div>
  );
}

export default memo(Counter);
