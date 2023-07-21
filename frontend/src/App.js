import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import SearchPage from "./pages/SearchPage";

const app = () => {
    return (
        <BrowserRouter>
        <div>
            <Navbar/>
            <Routes>
                <Route path = "/" exact element = {< Home/>}  />
                <Route path = "/categoryPage/:cat" exact element = {< CategoryPage/>}  />
                <Route path = "/productPage/:pro" exact element = {< ProductPage/>}  />
                <Route path = "/search/:ser" exact element = {< SearchPage/>}  />
            </Routes>
        </div>
        </BrowserRouter>
    )
}

export default app
