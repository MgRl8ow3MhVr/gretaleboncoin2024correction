import React from "react";
import "./OffersItem.css";

const OffersItem = ({ created_at, photos, price, title }) => {
  const created = new Date(created_at);

  return (
    <div className="offersitem">
      <picture>{photos[0] && <img src={photos[0].url} />}</picture>
      <nav>
        <span>{title}</span>
        <span>{price}</span>
        <span>
          {" "}
          Annonce créée le {created.getFullYear()} à {created.getHours()} h et{" "}
          {created.getMinutes()}mn
        </span>
      </nav>
    </div>
  );
};
export default OffersItem;
