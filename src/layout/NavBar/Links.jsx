/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";

function Links(props) {
    return (
        <>
            <NavLink
                to={"/about"}
                className={({ isActive }) =>
                    isActive
                        ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                        : "hover:text-LightBrown w-fit hover:text-[21px] transition-all ease-in duration-150"
                }
            >
                À propos de HRK
            </NavLink>
            <NavLink
                to={"/breaker"}
                className={({ isActive }) =>
                    isActive
                        ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                        : "hover:text-LightBrown w-fit hover:text-[21px] transition-all ease-in duration-150"
                }
            >
                Brise Roche
            </NavLink>

            <NavLink
                to={"/attachments"}
                className={({ isActive }) =>
                    isActive
                        ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                        : "hover:text-LightBrown w-fit hover:text-[21px] transition-all ease-in duration-150"
                }
            >
                Pièces jointes
            </NavLink>
            <Link
                to={"/home"}
                className="hidden h-32 w-32 md:grid items-center "
            >
                <img src={props.logo} alt={"HRK-HAMMER-ROCK-LOGO"} />
            </Link>

            <NavLink
                to={"/tools"}
                className={({ isActive }) =>
                    isActive
                        ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                        : "hover:text-LightBrown w-fit hover:text-[21px] transition-all ease-in duration-150"
                }
            >
                Outils
            </NavLink>
            <NavLink
                to={"/Downloads"}
                className={({ isActive }) =>
                    isActive
                        ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                        : "hover:text-LightBrown w-fit hover:text-[21px] transition-all ease-in duration-150"
                }
            >
                Catalogues
            </NavLink>
            <NavLink
                to={"/partners"}
                className={({ isActive }) =>
                    isActive
                        ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                        : "hover:text-LightBrown w-fit hover:text-[21px] transition-all ease-in duration-150"
                }
            >
                Partenaires
            </NavLink>
        </>
    );
}

export default Links;
