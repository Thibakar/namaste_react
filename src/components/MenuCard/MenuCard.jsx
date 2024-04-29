import React from "react";

const MenuCard = ({ menuCard }) => {
  const { imageId = "" } = menuCard?.card?.info;
  return (
    <div className=" w-56 bg-gray-200 p-2 m-1 rounded-md">
      <div className="">
        <img
          className="h-48 w-96 object-center rounded-md"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
            imageId
          }
        />
      </div>
      <div className=" flex justify-between">
        <h4>{menuCard?.card?.info?.name.substring(0, 15)} </h4>
        {menuCard?.card?.info?.ratings.aggregatedRating?.rating && (
          <span className="bg-primary  inline-block rounded border border-transparent py-1 px-2.5 text-xs font-medium text-white">
            {menuCard?.card?.info?.ratings.aggregatedRating?.rating}
          </span>
        )}
      </div>
      <div className="">
        <p>{menuCard?.card?.info?.description.substring(0, 15)}</p>
        <p>{menuCard?.card?.info?.price / 100 } </p>
      </div>
    </div>
  );
};

export default MenuCard;
