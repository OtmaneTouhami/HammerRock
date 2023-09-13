import { Link } from "react-router-dom";

function AttachmentsCards() {
    return (
        <div className="w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-6 p-12">
                <div
                    className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg"
                >
                    <div className="basis-4/6 w-full rounded-lg bg-gray-400"></div>
                    <h2 className="text-xl font-semibold">Attache rapide</h2>
                    <Link
                        to={`/brise_roche/serie_x`}
                        className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                    >
                        Voir
                    </Link>
                </div>
                <div
                    className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg"
                >
                    <div className="basis-4/6 w-full rounded-lg bg-gray-400"></div>
                    <h2 className="text-xl font-semibold">Compacteur</h2>
                    <Link
                        to={`/brise_roche/serie_y`}
                        className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                    >
                        Voir
                    </Link>
                </div>
                <div
                    className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg"
                >
                    <div className="basis-4/6 w-full rounded-lg bg-gray-400"></div>
                    <h2 className="text-xl font-semibold">Marteau vibrant</h2>
                    <Link
                        to={`/brise_roche/serie_z`}
                        className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                    >
                        Voir
                    </Link>
                </div>
                <div
                    className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg"
                >
                    <div className="basis-4/6 w-full rounded-lg bg-gray-400"></div>
                    <h2 className="text-xl font-semibold">Ripper vibrant</h2>
                    <Link
                        to={`/brise_roche/serie_x`}
                        className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                    >
                        Voir
                    </Link>
                </div>
                <div
                    className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg"
                >
                    <div className="basis-4/6 w-full rounded-lg bg-gray-400"></div>
                    <h2 className="text-xl font-semibold">Grappin pour pierre</h2>
                    <Link
                        to={`/brise_roche/serie_y`}
                        className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                    >
                        Voir
                    </Link>
                </div>
                <div
                    className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg"
                >
                    <div className="basis-4/6 w-full rounded-lg bg-gray-400"></div>
                    <h2 className="text-xl font-semibold">Grappin pour bois</h2>
                    <Link
                        to={`/brise_roche/serie_z`}
                        className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                    >
                        Voir
                    </Link>
                </div>
                <div
                    className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg"
                >
                    <div className="basis-4/6 w-full rounded-lg bg-gray-400"></div>
                    <h2 className="text-xl font-semibold ">Gr de récupération</h2>
                    <Link
                        to={`/brise_roche/serie_x`}
                        className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                    >
                        Voir
                    </Link>
                </div>
                <div
                    className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg"
                >
                    <div className="basis-4/6 w-full rounded-lg bg-gray-400"></div>
                    <h2 className="text-xl font-semibold">Broyeuse</h2>
                    <Link
                        to={`/brise_roche/serie_y`}
                        className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                    >
                        Voir
                    </Link>
                </div>
                <div
                    className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg"
                >
                    <div className="basis-4/6 w-full rounded-lg bg-gray-400"></div>
                    <h2 className="text-xl font-semibold">Pulvériseur</h2>
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

export default AttachmentsCards;