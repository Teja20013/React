import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";

function Veg() {
  const dispatch = useDispatch();

  // ✅ CORRECT selector
  const vegItems = useSelector(state => state.products.veg);

  const [search, setSearch] = useState("");
  const [below100, setBelow100] = useState(false);
  const [above100, setAbove100] = useState(false);

  // ✅ SAFE filtering
  const filteredVeg = vegItems.filter(item => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchBelow = below100 ? item.price < 100 : true;
    const matchAbove = above100 ? item.price >= 100 : true;

    return matchSearch && matchBelow && matchAbove;
  });

  return (
    <div className="container text-center mt-4">
      <h2>🥦 Fresh & Organic Veg Items</h2>

      {/* Search */}
      <input
        type="text"
        className="form-control w-50 mx-auto my-3"
        placeholder="Search for vegetables..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {/* Filters */}
      <div className="mb-3">
        <label className="mx-2">
          <input
            type="checkbox"
            checked={below100}
            onChange={() => setBelow100(!below100)}
          />{" "}
          Below ₹100
        </label>

        <label className="mx-2">
          <input
            type="checkbox"
            checked={above100}
            onChange={() => setAbove100(!above100)}
          />{" "}
          Above ₹100
        </label>
      </div>

      {/* Products */}
      <div className="row">
        {filteredVeg.length > 0 ? (
          filteredVeg.map((item, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card p-2 shadow">
                <img
                  src={item.image}
                  alt={item.name}
                  height="150"
                  style={{ objectFit: "cover" }}
                />
                <h5 className="mt-2">{item.name}</h5>
                <p>₹{item.price}</p>
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(addToCart(item))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-danger mt-4">No Veg Items Available</p>
        )}
      </div>
    </div>
  );
}

export default Veg;
