import React from "react";
import "./App.css";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import LoginScreen from "./screens/LoginScreen";
import PatientsScreen from "./screens/PatientsScreen";

function App() {
  const {
    state: { authenticated },
  } = useAuth();

  return (
    <div className="App">
      <header className="App-header">
        {authenticated ? <PatientsScreen /> : <LoginScreen />}
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
