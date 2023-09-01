import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import logo from "../assets/logos/HRK-HAMMER-ROCK-LOGO.png";
function Footer() {
    return (
        <div className="py-6 px-8 h-96">
            <div className="grid grid-cols-4 divide-x divide-LightBrown">
                <div className="flex items-center justify-center">
                    <img
                        src={logo}
                        alt="HRK-HAMMER-ROCK-LOGO"
                        className="w-44 h-44"
                    />
                </div>
                <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="flex flex-col gap-1 justify-center text-lg text-Black font-semibold">
                        <Link to={"#"}>Terms of Use</Link>
                        <Link to={"#"}>Privacy Policy</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center text-Black">
                    <div className="w-5/6">
                        HRK Industries co.,ltd. (Head Office & Factory) 30, MTV
                        27-ro, Siheung-si, Gyeonggi-do, Korea
                    </div>
                </div>
                <div className="flex flex-col  items-center justify-center">
                    <div className="flex flex-col gap-1 justify-center text-sm md:text-lg text-Black font-semibold">
                        <div>
                            Tel:{" "}
                            <a
                                href="tel:+82236632833"
                                className="ml-2 text-DoveGray"
                            >
                                +82 2-3663-2833
                            </a>
                        </div>
                        <div>
                            Fax:{" "}
                            <span className="ml-2 text-DoveGray">
                                +82 31-988-2208
                            </span>
                        </div>
                        <div>
                            E-mail:{" "}
                            <a
                                href="mailto:info@gbhammer.com"
                                className="ml-2 text-DoveGray"
                            >
                                info@gbhammer.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-4 border-b border-LightBrown text-xl text-center my-4">
                <span className="bg-white text-LightBrown px-3">Social</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="text-LightBrown h-14  flex items-center justify-center gap-4">
                    <a href="#" target="_blank">
                        <BsLinkedin className="h-6 w-6" />
                    </a>
                    <a href="#" target="_blank">
                        <BsFacebook className="h-6 w-6" />
                    </a>
                    <a href="#" target="_blank">
                        <BsInstagram className="h-6 w-6" />
                    </a>
                    <a href="#" target="_blank">
                        <BsTwitter className="h-6 w-6" />
                    </a>
                </div>
                <div className="text-lg text-Black mt-4">
                    Copyright &copy; 2023 HRK Industries Co.,ltd. All Rights
                    Reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;
{
    /* <hr className="h-0.5 bg-gray-300" /> */
}
