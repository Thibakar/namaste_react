import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

const MainContainer = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loginBtnName, setLoginBtnName] = useState("LOG IN");
  const [searchText, setSearchText] = useState("");
  console.log("products", products);
  console.log("filteredProducts", filteredProducts);

  ///Login button name change function
  const onNamechangeHanlder = () => {
    loginBtnName === "LOG IN"
      ? setLoginBtnName("LOG OUT")
      : setLoginBtnName("LOG IN");
  };

  /// search functionality using filter
  const filterProductsHandler = (e) => {
    setSearchText(e.target.value);
    let filteredProducts = products?.filter((item) =>
      item?.title?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  /// filter topRated card function
  const filterTopRatedProductsHandler = () => {
    let filterdTopRatedProducts = products?.filter(
      (item) => item?.rating?.rate >= 4
    );
    setFilteredProducts(filterdTopRatedProducts);
    setSearchText("");
  };

  //Fetch API data function using async and wait
  const getFetchData = async () => {
    const data = await fetch(`https://fakestoreapi.com/products`);
    const jsonData = await data.json();
    setProducts(jsonData);
    setFilteredProducts(jsonData);
  };

  ///useEffect update the component with API Data
  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <>
      {/* terrinary codition statement  */}
      {products.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="action-bar">
            <button
              className="filter-button"
              onClick={filterTopRatedProductsHandler}
            >
              Top Rated Products
            </button>

            <input
              className="search-input"
              type="input"
              value={searchText}
              onChange={filterProductsHandler}
            />

            <button className="filter-button" onClick={onNamechangeHanlder}>
              {loginBtnName}
            </button>
          </div>{" "}
          <div className="card_container">
            <div className="card-details">
              {/* map funtionality to display tha array in card  */}
              {filteredProducts?.map((productCardData) => (
                <ProductCard
                  key={productCardData?.id}
                  productCardData={productCardData}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default MainContainer;
