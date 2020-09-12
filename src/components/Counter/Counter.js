import React, { memo } from "react";
import CountDisplay from "./components/CountDisplay";
import CountIncrement from "./components/CountIncrement";
import CountDouble from "./components/CountDouble";
import { CounterProvider } from "../../contexts/CounterContext";
import { useAuth } from "../../contexts/AuthContext";

function Counter() {
  const {
    logOut,
    state: { user },
  } = useAuth();

  return (
    <div>
      <h3>😃 Bienvenue {user.firstName}</h3>
      <button onClick={logOut}>Log out</button>
      <CounterProvider>
        <CountDisplay />
        <CountIncrement />
        <CountDouble />
      </CounterProvider>
    </div>
  );
}

export default memo(Counter);
