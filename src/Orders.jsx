import React from "react";
import { useSelector } from "react-redux";

function Orders() {
    const purchaseHistory = useSelector(state => state.purchaseDetails);
    console.log("Purchase History Data:", purchaseHistory);

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">📜 Purchase History</h1>

            {purchaseHistory.length > 0 ? (
                purchaseHistory.map((order, index) => {
                    const discount = Number(order.discount) || 0;
                    const totalPrice = Number(order.totalPrice) || 0;
                    const finalAmount = totalPrice - discount;

                    return (
                        <div key={index} className="card shadow-sm mb-4">
                            <div className="card-body">
                                <h5 className="card-title">🛒 Order {index + 1}</h5>
                                <p><strong>📅 Date:</strong> {order.date || "Unknown"}</p>
                                <p><strong>💵 Total Amount:</strong> 
                                    <span className="text-primary"> ${totalPrice.toFixed(2)}</span>
                                </p>

                                {discount > 0 && (
                                    <p><strong>🎁 Discount Applied:</strong> 
                                        <span className="text-danger"> -${discount.toFixed(2)}</span>
                                    </p>
                                )}

                                <p><strong>✅ Final Amount Paid:</strong> 
                                    <span className="text-success"> ${finalAmount.toFixed(2)}</span>
                                </p>

                                <h6 className="mt-3">📦 Purchased Items:</h6>
                                <ul className="list-group">
                                    {order.items.map((product, i) => {
                                        const price = Number(product.price) || 0; // Ensure price is a number
                                        const totalProductPrice = price * product.quantity;

                                        return (
                                            <li key={i} className="list-group-item d-flex justify-content-between">
                                                <span>{product.name} ({product.quantity} × ${price.toFixed(2)})</span>
                                                <strong>${totalProductPrice.toFixed(2)}</strong>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="alert alert-warning text-center">
                    ❌ No Purchase History Available
                </div>
            )}
        </div>
    );
}

export default Orders;