import { Link, NavLink } from "react-router-dom";

function Links(props) {
    return (
        <>
            <NavLink
                to={"/home"}
                className={({ isActive }) =>
                    isActive
                        ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                        : "hover:text-LightBrown w-fit hover:text-[21px] transition-all ease-in duration-150"
                }
            >
                Home
            </NavLink>
            <NavLink
                to={"/about"}
                className={({ isActive }) =>
                isActive
                    ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                    : "hover:text-LightBrown w-fit hover:text-[21px] transition-all ease-in duration-150"
            }
            >
                About us
            </NavLink>
            <NavLink
                to={"/breaker"}
                className={({ isActive }) =>
                isActive
                    ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                    : "hover:text-LightBrown w-fit hover:text-[21px] transition-all ease-in duration-150"
            }
            >
                Hydraulic breaker
            </NavLink>
            <Link
                to={"/home"}
                className="hidden h-32 w-32 md:grid items-center "
            >
                <img src={props.logo} alt={"HRK-HAMMER-ROCK-LOGO"} />
            </Link>
            <NavLink
                to={"/attachments"}
                className={({ isActive }) =>
                isActive
                    ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                    : "hover:text-LightBrown w-fit hover:text-[21px] transition-all ease-in duration-150"
            }
            >
                Attachments
            </NavLink>
            <NavLink
                to={"/tools"}
                className={({ isActive }) =>
                isActive
                    ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                    : "hover:text-LightBrown w-fit hover:text-[21px] transition-all ease-in duration-150"
            }
            >
                Tools
            </NavLink>
            <NavLink
                to={"/Downloads"}
                className={({ isActive }) =>
                    isActive
                        ? "border-b-[3px] border-b-DarkBrown text-Amber font-bold w-fit"
                        : "hover:text-LightBrown w-fit hover:text-[21px] transition-all ease-in duration-150"
                }
            >
                Downloads
            </NavLink>
        </>
    );
}

export default Links;
