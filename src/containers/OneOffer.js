import "./OneOffer.css";
import { fakeDataOneOffer } from "./fakedataOneOffer";
import { Link, useActionData, useSearchParams } from "react-router-dom";
import KeyboardReturn from "@mui/icons-material/KeyboardReturn";
import { useState } from "react";

const OneOffer = () => {
  const created = new Date(fakeDataOneOffer.created_at);

  const [imgNum, setImgNum] = useState(0);

  return (
    <div className="oneoffer">
      <div className="descriptionblock">
        <div className="carrousel">
          {/* // IMAGE PRINCIPALE */}
          {fakeDataOneOffer.photos[imgNum] && (
            <img alt="pic" src={fakeDataOneOffer.photos[imgNum].url} />
          )}
          {/* //PREVIEWS CLIQUABLES */}
          <div className="previews">
            {fakeDataOneOffer.photos.map((photo, i) => {
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
          <span>{fakeDataOneOffer.title}</span>
          <br />
          <span>{fakeDataOneOffer.pr} €</span>
          <br />
          <span>
            Annonce créée le {created.getFullYear()} à {created.getHours()} h et{" "}
            {created.getMinutes()}mn
          </span>
        </ul>
        <h2>Description</h2>
        <p>{fakeDataOneOffer.description}</p>
      </div>
      <div className="rightside">
        <Link to="/">
          <div className="back">
            <KeyboardReturn />
            Retour à la recherche
          </div>
        </Link>
        <div className="userInfos">
          <div>vendeur : {fakeDataOneOffer.creator}</div>
          <div>x Annonces en ligne</div>
          <span className="orangeBox">Acheter</span>
        </div>
      </div>
    </div>
  );
};
export default OneOffer;
