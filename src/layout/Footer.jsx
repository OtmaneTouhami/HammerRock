import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import logo from "../assets/logos/HRK-HAMMER-ROCK-LOGO.png";
function Footer() {
    return (
        <div className="py-0 md:py-6 md:px-8">
            <div className="grid grid-cols-none gap-6 md:grid-cols-12 md:grid-rows-none md:divide-x divide-LightBrown">
                <div className="flex items-center justify-center md:col-span-2">
                    <img
                        src={logo}
                        alt="HRK-HAMMER-ROCK-LOGO"
                        className="md:w-44 md:h-44 h-32 w-32"
                    />
                </div>
                <div className="flex flex-col gap-4 items-center justify-center md:col-span-4">
                    <div className="flex flex-col gap-1 justify-center items-center text-xs md:text-lg text-Black font-semibold">
                        <Link to={"/terms"}>Conditions d&apos;utilisation</Link>
                        <Link to={"#"}>Politique de confidentialité</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center text-xs md:text-lg text-Black md:col-span-2">
                    <div className="w-5/6 text-center">Maroc</div>
                </div>
                <div className="flex items-center justify-center text-xs md:text-lg md:col-span-4">
                    <div>
                        <div>
                            Tel:{" "}
                            <a
                                href="tel:+821092922043"
                                className="ml-2 text-DoveGray"
                            >
                                +82-10-9292-2043
                            </a>
                        </div>
                        <div>
                            E-mail:{" "}
                            <a
                                href="mailto:Parts.webmaster@gmail.com"
                                className="ml-2 text-DoveGray"
                            >
                                Parts.webmaster@gmail.com
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
                <div className="text-sm text-center w-3/4 pb-4 md:pb-0 md:w-auto md:text-lg text-Black mt-2 md:mt-4">
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
