import React, { useEffect, useState } from "react";
import ProductCard, {
  ProductCardHOC,
} from "./components/ProductCard/ProductCard";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import Footer from "./components/Footer/Footer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./Utils/onlineStatusHook";
import { restaurantsNameAPI } from "./Utils/constants";

const MainContainer = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const ProductCardHOCcomp = ProductCardHOC(ProductCard);

  /// search functionality using filter
  const filterProductsHandler = (e) => {
    setSearchText(e.target.value);
    let filteredProducts = products?.filter((item) =>
      item?.info.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  /// filter topRated card function
  const filterTopRatedProductsHandler = () => {
    let filterdTopRatedProducts = products?.filter(
      (item) => item?.info?.avgRating > 4.5
    );
    setFilteredProducts(filterdTopRatedProducts);
    setSearchText("");
  };

  //Fetch API data function using async and wait
  const getFetchData = async () => {
    const data = await fetch(restaurantsNameAPI);
    const jsonData = await data.json();
    setProducts(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredProducts(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    getFetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <>
        <h4>You Are Offline.....!!!</h4>
        <p>please check your internet connection .....!!!</p>
      </>
    );
  }

  return (
    <>
      <div className="">
        {products.length === 0 ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="bg-slate-100 sticky top-12">
              <div className="p-4 mx-10  ">
                <input
                  className=" w-50 p-3 border-black rounded-md"
                  type="text"
                  placeholder="Search.."
                  name="search"
                  onChange={filterProductsHandler}
                />
                <button
                  className="w-50 p-3  rounded-md text-cyan-50 bg-slate-500"
                  onClick={filterTopRatedProductsHandler}
                >
                  Top Rated
                </button>
              </div>
            </div>
            <div className="mx-10  flex flex-wrap justify-evenly">
              {filteredProducts?.map((productCardData) => (
                <Link
                  key={productCardData?.info?.id}
                  to={"/ProductCardDetails/" + productCardData?.info?.id}
                >
                  {productCardData?.info?.aggregatedDiscountInfoV3
                    ?.header ? (
                    <ProductCardHOCcomp productCardData={productCardData} />
                  ) : (
                    <ProductCard productCardData={productCardData} />
                  )}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="flex">
        <Footer />
      </div>
    </>
  );
};
export default MainContainer;
