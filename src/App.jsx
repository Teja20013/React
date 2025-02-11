import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import Contactus from "./Contactus";
import Aboutus from "./Aboutus";
import Orders from "./Orders";
import Cart from "./Cart";
import Nonveg from "./Nonveg";
import './App.css'; 
import './Veg.css';
import './Cart.css';
import './Notfound';
import './Nonveg';
import './Milk';
<Nonveg></Nonveg>
import Milk from "./Milk";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { logout } from "./Store";
import NotFound from "./Notfound";
import "@fortawesome/fontawesome-free/css/all.min.css";


function App()
{
  const cart = useSelector((state) => state.cart);  // Ensure cart is always an array
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user); 
  const dispatch=useDispatch();

  return(
    <>
    <BrowserRouter>
  <div className="app-container">
    {/* Navigation Bar */}
    <nav className="navbar">
      <div className="logo">🛒 Grocery Store</div>

      {/* Centering the links */}
      <div className="nav-center">
        <Link to="/home"><i className="fa-solid fa-house"></i> Home</Link>
        <Link to="/veg"><i className="fa-solid fa-carrot"></i> Veg</Link>
        <Link to="/nonveg"><i className="fa-solid fa-drumstick-bite"></i> Non-Veg</Link>
        <Link to="/milk"><i className="fa-solid fa-cheese"></i> Milk</Link>
        <Link to="/aboutus"><i className="fa-solid fa-info-circle"></i> About Us</Link>
        <Link to="/contactus"><i className="fa-solid fa-address-card"></i>Contact Us</Link>
        <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i>Cart<span className="cart-count">{totalItems}</span></Link>
        <Link to="/orders"><i className="fa-solid fa-sort"></i>Orders</Link>
      </div>
      {/* Authentication Section (Right Side) */}
      <div className="auth-section">
        {isAuthenticated ? (
          <>
            <span className="user-name">Welcome, {user}!</span>
            <button onClick={() => dispatch(logout())} className="btn-logout">Logout</button>
          </>
        ) : (
          <Link to="/login" className="btn-login">Sign In</Link>
        )}
      </div>
    </nav>
    {/* Page Content */}
    <div className="content">
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<Nonveg />}/>
        <Route path="/milk" element={<Milk />}/>
        <Route path="/orders" element={<Orders />}/>
        <Route path="/aboutus" element={<Aboutus />}/>
        <Route path="/contactus" element={<Contactus />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={<Login />}/>
        {/* <Route path="/" element={<Navigate to="/home" />}/> */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  </div>
</BrowserRouter>

</>

)
}
export default App;