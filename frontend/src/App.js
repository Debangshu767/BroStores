import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import SearchPage from "./pages/SearchPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";

const app = () => {
    return (
        <BrowserRouter>
        <div>
            <Routes>
                <Route path = "/" exact element={<Layout><Home /></Layout>}  />
                <Route path = "/login" exact element = {< Login/>}  />
                <Route path = "/Signup" exact element = {< Signup/>}  />
                <Route path = "/categoryPage/:cat" exact element={<Layout>< CategoryPage/></Layout>}  />
                <Route path = "/productPage/:pro" exact element = {<Layout>< ProductPage/></Layout>}  />
                <Route path = "/search/:ser" exact element = {<Layout>< SearchPage/></Layout>}  />
            </Routes>
        </div>
        </BrowserRouter>
    )
}

export default app
