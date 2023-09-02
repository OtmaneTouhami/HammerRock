import { NavLink, useParams } from "react-router-dom";

function About() {
    const {section} = useParams();
    console.log(section);
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
        </div>
    );
}

export default About;
