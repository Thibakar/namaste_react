import React, { useEffect, useState } from "react";
import "./ProductCardDetails.css";
import "../ProductCard/ProductCard.css";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import MenuCard from "../MenuCard/MenuCard";

const ProductCardDetails = (props) => {
  const [productDetails, setProductDetails] = useState([]);
  const [productsMenu, setProductsMenu] = useState([]);
  console.log("productDetails", productDetails);
  console.log("productsMenu", productsMenu);

  const { id } = useParams();
  console.log("params", id);

  const getProductDetails = async () => {
    const data =
      await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${id}
        `);
    const resData = await data.json();
    console.log(
      "resData",
      resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
    setProductDetails(resData?.data?.cards[2]?.card?.card?.info);
    setProductsMenu(
      resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
  };
  useEffect(() => {
    getProductDetails();
  }, []);
  return (
    <div className="product-details-container">
      {productDetails.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="product-details-card">
            <h2>{productDetails?.name}</h2>
            <div className="product-details-image-container">
              <img
                className="product-details-image"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  productDetails?.cloudinaryImageId
                }
              />
            </div>

            <div className="p-10">
              <h4>{productDetails?.cuisines} </h4>
              <h4 className="badge">{productDetails?.avgRating} </h4>
              <p>{productDetails.locality}</p>
              <p> {productDetails?.city} </p>
              <p>{productDetails?.costForTwo / 200}</p>
            </div>
          </div>
          <div>
            <h2>Menu</h2>
            <div className="simmilar-products">
              {productsMenu.map((menuCard) => {
                return <MenuCard menuCard={menuCard} />;
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCardDetails;
