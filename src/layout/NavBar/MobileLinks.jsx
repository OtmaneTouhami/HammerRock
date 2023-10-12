/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import autoAnimate from "@formkit/auto-animate";
import { RiArrowDropDownLine } from "react-icons/ri";

function MobileLinks() {
    const [open, setOpen] = useState({
            about: false,
            brise: false,
            attatchments: false,
        }),
        aboutRef = useRef(),
        briseRef = useRef(),
        attatchmentRef = useRef();

    const closeAllOpen = () =>
        setOpen({
            about: false,
            brise: false,
            attatchments: false,
        });

    useEffect(() => {
        if (attatchmentRef.current) {
            autoAnimate(attatchmentRef.current);
        }
    }, [attatchmentRef]);

    useEffect(() => {
        if (aboutRef.current) {
            autoAnimate(aboutRef.current);
        }
    }, [aboutRef]);

    useEffect(() => {
        if (briseRef.current) {
            autoAnimate(briseRef.current);
        }
    }, [briseRef]);

    return (
        <>
            <div>
                <div className="flex flex-col gap-6 md:flex-row md:justify-evenly">
                    <NavLink
                        to={"/acceuil"}
                        className={({ isActive }) =>
                            isActive
                                ? "md:hidden text-center bg-Amber py-1 rounded-lg text-Black font-bold"
                                : "md:hidden"
                        }
                        onClick={closeAllOpen}
                    >
                        Acceuil
                    </NavLink>
                    <div ref={aboutRef}>
                        <NavLink
                            to={"/about"}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-center bg-Amber py-1 rounded-lg text-Black flex font-bold "
                                    : "md:hidden flex justify-between"
                            }
                        >
                            <span
                                className="basis-5/6"
                                onClick={() => {
                                    open.about
                                        ? setOpen({
                                              about: true,
                                              brise: false,
                                              attatchments: false,
                                          })
                                        : closeAllOpen();
                                }}
                            >
                                À propos
                            </span>
                            <RiArrowDropDownLine
                                className={`w-8 h-8 basis-1/6 ${
                                    open.about && "rotate-180"
                                }`}
                                onClick={() =>
                                    setOpen({
                                        about: !open.about,
                                        brise: false,
                                        attatchments: false,
                                    })
                                }
                            />
                        </NavLink>
                        {open.about && (
                            <div className="mt-2 w-full py-2.5 px-4 bg-Amber text-Black text-center text-sm  flex flex-col gap-1 rounded-lg">
                                <NavLink
                                    to={"/about/profile"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    Profile
                                </NavLink>
                                <NavLink
                                    to={"/about/histoire"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    Histoire
                                </NavLink>
                                <NavLink
                                    to={"/about/activités"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    Activités
                                </NavLink>
                                <NavLink
                                    to={"/about/secteurs"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    Secteurs
                                </NavLink>
                                <NavLink
                                    to={"/about/contact"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    Contact
                                </NavLink>
                            </div>
                        )}
                    </div>
                    <div ref={briseRef}>
                        <NavLink
                            to={"/brise_roche"}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-center bg-Amber py-1 rounded-lg text-Black flex font-bold "
                                    : "md:hidden flex justify-between"
                            }
                        >
                            <span
                                className="basis-5/6"
                                onClick={() => {
                                    open.brise
                                        ? setOpen({
                                              about: false,
                                              brise: true,
                                              attatchments: false,
                                          })
                                        : closeAllOpen();
                                }}
                            >
                                Brise Roche
                            </span>
                            <RiArrowDropDownLine
                                className={`w-8 h-8 basis-1/6 ${
                                    open.brise && "rotate-180"
                                }`}
                                onClick={() =>
                                    setOpen({
                                        about: false,
                                        brise: !open.brise,
                                        attatchments: false,
                                    })
                                }
                            />
                        </NavLink>
                        {open.brise && (
                            <div className="mt-2 w-full py-2.5 px-4 bg-Amber text-Black text-center text-sm  flex flex-col gap-1 rounded-lg">
                                <NavLink
                                    to={`/brise_roche/GBN30TL`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    GBN30TL
                                </NavLink>
                                <NavLink
                                    to={`/brise_roche/GBN70TL`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    GBN70TL
                                </NavLink>
                                <NavLink
                                    to={`/brise_roche/GBN220TL`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    GBN220TL
                                </NavLink>
                                <NavLink
                                    to={`/brise_roche/GBN220E`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    GBN220E
                                </NavLink>
                                <NavLink
                                    to={`/brise_roche/GBN1000TL`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    GBN1000TL
                                </NavLink>
                            </div>
                        )}
                    </div>
                    <div ref={attatchmentRef}>
                        <NavLink
                            to={"/pièces_jointes"}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-center bg-Amber py-1 rounded-lg text-Black flex font-bold "
                                    : "md:hidden flex justify-between"
                            }
                        >
                            <span
                                className="basis-5/6"
                                onClick={() => {
                                    open.attatchments
                                        ? setOpen({
                                              about: false,
                                              brise: false,
                                              attatchments: true,
                                          })
                                        : closeAllOpen();
                                }}
                            >
                                Pièces jointes
                            </span>
                            <RiArrowDropDownLine
                                className={`w-8 h-8 basis-1/6 ${
                                    open.attatchments && "rotate-180"
                                }`}
                                onClick={() =>
                                    setOpen({
                                        about: false,
                                        brise: false,
                                        attatchments: !open.attatchments,
                                    })
                                }
                            />
                        </NavLink>
                        {open.attatchments && (
                            <div className="mt-2 w-full py-2.5 px-4 bg-Amber text-Black text-center text-sm  flex flex-col gap-1 rounded-lg">
                                <NavLink
                                    to={"/pièces_jointes/attache_rapide"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    Attache rapide
                                </NavLink>
                                <NavLink
                                    to={"/pièces_jointes/compacteur"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    Compacteur
                                </NavLink>
                                <NavLink
                                    to={"/pièces_jointes/marteau_vibrant"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    Marteau vibrant
                                </NavLink>
                                <NavLink
                                    to={"/pièces_jointes/ripper_vibrant"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    Ripper vibrant
                                </NavLink>
                                <NavLink
                                    to={"/pièces_jointes/grappin_pour_pierre"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    Grappin pour pierre
                                </NavLink>
                                <NavLink
                                    to={"/pièces_jointes/grappin_pour_bois"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    Grappin pour bois
                                </NavLink>
                                <NavLink
                                    to={
                                        "/pièces_jointes/grappin_de_recuperation"
                                    }
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    Grappin de récupération
                                </NavLink>
                                <NavLink
                                    to={"/pièces_jointes/broyeuse"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    Broyeuse
                                </NavLink>
                                <NavLink
                                    to={"/pièces_jointes/pulveriseur"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    Pulvériseur
                                </NavLink>
                            </div>
                        )}
                    </div>
                    <NavLink
                        to={"/outil"}
                        className={({ isActive }) =>
                            isActive
                                ? "md:hidden text-center bg-Amber py-1 rounded-lg text-Black font-bold"
                                : "md:hidden"
                        }
                        onClick={closeAllOpen}
                    >
                        Outil
                    </NavLink>
                    <NavLink
                        to={"/catalogue"}
                        className={({ isActive }) =>
                            isActive
                                ? "md:hidden text-center bg-Amber py-1 rounded-lg text-Black font-bold"
                                : "md:hidden"
                        }
                        onClick={closeAllOpen}
                    >
                        Catalogue
                    </NavLink>
                    <NavLink
                        to={"/partenaires"}
                        className={({ isActive }) =>
                            isActive
                                ? "md:hidden text-center bg-Amber py-1 rounded-lg text-Black font-bold"
                                : "md:hidden"
                        }
                        onClick={closeAllOpen}
                    >
                        Partenaires
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default MobileLinks;
