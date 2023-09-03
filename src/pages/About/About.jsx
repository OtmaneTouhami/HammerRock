import { useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Profile from "./sub-pages/Profile";
import Histoire from "./sub-pages/Histoire";
import Contact from "./sub-pages/Contact";

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
        <div className="mt-24 p-10">
            <h1 className="text-center text-4xl font-extrabold">
                À propos de{" "}
                <span className="text-Amber text-bordered">
                    Hammer Rock Korea
                </span>
            </h1>
            <div className="flex items-center justify-around mt-10 text-xl font-semibold ">
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
            <div>{controlSections()}</div>
        </div>
    );
}

export default About;
