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
                        <div className="hidden group-hover:flex flex-col md:absolute md:mt-0 w-full p-2.5 bg-Amber text-Black text-center text-sm 2xl:text-xl  border-t-8 border-t-white rounded-lg gap-1">
                            <NavLink
                                to={`/brise_roche/GBN30TL`}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                GBN30TL
                            </NavLink>
                            <NavLink
                                to={`/brise_roche/GBN70TL`}
                                className={({ isActive }) =>
                                isActive
                                    ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                    : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                            }
                            >
                                GBN70TL
                            </NavLink>
                            <NavLink
                                to={`/brise_roche/GBN220TL`}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                GBN220TL
                            </NavLink>
                            <NavLink
                                to={`/brise_roche/GBN220E`}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                GBN220E
                            </NavLink>
                            <NavLink
                                to={`/brise_roche/GBN1000TL`}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                GBN1000TL
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
                        <div className="hidden group-hover:flex flex-col md:absolute md:mt-0 w-fit py-2.5 px-4 bg-Amber text-Black text-center text-sm 2xl:text-xl  border-t-8 border-t-white rounded-lg gap-1">
                            <NavLink
                                to={"/pièces_jointes/attache_rapide"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                Attache rapide
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/compacteur"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                Compacteur
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/marteau_vibrant"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                Marteau vibrant
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/ripper_vibrant"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                Ripper vibrant
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/grappin_pour_pierre"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                Grappin pour pierre
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/grappin_pour_bois"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                Grappin pour bois
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/grappin_de_recuperation"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                Grappin de récupération
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/broyeuse"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
                                }
                            >
                                Broyeuse
                            </NavLink>
                            <NavLink
                                to={"/pièces_jointes/pulveriseur"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                        : "py-1.5 hover:bg-black hover:text-Amber rounded-md"
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
