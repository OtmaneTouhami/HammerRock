import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Profile from "./sub-pages/Profile";
import Histoire from "./sub-pages/Histoire";
import Contact from "./sub-pages/Contact";
import Secteurs from "./sub-pages/Secteurs";
import Activites from "./sub-pages/Activites";
import LargeAboutNav from "../../components/LargeAboutNav";
import MobileAboutNav from "../../components/MobileAboutNav";
import { useRef } from "react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

function About() {
    const { section } = useParams(),
        aboutNavRef = useRef(null),
        [height, setHeight] = useState(0);

    useEffect(() => {
        setHeight(aboutNavRef.current.clientHeight);
    }, [setHeight]);

    const controlSections = () => {
        switch (section) {
            case "profile":
                return <Profile height={height} />;
            case "histoire":
                return <Histoire height={height} />;
            case "contact":
                return <Contact height={height} />;
            case "secteurs":
                return <Secteurs height={height} />;
            case "activités":
                return <Activites height={height} />;
            default:
                return null;
        }
    };

    return (
        <div className="mt-20 md:mt-24">
            <div
                className="md:h-[calc(100vh-95px)] md:border-y-8 md:border-y-Amber md:flex md:flex-col items-center justify-center md:gap-y-12 md:bg-bg md:bg-cover py-6 md:py-0"
                ref={aboutNavRef}
            >
                <Fade>
                    <h1 className="text-center text-3xl md:text-6xl font-extrabold">
                        À propos de
                        <br />
                        {/* text-bordered is a custom css class */}
                        <span className="text-Amber text-bordered">
                            Hammer Rock Korea
                        </span>
                    </h1>
                </Fade>
                <LargeAboutNav />
                <MobileAboutNav />
                {/* <div className="md:flex md:flex-row overflow-hidden overflow-x-auto h-fit md:h-2/6 items-center justify-around pb-4 md:pb-0 pt-8 md:pt-8 pr-4 md:pr-0 md:w-full space-x-4 ml-3 md:space-x-0 md:ml-0 md:mt-10 text-xl font-semibold scroll-smooth about">
                    <NavLink
                        to={"/about/profile"}
                        className={({ isActive }) =>
                            isActive
                                ? "py-0.5 md:py-2 px-6 md:px-4 border-2 border-Amber rounded-xl md:rounded-2xl text-Amber bg-Black"
                                : "py-0.5 md:py-2 px-6 md:px-4 border-2 border-Amber rounded-xl md:rounded-2xl hover:text-Amber hover:bg-Black transition-all ease-in duration-200"
                        }
                    >
                        Profile
                    </NavLink>
                    <NavLink
                        to={"/about/histoire"}
                        className={({ isActive }) =>
                            isActive
                                ? "py-0.5 md:py-2 px-6 md:px-4 border-2 border-Amber rounded-xl md:rounded-2xl text-Amber bg-Black"
                                : "py-0.5 md:py-2 px-6 md:px-4 border-2 border-Amber rounded-xl md:rounded-2xl hover:text-Amber hover:bg-Black transition-all ease-in duration-200"
                        }
                    >
                        Histoire
                    </NavLink>
                    <NavLink
                        to={"/about/activités"}
                        className={({ isActive }) =>
                            isActive
                                ? "py-0.5 md:py-2 px-6 md:px-4 border-2 border-Amber rounded-xl md:rounded-2xl text-Amber bg-Black"
                                : "py-0.5 md:py-2 px-6 md:px-4 border-2 border-Amber rounded-xl md:rounded-2xl hover:text-Amber hover:bg-Black transition-all ease-in duration-200"
                        }
                    >
                        Activités
                    </NavLink>
                    <NavLink
                        to={"/about/secteurs"}
                        className={({ isActive }) =>
                            isActive
                                ? "py-0.5 md:py-2 px-6 md:px-4 border-2 border-Amber rounded-xl md:rounded-2xl text-Amber bg-Black"
                                : "py-0.5 md:py-2 px-6 md:px-4 border-2 border-Amber rounded-xl md:rounded-2xl hover:text-Amber hover:bg-Black transition-all ease-in duration-200"
                        }
                    >
                        Secteurs
                    </NavLink>
                    <NavLink
                        to={"/about/contact"}
                        className={({ isActive }) =>
                            isActive
                                ? "py-0.5 md:py-2 px-6 md:px-4 border-2 border-Amber rounded-xl md:rounded-2xl text-Amber bg-Black"
                                : "py-0.5 md:py-2 px-6 md:px-4 border-2 border-Amber rounded-xl md:rounded-2xl hover:text-Amber hover:bg-Black transition-all ease-in duration-200"
                        }
                    >
                        Contact
                    </NavLink>
                </div> */}
            </div>
            <div>{controlSections()}</div>
        </div>
    );
}

export default About;
