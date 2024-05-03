import React from "react";
import { clouImgAPI } from "../../Utils/constants";

const CategoriesCard = ({ itemCards }) => {
  console.log("itemCards", itemCards);
  return (
    <>
      {itemCards.map((item) => {
        console.log("item", item?.card);
        const { info } = item?.card;
        return (
          <>
            <div className="flex justify-between shadow-sm hover:shadow-md text-left px-3">
              <div className="w-98 px-2">
                <div className="font-bold py-2">{info?.name}</div>
                <div className="font-semibold py-2">
                  {info?.defaultPrice / 100}
                </div>
                <span className="bg-primary  inline-block rounded border border-transparent py-1 px-2.5 text-xs font-medium text-white">
                  <div className="font-semibold">
                    {info?.ratings?.aggregatedRating?.rating || ""}
                  </div>
                </span>
                <div className="font-semibold py-2">{info?.category}</div>
                <div className="font-semibold py-2">{info?.description}</div>
              </div>

              <div className="p-2 ">
                <img className="rounded-xl w-52" src={clouImgAPI + info?.imageId} />
                <button className="rounded-md bg-white border-2  py-1 px-20 mx-1">
                  ADD
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default CategoriesCard;
