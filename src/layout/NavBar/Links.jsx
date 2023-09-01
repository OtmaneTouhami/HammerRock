/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";

function Links(props) {
    return (
        <>
            <div className="md:basis-5/12 flex flex-col gap-6 md:flex-row md:justify-evenly">
            <NavLink
                to={"/home"}
                className={({ isActive }) =>
                    isActive
                        ? "md:hidden border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                        : "hover:text-LightBrown w-fit hover:text-[21px] transition-all ease-in duration-150 md:hidden"
                }
            >
                Acceuil
            </NavLink>
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
            </div>
            <Link
                to={"/home"}
                className="hidden basis-2/12 md:grid items-center justify-center "
            >
                <img src={props.logo} alt={"HRK-HAMMER-ROCK-LOGO"} className="w-32" />
            </Link>

           <div className="md:basis-5/12 flex flex-col gap-6 md:flex-row md:justify-evenly">
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
           </div>
        </>
    );
}

export default Links;
