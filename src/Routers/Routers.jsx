import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About/About";
import Breaker from "../pages/Breaker/Breaker";
import Attachments from "../pages/Attachments/Attachments";
import Tools from "../pages/Tool/Tools";
import Downloads from "../pages/Downloads";
import NavBar from "../layout/NavBar/NavBar";
import Footer from "../layout/Footer";
import Partners from "../pages/Partners";
import { useEffect, useRef, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import BreakerModels from "../pages/Breaker/BreakerModels";
import NotFound from "../pages/NotFound";
import AttachmentModel from "../pages/Attachments/AttachmentModel";
import Terms from "../pages/Terms";

function Routers() {
    const { pathname } = useLocation(),
        topRef = useRef(),
        [scrollY, setScrollY] = useState(0);

    const backToTop = () => window.scrollTo({top:0,behavior:"smooth"});

    useEffect(() => {
        window.addEventListener("scroll", function () {
            setScrollY(window.scrollY);
        });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        //   document.documentElement.clientHeight - 94
    }, [pathname]);

    useEffect(() => {
        topRef.current.classList.replace("hidden", "flex");
        if (window.scrollY <= 250) {
            topRef.current.classList.replace("flex", "hidden");
        }
    }, [scrollY]);

    return (
        <div className="relative">
            <button
                className="fixed z-50 bottom-8 right-6 text-Black border border-Black bg-Amber rounded-full h-12 w-12 flex items-center justify-center"
                onClick={backToTop}
                ref={topRef}
            >
                <BsFillArrowUpCircleFill className="h-5 w-5" />
            </button>
            <NavBar />
            <Routes>
                <Route path="/" element={<Navigate to="/acceuil" />} />
                <Route path="/acceuil" element={<Home />} />
                <Route path="/about/" element={<About />} />
                <Route path="/about/:section" element={<About />} />
                <Route path="/brise_roche" element={<Breaker />} />
                <Route path="/brise_roche/:serie" element={<BreakerModels />} />
                <Route path="/pièces_jointes" element={<Attachments />} />
                <Route path="/pièces_jointes/:model" element={<AttachmentModel />} />
                <Route path="/outil" element={<Tools />} />
                <Route path="/catalogue" element={<Downloads />} />
                <Route path="/partenaires" element={<Partners />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default Routers;
