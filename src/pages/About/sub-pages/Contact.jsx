import contact from "../../../assets/images/contact.png";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function Contact() {
    return (
        <div className="px-6 py-4 h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] border-y-8 border-Amber flex flex-col">
            <h1 className="text-4xl font-extrabold racking-wide basis-1/6 flex justify-center items-center">
                Contacter nous
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center basis-5/6">
                <div className="basis-3/4 md:basis-1/2 h-full flex flex-col justify-center p-6 md:p-12 space-y-6">
                    <div className="flex items-center gap-8 text-lg">
                        <FaLocationDot className="h-14 w-14 md:h-6 md:w-6 text-LightBrown"/>
                        <span>HRK Industries co.,ltd. (Head Office & Factory) 30, MTV 27-ro, Siheung-si, Gyeonggi-do, Korea</span>
                        
                    </div>
                    <div className="flex items-center gap-8 text-lg">
                        <BsTelephoneFill className="h-6 w-6 text-LightBrown" />
                        <span>+82 2-3663-2833</span>
                    </div>
                    <div className="flex items-center gap-8 text-lg">
                        <MdEmail className="h-6 w-6 text-LightBrown" />
                        <span>info@gbhammer.com</span>
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
                <div className="order-first md:order-last basis-1/4 md:basis-1/2 flex items-center justify-center h-full">
                    <img src={contact} alt="" className="" />
                </div>
            </div>
        </div>
    );
}

export default Contact;
