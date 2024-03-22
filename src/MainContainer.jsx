import React, { useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import {cardMockData} from "./Utils/cardMockData";

const MainContainer = () => {
  const [products, setProducts] = useState(cardMockData);
  console.log("products", products);

  const filterProductHandler = () => {
    console.log("hiiiiiiii");
    filterdProducts = products?.filter((item) => item?.rating?.rate > 4);
    setProducts(filterdProducts);
  };

  return (
    <>
      <div className="action-bar">
        <button className="filter-button" onClick={filterProductHandler}>
          Top Rated Products
        </button>
      </div>
      <div className="card_container">
        <div className="card-details">
          {products?.map((productCardData) => (
            <ProductCard
              key={productCardData?.id}
              productCardData={productCardData}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default MainContainer;
