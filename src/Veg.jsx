import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState, useEffect } from "react";
import "./Veg.css";

function Veg() {
    const dispatch = useDispatch();
    const vegItems = useSelector(state => state.products.Veg) ?? [];

    // State for filters
    const [filterBelow100, setFilterBelow100] = useState(false);
    const [filterAbove100, setFilterAbove100] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, filterBelow100, filterAbove100]);

    // Filtered items based on checkbox selection and search term
    const filteredItems = vegItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const isBelow100 = filterBelow100 ? item.price < 100 : true;
        const isAbove100 = filterAbove100 ? item.price >= 100 : true;
        return matchesSearch && isBelow100 && isAbove100;
    });

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    return (
        <div className="veg-container">
            <h2>Fresh & Organic Veg Items 🥦</h2>

            {/* Search Box */}
            <div className="search-box">
                <input 
                    type="text" 
                    placeholder="Search for vegetables..." 
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

            {/* Veg Items List (Now in Vertical Layout) */}
            <div className="veg-list">
                {currentItems.length > 0 ? (
                    currentItems.map((item, index) => (
                        <div key={item.id || index} className="veg-card">
                            <img src={item.image} alt={item.name} />
                             <div className="veg-info">
                                <span>{item.name} - ${item.price}</span>
                                <button 
                                    className="add-cart-btn" 
                                    onClick={() => dispatch(addToCart(item))}
                                >
                                    Add to Cart
                                </button>
                             </div>
                        </div>
                    ))
                ) : (
                    <p>No Veg Items Available</p>
                )}
            </div>

            {/* Simplified Pagination */}
            {totalPages > 1 && (
                <div className="pagination">
                    <button 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>

                    <span className="page-info">{currentPage}</span>

                    <button 
                        onClick={() => setCurrentPage(prev => (prev < totalPages ? prev + 1 : prev))} 
                        disabled={currentPage >= totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default Veg;
