import React, { useEffect, useState } from "react";
import { clouImgAPI, instaMartAPI } from "./Utils/constants";

const GroceryContainer = (props) => {
  const [groceryData, setGroceryData] = useState([]);
  const getResponse = async () => {
    const data = await fetch(instaMartAPI);
    const jsonData = await data.json();
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
              clouImgAPI +
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