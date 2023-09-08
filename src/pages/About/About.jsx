import { useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Profile from "./sub-pages/Profile";
import Histoire from "./sub-pages/Histoire";
import Contact from "./sub-pages/Contact";
import Secteurs from "./sub-pages/Secteurs";
import Activites from "./sub-pages/Activites";

function About() {
    const { section } = useParams(),
        navigate = useNavigate();

    const controlSections = () => {
        switch (section) {
            case "profile":
                return <Profile />;
            case "histoire":
                return <Histoire />;
            case "contact":
                return <Contact />;
            case "secteurs":
                return <Secteurs />;
            case "activités":
                return <Activites />;
            default:
                return null;
        }
    };

    useEffect(() => {
        if (section === undefined) {
            navigate("/about/profile");
        }
    }, [section, navigate]);

    return (
        <div className="mt-20 md:mt-24">
            <div className="h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] border-y-8 border-y-Amber flex flex-col items-center justify-center md:gap-y-12">
                <h1 className="text-center text-3xl  md:text-6xl font-extrabold">
                    À propos de
                    <br />
                    {/* text-bordered is a custom css class */}
                    <span className="text-Amber text-bordered">
                        Hammer Rock Korea
                    </span>
                </h1>
                <div className="flex flex-col md:flex-row h-4/6 md:h-2/6 items-center justify-around w-full mt-10 text-xl font-semibold ">
                    <NavLink
                        to={"/about/profile"}
                        className={({ isActive }) =>
                            isActive
                                ? "py-2 px-4 border-2 border-Amber rounded-2xl text-Amber bg-Black"
                                : "py-2 px-4 border-2 border-Amber rounded-2xl hover:text-Amber hover:bg-Black transition-all ease-in duration-200"
                        }
                    >
                        Profile
                    </NavLink>
                    <NavLink
                        to={"/about/histoire"}
                        className={({ isActive }) =>
                            isActive
                                ? "py-2 px-4 border-2 border-Amber rounded-2xl text-Amber bg-Black"
                                : "py-2 px-4 border-2 border-Amber rounded-2xl hover:text-Amber hover:bg-Black transition-all ease-in duration-200"
                        }
                    >
                        Histoire
                    </NavLink>
                    <NavLink
                        to={"/about/activités"}
                        className={({ isActive }) =>
                            isActive
                                ? "py-2 px-4 border-2 border-Amber rounded-2xl text-Amber bg-Black"
                                : "py-2 px-4 border-2 border-Amber rounded-2xl hover:text-Amber hover:bg-Black transition-all ease-in duration-200"
                        }
                    >
                        Activités
                    </NavLink>
                    <NavLink
                        to={"/about/secteurs"}
                        className={({ isActive }) =>
                            isActive
                                ? "py-2 px-4 border-2 border-Amber rounded-2xl text-Amber bg-Black"
                                : "py-2 px-4 border-2 border-Amber rounded-2xl hover:text-Amber hover:bg-Black transition-all ease-in duration-200"
                        }
                    >
                        Secteurs
                    </NavLink>
                    <NavLink
                        to={"/about/contact"}
                        className={({ isActive }) =>
                            isActive
                                ? "py-2 px-4 border-2 border-Amber rounded-2xl text-Amber bg-Black"
                                : "py-2 px-4 border-2 border-Amber rounded-2xl hover:text-Amber hover:bg-Black transition-all ease-in duration-200"
                        }
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
            <div>{controlSections()}</div>
        </div>
    );
}

export default About;
