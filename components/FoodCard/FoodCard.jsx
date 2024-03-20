import * as React from "react";
import "./FoodCard.css";

const FoodCard = ({ resCardData }) => {
  console.log("resCardData", resCardData);
  return (
    <div className="food-card">
      {resCardData?.sections.SECTION_SEARCH_RESULT.map((item) => (
        <div className="card" key={item.info.resId}>
          {console.log(item.info.resId)}
          <div className="image-container">
            <div className="card-image"></div>
            <img className="food-image" src={item?.info.image.url} />
          </div>
          <div className="food-details">
            <div className="hotel-name">
              <h4>{item.info.name.substring(0, 20)}</h4>
              <h4 className="badge">{item.info.rating.aggregate_rating}</h4>
            </div>
            <div className="location-cost">
              <p className="hotel location">
                {item.info?.locality.name.substring(0, 20)}
              </p>
              <p className="food-cost">{item?.info?.costText.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FoodCard;
