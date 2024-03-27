import React, { useEffect, useState } from "react";
import { Button, Form, Row, Container, Col } from "react-bootstrap";
import ProductCard from "./components/ProductCard/ProductCard";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import NoDataFound from "./components/NoDataFound/NoDataFound";
import Footer from "./components/Footer/Footer";

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
      <div className="main">
        {products.length === 0 ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="action-bar-container">
              <form class="example">
                <input
                  type="text"
                  placeholder="Search.."
                  name="search"
                  onChange={filterProductsHandler}
                />
                <button onClick={filterTopRatedProductsHandler}>
                  Top Rated
                </button>
              </form>
            </div>
            <div className="card-render-container">
              {filteredProducts?.map((productCardData) => (
                <ProductCard
                  key={productCardData?.id}
                  productCardData={productCardData}
                />
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
