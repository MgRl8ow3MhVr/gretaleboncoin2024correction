import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SimpleUpload from "../components/SimpleUpload";
import "./Publish.css";

import { apiUrl, store_id } from "../config";

const Upload = ({ token, username }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  const navigate = useNavigate();

  const createProduct = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("title", title); //permet d'inserer title dans data
      data.append("description", desc);
      data.append("price", price);
      data.append("store_id", store_id);
      data.append("creator", "pierre");

      await axios.post(apiUrl + "/product", data);
      toast("l'offre est bien en ligne !", { type: "success" });
      navigate("/");
    } catch (e) {
      console.log(e);
      toast("il y a eu un probleme", { type: "error" });
      navigate("/");
    }
  };

  return (
    <div className="publish formpage">
      <form onSubmit={createProduct}>
        <h1>Déposer une annonce</h1>
        <hr></hr>
        <h2>Titre de l'annonce*</h2>
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          type="text"
        ></input>
        <h2>Prix *</h2>
        <input
          type="number"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        ></input>
        <h2>Texte de l'annonce*</h2>
        <input
          type="text"
          value={desc}
          onChange={(event) => {
            setDesc(event.target.value);
          }}
        ></input>
        <h2>Photo*</h2>

        <input type="submit" value="valider"></input>
      </form>
    </div>
  );
};
export default Upload;
