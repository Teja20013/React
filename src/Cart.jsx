import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPurchaseDetails, clearCart, decraement, increament, remove } from './Store';

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  // Convert prices to numbers to avoid errors
  let totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * (Number(item.price) || 0), 0);

  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [showDiscount, setShowDiscount] = useState(false);
  const [cuponCode, setCuponCode] = useState('');
  const [cuponCodeDiscountPer, setCuponCodeDiscountPer] = useState(0);

  let discountAmount = (totalPrice * discountPercentage) / 100;
  let cuponDiscountAmount = (totalPrice * cuponCodeDiscountPer) / 100;

  let finalAmount = totalPrice - discountAmount - cuponDiscountAmount;

  const handleCouponApply = () => {
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

  const handleCompletePurchase = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    const purchaseDetails = {
      date: new Date().toLocaleDateString(),
      items: [...cartItems],
      totalPrice: finalAmount.toFixed(2),
    };

    dispatch(clearCart());
    dispatch(addPurchaseDetails(purchaseDetails));
    alert('🎉 Purchase Completed Successfully!');
  };

  return (
    <div className="container mt-4 text-center">
      {cartItems.length > 0 ? (
        <>
          <h2 className="mb-3">🛒 Your Shopping Cart</h2>
          <ul className="list-group mb-4">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name} - ${Number(item.price).toFixed(2)}
                <div>
                  <button className="btn btn-sm btn-success mx-1" onClick={() => dispatch(increament(item))}>+</button>
                  <button className="btn btn-sm btn-warning mx-1" onClick={() => dispatch(decraement(item))}>-</button>
                  Quantity: {item.quantity}
                  <button className="btn btn-sm btn-danger mx-2" onClick={() => dispatch(remove(item))}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          <h4>Your Total Amount: <strong>${totalPrice.toFixed(2)}</strong></h4>

          {showDiscount && (
            <div className="alert alert-info mt-3">
              <p>Your Discount Applied: {discountPercentage}%</p>
              <p style={{ color: 'green' }}>Discount Amount: -${discountAmount.toFixed(2)}</p>
            </div>
          )}

          <h4>Your Final Amount: <strong>${finalAmount.toFixed(2)}</strong></h4>

          <div className="my-3">
            <button className="btn btn-primary mx-2" onClick={() => { setDiscountPercentage(10); setShowDiscount(true); }}>Apply 10% Discount</button>
            <button className="btn btn-primary mx-2" onClick={() => { setDiscountPercentage(20); setShowDiscount(true); }}>Apply 20% Discount</button>
            <button className="btn btn-primary mx-2" onClick={() => { setDiscountPercentage(30); setShowDiscount(true); }}>Apply 30% Discount</button>
          </div>

          <div className="my-3">
            <input
              type="text"
              value={cuponCode}
              onChange={(e) => setCuponCode(e.target.value)}
              placeholder="Enter Coupon Code"
              className="form-control w-50 mx-auto mb-2"
            />
            <button className="btn btn-info mx-2" onClick={handleCouponApply}>Apply Coupon</button>
            <button className="btn btn-success mx-2" onClick={handleCompletePurchase}>Complete Purchase</button>
          </div>

          {cuponCode && cuponDiscountAmount > 0 && (
            <div className="alert alert-success mt-3">
              <p>Coupon Code Applied: <strong>{cuponCode}</strong></p>
              <p>Coupon Discount: <strong>{cuponCodeDiscountPer}%</strong></p>
            </div>
          )}
        </>
      ) : (
        <div className="alert alert-warning">
          <p>❌ Your cart is empty...</p>
        </div>
      )}
    </div>
  );
}

export default Cart;