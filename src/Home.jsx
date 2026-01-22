import { createSelector } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { addToCart } from "./Store";

/* Selector */
const selectAllItems = createSelector(
  (state) => state.products,
  (products) => ({
    veg: products.veg || [],
    nonveg: products.nonveg || [],
    milk: products.milk || [],
    all: [
      ...(products.veg || []),
      ...(products.nonveg || []),
      ...(products.milk || [])
    ]
  })
);

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredItems = items[category].filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>🏠 Welcome to Our Store 🛍</h2>

      <div className="search-filter">
        <input
          placeholder="🔍 Search items"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="veg">Veg</option>
          <option value="nonveg">Non-Veg</option>
          <option value="milk">Milk</option>
        </select>
      </div>

      <div className="product-list">
        {filteredItems.length ? (
          filteredItems.map((item, i) => (
            <div key={i} className="product-card">
              <img src={item.image} alt={item.name} width="150" />
              <h5>{item.name}</h5>
              <p>₹{item.price}</p>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
