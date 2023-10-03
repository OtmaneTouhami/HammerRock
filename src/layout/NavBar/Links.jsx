/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";

function Links(props) {
    return (
        <>
            <div className="md:basis-5/12">
                <div className="md:w-full md:items-center flex flex-col gap-6 md:flex-row md:justify-evenly">
                    <NavLink
                        to={"/acceuil"}
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
                                    : "hover:text-LightBrown w-fit hover:text-[21px] 2xl:hover:text-[26px]  transition-all ease-in duration-75 md:text-center md:basis-1/3"
                            }
                        >
                            À propos
                        </NavLink>
                        <div className="hidden group-hover:flex flex-col mt-3 md:absolute md:mt-0 w-full p-2 bg-Amber text-Black text-center text-sm 2xl:text-xl 2xl:py-2.5 divide-y-2 divide-Black border-t-8 border-t-white">
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
                                to={"/about/activités"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 2xl:py-2.5 bg-black text-Amber"
                                        : "py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber"
                                }
                            >
                                Activités
                            </NavLink>
                            <NavLink
                                to={"/about/secteurs"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 2xl:py-2.5 bg-black text-Amber"
                                        : "py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber"
                                }
                            >
                                Secteurs
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
                            to={"/brise_roche"}
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                                    : "hover:text-LightBrown w-fit hover:text-[21px] 2xl:hover:text-[26px]  transition-all ease-in duration-75 md:text-center md:basis-1/3"
                            }
                        >
                            Brise Roche
                        </NavLink>
                        <div className="hidden group-hover:flex flex-col mt-3 md:absolute md:mt-0 w-full p-2 bg-Amber text-Black text-center text-sm 2xl:text-xl 2xl:py-2.5 divide-y-2 divide-Black border-t-8 border-t-white">
                            <NavLink
                                to={`/brise_roche/serie_x`}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 2xl:py-2.5 bg-black text-Amber"
                                        : "py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber"
                                }
                            >
                                Serie X
                            </NavLink>
                            <NavLink
                                to={`/brise_roche/serie_y`}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 2xl:py-2.5 bg-black text-Amber"
                                        : "py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber"
                                }
                            >
                                Serie Y
                            </NavLink>
                            <NavLink
                                to={`/brise_roche/serie_z`}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 2xl:py-2.5 bg-black text-Amber"
                                        : "py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber"
                                }
                            >
                                Serie Z
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
                        <div className="hidden group-hover:flex flex-col mt-3 md:absolute md:mt-0 w-full p-2 bg-Amber text-Black text-center text-sm 2xl:text-xl 2xl:py-2.5 divide-y-2 divide-Black border-t-8 border-t-white">
                            <NavLink
                                to={"/pièces_jointes/attache_rapide"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 2xl:py-2.5 bg-black text-Amber"
                                        : "py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber"
                                }
                            >
                                Attache rapide
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/compacteur"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 2xl:py-2.5 bg-black text-Amber"
                                        : "py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber"
                                }
                            >
                                Compacteur
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/marteau_vibrant"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 2xl:py-2.5 bg-black text-Amber"
                                        : "py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber"
                                }
                            >
                                Marteau vibrant
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/ripper_vibrant"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 2xl:py-2.5 bg-black text-Amber"
                                        : "py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber"
                                }
                            >
                                Ripper vibrant
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/grappin_pour_pierre"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 2xl:py-2.5 bg-black text-Amber"
                                        : "py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber"
                                }
                            >
                                Grappin pour pierre
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/grappin_pour_bois"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 2xl:py-2.5 bg-black text-Amber"
                                        : "py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber"
                                }
                            >
                                Grappin pour bois
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/grappin_de_recuperation"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 2xl:py-2.5 bg-black text-Amber"
                                        : "py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber"
                                }
                            >
                                Grappin de récupération
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/broyeuse"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 2xl:py-2.5 bg-black text-Amber"
                                        : "py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber"
                                }
                            >
                                Broyeuse
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/pulveriseur"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 2xl:py-2.5 bg-black text-Amber"
                                        : "py-1.5 2xl:py-2.5 hover:bg-black hover:text-Amber"
                                }
                            >
                                Pulvériseur
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
        </>
    );
}

export default Links;
