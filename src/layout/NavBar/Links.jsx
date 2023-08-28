import { Link, NavLink } from "react-router-dom";

function Links() {
    return (
        <>
            <NavLink
                to={"/home"}
                className={({ isActive }) =>
                    isActive
                        ? "border-b-[3px] border-b-bluey text-bluey font-bold w-fit"
                        : "hover:text-bluey w-fit hover:text-[21px] transition-all ease-in duration-150"
                }
            >
                Home
            </NavLink>
            <NavLink
                to={"/about"}
                className={({ isActive }) =>
                    isActive
                        ? "border-b-[3px] border-b-bluey text-bluey font-bold w-fit"
                        : "hover:text-bluey w-fit hover:text-[21px] transition-all ease-in duration-150"
                }
            >
                About us
            </NavLink>
            <NavLink
                to={"/breaker"}
                className={({ isActive }) =>
                    isActive
                        ? "border-b-[3px] border-b-bluey text-bluey font-bold w-fit"
                        : "hover:text-bluey w-fit hover:text-[21px] transition-all ease-in duration-150"
                }
            >
                Hydraulic breaker
            </NavLink>
            <Link to={"/home"} className="hidden h-16 w-16 md:grid items-center ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 163.37 74.08"
                    className="fill-bluey"
                >
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M152.21,28.6c8.1-3.72,11.17-10.41,11.17-19.08,0-6-6.67-9.52-12.63-9.52H33.44c-13,.17-18.91,8.21-21.26,13.68C9.92,19,7.38,26.13,4,35.14c-1.51,4.07-2.82,8.94-1.42,13,2.08,6,8.38,8.06,10.75,8.13,13.08.37,52.34,0,52.34,0L81.65,22.51H49.93L45,32.43H60.19A6.33,6.33,0,0,1,59.72,35c-.56,1.51-3.48,8.19-3.48,8.19H35.91s-5.08,0-6.21-3.11-.48-6.49,1.41-10.64c2.45-5.37,4.78-13,8.38-15.25,5.18-3.2,10.92-2.26,23-2.26h65s7.15,0,7.15,4.14-3.48,6.59-9.32,6.59H114L109.23,33s10.17-.11,13.55,0c1.45,0,4.61.75,5.18,3.76,0,0,.09,6.87-7.15,7.44s-23.63,0-23.63,0-1.32,0-.66-1.7,9.51-20,9.51-20H89L73.84,56.27h63.35s9.79-.49,13-8.12,6.31-13,2.63-17.22l-.94-1.69s-.55-.22.34-.63"
                    />
                </svg>
            </Link>
            <NavLink
                to={"/attachments"}
                className={({ isActive }) =>
                    isActive
                        ? "border-b-[3px] border-b-bluey text-bluey font-bold w-fit"
                        : "hover:text-bluey w-fit hover:text-[21px] transition-all ease-in duration-150"
                }
            >
                Attachments
            </NavLink>
            <NavLink
                to={"/tools"}
                className={({ isActive }) =>
                    isActive
                        ? "border-b-[3px] border-b-bluey text-bluey font-bold w-fit"
                        : "hover:text-bluey w-fit hover:text-[21px] transition-all ease-in duration-150"
                }
            >
                Tools
            </NavLink>
            <NavLink
                to={"/Downloads"}
                className={({ isActive }) =>
                    isActive
                        ? "border-b-[3px] border-b-bluey text-bluey font-bold w-fit"
                        : "hover:text-bluey w-fit hover:text-[21px] transition-all ease-in duration-150"
                }
            >
                Downloads
            </NavLink>
        </>
    );
}

export default Links;
