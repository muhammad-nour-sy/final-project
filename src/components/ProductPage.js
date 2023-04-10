import { capitalizeWords } from "../funcs/capitalizeWords";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { getStars } from "../funcs/getStars";

const ProductPage = ({ product }) => {
    const {
        dispatch
    } = useContext(CartContext);

    let stars = getStars(product.rating.rate);
    return (
        <div>
            <div className="product-details-container">
                <div className="box">
                    <div className="images">
                        <div className="img-holder">
                            <img src={product.image}
                            alt={product.title} />
                        </div>
                    </div>
                    <div className="basic-info">
                        <div className="product-title">
                     
                            <h1>{product.title}</h1>
                        </div>
                        <div className="product-category">
                     
                            <h4>{capitalizeWords(product.category)}</h4>
                        </div>
                        <div className="rate">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: stars,
                                }}
                            ></div>
                            <p className="rate-count">
                                ({product.rating.count})
                            </p>
                        </div>
                        <span><b>Price: ${product.price}</b></span>
                        <div className="options">
                            <button>Buy It Now</button>
                            <button onClick={() =>
                                    dispatch({
                                        type: "ADD_ITEM",
                                        payload: { item: product },
                                    })
                                }>Add to Cart</button>
                        </div>
                    </div>
                    <div className="description">
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
