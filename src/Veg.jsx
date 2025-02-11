import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState, useEffect } from "react";

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

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, filterBelow100, filterAbove100]);

    // Filtered items based on checkbox selection and search term
    let filteredItems = vegItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const isBelow100 = filterBelow100 ? item.price < 100 : true;
        const isAbove100 = filterAbove100 ? item.price >= 100 : true;
        return matchesSearch && isBelow100 && isAbove100;
    });

    // Pagination logic
    const totalPages = Math.min(Math.ceil(filteredItems.length / itemsPerPage), 5);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const finalItems = currentItems.map((item, index) => (
        <div key={item.id || index} className="veg-card">
            <img src={item.image} alt={item.name} width="100" />
            <span>{item.name} - {item.price}</span>
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

                {/* Page Number Buttons */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                    <button 
                        key={pageNum} 
                        onClick={() => setCurrentPage(pageNum)}
                        className={currentPage === pageNum ? "active-page" : ""}
                        style={{ margin: "0 5px", fontWeight: currentPage === pageNum ? "bold" : "normal" }}
                    >
                        {pageNum}
                    </button>
                ))}

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
