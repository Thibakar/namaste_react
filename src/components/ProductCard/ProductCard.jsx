import * as React from "react";
import "./ProductCard.css";

const ProductCard = ({ productCardData }) => {
  console.log("productCardData", productCardData.info);
  const { cloudinaryImageId, avgRating, name, cuisines, costForTwo } =
    productCardData?.info;

  return (
    <>
      <div className="product-card">
        <div className="image-container">
          <img
            className="product-image"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
          />
        </div>
        <div className="product-description p-10">
          <h4>{name.substring(0, 15)} </h4>
          <h4 className="badge">{avgRating} </h4>
        </div>
        <div className="p-10">
          <p>{cuisines.join(",")}</p>
          <p>{costForTwo} </p>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
