/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";

function Links(props) {
    return (
        <>
            <div className="md:basis-5/12">
                <div className="md:w-full md:items-center flex flex-col gap-6 md:flex-row md:justify-evenly">
                    <div className="group relative md:text-center md:basis-1/3">
                        <NavLink
                            to={"/about"}
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                                    : "hover:text-LightBrown w-fit hover:text-[21px] 2xl:hover:text-[26px]  transition-all ease-in duration-75 md:text-center md:basis-1/3"
                            }
                        >
                            À propos
                        </NavLink>
                        <div className="hidden group-hover:flex flex-col md:absolute md:mt-0 w-full p-2.5 bg-Amber text-Black text-center text-sm 2xl:text-xl  border-t-8 border-t-white rounded-lg gap-1">
                            <NavLink
                                to={"/about/profile"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                Profile
                            </NavLink>
                            <NavLink
                                to={"/about/histoire"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                Histoire
                            </NavLink>
                            <NavLink
                                to={"/about/activités"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                Activités
                            </NavLink>
                            <NavLink
                                to={"/about/secteurs"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                Secteurs
                            </NavLink>
                            <NavLink
                                to={"/about/contact"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                Contact
                            </NavLink>
                        </div>
                    </div>
                    <div className="group relative md:text-center md:basis-1/3">
                        <NavLink
                            to={"/brise_roche"}
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                                    : "hover:text-LightBrown w-fit hover:text-[21px] 2xl:hover:text-[26px]  transition-all ease-in duration-75 md:text-center md:basis-1/3"
                            }
                        >
                            Brise Roche
                        </NavLink>
                        <div className="hidden group-hover:flex flex-col md:absolute md:mt-0 w-[130%] 2xl:w-[140%] p-2.5 bg-Amber text-Black text-center text-sm 2xl:text-xl -left-7 2xl:-left-10  border-t-8 border-t-white rounded-lg gap-1">
                            <NavLink
                                to={`/brise_roche/Internal_valve_type`}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                Internal Valve type Breaker
                            </NavLink>
                            <NavLink
                                to={`/brise_roche/External_valve_type`}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                External valve type breaker
                            </NavLink>
                            <NavLink
                                to={`/brise_roche/Fully_hydraulic_type`}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                Fully Hydraulic type Breaker
                            </NavLink>
                        </div>
                    </div>
                    <div className="group relative md:text-center md:basis-1/3">
                        <NavLink
                            to={"/pièces_jointes"}
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                                    : "hover:text-LightBrown w-fit hover:text-[21px] 2xl:hover:text-[26px]  transition-all ease-in duration-75 md:text-center md:basis-1/3"
                            }
                        >
                            Pièces jointes
                        </NavLink>
                        <div className="hidden group-hover:flex flex-col md:absolute md:mt-0 w-full py-2.5 px-4 bg-Amber text-Black text-center text-sm 2xl:text-xl  border-t-8 border-t-white rounded-lg gap-1">
                            <NavLink
                                to={"/pièces_jointes/HRQC_Series"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                HRQC Series
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/HRCP_series"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                HRCP series
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/HRVH"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                HRVH
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/HRVR"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                HRVR
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/HRDG"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                HRDG
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/HRWG"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                HRWG
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/HRSG"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                HRSG
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/HRCS"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                HRCS
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/HRPV"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                HRPV
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <Link
                to={"/acceuil"}
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
                    <div>
                        <NavLink
                            to={"/outil"}
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                                    : "hover:text-LightBrown w-fit hover:text-[21px] 2xl:hover:text-[26px]  transition-all ease-in duration-75 md:text-center md:basis-1/3"
                            }
                        >
                            Outil
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to={"/catalogue"}
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                                    : "hover:text-LightBrown w-fit hover:text-[21px] 2xl:hover:text-[26px]  transition-all ease-in duration-75 md:text-center md:basis-1/3"
                            }
                        >
                            Catalogue
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to={"/partenaires"}
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
            </div>
        </>
    );
}

export default Links;
