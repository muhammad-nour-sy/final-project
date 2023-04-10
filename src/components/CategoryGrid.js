import useFetch from "../hooks/useFetch";
import ProductCard from "./ProductCard";
import "../styles/CategoryGrid.css";

const CategoryGrid = ({category}) => {
    let url;
    if (category.path==='/allproducts'){
        url = "https://fakestoreapi.com/products";
    }
    else{
        url = "https://fakestoreapi.com/products/category/" + category.name;
    }
    const {
        data: products,
        isPending,
        error,
    } = useFetch(url);

    return (
        <div className="all-products-list">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {products && (
                <div>
                <h2 className="grid-title">{category.title}</h2>
                <div className="product-grid">
                    
                    {products.map((item, i) => (
                        <ProductCard key={i} product={item} />
                    ))}
                </div>
            </div>
            )}
        </div>
    );
}
 
export default CategoryGrid;