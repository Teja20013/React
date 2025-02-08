import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { addPurchaseDetails, clearCart, decraement, increament, remove } from './Store';

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook for navigation
  const cartItems = useSelector(state => state.cart);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // Get auth state

  const finalItems = cartItems.map((item, index) => (
    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
      {item.name} - ${item.price}
      <div>
        <button onClick={() => dispatch(increament(item))}>+</button>
        <button onClick={() => dispatch(decraement(item))}>-</button>
        Quantity: {item.quantity}
        <button onClick={() => dispatch(remove(item))}>Remove</button>
      </div>
    </li>
  ));

  let totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const [discountPercentage, setDiscountPercentage] = useState(0);
  let [showDiscount, setShowDiscount] = useState(false);

  let discountAmount = (totalPrice * discountPercentage) / 100;

  let [cuponCode, setCuponCode] = useState('');
  let [cuponCodeDiscountPer, setCuponCodeDiscountPer] = useState(0);

  let handlingCuponPer = () => {
    switch (cuponCode.toUpperCase()) {
      case 'RATAN10':
        setCuponCodeDiscountPer(10);
        break;
      case 'TEJA2001':
        setCuponCodeDiscountPer(20);
        break;
      case 'RAXN032':
        setCuponCodeDiscountPer(30);
        break;
      case 'WQ11CM':
        setCuponCodeDiscountPer(40);
        break;
      default:
        alert('Invalid coupon code');
        setCuponCodeDiscountPer(0);
    }
  };

  let cuponDiscountAmount = (totalPrice * cuponCodeDiscountPer) / 100;
  let finalAmount = totalPrice - discountAmount - cuponDiscountAmount;

  let handleCompletePurchase = () => {
    if (!isAuthenticated) {
      navigate('/login'); // Redirect to login page if not authenticated
      return;
    }
    const purchaseDate = new Date().toLocaleDateString();
    let purchaseDetails = {
      date: purchaseDate,
      items: [...cartItems],
      totalPrice: finalAmount
    };

    dispatch(clearCart());
    dispatch(addPurchaseDetails(purchaseDetails));
    alert('Purchase Completed Successfully!');
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <>
          <ul className="list-group mb-4">{finalItems}</ul>

          <p className="h5">
            Your total amount: <strong>${totalPrice.toFixed(2)}</strong>
          </p>

          {showDiscount && (
            <div>
              <p>Your Discount Applied: {discountPercentage}%</p>
              <p style={{ color: 'green' }}>Your Discount Amount: ${discountAmount.toFixed(2)}</p>
            </div>
          )}

          <p>Your final amount: <strong>${finalAmount.toFixed(2)}</strong></p>

          <div>
            <button onClick={() => { setDiscountPercentage(10); setShowDiscount(true); }}>
              Apply 10% discount
            </button>
            <button onClick={() => { setDiscountPercentage(20); setShowDiscount(true); }}>
              Apply 20% discount
            </button>
            <button onClick={() => { setDiscountPercentage(30); setShowDiscount(true); }}>
              Apply 30% discount
            </button>
          </div>

          <div>
            <input
              type="text"
              value={cuponCode}
              onChange={(e) => setCuponCode(e.target.value)}
              placeholder="Enter Coupon Code"
              className="form-control w-50 mb-2"
            />
            <button className="btn btn-primary mb-2" onClick={handlingCuponPer}>
              Apply Coupon
            </button>
            <button className="btn btn-success mb-2" onClick={handleCompletePurchase}>
              Complete Purchase
            </button>
          </div>

          {cuponCode && cuponDiscountAmount > 0 && (
            <div>
              <p>Your coupon code applied: <strong>{cuponCode}</strong></p>
              <p>Your coupon code discount: <strong>{cuponDiscountAmount}%</strong></p>
            </div>
          )}
        </>
      ) : (
        <p>Your cart is empty...</p>
      )}
    </>
  );
}
export default Cart;