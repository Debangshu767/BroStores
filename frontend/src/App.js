import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";

const app = () => {
    return (
        <BrowserRouter>
        <div>
            <Navbar/>
            <Routes>
                <Route path = "/" exact element = {< Home/>}  />
                <Route path = "/categoryPage/:cat" exact element = {< CategoryPage/>}  />
            </Routes>
        </div>
        </BrowserRouter>
    )
}

export default app
