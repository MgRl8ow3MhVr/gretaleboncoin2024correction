//import libraries
import React, { useState, useEffect } from "react";
import "./Offers.css";
import { fakeDatas } from "./fakedata";
import OffersItem from "../components/OffersItem";
import { Link } from "react-router-dom";
import Pages from "../components/Pages";
import { apiUrl, store_id } from "../config.js";
import axios from "axios";

const Offers = () => {
  console.log(fakeDatas);
  const [pageNum, setpageNum] = useState(1); //current page
  const [data, setData] = useState(null);
  //Fecth Data only at first load
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        apiUrl +
          "/product?" +
          "page=" +
          pageNum +
          "&search=" +
          // searchTerm +
          "&store_id=" +
          store_id
      );
      setData(response.data);
    };
    fetchData();
  }, [pageNum]);

  return (
    <div className="offers">
      <Pages
        pageTotal={fakeDatas.pageTotal} // pour déterminer le nb d'elements a afficher
        setpageNum={setpageNum} // pour changer la page courante qunand on clique dessus
        pageNum={pageNum} // pour mettre en valeur la page courante
      />
      {data &&
        data.items.map((item, i) => {
          return (
            <Link to={"/oneoffer/" + item.id}>
              <OffersItem
                created_at={item.created_at}
                photos={item.photos}
                price={item.price}
                title={item.title}
              />
            </Link>
          );
        })}
    </div>
  );
};
export default Offers;
