import { Link } from "react-router-dom";
import img1 from "../assets/Attatchments/Quick coupler.webp";
import img2 from "../assets/Attatchments/Compactor1.webp";
import img3 from "../assets/Attatchments/Vibro Hammer1.webp";
import img4 from "../assets/Attatchments/Vibro Ripper.webp";
import img5 from "../assets/Attatchments/Stone Grapple.webp";
import img6 from "../assets/Attatchments/Wood Grapple.webp";
import img7 from "../assets/Attatchments/Scrap grapple1.webp";
import img8 from "../assets/Attatchments/Crusher.webp";
import img9 from "../assets/Attatchments/Pulverizer.webp";

function AttachmentsCards() {
    return (
        <div className="w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-6 p-12">
            <div className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="basis-4/6 w-full rounded-lg flex justify-center">
                    <img src={img1} className="w-5/6 object-contain" />
                </div>
                <h2 className="text-xl font-semibold">Attache rapide</h2>
                <Link
                    to={`/pièces_jointes/attache_rapide`}
                    className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                >
                    Voir
                </Link>
            </div>
            <div className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="basis-4/6 w-full rounded-lg flex justify-center mix-blend-multiply">
                    <img src={img2} className="w-4/6 object-contain" />
                </div>
                <h2 className="text-xl font-semibold">Compacteur</h2>
                <Link
                    to={"/pièces_jointes/compacteur"}
                    className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                >
                    Voir
                </Link>
            </div>
            <div className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="basis-4/6 w-full rounded-lg flex justify-center">
                    <img src={img3} className="w-16 object-contain" />
                </div>
                <h2 className="text-xl font-semibold">Marteau vibrant</h2>
                <Link
                    to={"/pièces_jointes/marteau_vibrant"}
                    className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                >
                    Voir
                </Link>
            </div>
            <div className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="basis-4/6 w-full rounded-lg flex justify-center">
                    <img src={img4} className="w-16 object-contain" />
                </div>
                <h2 className="text-xl font-semibold">Ripper vibrant</h2>
                <Link
                    to={"/pièces_jointes/ripper_vibrant"}
                    className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                >
                    Voir
                </Link>
            </div>
            <div className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="basis-4/6 w-full rounded-lg flex justify-center mix-blend-multiply">
                    <img src={img5} className="w-5/6 object-contain" />
                </div>
                <h2 className="text-xl font-semibold">Grappin pour pierre</h2>
                <Link
                    to={"/pièces_jointes/grappin_pour_pierre"}
                    className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                >
                    Voir
                </Link>
            </div>
            <div className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="basis-4/6 w-full rounded-lg flex justify-center mix-blend-multiply">
                    <img src={img6} className="w-5/6 object-contain" />
                </div>
                <h2 className="text-xl font-semibold">Grappin pour bois</h2>
                <Link
                    to={"/pièces_jointes/grappin_pour_bois"}
                    className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                >
                    Voir
                </Link>
            </div>
            <div className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="basis-4/6 w-full rounded-lg flex justify-center mix-blend-multiply">
                    <img src={img7} className="w-5/6 object-contain" />
                </div>
                <h2 className="text-xl font-semibold ">Gr de récupération</h2>
                <Link
                    to={"/pièces_jointes/grappin_de_recuperation"}
                    className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                >
                    Voir
                </Link>
            </div>
            <div className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="basis-4/6 w-full rounded-lg flex justify-center mix-blend-multiply">
                    <img src={img8} className="w-5/6 object-contain" />
                </div>
                <h2 className="text-xl font-semibold">Broyeuse</h2>
                <Link
                    to={"/pièces_jointes/broyeuse"}
                    className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                >
                    Voir
                </Link>
            </div>
            <div className="h-64 flex flex-col items-center gap-2 rounded-xl bg-Amber basis-5/6 sm:basis-2/6  md:basis-3/12 lg:basis-1/6 p-4  shadow-md hover:scale-105 hover:shadow-lg">
                <div className="basis-4/6 w-full rounded-lg flex justify-center mix-blend-multiply">
                    <img src={img9} className="w-5/6 object-contain" />
                </div>
                <h2 className="text-xl font-semibold">Pulvériseur</h2>
                <Link
                    to={"/pièces_jointes/pulveriseur"}
                    className="w-full text-center bg-Black text-Amber py-1.5 font-semibold rounded-lg"
                >
                    Voir
                </Link>
            </div>
        </div>
    );
}

export default AttachmentsCards;
