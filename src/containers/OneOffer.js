import "./OneOffer.css";
import { Link } from "react-router-dom";
import KeyboardReturn from "@mui/icons-material/KeyboardReturn";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../config";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const OneOffer = () => {
  const [imgNum, setImgNum] = useState(0);
  const [data, setData] = useState(null);

  // récupération de l'id de la page grace à useParams
  const params = useParams();
  const myId = params.id;
  // const {id} =useParams() // si on veut faire le raccourci avec du destructuring

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl + "/product/" + myId);
        setData(response.data);
      } catch (e) {
        toast("il y a eu une erreur, desolé");
        console.log(e);
      }
    };

    fetchData();
  }, []);

  // Nouvelle technique pour afficher toute une page de manière conditionnelle
  // plutot que d'utiliser && à l'intérieur du JSX
  if (data === null) {
    return <div>en chargement</div>;
  }
  // ici, si data est null (au premier chargement de la page en attendant les data qui arrivent de l'api)
  // le code s'arrête d'apres le if précédent

  // ici, data existe forcément puisque on a passé le if sans rentrer dedans
  const created = new Date(data.created_at);

  return (
    <div className="oneoffer">
      <div className="descriptionblock">
        <div className="carrousel">
          {/* // IMAGE PRINCIPALE */}
          {data.photos[imgNum] && (
            <img alt="pic" src={data.photos[imgNum].url} />
          )}
          {/* //PREVIEWS CLIQUABLES */}
          <div className="previews">
            {data.photos.map((photo, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setImgNum(i);
                  }}
                >
                  <img alt="pic" src={photo.url} />
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        <ul>
          <span>{data.title}</span>
          <br />
          <span>{data.pr} €</span>
          <br />
          <span>
            Annonce créée le {created.getFullYear()} à {created.getHours()} h et{" "}
            {created.getMinutes()}mn
          </span>
        </ul>
        <h2>Description</h2>
        <p>{data.description}</p>
      </div>
      <div className="rightside">
        <Link to="/">
          <div className="back">
            <KeyboardReturn />
            Retour à la recherche
          </div>
        </Link>
        <div className="userInfos">
          <div>vendeur : {data.creator}</div>
          <div>x Annonces en ligne</div>
          <span className="orangeBox">Acheter</span>
        </div>
      </div>
    </div>
  );
};
export default OneOffer;
