import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";

function Milk() {
  const dispatch = useDispatch();

  // ✅ Correct Redux path
  const milkItems = useSelector(state => state.products.milk);

  const [search, setSearch] = useState("");
  const [below100, setBelow100] = useState(false);
  const [above100, setAbove100] = useState(false);

  const filteredMilk = milkItems.filter(item => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchBelow = below100 ? item.price < 100 : true;
    const matchAbove = above100 ? item.price >= 100 : true;

    return matchSearch && matchBelow && matchAbove;
  });

  return (
    <div className="container text-center mt-4">
      <h2>🥛 Fresh Dairy Products</h2>

      <input
        type="text"
        className="form-control w-50 mx-auto my-3"
        placeholder="Search for milk products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

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

      <div className="row">
        {filteredMilk.length > 0 ? (
          filteredMilk.map((item, index) => (
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
                  className="btn btn-primary"
                  onClick={() => dispatch(addToCart(item))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-danger mt-4">No Milk Items Available</p>
        )}
      </div>
    </div>
  );
}

export default Milk;
