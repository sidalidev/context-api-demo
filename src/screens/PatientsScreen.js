import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useQuery } from "react-query";
import axios from "axios";

function usePatients(id) {
  return useQuery("posts", async () => {
    // GET PATIENTS
    const { data } = await axios.get(
      `https://e2a071939f16.ngrok.io/api/patients/getAllPatients/${id}`
    );
    return data;
  });
}

function PatientsScreen() {
  const {
    logOut,
    state: { user },
  } = useAuth();
  const { isLoading, data, refetch } = usePatients(1);

  console.log(data);
  return (
    <div>
      <h3>😃 Bienvenue {user.firstName}</h3>
      <h5>🤕 Liste de vos patients</h5>

      {isLoading ? (
        <span>⏳</span>
      ) : (
        <ul>
          {data.map((patient) => (
            <li key={patient.id}>
              {patient.fullname} qui est {patient.diagnostique}
            </li>
          ))}
        </ul>
      )}
      <button onClick={refetch}>🔥 Recharger</button>
      <br></br>
      <button onClick={logOut}>Log out</button>
    </div>
  );
}

export default PatientsScreen;
