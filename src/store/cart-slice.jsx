import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    isVisible: false,
  },
  reducers: {
    toggleCart(state) {
      state.isVisible = !state.isVisible;
    },
    addItemtoCart(state, action) {
      const cartItem = action.payload;
      state.items.push({
        id: cartItem.id,
        name: cartItem.name,
        src: cartItem.src,
        price: cartItem.price,
        category: cartItem.category,
      });
      state.totalQuantity++;
      state.totalPrice = state.totalPrice + cartItem.price;
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
