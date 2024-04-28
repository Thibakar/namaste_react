import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import Footer from "./components/Footer/Footer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./Utils/onlineStatusHook";
import { restaurantsName } from "./Utils/constants";

const MainContainer = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("products", products);
  console.log("filteredProducts", filteredProducts);

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
    console.log("jhghjgkkjkj");
    let filterdTopRatedProducts = products?.filter(
      (item) => item?.info?.avgRating > 4.5
    );
    setFilteredProducts(filterdTopRatedProducts);
    setSearchText("");
  };

  //Fetch API data function using async and wait
  const getFetchData = async () => {
    const data = await fetch(
      restaurantsName
    );
    const jsonData = await data.json();
    console.log("jsonData", jsonData.data);
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
  console.log("onlineStatus", onlineStatus);
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
      <div className="main">
        {products.length === 0 ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="about-section">
              <input
                className="search-input"
                type="text"
                placeholder="Search.."
                name="search"
                onChange={filterProductsHandler}
              />
              <button
                className="top-rated-button"
                onClick={filterTopRatedProductsHandler}
              >
                Top Rated
              </button>
            </div>
            <div className="card-render-container">
              {filteredProducts?.map((productCardData) => (
                <Link
                  key={productCardData?.info?.id}
                  to={"/ProductCardDetails/" + productCardData?.info?.id}
                >
                  <ProductCard productCardData={productCardData} />
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};
export default MainContainer;
