import { Link } from "react-router-dom";
import Links from "./Links";
import { useState, useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import { TbMenu2 } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";
import logo from "../../assets/logos/HRK-HAMMER-ROCK-LOGO.png";
import MobileLinks from "./MobileLinks";

function NavBar() {
    const [showSideBar, setShowSideBar] = useState(false),
        sideBarRef = useRef();

    const controlSideBar = () => setShowSideBar((value) => !value);

    useEffect(() => {
        if (sideBarRef.current) {
            autoAnimate(sideBarRef.current);
        }
    }, [sideBarRef]);
    return (
        <header>
            <nav
                className={`fixed px-4 inset-0 z-50 h-20 bg-white flex items-center justify-end ${
                    !showSideBar && "shadow-sm"
                }  md:h-24 md:shadow-md md:justify-center`}
            >
                {/* For larger screens */}
                <div className="hidden w-full md:flex items-center justify-evenly  2xl:text-2xl sm:text-md md:text-xl text-xl text-Boulder font-semibold">
                    <Links logo={logo} />
                </div>
                {/* For smaller screens */}
                <Link
                    to={"/acceuil"}
                    className="basis-11/12 grid items-center justify-center md:hidden"
                >
                    <img
                        src={logo}
                        alt={"HRK-HAMMER-ROCK-LOGO"}
                        className=" h-20 w-20"
                    />
                </Link>

                <div onClick={controlSideBar} className="text-Black">
                    {showSideBar ? (
                        <VscChromeClose className="basis-1/12 h-8 w-8 md:hidden" />
                    ) : (
                        <TbMenu2 className="basis-1/12 h-8 w-8 md:hidden" />
                    )}
                </div>
            </nav>
            <div ref={sideBarRef}>
                {showSideBar && (
                    <div className="w-4/6 sm:w-3/6 h-[calc(100vh-80px)] fixed top-0 right-0 z-50 mt-20 bg-white shadow-md flex flex-col pt-6 px-3 pb-6 gap-4 text-xl text-gray-400 font-semibold overflow-y-auto md:hidden">
                        <MobileLinks />
                    </div>
                )}
            </div>
        </header>
    );
}

export default NavBar;
