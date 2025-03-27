import React from "react";
import { useOrders } from "../Context/OrdersContext";
import { Link } from "react-router-dom";
import "../styles/Orders.css";

const OrdersPage = () => {
  const { orders } = useOrders();

  return (
    <div className="orders-page ">
      <div
        className="orders-header"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "100%",
        }}
      >
        <h2>Your Orders</h2>
      </div>

      <div
        className="orders-tabs"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
      </div>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-card inner-white">
              <div className="order-details inner-white">
                <div className="order-info inner-white">
                  <p>
                    <strong>Order Placed:</strong> {order.date}
                  </p>
                  <p>
                    <strong>Total:</strong> ₹{order.total}
                  </p>
                  <p>
                    <strong>Ship To:</strong> {order.customer.name}
                  </p>
                </div>

                <div className="order-id inner-white">
                  <p>ORDER # {order.id}</p>
                  <Link to={`#`} className="view-details">
                    View order details
                  </Link>
                  <br />
                  <Link to="/" className="invoice">
                    Invoice
                  </Link>
                </div>
              </div>

              <div className="products-container-orders inner-white">
                {order.items.map((item, index) => (
                  <div key={index} className="product-card-orders inner-white">
                    <img
                      src={item.img || "/assets/placeholder.jpg"}
                      alt={item.name}
                      className="product-img"
                    />

                    <div className="product-info-orders inner-white">
                      <h4>{item.name}</h4>
                      <p>
                        {item.price} x {item.quantity}
                      </p>
                      <p>
                        <strong>Status:</strong>{" "}
                        {item.status || "Not yet Shipped"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
