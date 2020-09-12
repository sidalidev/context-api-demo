import React, {
  useReducer,
  createContext,
  useContext,
  useCallback,
} from "react";

export function CounterProvider({ children }) {
  const [state, dispatch] = useCallback(
    useReducer(counterReducer, counterInitialState)
  );

  function increment(message) {
    dispatch({ type: "increment" });
  }
  function double() {
    dispatch({ type: "double" });
  }

  return (
    <CounterContext.Provider value={{ state, increment, double }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCountContext() {
  return useContext(CounterContext);
}

const CounterContext = createContext();

const counterInitialState = {
  countValue: 0,
};

const counterReducer = (state, { type, payload }) => {
  console.log("hello");
  switch (type) {
    case "increment":
      if (payload && payload.message) {
      }
      return { ...state, countValue: state.countValue + 1 };
    case "double":
      return { ...state, countValue: state.countValue * 2 };

    default:
      throw Error(`Unhandled Action type: ${type.type}`);
  }
};
