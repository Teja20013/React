import { configureStore, createSlice } from "@reduxjs/toolkit";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Milk from "./Milk";


// Initial product lists for Veg, NonVeg, and Milk
const productSlice = createSlice({
  name: "products",
  initialState: {
    Veg: [
      { name: "Carrot", price: 40,image: "carrot.jpg"},
      { name: "Potato", price: 36,image: "potato.jpg"},
      { name: "Tomato", price: 29,image: "tomato.jpg" },
      { name: "Onion", price: 40,image: "onions.jpg"},
      { name: "Garlic", price: 350,image: "garlic.jpg"},
      { name: "Spinach", price: 25,image: "Spinach.jpg"},
      { name: "Broccoli", price: 120,image: "broccoli.jpg"},
      { name: "Cauliflower", price: 35,image: "cauliflower.jpg" },
      { name: "Cabbage", price: 30,image: "cabbage.jpg"},
      { name: "Bell Pepper", price: 100,image: "bellpepper.jpg"},
      { name: "Green Beans", price: 60,image: "greenbeans.jpg"},
      { name: "Peas", price: 80,image: "peas.jpg"},
      { name: "Eggplant (Brinjal)", price: 50,image: "brinjal.jpg" },
      { name: "Zucchini", price: 150,image: "Zucchini.jpg" },
      { name: "Cucumber", price: 30,image: "cucumber.jpg" },
      { name: "Radish", price: 20, image: "radish.jpg"},
      { name: "Beetroot", price: 45,image: "beetroot.jpg" },
      { name: "Sweet Potato", price: 50,image: "sweetpotato.jpg" },
      { name: "Pumpkin", price: 25, image: "pumpkin.jpg" },
      { name: "Lettuce", price: 80, image: "lettuce.jpg" },
      { name: "Celery", price: 150, image: "celery.jpg" },
      { name: "Mushrooms", price: 195, image: "mushroom.jpg" },
      { name: "Okra (Lady Finger)", price: 60, image: "ladysfinger.jpg" },
      { name: "Corn", price: 22, image: "corn.jpg" },
      { name: "Turnip", price: 40, image: "turnip.jpg" },
      { name: "Leek", price: 200, image: "leek.jpg" },
      { name: "Asparagus", price: 500, image: "asparagus.jpg"},
      { name: "Artichoke", price: 250, image: "artichoke.jpg" },
      { name: "Kale", price: 200, image: "kale.jpg"},
      { name: "Bitter Gourd", price: 55, image: "bittergourd.jpg" },
    ],
    Nonveg: [
      { name: "Eggs", price:120,image: "eggs.jpg"},
      { name: "Fish", price: 500,image: "fish.jpg"},
      { name: "Mutton", price: 800,image: "mutton.jpg"},
      { name: "Prawns", price: 800,image: "prawns.jpg"},
      { name: "Crabs", price: 800,image: "crabs.jpg"},
      { name: "Butter Chicken", price: 250,image: "butterchicken.jpg" },
      { name: "Chicken Biryani", price: 200,image: "chickenbiryani.jpg" },
      { name: "Mutton Rogan Josh", price: 300,image: "muttonsoup.jpg" },
      { name: "Fish Curry", price: 220,image: "fishcurry.jpg" },
      { name: "Prawn Masala", price: 350,image: "prawnscurry.jpg"},
      { name: "Chicken Tikka Masala", price: 270,image: "chickentika.jpg" },
      { name: "Lamb Vindaloo", price: 320,image: "lambvindaloo.jpg"},
      { name: "Goan Fish Curry", price: 240,image: "gonafishcurry.jpg"},
      { name: "Hyderabadi Mutton Biryani", price: 350,image: "hydmuttonbiryani.jpg" },
      { name: "Tandoori Chicken", price: 280 ,image: "tandoorichicken.jpg"},
      { name: "Keema Matar", price: 260,image: "keemamatar.jpg" },
      { name: "Chicken Korma", price: 230,image: "chickenkorma.jpg" },
      { name: "Mutton Kebab", price: 300,image: "muttonkebab.jpg" },
      { name: "Fish Fry", price: 200,image: "fishfry.jpg" },
      { name: "Prawn Biryani", price: 370,image: "prawnbiryani.jpg" },
      { name: "Chicken 65", price: 180,image: "chicken65.jpg"},
      { name: "Mutton Curry", price: 290,image: "muttoncurry.jpg"},
      { name: "Crab Masala", price: 400,image: "crabmasala.jpg" },
      { name: "Egg Curry", price: 150,image: "eggcurry.jpg" },
      { name: "Duck Roast", price: 350,image: "duckroast.jpg" },
      { name: "Chicken", price: 250,image: "chicken.jpg" },
      { name: "Mutton Pepper Fry", price: 310,image: "muttonpepperfry.jpg" },
      { name: "Prawn Balchao", price: 380,image: "prawnbalchao.jpg" },
      { name: "Chicken Xacuti", price: 270,image: "chickenxacuti.jpg" },
      { name: "Mutton Paya", price: 300,image: "muttonpaya.jpg" },
      { name: "Fish Amritsari", price: 220,image: "fishamritsari.jpg" },
      { name: "Prawn Vindaloo", price: 360,image: "prawnvindaloo.jpg" },
      { name: "Chicken Cafreal", price: 250,image: "chickencafreal.jpg" },
    ],
    Milk: [
      { name: "Cow Milk (1L)", price: 60,image: "cowmilk.jpg" },
      { name: "Buffalo Milk (1L)", price: 70, image: "buffalomilk.jpg"},
      { name: "Heritage Full Cream Milk (1L)", price: 65,image:"heritage.jpg" },
      { name: "Vijaya Toned Milk (1L)", price: 55, image: "vijayamilk.jpg"},
      { name: "Amul Gold Full Cream Milk (1L)", price: 68, image: "amulmilk.jpg" },
      { name: "Mother Dairy Toned Milk (1L)", price: 60, image: "motherdairymilk.jpg" },
      { name: "Nandini Milk (1L)", price: 58, image:"nandinimilk.jpg" },
      { name: "Raw Milk (1L)", price: 80, image:"rawmilk.jpg" },
      { name: "Condensed Milk (400g)", price: 130, image: "milkmaid.jpg"},
      { name: "Coconut Milk (1L)", price: 180,image: "coconutmilk.jpg" },
      { name: "Khoa (500g)", price: 180,image: "khoa.jpg"},
      { name: "Paneer (500g)", price: 250,image: "paneer.jpg" },
      { name: "Ghee (1kg)", price: 600, image:"ghee.jpg" },
      { name: "Butter (500g)", price: 290,image: "butter.jpg" },
      { name: "Cheese (500g)", price: 350,image: "cheese.jpg" },
      { name: "Curd (500g)", price: 50, image: "curd.jpg" },
      { name: "Lassi (500ml)", price: 60, image:"lassi.jpg" },
      { name: "Buttermilk (500ml)", price: 45,image: "buttermilk.jpg" },
      { name: "Milk Powder (500g)", price: 320,image: "milkpowder.jpg"},
      { name: "Malted Milk Powder (500g)", price: 280, image:"maltedmilk.jpg"},
      { name: "Fresh Cream (250ml)", price: 110,image: "freshcream.jpg" },
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
