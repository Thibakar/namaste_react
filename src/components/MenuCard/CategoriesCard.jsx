import React from "react";
import { clouImgAPI } from "../../Utils/constants";
import { addItem, removeItem } from "../../Redux/Slice/CartSlice";
import { useDispatch } from "react-redux";

const CategoriesCard = ({ itemCards }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleDeleteItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <>
      {itemCards?.map((item, i) => {
        const { info } = item?.card;
        return (
          <>
            <div className="flex justify-between shadow-sm hover:shadow-md text-left px-3">
              <div className="w- px-2">
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
                <img
                  className="rounded-xl w-52 h-44"
                  src={clouImgAPI + info?.imageId}
                />
                <div className="mx-1 flex">
                  <button
                    className="rounded-md bg-white border-2  p-1 px-5"
                    onClick={() => handleAddItem(item)}
                  >
                    ADD
                  </button>
                  <button
                    className="rounded-md bg-red-500 text-white border-2  p-1 px-5 "
                    onClick={() => handleDeleteItem(item)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default CategoriesCard;
