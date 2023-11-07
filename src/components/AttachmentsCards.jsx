import { Link } from "react-router-dom";
import img1 from "../assets/HRK images sm/Quick_Coupler.png";
import img2 from "../assets/HRK images sm/compactor.png";
import img3 from "../assets/HRK images sm/vibro-hammer.png";
import img4 from "../assets/HRK images sm/Vibro-Ripper.png";
import img5 from "../assets/HRK images sm/Stone_Grab_2.png";
import img6 from "../assets/HRK images sm/wood grapple.png";
import img7 from "../assets/HRK images sm/Scrap_grapple.png";
import img8 from "../assets/HRK images sm/Crushers.png";
import img9 from "../assets/HRK images sm/Pulverizer.png";

function AttachmentsCards() {
    return (
        <div className="w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-6 p-12">
            <div className="h-72 flex flex-col items-center justify-between rounded-xl bg-Black w-64 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="rounded-lg flex justify-center items-center">
                    <img src={img1} className="w-4/6" />
                </div>
                <div className="flex flex-col w-full items-center gap-2">
                    <h2 className="text-xl font-semibold text-Amber">
                        HRQC Series
                    </h2>
                    <Link
                        to={`/pièces_jointes/HRQC_Series`}
                        className="w-full text-center bg-Amber text-Black py-1.5 font-semibold rounded-lg"
                    >
                        Fiche technique
                    </Link>
                </div>
            </div>
            <div className="h-72 flex flex-col items-center justify-between rounded-xl bg-Black w-64 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="rounded-lg flex justify-center items-center bg-white/30">
                    <img src={img2} className="w-4/6" />
                </div>
                <div className="flex flex-col w-full items-center gap-2">
                    <h2 className="text-xl font-semibold text-Amber">
                        HRCP series
                    </h2>
                    <Link
                        to={"/pièces_jointes/HRCP_series"}
                        className="w-full text-center bg-Amber text-Black py-1.5 font-semibold rounded-lg"
                    >
                        Fiche technique
                    </Link>
                </div>
            </div>
            <div className="h-72 flex flex-col items-center justify-between rounded-xl bg-Black w-64 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="rounded-lg flex justify-center items-center">
                    <img src={img3} className="w-4/6" />
                </div>
                <div className="flex flex-col w-full items-center gap-2">
                    <h2 className="text-xl font-semibold text-Amber">HRVH</h2>
                    <Link
                        to={"/pièces_jointes/HRVH"}
                        className="w-full text-center bg-Amber text-Black py-1.5 font-semibold rounded-lg"
                    >
                        Fiche technique
                    </Link>
                </div>
            </div>
            <div className="h-72 flex flex-col items-center justify-between rounded-xl bg-Black w-64 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="rounded-lg flex justify-center items-center">
                    <img src={img4} className="w-4/6" />
                </div>
                <div className="flex flex-col w-full items-center gap-2">
                    <h2 className="text-xl font-semibold text-Amber">HRVR</h2>
                    <Link
                        to={"/pièces_jointes/HRVR"}
                        className="w-full text-center bg-Amber text-Black py-1.5 font-semibold rounded-lg"
                    >
                        Fiche technique
                    </Link>
                </div>
            </div>
            <div className="h-72 flex flex-col items-center justify-between rounded-xl bg-Black w-64 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="rounded-lg flex justify-center items-center">
                    <img src={img5} className="w-4/6" />
                </div>
                <div className="flex flex-col w-full items-center gap-2">
                    <h2 className="text-xl font-semibold text-Amber">HRDG</h2>
                    <Link
                        to={"/pièces_jointes/HRDG"}
                        className="w-full text-center bg-Amber text-Black py-1.5 font-semibold rounded-lg"
                    >
                        Fiche technique
                    </Link>
                </div>
            </div>
            <div className="h-72 flex flex-col items-center justify-between rounded-xl bg-Black w-64 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="rounded-lg flex justify-center items-center">
                    <img src={img6} className="" />
                </div>
                <div className="flex flex-col w-full items-center gap-2">
                    <h2 className="text-xl font-semibold text-Amber">HRWG</h2>
                    <Link
                        to={"/pièces_jointes/HRWG"}
                        className="w-full text-center bg-Amber text-Black py-1.5 font-semibold rounded-lg"
                    >
                        Fiche technique
                    </Link>
                </div>
            </div>
            <div className="h-72 flex flex-col items-center justify-between rounded-xl bg-Black w-64 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="rounded-lg flex justify-center items-center">
                    <img src={img7} className="w-4/6" />
                </div>
                <div className="flex flex-col w-full items-center gap-2">
                    <h2 className="text-xl font-semibold text-Amber">HRSG</h2>
                    <Link
                        to={"/pièces_jointes/HRSG"}
                        className="w-full text-center bg-Amber text-Black py-1.5 font-semibold rounded-lg"
                    >
                        Fiche technique
                    </Link>
                </div>
            </div>
            <div className="h-72 flex flex-col items-center justify-between rounded-xl bg-Black w-64 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="rounded-lg flex justify-center items-center">
                    <img src={img8} className="w-4/6" />
                </div>
                <div className="flex flex-col w-full items-center gap-2">
                    <h2 className="text-xl font-semibold text-Amber">HRCS</h2>
                    <Link
                        to={"/pièces_jointes/HRCS"}
                        className="w-full text-center bg-Amber text-Black py-1.5 font-semibold rounded-lg"
                    >
                        Fiche technique
                    </Link>
                </div>
            </div>
            <div className="h-72 flex flex-col items-center justify-between rounded-xl bg-Black w-64 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="rounded-lg flex justify-center items-center">
                    <img src={img9} className="w-4/6" />
                </div>
                <div className="flex flex-col w-full items-center gap-2">
                    <h2 className="text-xl font-semibold text-Amber">HRPV</h2>
                    <Link
                        to={"/pièces_jointes/HRPV"}
                        className="w-full text-center bg-Amber text-Black py-1.5 font-semibold rounded-lg"
                    >
                        Fiche technique
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AttachmentsCards;
