import { Link } from "react-router-dom";
import Links from "./Links";
import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";
import logo from "../../assets/logos/HRK-HAMMER-ROCK-LOGO.png";

function NavBar() {
    const [showSideBar, setShowSideBar] = useState(false);

    const controlSideBar = () => setShowSideBar((value) => !value);
    return (
        <header>
            <nav
                className={`fixed px-4 inset-0 h-20 bg-white flex items-center justify-end ${
                    !showSideBar && "shadow-sm"
                }  md:h-24 md:shadow-md md:justify-center`}
            >
                {/* For larger screens */}
                <div className="hidden h-full md:flex items-center justify-center md:gap-6 lg:gap-12 xl:gap-20 2xl:gap-24 2xl:text-2xl text-xl text-Boulder font-semibold">
                    <Links logo={logo} />
                </div>
                {/* For smaller screens */}
                <Link
                    to={"/home"}
                    className="basis-11/12 grid items-center justify-center md:hidden"
                >
                    <img src={logo} alt={"HRK-HAMMER-ROCK-LOGO"} className=" h-20 w-20" />
                </Link>

                <div onClick={controlSideBar}>
                    {showSideBar ? (
                        <VscChromeClose className="basis-1/12 h-8 w-8 text-bluey md:hidden" />
                    ) : (
                        <TbMenu2 className="basis-1/12 h-8 w-8 text-bluey md:hidden" />
                    )}
                </div>
            </nav>
            {showSideBar && (
                <div className="w-4/6 sm:w-3/6 h-[calc(100vh-80px)] fixed top-0 right-0 z-50 mt-20 bg-white shadow-md flex flex-col pt-6 pl-3 gap-4 text-xl text-gray-400 font-semibold md:hidden">
                    <Links />
                </div>
            )}
        </header>
    );
}

export default NavBar;
