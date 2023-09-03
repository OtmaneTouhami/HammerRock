import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About/About";
import Breaker from "../pages/Breaker";
import Attachments from "../pages/Attachments";
import Tools from "../pages/Tools";
import Downloads from "../pages/Downloads";
import NavBar from "../layout/NavBar/NavBar";
import Footer from "../layout/Footer";
import Partners from "../pages/Partners";

function Routers() {
    return (
        <div>
            <NavBar />
            <Routes >
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about/" element={<About />} />
                <Route path="/about/:section" element={<About />} />
                <Route path="/breaker" element={<Breaker />} />
                <Route path="/attachments" element={<Attachments />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/downloads" element={<Downloads />} />
                <Route path="/partners" element={<Partners />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default Routers;
