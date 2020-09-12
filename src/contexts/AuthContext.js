import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const INITIAL_STATE = JSON.parse(localStorage.getItem("AuthState")) || {
  authenticated: false,
  loading: false,
  errorMessage: null,
  user: null,
  token: null,
};

const LOGOUT_OUT_STATE = {
  authenticated: false,
  loading: false,
  errorMessage: null,
  user: null,
  token: null,
};

export function AuthProvider({ children }) {
  const [state, setState] = useState(INITIAL_STATE);

  return (
    <AuthContext.Provider value={{ state, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );

  async function logIn(email, password) {
    try {
      setState({
        ...state,
        loading: true,
      });

      const {
        data: { firstName, id, lastName, token },
      } = await axios.post(
        "https://e2a071939f16.ngrok.io/api/speechTherapists/authenticate",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", token);
      const newState = {
        ...state,
        loading: false,
        errorMessage: null,
        user: { firstName, lastName, id },
        token,
        authenticated: true,
      };
      setState(newState);
      localStorage.setItem("AuthState", JSON.stringify(newState));

      // GET PATIENTS
      // const { data } = await axios.get(
      //   "https://e2a071939f16.ngrok.io/api/patients/getAllPatients/1"
      // );
    } catch (error) {
      setState({
        ...state,
        loading: false,
        errorMessage: error.response.data.message,
      });
    }
  }

  function logOut() {
    localStorage.removeItem("AuthState");
    setState(LOGOUT_OUT_STATE);
  }
}
