import React from "react";

const MenuCard = ({ menuCard }) => {
    const{imageId=''}=menuCard?.card?.info
  console.log("menuCard", menuCard.card.info.imageId);
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          className="product-image"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
            imageId
          }
        />
      </div>
      <div className="product-description p-10">
        <h4>{menuCard?.card?.info?.name.substring(0, 15)} </h4>
        {/* <h4 className="badge">
          {menuCard?.card?.info?.ratings.aggregatedRating?.rating}{" "}
        </h4> */}
      </div>
      <div className="p-10">
        <p>{menuCard?.card?.info?.description.substring(0, 15)}</p>
        <p>{menuCard?.card?.info?.price / 100} </p>
      </div>
    </div>
  );
};

export default MenuCard;
