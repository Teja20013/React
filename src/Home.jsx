import { createSelector } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { addToCart } from "./Store";

/* ✅ Memoized selector */
const selectAllItems = createSelector(
  (state) => state.products,
  (products) => ({
    veg: products?.veg || [],
    nonveg: products?.nonveg || [],
    milk: products?.milk || [],
    all: [
      ...(products?.veg || []),
      ...(products?.nonveg || []),
      ...(products?.milk || [])
    ]
  })
);

function Home() {
  const dispatch = useDispatch();
  const allItems = useSelector(selectAllItems);

  const [searchItem, setSearchItem] = useState("");
  const [category, setCategory] = useState("all");

  const filteredItems = allItems[category].filter(item =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="container">
      <h2>🏠 Welcome to Our Store 🛍</h2>

      {/* Search & Filter */}
      <div className="search-filter">
        <input
          type="text"
          placeholder="🔍 Search for items..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Items</option>
          <option value="veg">Veg 🥦</option>
          <option value="nonveg">Non-Veg 🍗</option>
          <option value="milk">Milk 🥛</option>
        </select>
      </div>

      {/* Products */}
      <div className="product-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index} className="product-card">
              <img
                src={item.image}
                alt={item.name}
                width="150"
                height="150"
              />
              <h5>{item.name}</h5>
              <p>₹{item.price}</p>
              <button onClick={() => dispatch(addToCart(item))}>
                🛒 Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="no-items">No items found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
