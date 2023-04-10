import "../styles/ProductCard.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { getStars } from "../funcs/getStars";

const ProductCard = ({ product }) => {
    const { dispatch } = useContext(CartContext);
    
    const stars = getStars(product.rating.rate);

    return (
        <div className="body-container">
            <div className="container container-card">
                <div className="card">
                    <Link to={`/products/${product.id}`}>
                        <img
                            className="product-img"
                            src={product.image}
                            alt={product.title}
                        />
                    </Link>
                    <div className="product-detail">
                        <span className="product-title">{product.title}</span>
                        <div className="rating">
                            <div
                                dangerouslySetInnerHTML={{ __html: stars }}
                            ></div>
                            <p className="rate-count">
                                ({product.rating.count})
                            </p>
                        </div>

                        <div className="buttons">
                            <div className="price">${product.price}</div>
                            <button
                                className="cart btn"
                                onClick={() =>
                                    dispatch({
                                        type: "ADD_ITEM",
                                        payload: { item: product },
                                    })
                                }
                            >
                                Add to cart
                            </button>
                            {/* <button className="favourite btn">
                                <i className="far fa-heart"></i>
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
