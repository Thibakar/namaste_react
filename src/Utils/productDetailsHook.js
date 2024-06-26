import { useEffect, useState } from "react";
import { restoMenuDetails, restoMenuDetailsAPI } from "./constants";

const UseProductDetails = (id) => {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    getProductDetails(id);
  }, []);

  const getProductDetails = async () => {
    const data = await fetch(restoMenuDetailsAPI + id);
    const resData = await data.json();
    setProductDetails(resData);
  };
  return productDetails;
};
export default UseProductDetails;
