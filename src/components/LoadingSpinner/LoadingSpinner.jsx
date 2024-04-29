import * as React from "react";

const data = [
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
 
 
];

const LoadingSpinner = ({}) => {
  return (
      <div className="m-10 flex flex-wrap">
      {data.map((item) => (
        <div className="m-2">
          <div className="w-52  h-100 p-2 bg-slate-100 rounded-md">
            <div className="">
              {item.name}
              <div className="h-72 w-96 object-center rounded-md" />
            </div>
          </div>
        </div>
      ))}
      </div>
  );
};
export default LoadingSpinner;
