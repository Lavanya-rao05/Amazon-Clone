import React, { useState } from "react";
import "../styles/CheckoutPage.css";
import { useCart } from "../Context/CartContext";
import { useOrders } from "../Context/OrdersContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const { addOrder } = useOrders();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    email: "",
    payment: "Amazon Pay",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => {
        const price =
          typeof item.price === "string"
            ? parseFloat(item.price.replace(/[^0-9.]/g, ""))
            : item.price;

        return total + price * item.quantity;
      }, 0)
      .toLocaleString("en-IN");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty! Add some products first.");
      return;
    }

    const newOrder = {
      id: Date.now(),
      items: cart,
      total: cart.reduce((total, item) => {
        const price =
          typeof item.price === "string"
            ? parseFloat(item.price.replace(/[^0-9.]/g, ""))
            : item.price;

        return total + price * item.quantity;
      }, 0),
      date: new Date().toLocaleDateString(),
      customer: formData,
    };

    addOrder(newOrder);
    clearCart();
    navigate("/");
  };

  return (
    <div className="checkout-page">
      <h2 className="checkout-heading" style={{ textAlign: "center" }}>
        Checkout
      </h2>

      <div className="checkout-container">
        <div className="order-summary inner-white">
          <h3 className="section-title">Order Summary</h3>

          {cart.map((item, index) => (
            <div className="order-item inner-white" key={index}>
              <img src={item.img} alt={item.name} />
              <div className="item-details inner-white">
                <h4>{item.name}</h4>
                <p>
                  ₹
                  {(
                    (typeof item.price === "string"
                      ? parseFloat(item.price.replace(/[^0-9.]/g, ""))
                      : item.price) * item.quantity
                  ).toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          ))}

          <p className="total">Total: ₹{getTotalPrice()}</p>
        </div>

        <div className="checkout-form inner-white">
          <h3 className="section-title">Billing Details</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group inner-white">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group inner-white">
              <label>Address</label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group inner-white">
              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group inner-white">
              <label>Zip Code</label>
              <input
                type="text"
                name="zip"
                placeholder="Zip Code"
                value={formData.zip}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group inner-white">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <h3 className="section-title">Payment Method</h3>
            <div className="payment-options inner-white">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Amazon Pay"
                  checked={formData.payment === "Amazon Pay"}
                  onChange={handleChange}
                />
                Amazon Pay
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Credit/Debit Card"
                  onChange={handleChange}
                />
                Credit/Debit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Net Banking"
                  onChange={handleChange}
                />
                Net Banking
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>
            </div>

            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
