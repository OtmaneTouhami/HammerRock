/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import autoAnimate from "@formkit/auto-animate";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useContext } from "react";
import { NavBarContext } from "../../Context/NavBarContext";

function MobileLinks() {
    const { open, setOpen } = useContext(NavBarContext),
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
                                    to={`/brise_roche/Internal_valve_type`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    Internal Valve type Breaker
                                </NavLink>
                                <NavLink
                                    to={`/brise_roche/External_valve_type`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    External valve type breaker
                                </NavLink>
                                <NavLink
                                    to={`/brise_roche/Fully_hydraulic_type`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    Fully Hydraulic type Breaker
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
                                    to={"/pièces_jointes/HRQC_Series"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    HRQC Series
                                </NavLink>
                                <NavLink
                                    to={"/pièces_jointes/HRCP_series"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    HRCP series
                                </NavLink>
                                <NavLink
                                    to={"/pièces_jointes/HRVH"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    HRVH
                                </NavLink>
                                <NavLink
                                    to={"/pièces_jointes/HRVR"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    HRVR
                                </NavLink>
                                <NavLink
                                    to={"/pièces_jointes/HRDG"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    HRDG
                                </NavLink>
                                <NavLink
                                    to={"/pièces_jointes/HRWG"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    HRWG
                                </NavLink>
                                <NavLink
                                    to={
                                        "/pièces_jointes/HRSG"
                                    }
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    HRSG
                                </NavLink>
                                <NavLink
                                    to={"/pièces_jointes/HRCS"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    HRCS
                                </NavLink>
                                <NavLink
                                    to={"/pièces_jointes/HRPV"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "py-1.5 bg-black text-Amber rounded-md font-bold"
                                            : "py-1.5"
                                    }
                                >
                                    HRPV
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
