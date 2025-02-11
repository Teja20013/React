import { configureStore, createSlice } from "@reduxjs/toolkit";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Milk from "./Milk";


// Initial product lists for Veg, NonVeg, and Milk
const productSlice = createSlice({
  name: "products",
  initialState: {
    Veg: [
      { name: "Carrot", price: 40,image: "/images/carrot.jpg"},
      { name: "Potato", price: 36,image: "/images/potato.jpg"},
      { name: "Tomato", price: 29,image: "/images/tomato.jpg" },
      { name: "Onion", price: 40,image: "/images/onion.jpg"},
      { name: "Garlic", price: 350,image: "/images/garlic.jpg"},
      { name: "Spinach", price: 25,image: "/images/spinach.jpg"},
      { name: "Broccoli", price: 120,image: "/images/broccoli.jpg"},
      { name: "Cauliflower", price: 35,image: "/images/cauliflower.jpg" },
      { name: "Cabbage", price: 30,image: "/images/cabbage.jpg"},
      { name: "Bell Pepper", price: 100,image: "/images/bellpepper.jpg"},
      { name: "Green Beans", price: 60,image: "/images/greenbeans.jpg" },
      { name: "Peas", price: 80,image: "/images/peas.jpg" },
      { name: "Eggplant (Brinjal)", price: 50,image: "/images/brinjal.jpg" },
      { name: "Zucchini", price: 150,image: "/images/Zucchini.jpg" },
      { name: "Cucumber", price: 30,image: "/images/cucumber.jpg" },
      { name: "Radish", price: 20 },
      { name: "Beetroot", price: 45,image: "/images/beetroot.jpg" },
      { name: "Sweet Potato", price: 50 },
      { name: "Pumpkin", price: 25 },
      { name: "Lettuce", price: 80 },
      { name: "Celery", price: 150 },
      { name: "Mushrooms", price: 195 },
      { name: "Okra (Lady Finger)", price: 60 },
      { name: "Corn", price: 22 },
      { name: "Turnip", price: 40 },
      { name: "Leek", price: 200 },
      { name: "Asparagus", price: 500 },
      { name: "Artichoke", price: 250 },
      { name: "Kale", price: 200 },
      { name: "Bitter Gourd", price: 55 },
    ],
    Nonveg: [
      { name: "Butter Chicken", price: 250,image: "/images/butterchicken.jpg" },
      { name: "Chicken Biryani", price: 200,image: "/images/chickenbiryani.jpg" },
      { name: "Mutton Rogan Josh", price: 300,image: "/images/muttonsoup.jpg" },
      { name: "Fish Curry", price: 220,image: "/images/fishcurry.jpg" },
      { name: "Prawn Masala", price: 350,image: "/images/prawnscurry.jpg"},
      { name: "Chicken Tikka Masala", price: 270,image: "/images/chickentika.jpg" },
      { name: "Lamb Vindaloo", price: 320 },
      { name: "Goan Fish Curry", price: 240 },
      { name: "Hyderabadi Mutton Biryani", price: 350 },
      { name: "Tandoori Chicken", price: 280 },
      { name: "Keema Matar", price: 260 },
      { name: "Chicken Korma", price: 230 },
      { name: "Mutton Kebab", price: 300 },
      { name: "Fish Fry", price: 200 },
      { name: "Prawn Biryani", price: 370 },
      { name: "Chicken 65", price: 180 },
      { name: "Mutton Curry", price: 290 },
      { name: "Crab Masala", price: 400 },
      { name: "Egg Curry", price: 150 },
      { name: "Duck Roast", price: 350 },
      { name: "Quail Fry", price: 330 },
      { name: "Chicken Chettinad", price: 250 },
      { name: "Mutton Pepper Fry", price: 310 },
      { name: "Fish Moilee", price: 260 },
      { name: "Prawn Balchao", price: 380 },
      { name: "Chicken Xacuti", price: 270 },
      { name: "Mutton Paya", price: 300 },
      { name: "Fish Amritsari", price: 220 },
      { name: "Prawn Vindaloo", price: 360 },
      { name: "Chicken Cafreal", price: 250 },
    ],
    Milk: [
      { name: "Cow Milk (1L)", price: 60,image: "/images/cowmilk.jpg" },
      { name: "Buffalo Milk (1L)", price: 70 },
      { name: "Heritage Full Cream Milk (1L)", price: 65 },
      { name: "Vijaya Toned Milk (1L)", price: 55 },
      { name: "Amul Gold Full Cream Milk (1L)", price: 68, image: "/images/amulmilk.jpg" },
      { name: "Mother Dairy Toned Milk (1L)", price: 60 },
      { name: "Nandini Milk (1L)", price: 58 },
      { name: "Raw Milk (1L)", price: 80 },
      { name: "Skimmed Milk (1L)", price: 50 },
      { name: "Organic Cow Milk (1L)", price: 90 },
      { name: "Goat Milk (1L)", price: 120 },
      { name: "Camel Milk (500ml)", price: 150 },
      { name: "Condensed Milk (400g)", price: 130, image: "/images/milkmaid.jpg"},
      { name: "Evaporated Milk (400g)", price: 140 },
      { name: "Almond Milk (1L)", price: 250 },
      { name: "Soy Milk (1L)", price: 200 },
      { name: "Coconut Milk (1L)", price: 180,image: "/images/coconutmilk.jpg" },
      { name: "Oat Milk (1L)", price: 270 },
      { name: "Flavored Milk (500ml)", price: 100 },
      { name: "Khoa (500g)", price: 180,image: "/images/khoa.jpg"},
      { name: "Paneer (500g)", price: 250,image: "/images/paneer.jpg" },
      { name: "Ghee (1kg)", price: 600 },
      { name: "Butter (500g)", price: 290,image: "/images/butter.jpg" },
      { name: "Cheese (500g)", price: 350,image: "/images/cheese.jpg" },
      { name: "Curd (500g)", price: 50,image: "/images/curd.jpg" },
      { name: "Lassi (500ml)", price: 60 },
      { name: "Buttermilk (500ml)", price: 45,image: "/images/buttermilk.jpg" },
      { name: "Milk Powder (500g)", price: 320,image: "/images/milkpowder.jpg"},
      { name: "Malted Milk Powder (500g)", price: 280 },
      { name: "Fresh Cream (250ml)", price: 110,image: "/images/freshcream.jpg" },
    ],
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
