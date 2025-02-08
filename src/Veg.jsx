import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";

function Veg() {
    const dispatch = useDispatch();
    const vegItems = useSelector(state => state.products.Veg) ?? [];

    // State for filter checkboxes
    const [filterBelow100, setFilterBelow100] = useState(false);
    const [filterAbove100, setFilterAbove100] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Filtered items based on checkbox selection and search term
    let filteredItems = vegItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        if (filterBelow100 && filterAbove100) return matchesSearch;
        if (filterBelow100) return item.price < 100 && matchesSearch;
        if (filterAbove100) return item.price >= 100 && matchesSearch;
        return matchesSearch;
    });

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const finalItems = currentItems.map((item, index) => (
        <div key={index} className="veg-card">
            <span>{item.name} - ${item.price}</span>
            <button className="add-cart-btn" 
                onClick={() => dispatch(addToCart(item))}
                style={{ marginLeft: '10px', cursor: 'pointer' }}>
                Add to Cart
            </button>
        </div>
    ));

    return (
        <div className="veg-container">
            <h2>Welcome to the Veg Items page!</h2>

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

            <div className="veg-list">
                {currentItems.length > 0 ? finalItems : <p>No Veg Items Available</p>}
            </div>

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
export default Veg;
