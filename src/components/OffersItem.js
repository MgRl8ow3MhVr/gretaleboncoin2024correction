import React from "react";
import "./OffersItem.css";

const OffersItem = ({ created_at, photos, price, title }) => {
  const created = new Date(created_at);
  return (
    <div className="offersitem">
      <picture>Photo</picture>
      <nav>
        <span>titre</span>
        <span>prix</span>
        <span>Annonce créée le ...</span>
      </nav>
    </div>
  );
};
export default OffersItem;
