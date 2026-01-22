import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { setProducts, addToCart } from "./Store";

/* ✅ Selector */
const selectAllItems = createSelector(
  (state) => state.products,
  (products) => ({
    veg: products.veg,
    nonveg: products.nonveg,
    milk: products.milk,
    all: [
      ...products.veg,
      ...products.nonveg,
      ...products.milk
    ]
  })
);

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);

  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  /* ✅ Fetch from backend */
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => dispatch(setProducts(data)))
      .catch(err => console.error(err));
  }, [dispatch]);

  const filtered = items[category].filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>🛒 Grocery Store</h2>

      <input
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <select onChange={e => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="veg">Veg</option>
        <option value="nonveg">Non-Veg</option>
        <option value="milk">Milk</option>
      </select>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {filtered.map((item, i) => (
          <div key={i} style={{ border: "1px solid #ccc", padding: 10 }}>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <button onClick={() => dispatch(addToCart(item))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {filtered.length === 0 && <p>No items found</p>}
    </div>
  );
}

export default Home;
