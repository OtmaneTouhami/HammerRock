import { Link } from "react-router-dom";
import img1 from "../assets/hammer/GBN30TL-L.webp";
import img2 from "../assets/hammer/GBN220E-L.webp";
import img3 from "../assets/hammer/GBN400TL-L.webp";

/* eslint-disable react/prop-types */
function BreakersCards() {
    return (
        <div className="w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-6 p-12">
            <div className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="basis-4/6 w-full rounded-lg flex justify-center">
                    <img src={img1} className="w-12 object-cover" />
                </div>
                <h2 className="text-xl font-semibold">Serie X</h2>
                <Link
                    to={`/brise_roche/serie_x`}
                    className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                >
                    Voir
                </Link>
            </div>
            <div className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="basis-4/6 w-full rounded-lg flex justify-center">
                    <img src={img2} className="w-12 object-cover" />
                </div>
                <h2 className="text-xl font-semibold">Serie Y</h2>
                <Link
                    to={`/brise_roche/serie_y`}
                    className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                >
                    Voir
                </Link>
            </div>
            <div className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="basis-4/6 w-full rounded-lg flex justify-center">
                    <img src={img3} className="w-12 object-cover" />
                </div>
                <h2 className="text-xl font-semibold">Serie Z</h2>
                <Link
                    to={`/brise_roche/serie_z`}
                    className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                >
                    Voir
                </Link>
            </div>
        </div>
    );
}

export default BreakersCards;
