import { Link } from "react-router-dom";

function AttachmentsCards() {
    return (
        <div className="w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-6 p-12">
            <div className="h-72 flex flex-col items-center justify-between rounded-xl bg-Black w-64 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="rounded-lg flex justify-center items-center">
                    <img
                        src="/src/assets/HRK images sm/Quick_Coupler.png"
                        className="w-4/6"
                    />
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
                    <img
                        src="/src/assets/HRK images sm/compactor.png"
                        className="w-4/6"
                    />
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
                    <img
                        src="/src/assets/HRK images sm/vibro-hammer.png"
                        className="w-4/6"
                    />
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
                    <img
                        src="/src/assets/HRK images sm/Vibro-Ripper.png"
                        className="w-4/6"
                    />
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
                    <img
                        src="/src/assets/HRK images sm/Stone_Grab_2.png"
                        className="w-4/6"
                    />
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
                    <img
                        src="/src/assets/HRK images sm/wood grapple.png"
                        className=""
                    />
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
                    <img
                        src="/src/assets/HRK images sm/Scrap_grapple.png"
                        className="w-4/6"
                    />
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
                    <img
                        src="/src/assets/HRK images sm/Crushers.png"
                        className="w-4/6"
                    />
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
                    <img
                        src="/src/assets/HRK images sm/Pulverizer.png"
                        className="w-4/6"
                    />
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
