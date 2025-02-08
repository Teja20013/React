import { configureStore, createSlice } from "@reduxjs/toolkit";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Milk from "./Milk";


// Initial product lists for Veg, NonVeg, and Milk
const productSlice = createSlice({
  name: 'products',
  initialState: {
    Veg: [
      { name: 'tomato', price: 200.5 },
      { name: 'potato', price: 300.5 },
      { name: 'beans', price: 250.5 },
      { name: 'carrot', price: 350.5 },
      { name: 'cauliflower', price: 450.5 },
    ],
    Nonveg: [
      { name: 'chicken', price: 800.0 },
      { name: 'fish', price: 900.0 },
      { name: 'mutton', price: 1000.0 },
    ],
    Milk: [
      { name: 'Vijaya', price: 800.0 },
      { name: 'Heritage', price: 900.0 },
      { name: 'Sangam', price: 1000.0 },
    ],
      // New cart state to store added products
  },
  reducers: {},
});
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((item) => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increament:(state,action) => {
      const item=state.find(item => item.name === action.payload.name);
      if(item)
      {
        item.quantity +=1;
      }
    },
    decraement:(state,action) => {
      const item = state.find(item => item.name === action.payload.name);
      if(item && item.quantity > 1)
      {
        item.quantity -= 1;
      }
      else{
        return state.filter(item =>item.name !== action.payload.name);
      }
    },
    remove: (state,action)=>{
      return state.filter(item =>item.name !== action.payload.name);
    },
    clearCart: ()=>[]
 },
});
let purchaseDetailsSlice = createSlice({
  name:"purchaseDetails",
  initialState : [], 
  reducers: 
  {
    addPurchaseDetails: (state,action)=>{
        state.push(action.payload)
    },
  },
});
const authSclice=createSlice({
  name:"auth",
  initialState: {
    isAuthenticated: localStorage.getItem("username")? true: false,
    user: localStorage.getItem("username") || " ",
  },
  reducers:{
    login:(state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("username", action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = " ";
      localStorage.removeItem("username");
    },
  },
});
// Configure the store with the products slice reducer
const store = configureStore({
  reducer: { 
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    purchaseDetails: purchaseDetailsSlice.reducer,
    auth: authSclice.reducer
  },
});
export const{addToCart, increament, decraement, remove,clearCart}=cartSlice.actions;
export default store;
export const{addPurchaseDetails}= purchaseDetailsSlice.actions;
export const{login, logout} = authSclice.actions
