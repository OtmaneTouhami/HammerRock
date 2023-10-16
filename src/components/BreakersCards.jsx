import { Link } from "react-router-dom";
import img1 from "../assets/hammer/GBN30TL-L.png";
import img2 from "../assets/hammer/GBN70TL-L.png";
import img3 from "../assets/hammer/GBN220TL-L.png";
import img4 from "../assets/hammer/GBN220E-L.png";
import img5 from "../assets/hammer/GBN1000TL-L.png";

/* eslint-disable react/prop-types */
function BreakersCards() {
    return (
        <div className="w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-6 p-12">
            <div className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="basis-4/6 w-full rounded-lg flex justify-center">
                    <img src={img1} className="w-12 object-cover" />
                </div>
                <h2 className="text-xl font-semibold">GBN30TL</h2>
                <Link
                    to={`/brise_roche/GBN30TL`}
                    className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                >
                    Fiche technique
                </Link>
            </div>
            <div className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="basis-4/6 w-full rounded-lg flex justify-center">
                    <img src={img2} className="w-12 object-cover" />
                </div>
                <h2 className="text-xl font-semibold">GBN70TL</h2>
                <Link
                    to={`/brise_roche/GBN70TL`}
                    className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                >
                    Fiche technique
                </Link>
            </div>
            <div className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="basis-4/6 w-full rounded-lg flex justify-center">
                    <img src={img3} className="w-12 object-cover" />
                </div>
                <h2 className="text-xl font-semibold">GBN220TL</h2>
                <Link
                    to={`/brise_roche/GBN220TL`}
                    className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                >
                    Fiche technique
                </Link>
            </div>
            <div className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="basis-4/6 w-full rounded-lg flex justify-center">
                    <img src={img4} className="w-12 object-cover" />
                </div>
                <h2 className="text-xl font-semibold">GBN220E</h2>
                <Link
                    to={`/brise_roche/GBN220E`}
                    className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                >
                    Fiche technique
                </Link>
            </div>
            <div className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="basis-4/6 w-full rounded-lg flex justify-center">
                    <img src={img5} className="w-12 object-cover" />
                </div>
                <h2 className="text-xl font-semibold">GBN1000TL</h2>
                <Link
                    to={`/brise_roche/GBN1000TL`}
                    className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                >
                    Fiche technique
                </Link>
            </div>
        </div>
    );
}

export default BreakersCards;
