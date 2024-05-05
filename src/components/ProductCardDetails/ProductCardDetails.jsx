import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import MenuCard from "../MenuCard/MenuCard";
import UseProductDetails from "../../Utils/productDetailsHook";
import { clouImgAPI } from "../../Utils/constants";
import Context from "../../Utils/Context";

const ProductCardDetails = () => {
  const { loggedInUser } = useContext(Context);
  const { id } = useParams();
  const [showIndex, setShowIndex] = useState(0);

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
    <div className=" py-3 mx-48 ">
      {productDetails?.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="justify-center text-center">
            <div className="p-2 bg-slate-100 rounded-lg">
              <h6 className="text-xl font-bold dark:text-white">{name}</h6>
              {/* <div className="flex justify-center">
                <img
                  className="justify-center bg-cover rounded-md  w-5/6 h-96"
                  src={clouImgAPI + cloudinaryImageId}
                />
              </div> */}

              <div className="py-3">
                <h4 className="text-xl font-bold dark:text-white">
                  {cuisines}{" "}
                </h4>
                <span className="bg-primary  inline-block rounded border border-transparent py-1 px-2.5 text-xs font-medium text-white">
                  {avgRating}
                </span>

                <p>{locality}</p>
                <p> {city} </p>
                <p>{costForTwo / 200}</p>
                <p>user:{loggedInUser} </p>
              </div>
            </div>
            <div></div>
            <h2 className="text-xl font-bold dark:text-white">Menu</h2>
            <div className="">
              {categrotyDetails.map((categrotyDetails, index) => {
                return (
                  <MenuCard
                    key={index + 1}
                    categrotyDetails={categrotyDetails?.card?.card}
                    openMenu={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
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
