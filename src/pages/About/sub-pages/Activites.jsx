/* eslint-disable react/prop-types */
import { useEffect } from "react";
import img1 from "../../../assets/images/services.png";

function Activites({ height }) {
    useEffect(() => {
        if (window.innerWidth > 767) {
            window.scroll(0, window.innerHeight - 96);
        } else {
            window.scroll(0, height);
        }
    }, [height]);
    return (
        <div>
            <div className="h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] bg-White border-y-8 border-y-Amber p-12 flex items-center justify-center flex-wrap md:flex-nowrap">
                <div className="space-y-3">
                    <h1 className="text-3xl font-extrabold text-Amber tracking-wide">
                        Activités
                    </h1>
                    <p className=" flex items-center justify-center text-xl  font-semibold md:w-10/12 text-justify text-Boulder">
                        Depuis notre création, notre objectif a toujours été de
                        proposer une offre complète qui répond aux besoins de
                        nos clients dans le domaine de la démolition. C&apos;est
                        pourquoi nous mettons à votre disposition une gamme
                        complète de services et de produits pour couvrir
                        l&apos;ensemble de vos besoins dans ce secteur.
                    </p>
                </div>
                <div>
                    <img src={img1} />
                </div>
            </div>
            <div className="bg-White border-y-8 border-y-Black mt-px px-12 py-24 flex flex-wrap items-center justify-center w-full gap-8">
                <div className="md:basis-1/4 shadow-md shadow-Amber hover:shadow-lg  hover:shadow-Amber  space-y-2 text-center p-2 rounded-lg md:h-56 py-4 relative">
                    <div className="h-6 w-6 text-Amber font-bold rounded-full bg-black flex items-center justify-center absolute -top-3 left-[calc(50%-12px)]">
                        1
                    </div>
                    <h1 className="text-xl text-Amber font-bold h-1/4 flex items-center justify-center">
                        VENTE DE BRISE-ROCHES HYDRAULIQUES
                    </h1>
                    <hr />
                    <p className="text-Boulder">
                        Nous proposons une sélection diversifiée de brise-roches
                        hydrauliques de haute qualité, adaptés à une variété
                        d&apos;applications.
                    </p>
                </div>
                <div className="md:basis-1/4 shadow-md shadow-Amber hover:shadow-lg  hover:shadow-Amber  space-y-2 text-center p-2 rounded-lg md:h-56 py-4 relative">
                    <div className="h-6 w-6 text-Amber font-bold rounded-full bg-black flex items-center justify-center absolute -top-3 left-[calc(50%-12px)]">
                        2
                    </div>
                    <h1 className="text-xl text-Amber font-bold h-1/4 flex items-center justify-center">
                        LOCATION DE BRISE-ROCHES HYDRAULIQUES
                    </h1>
                    <hr />
                    <p className="text-Boulder">
                        Nous offrons des solutions de location à court ou long
                        terme, garantissant que vous disposez de
                        l&apos;équipement nécessaire quand vous en avez besoin.
                    </p>
                </div>
                <div className="md:basis-1/4 shadow-md shadow-Amber hover:shadow-lg  hover:shadow-Amber  space-y-2 text-center p-2 rounded-lg md:h-56 py-4 relative">
                    <div className="h-6 w-6 text-Amber font-bold rounded-full bg-black flex items-center justify-center absolute -top-3 left-[calc(50%-12px)]">
                        3
                    </div>
                    <h1 className="text-xl text-Amber font-bold h-1/4 flex items-center justify-center">
                        MAINTENANCE ET RÉPARATION
                    </h1>
                    <hr />
                    <p className="text-Boulder">
                        En cas de panne, notre équipe d&apos;experts effectue
                        des réparations rapides pour minimiser les temps
                        d&apos;arrêt.
                    </p>
                </div>
                <div className="md:basis-1/4 shadow-md shadow-Amber hover:shadow-lg  hover:shadow-Amber  space-y-2 text-center p-2 rounded-lg md:h-56 py-4 relative">
                    <div className="h-6 w-6 text-Amber font-bold rounded-full bg-black flex items-center justify-center absolute -top-3 left-[calc(50%-12px)]">
                        4
                    </div>
                    <h1 className="text-xl text-Amber font-bold h-1/4 flex items-center justify-center">
                        FORMATION
                    </h1>
                    <hr />
                    <p className="text-Boulder">
                        Nous proposons des programmes de formation complets pour
                        vos opérateurs, pour vous garantir une utilisation
                        efficace de nos équipements.
                    </p>
                </div>
                <div className="md:basis-1/4 shadow-md shadow-Amber hover:shadow-lg  hover:shadow-Amber  space-y-2 text-center p-2 rounded-lg md:h-56 py-4 relative">
                    <div className="h-6 w-6 text-Amber font-bold rounded-full bg-black flex items-center justify-center absolute -top-3 left-[calc(50%-12px)]">
                        5
                    </div>
                    <h1 className="text-xl text-Amber font-bold h-1/4 flex items-center justify-center">
                        CONSEIL TECHNIQUE
                    </h1>
                    <hr />
                    <p className="text-Boulder">
                        Nos spécialistes sont disponibles pour vous fournir des
                        conseils techniques personnalisés dans le domaine des
                        brise-roches hydrauliques en général.
                    </p>
                </div>
                <div className="md:basis-1/4 shadow-md shadow-Amber hover:shadow-lg  hover:shadow-Amber  space-y-2 text-center p-2 rounded-lg md:h-56 py-4 relative">
                    <div className="h-6 w-6 text-Amber font-bold rounded-full bg-black flex items-center justify-center absolute -top-3 left-[calc(50%-12px)]">
                        6
                    </div>
                    <h1 className="text-xl text-Amber font-bold h-1/4 flex items-center justify-center">
                        PIÈCES DE RECHANGE ET ACCESSOIRES
                    </h1>
                    <hr />
                    <p className="text-Boulder">
                        Pour garantir la longévité de l&apos;utilisation de
                        votre matérielle, nous proposons un vaste inventaire de
                        pièces de rechange et d&apos;accessoires d&apos;origine
                        pour maintenir vos brise-roches hydrauliques en parfait
                        état.
                    </p>
                </div>
                <div className="md:basis-1/4 shadow-md shadow-Amber hover:shadow-lg  hover:shadow-Amber  space-y-2 text-center p-2 rounded-lg md:h-56 py-4 relative">
                    <div className="h-6 w-6 text-Amber font-bold rounded-full bg-black flex items-center justify-center absolute -top-3 left-[calc(50%-12px)]">
                        7
                    </div>
                    <h1 className="text-xl text-Amber font-bold h-1/4 flex items-center justify-center">
                        SERVICES DE DÉMOLITION
                    </h1>
                    <hr />
                    <p className="text-Boulder">
                        Si vous avez besoin d&apos;une équipe de professionnels
                        pour mener à bien des projets de démolition, nous sommes
                        prêts à s&apos;occuper de tous le travail.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Activites;
