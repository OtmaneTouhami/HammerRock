import { useState } from "react";
import { Link } from "react-router-dom";
import { PiArrowSquareRightBold } from "react-icons/pi";
import { MdDoubleArrow } from "react-icons/md";
import SelectionCards from "../components/SelectionCards";
import img1 from "../assets/images/img1.webp";
import img3 from "../assets/hammer photos/Company Profile (Hammer Assemble Line 4).webp";
// import img4 from "../assets/images/img1 (1).webp";
import img4 from "../assets/hammer photos/GBN 1000H (for 150tons Excavator) 2.webp";
import img5 from "../assets/hammer photos/Hyundai with GB Hammers.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

function Home() {
    const [selected, setSelected] = useState(1);
    return (
        <div className="mt-20 md:mt-24">
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: true,
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
                    "--swiper-pagination-bullet-size": "12px",
                    "--swiper-pagination-bullet-horizontal-gap": "12px",
                }}
            >
                <SwiperSlide className="bg-Black flex items-center justify-center gap-4 flex-wrap md:flex-nowrap  px-4 border-y-8 border-y-Amber h-[calc(100vh-80px)] static z-0 md:h-[calc(100vh-95px)]">
                    <div className="flex flex-col items-start gap-4 px-4 pt-12 md:pl-12 md:pr-0 md:pt-0">
                        <Fade duration={2000} delay={100}>
                            <h1 className="text-Amber text-2xl md:text-3xl 2xl:text-5xl lg:mb-6 font-extrabold ">
                                Notre Engagement : Innovation & Performance
                            </h1>
                        </Fade>
                        <Fade duration={2000} delay={400}>
                            <div className="text-base md:text-lg 2xl:text-2xl text-white">
                                Explorez notre gamme de
                                <i> brise-roches hydrauliques</i> de pointe pour
                                une démolition{" "}
                                <span className="font-bold text-Amber">
                                    efficace
                                </span>{" "}
                                et
                                <span className="font-bold text-Amber">
                                    {" "}
                                    précise
                                </span>
                                , avec un engagement vers{" "}
                                <span className="font-bold text-Amber">
                                    l&apos;innovation
                                </span>{" "}
                                , la
                                <span className="font-bold text-Amber">
                                    {" "}
                                    performance
                                </span>
                                , et la{" "}
                                <span className="font-bold text-Amber">
                                    fiabilité
                                </span>
                                .
                            </div>
                        </Fade>
                        <Fade
                            duration={2000}
                            delay={700}
                            className="self-center md:self-auto"
                        >
                            <Link
                                to={"/about"}
                                className="relative z-0 before:absolute before:w-8 md:before:w-10 2xl:before:w-12 before:h-full before:rounded-2xl before:inset-0 before:-z-30 before:bg-Amber flex justify-between items-center py-1 md:py-1 2xl:py-2 px-6 md:px-10 mt-4 md:mt-8 text-lg md:text-xl 2xl:text-2xl font-bold gap-4 text-Amber hover:text-Black hover:before:w-full before:transition-all hover:before:duration-700 before:ease-in-out"
                            >
                                <MdDoubleArrow className="absolute z-0 left-1.5 md:left-2.5 2xl:left-[12px] text-Black" />
                                <span className="ml-4 2xl:ml-8">
                                    Explorez notre expertise de près
                                </span>
                            </Link>
                        </Fade>
                    </div>
                    <Zoom duration={1000}>
                        <div>
                            <img
                                src={img1}
                                className=" rounded-3xl w-5/6 sm:w-4/6 lg:w-5/6 mx-auto object-cover"
                            />
                        </div>
                    </Zoom>
                </SwiperSlide>
                <SwiperSlide className="bg-Black flex items-center justify-center gap-4 flex-wrap md:flex-nowrap  px-4 border-y-8 border-y-Amber h-[calc(100vh-80px)] static z-0 md:h-[calc(100vh-95px)]">
                    <Zoom duration={1000}>
                        <div className="order-last md:order-first">
                            <img
                                src={img3}
                                className=" rounded-3xl w-5/6 sm:w-4/6 lg:w-5/6 mx-auto object-cover"
                            />
                        </div>
                    </Zoom>

                    <div className="flex flex-col items-start gap-4 px-4 pt-12 md:pl-12 md:px-0 md:pt-0 md:pr-12 md:w-5/6 xl:w-3/6 order-first md:order-last">
                        <Fade duration={2000} delay={100}>
                            <div className="text-Amber text-2xl md:text-3xl 2xl:text-5xl lg:mb-6 font-extrabold ">
                                Une Expertise Mondiale
                            </div>
                        </Fade>
                        <Fade duration={2000} delay={400}>
                            <div className="text-base md:text-lg 2xl:text-2xl text-white">
                                Nous sommes fiers de notre{" "}
                                <span className="font-bold text-Amber">
                                    expérience mondiale{" "}
                                </span>
                                dans{" "}
                                <span className="font-bold">
                                    l&apos;industrie des brise-roches
                                    hydrauliques.
                                </span>{" "}
                                Nos solutions ont fait leurs preuves sur de
                                grands chantiers internationaux, démontrant
                                notre engagement envers
                                <span className="font-bold text-Amber">
                                    {" "}
                                    l&apos;excellence.
                                </span>
                            </div>
                        </Fade>
                        <Fade
                            duration={2000}
                            delay={700}
                            className="self-center md:self-auto"
                        >
                            <Link
                                to={"/about"}
                                className="relative z-0 before:absolute before:w-8 md:before:w-10 2xl:before:w-12 before:h-full before:rounded-2xl before:inset-0 before:-z-30 before:bg-Amber flex justify-between items-center py-1 md:py-1 2xl:py-2 px-6 md:px-10 mt-4 md:mt-8 text-lg md:text-xl 2xl:text-2xl font-bold gap-4 text-Amber hover:text-Black hover:before:w-full before:transition-all hover:before:duration-700 before:ease-in-out "
                            >
                                <MdDoubleArrow className="absolute z-0 left-1.5 md:left-2.5 2xl:left-[12px] text-Black" />
                                <span className="ml-4 2xl:ml-8">
                                    Explorez notre expertise de près
                                </span>
                            </Link>
                        </Fade>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* First section */}
            <div className="h-fit grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 px-4 py-8 md:h-[calc(100vh-96px)]">
                <div className="flex flex-col justify-center items-center gap-6 font-extrabold">
                    <Slide direction="left" triggerOnce>
                        <h2 className="text-3xl sm:text-4xl lg:text-4xl 2xl:text-5xl text-Amber">
                            Bâtir la Qualité,
                        </h2>
                        <h1 className="text-4xl sm:text-5xl lg:text-5xl 2xl:text-6xl text-Black">
                            Forger le Succès
                        </h1>
                        <p className="text-xl 2xl:text-2xl font-semibold text-center px-6 2xl:px-12">
                            Dans chaque engagement tenu, nous bâtissons un
                            avenir solide, forgé dans la qualité, qui mène au
                            succès. Votre vision est notre passion, et ensemble,
                            nous construisons un monde meilleur.
                        </p>
                    </Slide>
                </div>

                {/* image placeholder */}
                <Slide direction="right" triggerOnce>
                    <div className="flex justify-center h-auto w-auto p-4">
                        <div className="md:w-4/6 rounded-3xl">
                            <img
                                src={img4}
                                className=" rounded-3xl  h-5/6  w-full object-cover"
                            />
                        </div>
                    </div>
                </Slide>
                {/* image placeholder */}
                <Slide direction="left" triggerOnce>
                    <div className="flex order-3 md:order-none justify-center h-auto w-auto p-4">
                        <div className="bg-Boulder md:w-4/6 rounded-3xl">
                            <img
                                src={img5}
                                className="rounded-3xl  h-full  w-full object-cover"
                            />
                        </div>
                    </div>
                </Slide>
                <div className="flex flex-col justify-center items-center gap-5 font-extrabold">
                    <Slide direction="right" triggerOnce>
                        <div className="text-3xl sm:text-4xl lg:text-4xl md:mt-12 2xl:mt-0 2xl:text-5xl text-Amber">
                            Pièce par Pièce,
                        </div>
                        <div className="text-4xl sm:text-5xl lg:text-5xl 2xl:text-6xl text-Black">
                            Construisons l&apos;Avenir
                        </div>
                        <p className="text-xl 2xl:text-2xl font-semibold text-center px-6 2xl:px-12">
                            Dans chaque pièce, nous trouvons le potentiel de
                            créer un avenir meilleur. Chaque détail, chaque
                            effort nous rapproche de notre vision d&apos;un
                            avenir solide et prometteur. Ensemble, nous
                            façonnons demain, pièce par pièce.
                        </p>
                    </Slide>
                </div>
            </div>
            {/* Second section */}
            <div className="space-y-6 md:space-y-0 md:grid grid-rows-6 grid-cols-12 p-2 py-6 md:p-4 md:py-12 bg-Amber  border-y-8 border-y-Black">
                {/* Introduction */}
                <div className="row-span-1 col-span-12 px-4 md:px-12 flex flex-col justify-center md:items-center gap-2">
                    <Slide direction="up" triggerOnce>
                        <div className="text-xl md:text-2xl text-LightBrown font-bold uppercase">
                            business
                        </div>
                        <div className="text-3xl md:text-4xl text-Black font-bold uppercase">
                            hammer rock korea
                        </div>
                        <div className="text-lg md:text-xl md:text-center text-white font-medium">
                            HRK, un fabricant de brise-roches hydrauliques,
                            s&apos;engage à continuer de faire de notre mieux
                            afin d&apos;atteindre nos objectif à l&apos;avenir.
                        </div>
                    </Slide>
                </div>
                {/* Selection */}
                <div className="row-span-5 col-span-5 flex justify-center items-center">
                    <Fade cascade damping={0.1} triggerOnce>
                        <ul className="flex flex-col  gap-5 w-3/4">
                            <li
                                className={`${
                                    selected === 1
                                        ? "flex gap-4 items-center text-xl md:text-3xl text-Amber border-0"
                                        : "border-b-2 border-b-Black"
                                } capitalize md:text-2xl  font-bold text-Black w-fit cursor-pointer`}
                                onClick={() => setSelected(1)}
                            >
                                {selected === 1 && (
                                    <PiArrowSquareRightBold className="text-Black md:h-6 md:w-6 h-4 w-4 " />
                                )}
                                <span>Découvrir Notre Identité</span>
                            </li>
                            <li
                                className={`${
                                    selected === 2
                                        ? "flex gap-4 items-center text-xl md:text-3xl text-Amber border-0"
                                        : "border-b-2 border-b-Black"
                                } capitalize md:text-2xl  font-bold text-Black w-fit cursor-pointer`}
                                onClick={() => setSelected(2)}
                            >
                                {selected === 2 && (
                                    <PiArrowSquareRightBold className="text-Black md:h-6 md:w-6 h-4 w-4 " />
                                )}
                                <span>brise-roches hydrauliques</span>
                            </li>
                            <li
                                className={`${
                                    selected === 3
                                        ? "flex gap-4 items-center text-xl md:text-3xl text-Amber border-0"
                                        : "border-b-2 border-b-Black"
                                } capitalize md:text-2xl  font-bold text-Black w-fit cursor-pointer`}
                                onClick={() => setSelected(3)}
                            >
                                {selected === 3 && (
                                    <PiArrowSquareRightBold className="text-Black md:h-6 md:w-6 h-4 w-4 " />
                                )}
                                <span>pièces jointes</span>
                            </li>
                            <li
                                className={`${
                                    selected === 4
                                        ? "flex gap-4 items-center text-xl md:text-3xl text-Amber border-0"
                                        : "border-b-2 border-b-Black"
                                } capitalize md:text-2xl  font-bold text-Black w-fit cursor-pointer`}
                                onClick={() => setSelected(4)}
                            >
                                {selected === 4 && (
                                    <PiArrowSquareRightBold className="text-Black md:h-6 md:w-6 h-4 w-4 " />
                                )}
                                <span>outils</span>
                            </li>
                        </ul>
                    </Fade>
                </div>
                {/* Selection Cards */}
                <SelectionCards selected={selected} />
            </div>
        </div>
    );
}

export default Home;
// className="capitalize flex gap-4 items-center text-xl font-semibold text-LightBrown bg-Amber py-3.5 px-2 rounded-md cursor-pointer"
