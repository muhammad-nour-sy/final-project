import useFetch from "../hooks/useFetch";
import ProductsList from "./ProductsList";

const CategoryList = ({ category }) => {
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
        <div className="category-list">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {products && <ProductsList products={products} title={category.title} />}
        </div>
    );
};

export default CategoryList;
