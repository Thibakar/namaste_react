import React, { useEffect, useState } from "react";

const GroceryContainer = (props) => {
  const [groceryData, setGroceryData] = useState([]);
  const getResponse = async () => {
    const data = await fetch(
      `https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP`
    );
    const jsonData = await data.json();
    console.log("jsonDataaaaaaaaa", jsonData?.data?.widgets[1].data);
    setGroceryData(jsonData?.data?.widgets[1]?.data);
  };

  useEffect(() => {
    getResponse();
  }, []);
  return (
    <div style={{ margin: "0 8rem", display: "flex", flexWrap: "wrap" }}>
      {groceryData.map((item) => (
        <div style={{ padding: "8px" }}>
          <img
            style={{ width: "12rem" }}
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              item.imageId
            }
          />
          <div>{item.displayName}</div>
        </div>
      ))}
    </div>
  );
};

export default GroceryContainer;
