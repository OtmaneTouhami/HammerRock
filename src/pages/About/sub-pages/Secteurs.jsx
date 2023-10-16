/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../../assets/images/services.png";
import { useEffect } from "react";

function Secteurs({ height }) {
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
                <div>
                    <img src={img1} />
                </div>
                <div className="space-y-3">
                    <h1 className="text-3xl font-extrabold text-Amber tracking-wide">
                        Secteurs
                    </h1>
                    <p className=" flex items-center justify-center text-xl  font-semibold md:w-10/12 text-justify text-Boulder">
                        Explorerons donc les multiples secteurs
                        d&apos;application de nos produits, démontrant ainsi
                        leur polyvalence et leur impact significatif sur des
                        industries variées, et découvrons comment nos
                        brises-roche contribuent de manière essentielle à la
                        réussite de diverses entreprises et à la réalisation de
                        projets ambitieux.
                    </p>
                </div>
            </div>
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                loopedSlides={true}
                modules={[Autoplay, Pagination, Navigation, EffectCards]}
                style={{
                    "--swiper-pagination-color": "#FAC204",
                    "--swiper-navigation-color": "#FAC204",
                    "--swiper-navigation-size": "32px",
                    "--swiper-pagination-bullet-inactive-color": "#747474",
                    "--swiper-pagination-bullet-inactive-opacity": ".3",
                    "--swiper-pagination-bullet-size": "10px",
                    "--swiper-pagination-bullet-horizontal-gap": "8px",
                }}
            >
                <SwiperSlide className="h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] border-y-8 border-Amber flex items-center justify-center gap-4">
                    <div className="w-full h-full bg-construction-sm md:bg-construction bg-no-repeat bg-cover">
                        <div className="h-full w-full bg-gradient-to-b md:bg-gradient-to-r from-black to-transparent md:pl-24 gap-12 flex flex-col justify-center items-center md:items-start">
                            <h1 className="text-Amber text-xl md:text-3xl font-semibold">
                                CONSTRUCTION
                            </h1>
                            <p className="text-white w-4/6 md:w-3/6  text-lg font-semibold text-justify">
                                Que vous soyez engagé dans la démolition de
                                bâtiments existants ou la préparation de
                                fondations solides pour de nouveaux projets, les
                                brise-roches de Hammer Rock Korea offrent une
                                puissance de rupture inégalée, garantissant un
                                travail rapide et précis.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] border-y-8 border-Amber flex items-center justify-center gap-4">
                    <div className="w-full h-full bg-miniere-sm md:bg-miniere bg-no-repeat bg-cover">
                        <div className="h-full w-full bg-gradient-to-b md:bg-gradient-to-r from-black to-transparent md:pl-24 gap-12 flex flex-col justify-center items-center md:items-start">
                            <h1 className="text-Amber text-xl md:text-3xl font-semibold">
                                INDUSTRIE MINIÈRE
                            </h1>
                            <p className="text-white w-4/6 md:w-3/6  text-lg font-semibold text-justify">
                                L&apos;industrie minière exige des outils
                                robustes et fiables pour extraire efficacement
                                les minéraux précieux. Nos brise-roches
                                hydrauliques sont conçus pour résister aux
                                conditions les plus difficiles, donnant ainsi
                                des résultats impressionnants.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] border-y-8 border-Amber flex items-center justify-center gap-4">
                    <div className="w-full h-full bg-public-sm md:bg-public bg-no-repeat bg-cover">
                        <div className="h-full w-full bg-gradient-to-b md:bg-gradient-to-r from-black to-transparent md:pl-24 gap-12 flex flex-col justify-center items-center md:items-start">
                            <h1 className="text-Amber text-xl md:text-3xl font-semibold">
                                TRAVAUX PUBLICS
                            </h1>
                            <p className="text-white w-4/6 md:w-3/6  text-lg font-semibold text-justify">
                                Les travaux publics englobent un large éventail
                                de projets, tels que la construction de routes,
                                de ponts et d&apos;infrastructures. Nos produits
                                peuvent être utilisés pour diverses tâches, pour
                                contribuer à la réalisation de projets de
                                manière efficace.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] border-y-8 border-Amber flex items-center justify-center gap-4">
                    <div className="w-full h-full bg-petrole-sm md:bg-petrole bg-no-repeat bg-cover">
                        <div className="h-full w-full bg-gradient-to-b md:bg-gradient-to-r from-black to-transparent md:pl-24 gap-12 flex flex-col justify-center items-center md:items-start">
                            <h1 className="text-Amber text-xl md:text-3xl font-semibold">
                                INDUSTRIE PÉTROLIÈRE
                            </h1>
                            <p className="text-white w-4/6 md:w-3/6  text-lg font-semibold text-justify">
                                Les brise-roches de Hammer Rock Korea sont
                                adaptés à la création de voies ferrées, à la
                                démolition de structures ferroviaires désuètes
                                et à la réparation des voies existantes.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] border-y-8 border-Amber flex items-center justify-center gap-4">
                    <div className="w-full h-full bg-train-sm md:bg-trains bg-no-repeat bg-cover">
                        <div className="h-full w-full bg-gradient-to-b md:bg-gradient-to-r from-black to-transparent md:pl-24 gap-12 flex flex-col justify-center items-center md:items-start">
                            <h1 className="text-Amber text-xl md:text-3xl font-semibold">
                                INDUSTRIE FERROVIAIRE
                            </h1>
                            <p className="text-white w-4/6 md:w-3/6  text-lg font-semibold text-justify">
                                Nos brise-roches hydrauliques jouent un rôle
                                crucial dans l&apos;industrie ferroviaire en
                                facilitant la construction et l&apos;entretien
                                des voies ferrées. Ils sont utilisés pour briser
                                et enlever les roches, les blocs de béton et les
                                matériaux durs qui peuvent obstruer le tracé
                                ferroviaire.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] border-y-8 border-Amber flex items-center justify-center gap-4">
                    <div className="w-full h-full bg-agre-sm md:bg-agre bg-no-repeat bg-cover">
                        <div className="h-full w-full bg-gradient-to-b md:bg-gradient-to-r from-black to-transparent md:pl-24 gap-12 flex flex-col justify-center items-center md:items-start">
                            <h1 className="text-Amber text-xl md:text-3xl font-semibold">
                                AGRICULTURE
                            </h1>
                            <p className="text-white w-4/6 md:w-3/6  text-lg font-semibold text-justify">
                                Nous contribuons à optimiser les conditions
                                agricoles en rendant les terres plus fertiles et
                                en améliorant l&apos;efficacité des systèmes
                                d&apos;irrigation.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] border-y-8 border-Amber flex items-center justify-center gap-4">
                    <div className="w-full h-full bg-foret-sm md:bg-foret bg-no-repeat bg-cover">
                        <div className="h-full w-full bg-gradient-to-b md:bg-gradient-to-r from-black to-transparent md:pl-24 gap-12 flex flex-col justify-center items-center md:items-start">
                            <h1 className="text-Amber text-xl md:text-3xl font-semibold">
                                SECTEUR FORESTIER
                            </h1>
                            <p className="text-white w-4/6 md:w-3/6  text-lg font-semibold text-justify">
                                Nos puissants équipements permettent
                                d&apos;accélérer le processus d&apos;aménagement
                                forestier en facilitant le défrichement des
                                zones boisées, la création de pistes
                                d&apos;accès et la préparation des terrains pour
                                la plantation.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Secteurs;
