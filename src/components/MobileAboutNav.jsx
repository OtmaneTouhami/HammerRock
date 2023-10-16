import { NavLink } from "react-router-dom";

function MobileAboutNav() {
    return (
        <div className="block md:hidden overflow-hidden overflow-x-auto h-fit items-center justify-around pb-4 pt-8 pr-4 space-x-4 ml-3 text-xl font-semibold scroll-smooth about">
            <NavLink
                to={"/about/profile"}
                className={({ isActive }) =>
                    isActive
                        ? "py-0.5 px-6 border-2 border-Amber rounded-xl text-Amber bg-Black"
                        : "py-0.5 px-6 border-2 border-Amber rounded-xl hover:text-Amber hover:bg-Black transition-all ease-in duration-200"
                }
            >
                Profile
            </NavLink>
            <NavLink
                to={"/about/histoire"}
                className={({ isActive }) =>
                    isActive
                        ? "py-0.5 px-6 border-2 border-Amber rounded-xl text-Amber bg-Black"
                        : "py-0.5 px-6 border-2 border-Amber rounded-xl hover:text-Amber hover:bg-Black transition-all ease-in duration-200"
                }
            >
                Histoire
            </NavLink>
            <NavLink
                to={"/about/activités"}
                className={({ isActive }) =>
                    isActive
                        ? "py-0.5 px-6 border-2 border-Amber rounded-xl text-Amber bg-Black"
                        : "py-0.5 px-6 border-2 border-Amber rounded-xl hover:text-Amber hover:bg-Black transition-all ease-in duration-200"
                }
            >
                Activités
            </NavLink>
            <NavLink
                to={"/about/secteurs"}
                className={({ isActive }) =>
                    isActive
                        ? "py-0.5 px-6 border-2 border-Amber rounded-xl text-Amber bg-Black"
                        : "py-0.5 px-6 border-2 border-Amber rounded-xl hover:text-Amber hover:bg-Black transition-all ease-in duration-200"
                }
            >
                Secteurs
            </NavLink>
            <NavLink
                to={"/about/contact"}
                className={({ isActive }) =>
                    isActive
                        ? "py-0.5 px-6 border-2 border-Amber rounded-xl text-Amber bg-Black"
                        : "py-0.5 px-6 border-2 border-Amber rounded-xl hover:text-Amber hover:bg-Black transition-all ease-in duration-200"
                }
            >
                Contact
            </NavLink>
        </div>
    );
}

export default MobileAboutNav;
