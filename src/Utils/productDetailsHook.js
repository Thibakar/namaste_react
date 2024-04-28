import { useEffect, useState } from "react";

const UseProductDetails = (id) => {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    getProductDetails(id);
  }, []);

  const getProductDetails = async () => {
    const data =
      await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${id}
              `);
    const resData = await data.json();
    setProductDetails(resData);
  };
  return productDetails;
};
export default UseProductDetails;
