import { BiSolidDownload } from "react-icons/bi";
import catalogue from "../assets/Files/HAMMER ROCK BROCHURE.pdf";
import logo from "../assets/logos/HRK-HAMMER-ROCK-LOGO.png";
import { Fade, Zoom } from "react-awesome-reveal";

function Downloads() {
    return (
        <div className="mt-20 md:mt-24">
            <div className="h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] border-y-8 border-Amber flex flex-col items-center p-4 bg-bg bg-cover">
                <Fade>
                    <h1 className="text-Amber text-3xl 2xl:text-5xl font-bold py-4 2xl:py-8 basis-2/12">
                        Catalogue
                    </h1>
                </Fade>
                <div className="text-2xl 2xl:text-3xl text-center w-10/12 py-3 basis-2/12">
                    <Fade>
                        Un catalogue téléchargeable en pdf qui regroupe toute la
                        proposition de l&apos;entreprise de façon plus détaillée
                        que le site.
                    </Fade>
                </div>
                <div className="w-full h-full flex flex-wrap justify-evenly items-center basis-9/12">
                    <div className="rounded-xl h-5/6 w-9/12 md:w-2/12 shadow-lg shadow-Amber hover:shadow-xl hover:shadow-Amber p-6 space-y-2 bg-white">
                        <div className="rounded-md border border-Amber h-5/6">
                            <Zoom>
                            <img src={logo} alt="logo" />
                            </Zoom>
                        </div>
                        <a
                            href={catalogue}
                            download={"HAMMER ROCK BROCHURE.pdf"}
                            className="w-full h-1/6 rounded-md flex items-center justify-center gap-4 bg-Black text-md font-semibold text-Amber"
                        >
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
