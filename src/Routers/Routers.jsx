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
            <Routes>
                <Route path="/" element={<Navigate to="/acceuil" />} />
                <Route path="/acceuil" element={<Home />} />
                <Route path="/about/" element={<About />} />
                <Route path="/about/:section" element={<About />} />
                <Route path="/brise_roche" element={<Breaker />} />
                <Route path="/pièces_jointes" element={<Attachments />} />
                <Route path="/outils" element={<Tools />} />
                <Route path="/catalogue" element={<Downloads />} />
                <Route path="/partenaires" element={<Partners />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default Routers;
