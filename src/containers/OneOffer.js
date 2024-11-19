import "./OneOffer.css";
import { fakeDataOneOffer } from "./fakedataOneOffer";
import { Link } from "react-router-dom";
import KeyboardReturn from "@mui/icons-material/KeyboardReturn";

const OneOffer = () => {
  return (
    <div className="oneoffer">
      <div className="descriptionblock">
        {/* insérer le caroussel ici */}
        <hr />

        <ul>
          <span>{fakeDataOneOffer.title}</span>
          <br />
          <span>prix €</span>
          <br />
          <span>Annonce créée le ...</span>
        </ul>
        <h2>Description</h2>
        <p>DESCRIPTION DU PRODUIT</p>
      </div>
      <div className="rightside">
        <Link to="/">
          <div className="back">
            <KeyboardReturn />
            Retour à la recherche
          </div>
        </Link>
        <div className="userInfos">
          <div>vendeur : nom du vendeur</div>
          <div>x Annonces en ligne</div>
          <span className="orangeBox">Acheter</span>
        </div>
      </div>
    </div>
  );
};
export default OneOffer;
