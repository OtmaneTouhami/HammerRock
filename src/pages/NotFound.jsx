import { Link } from "react-router-dom";
import img1 from "../assets/images/NotFound.png"

function NotFound() {
    return (
        <div className="mt-20 md:mt-24">
            <div className="h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] border-y-8 border-y-Amber flex flex-col md:flex-row items-center justify-center px-6 py-8">
                <div className="basis-2/6 sm:basis-4/6 w-full flex items-center justify-start">
                    <img
                        src={img1}
                        alt="Not Found"
                        className="h-full"
                    />
                </div>
                <div className="basis-2/6 flex items-center justify-center hover:scale-105">
                    <Link
                        to={"/acceuil"}
                        className="text-center px-4 py-2 md:px-6 md:py-4 bg-[#b6b6b4] text-white text-lg md:text-xl font-semi rounded-lg border-2 border-Amber "
                    >
                        Retourner a la page d&apos;acceuil
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
