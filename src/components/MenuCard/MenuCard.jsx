import React, { useState } from "react";
import CategoriesCard from "./CategoriesCard";

const MenuCard = ({ categrotyDetails, openMenu, setShowIndex }) => {
  console.log("openMenu", openMenu);
  const OpenMenuHandler = () => {
    setShowIndex();
  };
  return (
    <div className="bg-gray-200  my-2  rounded-md " onClick={OpenMenuHandler}>
      <div className="flex justify-between px-5 py-3 font-bold">
        <span>
          {categrotyDetails?.title}({categrotyDetails?.itemCards?.length}){" "}
        </span>
        <span>➕ </span>
      </div>
      {openMenu && (
        <div className="bg-white my-1 py-2  rounded-sm ">
          <CategoriesCard itemCards={categrotyDetails?.itemCards} />
        </div>
      )}
    </div>
  );
};

export default MenuCard;
