import { configureStore, createSlice } from "@reduxjs/toolkit";

/* ================= PRODUCTS ================= */

const productSlice = createSlice({
  name: "products",
  initialState: {
    veg: [],
    nonveg: [],
    milk: []
  },
  reducers: {
    setProducts: (state, action) => {
      state.veg = action.payload.veg || [];
      state.nonveg = action.payload.nonveg || [];
      state.milk = action.payload.milk || [];
    }
  }
});

/* ================= CART ================= */

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(i => i.name === action.payload.name);
      if (item) item.quantity += 1;
      else state.push({ ...action.payload, quantity: 1 });
    }
  }
});

/* ================= STORE ================= */

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer
  }
});

export const { setProducts } = productSlice.actions;
export const { addToCart } = cartSlice.actions;
export default store;
