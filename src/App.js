import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CategoryGrid from "./components/CategoryGrid";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import ProductDetails from "./components/ProductDetails";
import { useCategoriesContext } from "./context/CategoriesContext";
import Cart from "./components/Cart";

function App() {
    const { categories } = useCategoriesContext();
    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Navbar />
                    <div className="App">
                        <div className="content">
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                {categories &&
                                    categories.map((category, i) => (
                                        <Route key={i} path={category.path}>
                                            <CategoryGrid
                                                category={category}
                                            />
                                        </Route>
                                    ))}
                                <Route path="/products/:id">
                                    <ProductDetails />
                                </Route>
                                <Route path="/cart">
                                    <Cart />
                                </Route>
                                {/* <Route path="*">
                                    <Home />
                                </Route> */}
                               
                            </Switch>
                        </div>
                    </div>
                </Router>
            </header>
        </div>
    );
}

export default App;
