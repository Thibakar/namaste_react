import * as React from "react";
import { clouImgAPI } from "../../Utils/constants";

const ProductCard = ({ productCardData }) => {
  const {
    cloudinaryImageId,
    avgRating,
    name,
    cuisines,
    costForTwo,
    aggregatedDiscountInfoV3,
  } = productCardData?.info;

  return (
    <div className="m-1 ">
      <div className="w-64  h-64 h-100 p-2 bg-slate-100 rounded-md">
        <div className="">
          <img
            className="h-48 w-96 object-center rounded-md"
            src={clouImgAPI + cloudinaryImageId}
          />
        </div>
        <div className="py-2 flex justify-between">
          <h3>{name.substring(0, 15)} </h3>
          <h4 className="">
            <span className="bg-primary  inline-block rounded border border-transparent py-1 px-2.5 text-xs font-medium text-white">
              {avgRating}
            </span>
          </h4>
        </div>
        <div className="">
          <div className="">{cuisines.join(",").substring(0, 25)}</div>
          <p>{costForTwo} </p>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
