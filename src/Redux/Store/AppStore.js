import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slice/CartSlice";
const AppStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default AppStore;
