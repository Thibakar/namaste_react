import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import MenuCard from "../MenuCard/MenuCard";
import UseProductDetails from "../../Utils/productDetailsHook";
import { clouImgAPI } from "../../Utils/constants";

const ProductCardDetails = () => {
  const { id } = useParams();
  const[showIndex, setShowIndex]=useState(0)

  const productDetails = UseProductDetails(id);

  const categrotyDetails =
    productDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (C) =>
        C.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
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
    <div className=" mx-48">
      {productDetails?.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="p-2 bg-slate-100 rounded-md align-center items-center">
            <h6 className="text-xl font-bold dark:text-white">{name}</h6>
            <div className="w-98">
              <img
                className=" object-center rounded-md items-center w-2/6"
                src={clouImgAPI + cloudinaryImageId}
              />
            </div>

            <div className="py-3">
              <h4 className="text-xl font-bold dark:text-white">{cuisines} </h4>
              <span className="bg-primary  inline-block rounded border border-transparent py-1 px-2.5 text-xs font-medium text-white">
                {avgRating}
              </span>

              <p>{locality}</p>
              <p> {city} </p>
              <p>{costForTwo / 200}</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold dark:text-white">Menu</h2>
            <div className="">
              {categrotyDetails.map((categrotyDetails, index) => {
                return (
                  <MenuCard
                    key={index + 1}
                    categrotyDetails={categrotyDetails?.card?.card}
                    openMenu={index === showIndex ? true : false}
                    setShowIndex={()=>setShowIndex(index)}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCardDetails;
