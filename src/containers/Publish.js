import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SimpleUpload from "../components/SimpleUpload";
import "./Publish.css";

import { apiUrl, store_id } from "../config";

const Upload = ({ token, username }) => {
  return (
    <div className="publish formpage">
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          //formadata va permettre de preparer le fichier pour pouvoir l'envoyer
        }}
      >
        <h1>Déposer une annonce</h1>
        <hr></hr>
        <h2>Titre de l'annonce*</h2>
        <input type="text"></input>
        <h2>Texte de l'annonce*</h2>
        <input type="text"></input>
        <h2>Prix*</h2>
        <input type="text"></input>
        <h2>Photo*</h2>

        <input type="submit" value="valider"></input>
      </form>
    </div>
  );
};
export default Upload;
