import * as React from "react";
import { useRouteError } from "react-router-dom";

const NoDataFound = ({}) => {
  const error = useRouteError();

  return (
    <div className="">
      <h4>{error.status}</h4>
      <h4>{error.data}</h4>


    </div>
  );
};
export default NoDataFound;
