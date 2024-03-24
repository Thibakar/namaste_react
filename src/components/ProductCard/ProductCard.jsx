import * as React from "react";
import "./ProductCard.css";

const ProductCard = ({ productCardData }) => {
  const {description, price, image, rating, title} = productCardData
  return (
    <div className="food-card">
      <div className="card">
        <div className="image-container">
          <img className="card-image" src={image} />
        </div>
        <div className="food-details">
          <div className="hotel-name">
            <h4>{title.substring(0, 20)}</h4>
            <h4 className="badge">
              {rating?.rate}
            </h4>
          </div>
          <div className="location-cost">
            <p className="hotel location">
              {description.substring(0, 25)}
            </p>
            <p className="food-cost">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
