import { configureStore, createSlice } from "@reduxjs/toolkit";

/* ================= PRODUCTS SLICE ================= */

const productSlice = createSlice({
  name: "products",
  initialState: {
    veg: [
      { name: "Carrot", price: 40, image: "carrot.jpg" },
      { name: "Potato", price: 36, image: "potato.jpg" },
      { name: "Tomato", price: 29, image: "tomato.jpg" },
      { name: "Onion", price: 40, image: "onions.jpg" },
      { name: "Garlic", price: 350, image: "garlic.jpg" },
      { name: "Spinach", price: 25, image: "Spinach.jpg" }
    ],
    nonveg: [
      { name: "Eggs", price: 120, image: "eggs.jpg" },
      { name: "Chicken", price: 250, image: "chicken.jpg" },
      { name: "Fish", price: 500, image: "fish.jpg" }
    ],
    milk: [
      { name: "Cow Milk (1L)", price: 60, image: "cowmilk.jpg" },
      { name: "Butter", price: 290, image: "butter.jpg" },
      { name: "Cheese", price: 350, image: "cheese.jpg" }
    ]
  },
  reducers: {}
});

/* ================= CART SLICE ================= */

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(i => i.name === action.payload.name);
      if (item) item.quantity += 1;
      else state.push({ ...action.payload, quantity: 1 });
    },
    increament: (state, action) => {
      const item = state.find(i => i.name === action.payload.name);
      if (item) item.quantity += 1;
    },
    decraement: (state, action) => {
      const item = state.find(i => i.name === action.payload.name);
      if (item && item.quantity > 1) item.quantity -= 1;
      else return state.filter(i => i.name !== action.payload.name);
    },
    remove: (state, action) =>
      state.filter(i => i.name !== action.payload.name),
    clearCart: () => []
  }
});

/* ================= PURCHASE SLICE ================= */

const purchaseDetailsSlice = createSlice({
  name: "purchaseDetails",
  initialState: [],
  reducers: {
    addPurchaseDetails: (state, action) => {
      state.push(action.payload);
    }
  }
});

/* ================= AUTH SLICE ================= */

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!localStorage.getItem("username"),
    user: localStorage.getItem("username") || ""
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("username", action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = "";
      localStorage.removeItem("username");
    }
  }
});

/* ================= STORE ================= */

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    purchaseDetails: purchaseDetailsSlice.reducer,
    auth: authSlice.reducer
  }
});

/* ================= EXPORTS ================= */

export const {
  addToCart,
  increament,
  decraement,
  remove,
  clearCart
} = cartSlice.actions;

export const { addPurchaseDetails } = purchaseDetailsSlice.actions;
export const { login, logout } = authSlice.actions;

export default store;
