import React from "react";
import { FaLeaf, FaShoppingCart, FaHandHoldingHeart, FaTruck } from "react-icons/fa";

function Aboutus() {
    return (
        <div className="about-container">
            <h2 className="about-title">Welcome to Our Store</h2>
            <p className="about-description">
                We are committed to delivering fresh and high-quality products to your doorstep. 
                Our mission is to provide healthy, organic, and sustainable food choices for everyone.
            </p>

            {/* Features Section */}
            <div className="about-features">
                <div className="feature-box">
                    <FaLeaf className="feature-icon" style={{ color: "#2d6a4f" }} />
                    <h2 className="feature-title">Fresh & Organic</h2>
                    <p className="feature-description">We source the freshest vegetables and fruits for you.</p>
                </div>

                <div className="feature-box">
                    <FaShoppingCart className="feature-icon" style={{ color: "#1d4ed8" }} />
                    <h2 className="feature-title">Easy Shopping</h2>
                    <p className="feature-description">Shop online effortlessly with our user-friendly platform.</p>
                </div>

                <div className="feature-box">
                    <FaHandHoldingHeart className="feature-icon" style={{ color: "#dc2626" }} />
                    <h2 className="feature-title">Customer First</h2>
                    <p className="feature-description">We prioritize customer satisfaction with quality service.</p>
                </div>

                <div className="feature-box">
                    <FaTruck className="feature-icon" style={{ color: "#facc15" }} />
                    <h2 className="feature-title">Fast Delivery</h2>
                    <p className="feature-description">Get your orders delivered quickly and on time.</p>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
