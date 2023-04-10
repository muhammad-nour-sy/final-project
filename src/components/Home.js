import CategoryList from "./CategoryList";
import { useCategoriesContext } from "../context/CategoriesContext";
import "../styles/Home.css";

const Home = () => {
    const { categories } = useCategoriesContext();
    return (
        <div className="body">
            <div className="home">
                {categories &&
                    categories.map((category, i) => (
                        <CategoryList category={category} key={i} />
                    ))}
            </div>
        </div>
    );
};

export default Home;
