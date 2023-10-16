/* eslint-disable react/prop-types */
import contact from "../../../assets/images/contact.png";
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { useEffect } from "react";

function Contact({ height }) {
    useEffect(() => {
        if (window.innerWidth > 767) {
            window.scroll(0, window.innerHeight - 96);
        } else {
            window.scroll(0, height);
        }
    }, [height]);
    return (
        <div className="px-6 py-4 h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] border-y-8 border-Amber flex flex-col">
            <h1 className="text-4xl font-extrabold racking-wide basis-1/6 flex justify-center items-center">
                Contacter nous
            </h1>
            <div className="flex items-center justify-center flex-wrap md:flex-nowrap basis-5/6">
                <div className="flex flex-col justify-center p-6 md:p-12 space-y-6">
                    <div className="flex items-center gap-8 text-lg">
                        <MdLocationOn className="h-7 w-7 text-LightBrown" />
                        <span>Casablanca, Maroc</span>
                    </div>
                    <div className="flex items-center gap-8 text-lg">
                        <BsTelephoneFill className="h-6 w-6 text-LightBrown" />
                        <a href="tel:+821092922043">+82-10-9292-2043</a>
                    </div>
                    <div className="flex items-center gap-8 text-lg">
                        <MdEmail className="h-6 w-6 text-LightBrown" />
                        <a href="mailto:Parts.webmaster@gmail.com">
                            Parts.webmaster@gmail.com
                        </a>
                    </div>
                    <div className="text-LightBrown h-14  flex items-center justify-center gap-8">
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
                </div>
                <div>
                    <img src={contact} />
                </div>
            </div>
        </div>
    );
}

export default Contact;
