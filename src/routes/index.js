import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home.js";
import Movie from "../components/Movie/Movie.js";
const AppRoutes = ()=>{
    return(
        <Router>
            <Routes>\
                <Route path="/" element={<Home/>} exact />
                <Route path="/movie/:id" element={<Movie/>} exact />
            </Routes>
        </Router>
    );
}

export default AppRoutes;