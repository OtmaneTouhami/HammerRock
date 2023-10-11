/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { PiArrowCircleRightBold } from "react-icons/pi";
import img1 from "../assets/logos/HRK-HAMMER-ROCK-LOGO.png";
import img2 from "../assets/images/img2.webp";
import img3 from "../assets/hammer photos/Company Profile (Hammer Assemble Line 3).webp";
import img4 from "../assets/hammer photos/Company Profile (Tool Heat Treatment).webp";

const Content = [
    {
        title: "À propos de nous",
        text: "Hammer Rock Korea est une entreprise marocaine spécialisée dans la fabrication de brise-roches hydrauliques. Fondée avec une vision pionnière et une forte détermination, Hammer Rock Korea a développé sa technologie de pointe et à sa capacité à offrir des solutions innovantes pour les industries de la construction, de l'extraction minière et de la démolition.",
        btnText: "Découvrir Notre Identité",
        path: "/about",
    },
    {
        title: "Brise-roches hydrauliques",
        text: "Notre outil révolutionnaire est conçu pour répondre à tous vos besoins en matière de démolition et d'excavation, quel que soit le type de roche ou de béton. Que vous soyez un entrepreneur de construction, un professionnel de la démolition ou un opérateur de chantier, ",
        btnText: "Voir plus",
        path: "/brise_roche",
    },
    {
        title: "Pièces jointes",
        text: "Chez HRK, nous nous engageons à fournir des pièces jointes de la plus haute qualité, fabriquées avec des matériaux durables pour garantir leur longévité.",
        btnText: "Nos pièces jointes",
        path: "/pièces_jointes",
    },
    {
        title: "Outils",
        text: "Chez HRK, nous sommes déterminés à vous fournir les meilleurs outils pour répondre à tous vos besoins.",
        btnText: "Nos outils",
        path: "/outil",
    },
];

function SelectionCards({ selected }) {
    // console.log(Content[selected-1]);
    return (
        <div className="md:row-span-5 md:col-span-7 p-4 flex items-center justify-center">
            <div className="md:w-4/6 px-2 py-3 md:px-4  md:py-5 rounded-xl bg-Amber shadow-lg border-4 border-Black flex flex-col gap-2">
                <div>
                    <img
                        src={
                            selected === 1
                                ? img1
                                : selected === 2
                                ? img2
                                : selected === 3
                                ? img3
                                : img4
                        }
                        alt={Content[selected - 1].title}
                        className={`rounded-lg w-full h-60 md:h-72 ${
                            selected === 1 ? "object-contain" : "object-cover"
                        }`}
                    />
                </div>
                <div className="self-center text-lg md:text-xl text-Black font-bold">
                    {Content[selected - 1].title}
                </div>
                <div className="text-justify line-clamp-3 md:line-clamp-2 font-semibold  md:text-lg text-white px-2.5">
                    {Content[selected - 1].text}
                </div>
                <Link
                    to={Content[selected - 1].path}
                    className="flex justify-center items-center gap-2 text-sm md:text-md font-bold bg-Black text-Amber w-4/6 py-2 rounded-lg cursor-pointer self-center mt-2"
                >
                    {Content[selected - 1].btnText}
                    <PiArrowCircleRightBold className="h-6 w-6" />
                </Link>
            </div>
        </div>
    );
}

export default SelectionCards;
