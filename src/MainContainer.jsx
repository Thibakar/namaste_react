import React, { useEffect, useState } from "react";
import { Button, Form, Row, Container, Col } from "react-bootstrap";
import ProductCard from "./components/ProductCard/ProductCard";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import NoDataFound from "./components/NoDataFound/NoDataFound";

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
      {products.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="action-bar-container">
            <div className="flex-item-left">
              <Button
                className="button-size"
                variant="primary"
                size="md"
                onClick={filterTopRatedProductsHandler}
              >
                TopRated Products
              </Button>
            </div>
            <div className="flex-item-right">
              <Form.Control
                className="button-size"
                s
                size="md"
                type="text"
                placeholder="Search Products"
                onChange={filterProductsHandler}
              />
            </div>
          </div>
          <div className="card-render-container">
            {filteredProducts.length === 0 ? (
              <NoDataFound/>
            ) : (
              <>
                {filteredProducts?.map((productCardData) => (
                  <ProductCard
                    key={productCardData?.id}
                    productCardData={productCardData}
                  />
                ))}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};
export default MainContainer;
