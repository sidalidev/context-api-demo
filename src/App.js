import React from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const {
    state: { authenticated },
  } = useAuth();

  return (
    <div className="App">
      <header className="App-header">
        {authenticated ? <Counter /> : <LoginScreen />}
      </header>
    </div>
  );
}

export default function Root() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
