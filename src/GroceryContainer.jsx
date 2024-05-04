import React, { useContext, useEffect, useState } from "react";
import { clouImgAPI, instaMartAPI } from "./Utils/constants";
import Context from "./Utils/Context";

const GroceryContainer = () => {
  const { loggedInUser } = useContext(Context);
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
      {groceryData.map((item, i) => (
        <div key={i + 1} style={{ padding: "8px" }}>
          <img style={{ width: "12rem" }} src={clouImgAPI + item.imageId} />
          <div>{item.displayName}</div>
          <h4>{loggedInUser}</h4>
        </div>
      ))}
    </div>
  );
};

export default GroceryContainer;
