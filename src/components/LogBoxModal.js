import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiUrl, store_id } from "../config";
import { toast } from "react-toastify";
import "./LogBoxModal.css";

const LogBoxModal = ({ setOpenModal, loginOk }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Login est la fonction appelée onSubmit
  // notez qu'on n'a pas besoin de la passer dans un useEffect car on n'a pas de
  // data afficher dans le composant qui nous viendraient de cet appel d'api.
  // contrairement aux appels d'api précédents
  // Notez qu'elle doit être une fonction async car il y a deux appels d'api à l'intérieur
  const login = async () => {
    try {
      const response = await axios.post(apiUrl + "/auth/login", {
        // voici un raccourci qui signifie : email:email
        // lorsque la clé de l'objet a le meme nom qu'une variable
        email,
        password,
      });
      const mytoken = response.data.authToken;

      const response2 = await axios.get(apiUrl + "/auth/me", {
        headers: {
          Authorization: `Bearer ${mytoken}`, // Attach the token
        },
      });

      loginOk(mytoken, {
        userName: response2.data.name,
        userMail: response2.data.email,
      });
    } catch (e) {}
  };

  return (
    <div>
      <div
        className="blackbox"
        onClick={() => {
          setOpenModal(false);
        }}
      ></div>
      <form
        className="formlogbox"
        onSubmit={(event) => {
          event.preventDefault();
          login();
        }}
      >
        <h1>Connexion</h1>
        <hr></hr>
        <h2>email *</h2>

        <input
          value={email}
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
        <h2>mot de passe *</h2>

        <input
          type="text"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
        <input type="submit" value="Se connecter" />

        <hr></hr>

        <button onClick={() => {}}>Creer un compte</button>
      </form>
    </div>
  );
};
export default LogBoxModal;
