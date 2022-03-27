import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterComponent from "../components/Footer/Footer.js";
import Home from "../components/Home/Home.js";
import Movie from "../components/Movie/Movie.js";
import NavbarComponent from "../components/Navbar/Navbar.js";
import NotFound from "../components/Utils/NotFound.js"
const AppRoutes = ()=>{
    return(
        <Router>
            <NavbarComponent />
            <Routes>   
                <Route path="/" element={<Home/>} exact />
                <Route path="/movie/:id" element={<Movie/>} exact />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <FooterComponent />
        </Router>
    );
}

export default AppRoutes;