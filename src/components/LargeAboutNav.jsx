import { NavLink } from "react-router-dom";
import profile from "../assets/icons/profile.png";
import history from "../assets/icons/history.png";
import activity from "../assets/icons/activity.png";
import sectors from "../assets/icons/secteurs.png";
import contact from "../assets/icons/contact.png";
import { Fade } from "react-awesome-reveal";

function LargeAboutNav() {
    return (
        <div className="hidden md:flex flex-row flex-wrap h-3/6 items-center justify-around pb-0 pt-8 w-full text-xl font-semibold">
            <NavLink
                to={"/about/profile"}
                className={
                    "p-2 basis-1/12 relative after:hidden after:absolute after:w-full after:h-full  after:rounded-lg after:text-Amber after:content-['Profile'] after:inset-0 after:bg-gradient-to-t after:from-black after:to-transparent hover:after:flex after:justify-center after:items-end after:pb-2 after:font-bold hover:scale-105"
                }
            >
                <Fade direction="left">
                    <img src={profile} alt="profile icon" className="" />
                </Fade>
            </NavLink>
            <NavLink
                to={"/about/histoire"}
                className={
                    "p-2 basis-1/12 relative after:hidden after:absolute after:w-full after:h-full  after:rounded-lg after:text-Amber after:content-['Histoire'] after:inset-0 after:bg-gradient-to-t after:from-black after:to-transparent hover:after:flex after:justify-center after:items-end after:pb-2 after:font-bold hover:scale-105"
                }
            >
                <Fade direction="left">
                    <img src={history} alt="Histoire icon" className="" />
                </Fade>
                {/* Histoire */}
            </NavLink>
            <NavLink
                to={"/about/activités"}
                className={
                    "p-2 basis-1/12 relative after:hidden after:absolute after:w-full after:h-full  after:rounded-lg after:text-Amber after:content-['Activités'] after:inset-0 after:bg-gradient-to-t after:from-black after:to-transparent hover:after:flex after:justify-center after:items-end after:pb-2 after:font-bold hover:scale-105"
                }
            >
                <Fade>
                    <img src={activity} alt="Activités icon" className="" />
                </Fade>
            </NavLink>
            <NavLink
                to={"/about/secteurs"}
                className={
                    "p-2 basis-1/12 relative after:hidden after:absolute after:w-full after:h-full  after:rounded-lg after:text-Amber after:content-['Secteurs'] after:inset-0 after:bg-gradient-to-t after:from-black after:to-transparent hover:after:flex after:justify-center after:items-end after:pb-2 after:font-bold hover:scale-105"
                }
            >
                <Fade direction="right">
                    <img src={sectors} alt="Secteurs icon" className="" />
                </Fade>
            </NavLink>
            <NavLink
                to={"/about/contact"}
                className={
                    "p-2 basis-1/12 relative after:hidden after:absolute after:w-full after:h-full  after:rounded-lg after:text-Amber after:content-['Contact'] after:inset-0 after:bg-gradient-to-t after:from-black after:to-transparent hover:after:flex after:justify-center after:items-end after:pb-2 after:font-bold hover:scale-105"
                }
            >
                <Fade direction="right">
                    <img src={contact} alt="contact icon" className="" />
                </Fade>
            </NavLink>
        </div>
    );
}

export default LargeAboutNav;
