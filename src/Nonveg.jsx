import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";
import "./Nonveg.css"; // Ensure this CSS file exists in the same directory

function Nonveg() {
    const dispatch = useDispatch();
    const nonvegItems = useSelector(state => state.products.Nonveg) ?? [];

    // State for filters
    const [filterBelow100, setFilterBelow100] = useState(false);
    const [filterAbove100, setFilterAbove100] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Filter items based on checkbox selection and search term
    const filteredItems = nonvegItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        if (filterBelow100 && item.price >= 100) return false;
        if (filterAbove100 && item.price < 100) return false;
        return matchesSearch;
    });

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const finalItems = currentItems.map((item, index) => (
        <li key={index} className="nonveg-card">
            <span>{item.name} - {item.price}</span>
            <button className="add-cart-btn" onClick={() => dispatch(addToCart(item))}>
                Add to Cart
            </button>
        </li>
    ));

    return (
        <div className="nonveg-container">
            <h1>Welcome to the Non-Veg Items Page</h1>

            {/* Search Box */}
            <div className="search-box">
                <input 
                    type="text" 
                    placeholder="Search items..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
            </div>

            {/* Filter Section */}
            <div className="filter-section">
                <label>
                    <input 
                        type="checkbox" 
                        checked={filterBelow100} 
                        onChange={() => setFilterBelow100(!filterBelow100)} 
                    />
                    Below $100
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        checked={filterAbove100} 
                        onChange={() => setFilterAbove100(!filterAbove100)} 
                    />
                    Above $100
                </label>
            </div>

            {/* Display Filtered Items */}
            <ol className="nonveg-list">{finalItems.length > 0 ? finalItems : <p>No Non-Veg Items Available</p>}</ol>

            {/* Pagination Controls */}
            <div className="pagination">
                <button 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span> Page {currentPage} </span>
                <button 
                    onClick={() => setCurrentPage(prev => (indexOfLastItem < filteredItems.length ? prev + 1 : prev))} 
                    disabled={indexOfLastItem >= filteredItems.length}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Nonveg;
