/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";

function Links(props) {
    return (
        <>
            <div className="md:basis-5/12">
                <div className="md:w-full md:items-center flex flex-col gap-6 md:flex-row md:justify-evenly">
                    <NavLink
                        to={"/home"}
                        className={({ isActive }) =>
                            isActive
                                ? "md:hidden border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                                : "hover:text-LightBrown w-fit hover:text-[21px] transition-all ease-in duration-75 md:hidden"
                        }
                    >
                        Acceuil
                    </NavLink>
                    <div className="group relative md:text-center md:basis-1/3">
                        <NavLink
                            to={"/about"}
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                                    : "hover:text-LightBrown w-fit hover:text-[21px] 2xl:hover:text-[26px] transition-all ease-in duration-75 mb-12"
                            }
                        >
                            À propos
                        </NavLink>
                        <div className="hidden group-hover:flex flex-col mt-3 md:absolute md:mt-0 w-full p-2 bg-Amber text-Black text-center text-sm 2xl:text-xl 2xl:py-2.5 divide-y-2 divide-Black">
                            <NavLink
                                to={"/about/profile"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 2xl:py-2.5 bg-black text-Amber"
                                        : "py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber"
                                }
                            >
                                Profile
                            </NavLink>
                            <NavLink
                                to={"/about/histoire"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 2xl:py-2.5 bg-black text-Amber"
                                        : "py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber"
                                }
                            >
                                Histoire
                            </NavLink>
                            <NavLink
                                to={"/about/contact"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 2xl:py-2.5 bg-black text-Amber"
                                        : "py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber"
                                }
                            >
                                Contact
                            </NavLink>
                        </div>
                    </div>
                    <div className="group relative md:text-center md:basis-1/3">
                        <NavLink
                            to={"/breaker"}
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                                    : "hover:text-LightBrown w-fit hover:text-[21px] 2xl:hover:text-[26px]  transition-all ease-in duration-75 mb-12"
                            }
                        >
                            Brise Roche
                        </NavLink>
                        <ul className="hidden group-hover:flex flex-col mt-3 md:absolute md:mt-0 w-full p-2 bg-Amber text-Black text-center text-sm 2xl:text-xl divide-y-2 divide-Black">
                            <li className="py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber">
                                <Link to={"#"}>Serie X</Link>
                            </li>
                            <li className="py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber">
                                <Link to={"#"}>Serie Y</Link>
                            </li>
                            <li className="py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber">
                                <Link to={"#"}>Serie Z</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="group relative md:text-center md:basis-1/3">
                        <NavLink
                            to={"/attachments"}
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                                    : "hover:text-LightBrown w-fit hover:text-[21px] 2xl:hover:text-[26px]  transition-all ease-in duration-75 mb-12"
                            }
                        >
                            Pièces jointes
                        </NavLink>
                        <ul className="hidden group-hover:flex flex-col divide-y-2 divide-black mt-3 md:absolute md:mt-0 w-full p-2 bg-Amber text-Black text-center text-sm 2xl:text-xl">
                            <li className="py-1.5 hover:bg-black hover:text-Amber">
                                <Link to={"#"}>Attache rapide</Link>
                            </li>
                            <li className="py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber">
                                <Link to={"#"}>Compacteur</Link>
                            </li>
                            <li className="py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber">
                                <Link to={"#"}>Marteau vibrant</Link>
                            </li>
                            <li className="py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber">
                                <Link to={"#"}>Ripper vibrant</Link>
                            </li>
                            <li className="py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber">
                                <Link to={"#"}>Grappin pour pierre</Link>
                            </li>
                            <li className="py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber">
                                <Link to={"#"}>Grappin pour bois</Link>
                            </li>
                            <li className="py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber">
                                <Link to={"#"}>Grappin de récupération </Link>
                            </li>
                            <li className="py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber">
                                <Link to={"#"}>Broyeuse</Link>
                            </li>
                            <li className="py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber">
                                <Link to={"#"}>Broyeuse</Link>
                            </li>
                            <li className="py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber">
                                <Link to={"#"}>Pulvériseur</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Link
                to={"/home"}
                className="hidden basis-2/12 md:grid items-center justify-center "
            >
                <img
                    src={props.logo}
                    alt={"HRK-HAMMER-ROCK-LOGO"}
                    className="w-32"
                />
            </Link>

            <div className="md:basis-5/12">
                <div className="md:w-full md:items-center flex flex-col gap-6 md:flex-row md:justify-evenly">
                    <NavLink
                        to={"/tools"}
                        className={({ isActive }) =>
                            isActive
                                ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                                : "hover:text-LightBrown w-fit hover:text-[21px] 2xl:hover:text-[26px]  transition-all ease-in duration-75 md:text-center md:basis-1/3"
                        }
                    >
                        Outils
                    </NavLink>
                    <NavLink
                        to={"/Downloads"}
                        className={({ isActive }) =>
                            isActive
                                ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                                : "hover:text-LightBrown w-fit hover:text-[21px] 2xl:hover:text-[26px]  transition-all ease-in duration-75 md:text-center md:basis-1/3"
                        }
                    >
                        Catalogues
                    </NavLink>
                    <NavLink
                        to={"/partners"}
                        className={({ isActive }) =>
                            isActive
                                ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                                : "hover:text-LightBrown w-fit hover:text-[21px] 2xl:hover:text-[26px]  transition-all ease-in duration-75 md:text-center md:basis-1/3"
                        }
                    >
                        Partenaires
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Links;
