import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanila Redux Older way of Redux
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      //Redux Toolkit--New way of Redux
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearItem: (state) => {
      console.log('state',current(state))
      state.items.length = 0;
    },
  },
});
export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
