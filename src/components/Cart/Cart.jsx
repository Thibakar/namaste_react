import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoriesCard from "../MenuCard/CategoriesCard";
import { clearItem } from "../../Redux/Slice/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((store) => store);
  const { items } = globalState?.cart;
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div className="text-center mx-48 py-3 ">
      {/* <h1 className="font-extrabold text-2xl">Cart</h1> */}
      <div className=" py-2 shadow-lg">
        {items?.length === 0 ? (
          <div className="p-10 rounded-md">
            <p className="font-bold">Cart is empty , Add Items to the Cart</p>
            <div className="my-4 rounded-md">
              <Link className="bg-slate-200 p-3" to="/ProductCardDetails/:id">
                Add Item
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <button
              className="rounded-md bg-slate-100 border-2  py-1 px-10 mx-1"
              onClick={handleClearCart}
            >
              clearCart
            </button>
            <CategoriesCard itemCards={items} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
