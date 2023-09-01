import { useState } from "react";
import { Link } from "react-router-dom";
import { PiArrowSquareRightBold } from "react-icons/pi";
import { GrStatusUnknown } from "react-icons/gr";
import SelectionCards from "../components/SelectionCards";
import img1 from "../assets/images/img1.jpg";
// import img4 from "../assets/images/img4.jpg";
import img3 from "../assets/images/img3.jpg";
import img2 from "../assets/images/img2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation,EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Home() {
    const [selected, setSelected] = useState(1);
    return (
        <div className="mt-20 md:mt-24">
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                // autoHeight={true}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                loopedSlides={true}
                modules={[Autoplay, Pagination, Navigation,EffectCards]}
                style={{
                    "--swiper-pagination-color": "#FAC204",
                    "--swiper-navigation-color": "#FAC204",
                    "--swiper-pagination-bullet-inactive-color": "#747474",
                    "--swiper-pagination-bullet-inactive-opacity": ".3",
                    "--swiper-pagination-bullet-size": "12px",
                    "--swiper-pagination-bullet-horizontal-gap": "12px",
                }}
                className="h-[calc(100vh-80px)] static z-0 md:h-[calc(100vh-95px)]"
            >
                <SwiperSlide className="bg-Black grid grid-rows-2 md:grid-cols-2 md:grid-rows-none px-4  items-center border-y-8 border-y-Amber">
                    <div className="flex flex-col items-start gap-4 px-4 pt-12 md:pl-12 md:px-0 md:pt-0">
                        <div className="text-Amber text-2xl md:text-4xl font-extrabold ">
                            Notre Engagement : Innovation & Performance
                        </div>
                        <div className="text-base md:text-xl text-white">
                            Explorez notre gamme de brise-roches hydrauliques de
                            pointe pour une démolition efficace et précise, avec
                            un engagement vers l&apos;innovation, la
                            performance, et la fiabilité.
                        </div>
                        <Link
                            to={"/about"}
                            className="bg-Amber self-center md:self-auto rounded-md md:rounded-lg py-1.5 md:py-2 px-6 md:px-10 mt-4 md:mt-8 text-2xl font-bold flex gap-4  justify-around items-center"
                        >
                            Savoir plus
                            <GrStatusUnknown />
                        </Link>
                    </div>
                    <div className="flex justify-center h-auto w-auto p-4">
                        <div className="bg-Boulder w-5/6 rounded-3xl">
                            <img
                                src={img1}
                                className=" rounded-3xl  h-full  w-full object-cover"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-Black grid grid-rows-2 md:grid-cols-2 md:grid-rows-none px-4  items-center border-y-8 border-y-Amber">
                    <div className="order-last md:order-first flex justify-center h-auto w-auto p-4">
                        <div className="bg-Boulder w-5/6 rounded-3xl">
                            <img
                                src={img3}
                                className=" rounded-3xl  h-full  w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-4 px-4 pt-12 md:pl-12 md:px-0 md:pt-0">
                        <div className="text-Amber text-2xl md:text-4xl font-extrabold ">
                            Notre Engagement : Innovation & Performance
                        </div>
                        <div className="text-base md:text-xl text-white">
                            Explorez notre gamme de brise-roches hydrauliques de
                            pointe pour une démolition efficace et précise, avec
                            un engagement vers l&apos;innovation, la
                            performance, et la fiabilité.
                        </div>
                        <Link
                            to={"/about"}
                            className="bg-Amber self-center md:self-auto rounded-md md:rounded-lg py-1.5 md:py-2 px-6 md:px-10 mt-4 md:mt-8 text-2xl font-bold flex gap-4  justify-around items-center"
                        >
                            Savoir plus
                            <GrStatusUnknown />
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* First section */}
            <div className="h-[calc(100vh-80px)] grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 px-4 py-8 md:h-[calc(100vh-96px)]">
                <div className="flex flex-col justify-center items-center gap-6 font-extrabold">
                    <div className="text-3xl sm:text-4xl lg:text-5xl text-Amber">
                        Créer la Qualité,
                    </div>
                    <div className="text-4xl sm:text-5xl lg:text-6xl text-Black">
                        Forger le Succès
                    </div>
                </div>
                {/* image placeholder */}
                <div className="flex justify-center h-auto w-auto p-4">
                    <div className="bg-Boulder w-4/6 rounded-3xl">
                        <img
                            src={img2}
                            className=" rounded-3xl  h-full  w-full object-cover"
                        />
                    </div>
                </div>
                {/* image placeholder */}
                <div className="flex order-3 md:order-none justify-center h-auto w-auto p-4">
                    <div className="bg-Boulder w-4/6 rounded-3xl">
                        <img
                            src={img1}
                            className="rounded-3xl  h-full  w-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-5 font-extrabold">
                    <div className="text-3xl sm:text-4xl lg:text-5xl text-Amber">
                        Les Outils de Demain,
                    </div>
                    <div className="text-4xl sm:text-5xl lg:text-6xl text-Black">
                        Construits Aujourd&apos;hui
                    </div>
                </div>
            </div>
            {/* Second section */}
            <div className="grid grid-rows-6 grid-cols-12  p-4 py-12 bg-Amber  border-y-8 border-y-Black">
                {/* Introduction */}
                <div className="row-span-1 col-span-12 px-12 flex flex-col justify-center items-center gap-2">
                    <div className="text-2xl text-LightBrown font-bold uppercase">
                        business
                    </div>
                    <div className="text-4xl text-Black font-bold uppercase">
                        hammer rock korea
                    </div>
                    <div className="text-xl text-center text-white font-medium">
                        HRK, un fabricant de brise-roches hydrauliques,
                        s&apos;engage à continuer de faire de notre mieux afin
                        d&apos;atteindre nos objectif à l&apos;avenir.
                    </div>
                </div>
                {/* Selection */}
                <div className="row-span-5 col-span-5 flex justify-center items-center">
                    <ul className="flex flex-col gap-5 w-3/4">
                        <li
                            className={`${
                                selected === 1
                                    ? "flex gap-4 items-center text-3xl text-Amber border-0"
                                    : "border-b-2 border-b-Black"
                            } capitalize text-2xl  font-bold text-Black w-fit cursor-pointer`}
                            onClick={() => setSelected(1)}
                        >
                            {selected === 1 && (
                                <PiArrowSquareRightBold className="text-Black h-6 w-6" />
                            )}
                            <span>Découvrir Notre Identité</span>
                        </li>
                        <li
                            className={`${
                                selected === 2
                                    ? "flex gap-4 items-center text-3xl text-Amber border-0"
                                    : "border-b-2 border-b-Black"
                            } capitalize text-2xl  font-bold text-Black w-fit cursor-pointer`}
                            onClick={() => setSelected(2)}
                        >
                            {selected === 2 && (
                                <PiArrowSquareRightBold className="text-Black h-6 w-6" />
                            )}
                            <span>brise-roches hydrauliques</span>
                        </li>
                        <li
                            className={`${
                                selected === 3
                                    ? "flex gap-4 items-center text-3xl text-Amber border-0"
                                    : "border-b-2 border-b-Black"
                            } capitalize text-2xl  font-bold text-Black w-fit cursor-pointer`}
                            onClick={() => setSelected(3)}
                        >
                            {selected === 3 && (
                                <PiArrowSquareRightBold className="text-Black h-6 w-6" />
                            )}
                            <span>pièces jointes</span>
                        </li>
                        <li
                            className={`${
                                selected === 4
                                    ? "flex gap-4 items-center text-3xl text-Amber border-0"
                                    : "border-b-2 border-b-Black"
                            } capitalize text-2xl  font-bold text-Black w-fit cursor-pointer`}
                            onClick={() => setSelected(4)}
                        >
                            {selected === 4 && (
                                <PiArrowSquareRightBold className="text-Black h-6 w-6" />
                            )}
                            <span>outils</span>
                        </li>
                    </ul>
                </div>
                {/* Selection Cards */}
                <SelectionCards selected={selected} />
            </div>
        </div>
    );
}

export default Home;
// className="capitalize flex gap-4 items-center text-xl font-semibold text-LightBrown bg-Amber py-3.5 px-2 rounded-md cursor-pointer"
