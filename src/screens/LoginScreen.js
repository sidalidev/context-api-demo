import React from "react";
import { useAuth } from "../contexts/AuthContext";

const mockedCredentials = {
  email: "matilde",
  password: "matilde",
};

function LoginScreen() {
  const {
    logIn,
    state: { loading, errorMessage },
  } = useAuth();

  return (
    <div>
      <h3>Log In please</h3>
      <button
        disabled={loading}
        onClick={() =>
          logIn(mockedCredentials.email, mockedCredentials.password)
        }
      >
        {loading ? "⏳" : "Log In"}
      </button>
      <h6 style={{ color: "red" }}>{errorMessage}</h6>
    </div>
  );
}

export default LoginScreen;
