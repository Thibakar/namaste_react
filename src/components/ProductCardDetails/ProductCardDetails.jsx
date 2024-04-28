import React, { useEffect, useState } from "react";
import "./ProductCardDetails.css";
import "../ProductCard/ProductCard.css";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import MenuCard from "../MenuCard/MenuCard";
import UseProductDetails from "../../Utils/productDetailsHook";

const ProductCardDetails = (props) => {
  const { id } = useParams();
  console.log("params", id);

  const productDetails = UseProductDetails(id);
  const productsMenu =
    productDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    locality,
    city,
    costForTwo,
    avgRating,
  } = productDetails?.data?.cards[2]?.card?.card?.info || {};

  return (
    <div className="product-details-container">
      {productDetails.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="product-details-card">
            <h2>{name}</h2>
            <div className="product-details-image-container">
              <img
                className="product-details-image"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  cloudinaryImageId
                }
              />
            </div>

            <div className="p-10">
              <h4>{cuisines} </h4>
              <h4 className="badge">{avgRating} </h4>
              <p>{locality}</p>
              <p> {city} </p>
              <p>{costForTwo / 200}</p>
            </div>
          </div>
          <div>
            <h2>Menu</h2>
            <div className="simmilar-products">
              {productsMenu.map((menuCard, i) => {
                return <MenuCard key={i+1} menuCard={menuCard} />;
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCardDetails;
