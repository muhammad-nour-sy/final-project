import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";

const Cart = () => {
    const { cartItems, cartTotal, dispatch } = useContext(CartContext);
    const handleSubtraction = (item) => {
        if (item.quantity > 0) {
            dispatch({
                type: "CHANGE_QUANTITY",
                payload: { quantity: item.quantity - 1, id: item.id },
            });
        }
    };
    return (
        <div>
            <div className="shopping-cart">
                <div className="title">Cart</div>
                {cartItems.length === 0 && (
                    <div className="item cart-total">
                        <div className="empty">Your Cart is Empty</div>
                    </div>
                )}
                {cartItems &&
                    cartItems.map((item, i) => (
                        <div key={i}>
                            <div className="item">
                                <div className="cart-buttons">
                                    <button
                                        onClick={() =>
                                            dispatch({
                                                type: "REMOVE_ITEM",
                                                payload: { id: item.id },
                                            })
                                        }
                                        className="delete-cart-btn"
                                    >
                                        <i className="fa-solid fa-x"></i>
                                    </button>
                                </div>

                                <div className="image-container">
                                    <img
                                        className="image"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </div>

                                <div className="description">
                                    <span>{item.title}</span>
                                </div>

                                <div className="quantity">
                                    <button
                                        onClick={() =>
                                            dispatch({
                                                type: "CHANGE_QUANTITY",
                                                payload: {
                                                    quantity: item.quantity + 1,
                                                    id: item.id,
                                                },
                                            })
                                        }
                                        className="plus-cart-btn"
                                        type="button"
                                    >
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                    <input
                                        type="number"
                                        name="number"
                                        onChange={(e) =>
                                            dispatch({
                                                type: "CHANGE_QUANTITY",
                                                payload: {
                                                    quantity: e.target.value,
                                                    id: item.id,
                                                },
                                            })
                                        }
                                        value={item.quantity}
                                    />
                                    <button
                                        onClick={handleSubtraction.bind(
                                            this,
                                            item
                                        )}
                                        className="minus-cart-btn"
                                        type="button"
                                    >
                                        <i className="fa-solid fa-minus"></i>
                                    </button>
                                </div>

                                <div className="total-price">
                                    ${(item.quantity * item.price).toFixed(2)}
                                </div>
                            </div>
                        </div>
                    ))}
                {cartItems.length !== 0 && (
                    <div>
                        <div className="cart-total item">
                            <span>Your Cart Total: ${cartTotal}</span>
                        </div>
                    </div>
                )}
            </div>
            <button className="btn buy">Buy Now!</button>
        </div>
    );
};
export default Cart;
