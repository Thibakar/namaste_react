import React from "react";
import FoodCard from "./FoodCard/FoodCard";
import { response } from "./FoodCard/cardMockData";
import Footer from "./Footer";

const CardContainer = () => {
  return (
    <>
      <div className="card_container">
        <div className="card-details">
          <FoodCard resCardData={response} />
        </div>
      </div>
      <div className="'footer-container">
        <Footer />
      </div>
    </>
  );
};
export default CardContainer;
