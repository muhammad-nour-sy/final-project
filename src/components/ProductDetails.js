import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "../styles/ProductDetails.css";
import ProductPage from "./ProductPage";

const ProductDetails = () => {
    const { id } = useParams();

    const {
        data: product,
        isPending,
        error,
    } = useFetch("https://fakestoreapi.com/products/" + id);
    
    return (
        <div className="product-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {product && <ProductPage product={product}/>
                
            }
        </div>
    );
};

export default ProductDetails;
