import { BiSolidDownload } from "react-icons/bi";
import catalogue from "../assets/Files/HAMMER ROCK BROCHURE ALPHA.pdf";

function Downloads() {
    return (
        <div className="mt-24">
            <div className="h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] border-y-8 border-Amber flex flex-col items-center p-4">
                <h1 className="text-Amber text-3xl font-bold py-4 basis-2/12">
                    Catalogue
                </h1>
                <div className="text-xl text-center w-10/12 py-3 basis-2/12">
                    Un catalogue téléchargeable en pdf qui regroupe toute la
                    proposition de l&apos;entreprise de façon plus détaillée que
                    le site.
                </div>
                <div className="w-full h-full flex flex-wrap justify-evenly items-center basis-9/12">
                    <div className="rounded-xl h-5/6 w-9/12 md:w-2/12 shadow-lg shadow-Amber hover:shadow-xl hover:shadow-Amber p-6 space-y-2">
                        <div className="rounded-md bg-gray-400 h-5/6"></div>
                        <a  href={catalogue} download={"HAMMER ROCK BROCHURE ALPHA.pdf"} className="w-full h-1/6 rounded-md flex items-center justify-center gap-4 bg-Black text-md font-semibold text-Amber">
                            <span>Télecharger</span>
                            <BiSolidDownload />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Downloads;
