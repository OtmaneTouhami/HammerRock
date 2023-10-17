/* eslint-disable react/prop-types */
import logo from "../../../assets/logos/HRK-HAMMER-ROCK-LOGO.png";
import morocco from "../../../assets/logos/morocco.png";
import korea from "../../../assets/logos/south_korea.png";
import img1 from "../../../assets/hammer photos/Company Profile (Quality Control 2).webp";
import img2 from "../../../assets/hammer photos/Company Profile (Hammer Assemble Line 3).webp";
import img3 from "../../../assets/hammer photos/Company Profile (Quality Control 3).webp";
import img4 from "../../../assets/hammer photos/Company Profile (Hammer Assemble Line 2).webp";
import img5 from "../../../assets/hammer photos/GBN 1000H (for 150tons Excavator).webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react";
import { useScrollTo } from "react-use-window-scroll";

function Profile({ height }) {
    const scrollTo = useScrollTo();

    useEffect(() => {
        if (window.innerWidth > 767) {
            scrollTo({
                left: 0,
                top: window.innerHeight - 96,
                behavior: "smooth",
            });
        } else {
            scrollTo({ left: 0, top: height, behavior: "smooth" });
            // window.scrollTo(0, height);
        }
    }, [height, scrollTo]);

    return (
        <div>
            <div className="h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] bg-White border-y-8 border-y-Amber p-12 flex flex-col items-center gap-4">
                <div className="h-full flex flex-col items-center gap-4">
                    <h1 className="basis-1/12 text-4xl md:text-5xl font-extrabold text-Amber tracking-wide">
                        Profile
                    </h1>
                    <div className="basis-11/12 flex flex-col md:flex-row  items-center md:gap-4">
                        <div className="basis-6/12 flex flex-col items-start p-4 justify-center gap-y-3">
                            <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide">
                                HRK
                            </h1>
                            <p className="tracking-wider text-justify text-sm md:text-lg">
                                Hammer Rock Korea est une entreprise marocaine
                                spécialisée dans la fabrication de brise-roches
                                hydrauliques. Fondée avec une vision pionnière
                                et une forte détermination, Hammer Rock Korea a
                                développé sa technologie de pointe et à sa
                                capacité à offrir des solutions innovantes pour
                                les industries de la construction, de
                                l&apos;extraction minière et de la démolition.
                            </p>
                        </div>
                        <div className="flex justify-center items-center basis-6/12 h-full w-full">
                            <div className="w-4/6  md:w-96 rounded-2xl">
                                <img src={logo} alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] bg-white border-y-8 border-Amber p-12 flex flex-col md:flex-row items-center gap-4">
                <div className="basis-1/2 flex flex-col items-start p-4 justify-center gap-y-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide">
                        Équipe HRK
                    </h1>
                    <p className="tracking-wider text-justify md:text-lg">
                        Dotée d&apos;une équipe de professionnels hautement
                        qualifiés et passionnés, l&apos;entreprise s&apos;est
                        engagée à fournir des équipements d&apos;une qualité
                        exceptionnelle, alliant puissance, efficacité et
                        durabilité.
                    </p>
                </div>
                <div className="flex justify-center items-center flex-col gap-2 basis-6/12 h-full w-full">
                    <img src={img1} className="w-4/6 rounded-2xl" />
                    <img src={img2} className="w-4/6 rounded-2xl" />
                </div>
            </div>
            <div className="h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] bg-white border-y-8 border-Amber p-12 flex flex-col md:flex-row items-center gap-4">
                <div className="basis-1/2 flex flex-col items-start p-4 justify-center gap-y-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide">
                        Engagement
                    </h1>
                    <p className="tracking-wider text-justify md:text-lg">
                        L&apos;engagement de Hammer Rock Korea envers la
                        recherche et le développement se reflète dans ses
                        brise-roches hydrauliques de dernière génération. En
                        mettant l&apos;accent sur l&apos;innovation,
                        l&apos;entreprise s&apos;efforce continuellement
                        d&apos;améliorer ses produits pour répondre aux besoins
                        toujours changeants de l&apos;industrie.
                    </p>
                </div>
                <div className="flex justify-center items-center basis-6/12 h-full w-full">
                    <img src={img3} className="w-4/6 rounded-2xl" />
                </div>
            </div>
            <div className="h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] bg-white border-y-8 border-Amber p-12 flex flex-col items-center gap-12">
                <div className="basis-1/4 flex flex-col items-center p-4 justify-center gap-y-12">
                    <h1 className="text-3xl text-center md:text-4xl 2xl:text-5xl font-extrabold tracking-wide">
                        Brise-roches hydrauliques
                    </h1>
                    <p className="tracking-wider text-center md:text-lg 2xl:text-2xl">
                        Les brise-roches hydrauliques de Hammer Rock Korea sont
                        conçus pour offrir des performances optimales même dans
                        les conditions les plus exigeantes, garantissant ainsi
                        une productivité accrue sur les chantiers les plus
                        complexes.
                    </p>
                </div>
                <Swiper
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    navigation={true}
                    loopedSlides={true}
                    loop={true}
                    modules={[Autoplay, Navigation, EffectCards]}
                    style={{
                        "--swiper-navigation-color": "#FAC204",
                        "--swiper-navigation-size": "32px",
                    }}
                    className="basis-3/4 w-full"
                >
                    <SwiperSlide className="flex justify-center">
                        <img src={img4} className=" rounded-2xl" />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center">
                        <img src={img5} className=" rounded-2xl" />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center">
                        <img src={img3} className=" rounded-2xl" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] bg-white border-y-8 border-Amber p-12 flex flex-col items-center gap-4">
                <div className="basis-1/2 flex flex-col items-center p-4 justify-center gap-y-12">
                    <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-extrabold tracking-wide">
                        HRK
                    </h1>
                    <p className="tracking-wider text-center md:text-lg 2xl:text-2xl">
                        Hammer Rock Korea incarne la réussite d&apos;une
                        entreprise marocaine qui a su conjuguer savoir-faire
                        technique et innovation. Son histoire illustre
                        parfaitement la capacité du Maroc à abriter des
                        entreprises de calibre international.
                    </p>
                </div>
                <div className="flex flex-wrap justify-around items-center  basis-6/12 h-full w-full">
                    <img
                        src={korea}
                        className="basis-1/2 w-3/6 md:basis-auto md:w-1/6 rounded-2xl drop-shadow-xl hover:scale-105"
                    />
                    <img
                        src={logo}
                        className=" order-first w-3/6  basis-4/6 md:basis-auto md:order-none md:w-1/6 rounded-2xl drop-shadow-xl hover:scale-105"
                    />
                    <img
                        src={morocco}
                        className="basis-1/2 w-3/6 md:basis-auto md:w-1/6 rounded-2xl drop-shadow-xl hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
}

export default Profile;
