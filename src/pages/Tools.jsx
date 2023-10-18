import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../assets/images/bg_top-hrk-tools.webp";
import img2 from "../assets/images/img_top-hrk-tools.png";
import img3 from "../assets/images/img_tool-code-ch_01.png";
import img4 from "../assets/images/img_tool-code-ch_02.png";
import img5 from "../assets/images/img_tool-code-mo_01.png";
import img6 from "../assets/images/img_tool-code-mo_02.png";
import img7 from "../assets/images/img_tool-code-co_01.png";
import img8 from "../assets/images/img_tool-code-co_02.png";
import img9 from "../assets/images/img_tool-code-bl_01.png";
import img10 from "../assets/images/img_tool-code-bl_02.png";
import img11 from "../assets/images/img_tool-manufacturing_tab1_1.jpg";
import img12 from "../assets/images/img_tool-manufacturing_tab1_2.jpg";
import img13 from "../assets/images/img_tool-manufacturing_tab2_1.jpg";
import img14 from "../assets/images/img_tool-manufacturing_tab2_2.jpg";
import img15 from "../assets/images/img_tool-manufacturing_tab3_1.jpg";
import img16 from "../assets/images/img_tool-manufacturing_tab3_2.jpg";
import img17 from "../assets/images/img_tool-manufacturing_tab4_1.jpg";
import img18 from "../assets/images/img_tool-manufacturing_tab4_2.jpg";
import img19 from "../assets/images/img_tool-pic_1.jpg";
import img20 from "../assets/images/img_tool-pic_2.jpg";
import img21 from "../assets/images/img_tool-pic_3.jpg";
import img22 from "../assets/images/img_tool-pic_4.jpg";
import img23 from "../assets/images/img_tool-pic_5.jpg";
import img24 from "../assets/images/img_tool-pic_6.jpg";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

function Tools() {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const updateViewportWidth = () => {
        setViewportWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", updateViewportWidth);
    }, [viewportWidth]);

    return (
        <div className="mt-20 md:mt-24">
            <div className="px-6 md:px-8 pt-12 pb-4 border-y-8 border-y-Amber">
                <Fade direction="left" cascade damping={0.1} duration={500} triggerOnce>
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">
                        Outil
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-Amber font-bold mb-2 relative before:h-2.5 before:w-2.5 md:before:w-3.5  md:before:h-3.5  before:bg-Black before:absolute before:-left-0 before:top-3 pl-6">
                        HRK Outils
                    </h2>
                    <p className="md:w-5/6 leading-relaxed md:text-lg mb-6 tracking-wider text-justify">
                        <span className="font-bold text-lg md:text-xl">
                            HRK
                        </span>{" "}
                        fabrique la plus large gamme d&apos;outils de démolition
                        de haute qualité en Corée, compatibles avec la plupart
                        des marteaux hydrauliques lourds. Les ingénieurs de{" "}
                        <span className="font-bold text-lg md:text-xl">
                            HRK
                        </span>{" "}
                        font de leur mieux dans le processus de fabrication, le
                        contrôle de la qualité et la recherche et développement
                        pour produire les outils de démolition de la plus haute
                        qualité au monde.
                    </p>
                    <figure className="w-full relative mb-48 md:mb-56">
                        <img
                            src={img1}
                            className="border-2 border-Amber w-full"
                        />
                        <img
                            src={img2}
                            className="max-w-full absolute top-3/4"
                        />
                    </figure>

                    <h2 className="text-2xl md:text-3xl text-Amber font-bold mb-2 relative before:h-2.5 before:w-2.5 md:before:h-3.5 md:before:w-3.5 before:bg-Black before:absolute before:-left-0 before:top-3 pl-6">
                        Description Code de l&apos;outil
                    </h2>
                    {/* Table of information */}
                    <div className="overflow-hidden overflow-x-auto mt-12 xl:flex xl:items-center xl:justify-center">
                        <table className="border-t-4 border-t-Amber min-w-[850px] xl:w-fit ">
                            <thead className="bg-Amber/20">
                                <tr>
                                    <th
                                        colSpan="2"
                                        className="text-lg py-[15px] px-[10px]"
                                    >
                                        Shape
                                    </th>
                                    <th className="text-lg py-[15px] px-[10px]">
                                        Type
                                    </th>
                                    <th className="text-lg py-[15px] px-[10px]">
                                        Code
                                    </th>
                                    <th className="text-lg py-[15px] px-[10px]">
                                        Application
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="md:px-12">
                                        <img src={img3} alt="chisel / shape" />
                                    </td>
                                    <td className="md:px-12">
                                        <img src={img4} alt="chisel / shape" />
                                    </td>
                                    <td className="text-lg px-4">CHISEL</td>
                                    <td className="text-lg px-8">CH</td>
                                    <td className="md:px-12">
                                        <p className="text-lg mb-2">
                                            NON-ABRASIVE BUT DUCTILE ROCK
                                            <br />
                                            LOW OR MEDIUM PENETRATION RATE
                                        </p>
                                        <div>
                                            <ul className="text-lg flex items-center justify-center flex-wrap">
                                                <li className="basis-1/2 relative before:h-2 before:w-2  before:bg-Amber before:absolute before:left-6 before:top-3">
                                                    Concrete
                                                </li>
                                                <li className="basis-1/2 relative before:h-2 before:w-2  before:bg-Amber before:absolute before:left-6 before:top-3">
                                                    Tunnelling
                                                </li>
                                                <li className="basis-1/2 relative before:h-2 before:w-2  before:bg-Amber before:absolute before:left-6 before:top-3">
                                                    Benching
                                                </li>
                                                <li className="basis-1/2 relative before:h-2 before:w-2  before:bg-Amber before:absolute before:left-6 before:top-3">
                                                    Trenching
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="md:px-12">
                                        <img src={img5} alt="MOIL / shape" />
                                    </td>
                                    <td className="md:px-12">
                                        <img src={img6} alt="MOIL / shape" />
                                    </td>
                                    <td className="text-lg px-4">MOIL</td>
                                    <td className="text-lg px-8">MO</td>
                                    <td className="md:px-12">
                                        <p className="text-lg mb-2">
                                            SOFT, NON-AERASIVE ROCK
                                            <br />
                                            HIGH PENETRATION RATE
                                        </p>
                                        <div>
                                            <ul className="text-lg flex items-center justify-center flex-wrap">
                                                <li className="basis-1/2 relative before:h-2 before:w-2  before:bg-Amber before:absolute before:left-6 before:top-3">
                                                    Concrete
                                                </li>
                                                <li className="basis-1/2 relative before:h-2 before:w-2  before:bg-Amber before:absolute before:left-6 before:top-3">
                                                    Tunnelling
                                                </li>
                                                <li className="basis-1/2 relative before:h-2 before:w-2  before:bg-Amber before:absolute before:left-6 before:top-3">
                                                    Trenching
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="md:px-12">
                                        <img src={img7} alt="CONE / shape" />
                                    </td>
                                    <td className="md:px-12">
                                        <img src={img8} alt="CONE / shape" />
                                    </td>
                                    <td className="text-lg px-4">CONE</td>
                                    <td className="text-lg px-8">CO</td>
                                    <td>
                                        <p className="text-lg mb-2">
                                            SOFT, NON-AERASIVE ROCK
                                        </p>
                                        <div className="md:px-12">
                                            <ul className="text-lg flex items-center justify-center flex-wrap">
                                                <li className="basis-1/2 relative before:h-2 before:w-2  before:bg-Amber before:absolute before:left-6 before:top-3">
                                                    Concrete
                                                </li>
                                                <li className="basis-1/2 relative before:h-2 before:w-2  before:bg-Amber before:absolute before:left-5 before:top-3">
                                                    Tunnelling
                                                </li>
                                                <li className="basis-1/2 relative before:h-2 before:w-2  before:bg-Amber before:absolute before:left-5 before:top-3">
                                                    Trenching
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="md:px-12">
                                        <img src={img9} alt="BLUNT / shape" />
                                    </td>
                                    <td className="md:px-12">
                                        <img src={img10} alt="BLUNT / shape" />
                                    </td>
                                    <td className="text-lg px-4">BLUNT</td>
                                    <td className="text-lg px-8">BL</td>
                                    <td className="md:px-12">
                                        <p className="text-lg mb-2">
                                            SOFT OR HARD
                                            <br />
                                            BUT LOW OR MEDIUM ABRASIVE ROCK
                                        </p>
                                        <ul className="text-lg flex items-center justify-between flex-wrap">
                                            <li className="basis-1/2 relative before:h-2 before:w-2  before:bg-Amber before:absolute before:left-6 before:top-3">
                                                Concrete
                                            </li>
                                            <li className="basis-1/2 relative before:h-2 before:w-2  before:bg-Amber before:absolute before:-left-2 before:top-3">
                                                Breaking Boulders
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="px-4 py-12 space-y-2 text-justify tracking-wide">
                        <div className="flex justify-between gap-4">
                            <span className="bg-Amber h-5 w-5 flex items-center justify-center font-bold rounded-sm mt-px ">
                                1
                            </span>
                            <p className="basis-full">
                                Les outils{" "}
                                <span className="font-bold">HRK</span> sont
                                garantis contre les défauts de matériau et de
                                fabrication.
                            </p>
                        </div>
                        <div className="flex justify-between gap-4">
                            <span className="bg-Amber h-5 w-5 flex items-center justify-center font-bold rounded-sm mt-px">
                                2
                            </span>
                            <p className="basis-full">
                                La responsabilité de{" "}
                                <span className="font-bold">HRK</span> en ce qui
                                concerne toute réclamation de garantie se limite
                                au remplacement des outils et ne s&apos;étend
                                pas à d&apos;autres dépenses engagées ni aux
                                dommages consécutifs.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl text-Amber font-bold mb-2 relative before:h-2.5 before:w-2.5 md:before:h-3.5 md:before:w-3.5 before:bg-Black before:absolute before:-left-0 before:top-3 pl-6 mt-4">
                        Processus de fabrication et de contrôle de la qualité
                    </h2>

                    <Swiper
                        navigation={true}
                        loopedSlides={true}
                        loop={true}
                        modules={[Navigation, EffectCards]}
                        style={{
                            "--swiper-navigation-color": "#FAC204",
                            "--swiper-navigation-size": "32px",
                        }}
                        className="mt-8 md:mt-12"
                    >
                        <SwiperSlide className="bg-Black px-6 py-8 border-y-8 border-y-Amber">
                            <div>
                                <h2 className="text-Amber text-xl md:text-2xl font-bold text-center tracking-wider">
                                    Tournage et fraisage
                                </h2>
                                <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-4">
                                    <figure>
                                        <img src={img11} />
                                    </figure>
                                    <figure>
                                        <img src={img12} />
                                    </figure>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-Black px-6 py-8 border-y-8 border-y-Amber">
                            <div>
                                <h2 className="text-Amber text-xl md:text-2xl font-bold text-center tracking-wider">
                                    Traitement thermique
                                </h2>
                                <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-4">
                                    <figure>
                                        <img src={img13} />
                                    </figure>
                                    <figure>
                                        <img src={img14} />
                                    </figure>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-Black px-6 py-8 border-y-8 border-y-Amber">
                            <div>
                                <h2 className="text-Amber text-xl md:text-2xl font-bold text-center tracking-wider">
                                    Inspection
                                </h2>
                                <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-4">
                                    <figure>
                                        <img src={img15} />
                                    </figure>
                                    <figure>
                                        <img src={img16} />
                                    </figure>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="bg-Black px-6 py-8 border-y-8 border-y-Amber">
                            <div>
                                <h2 className="text-Amber text-xl md:text-2xl font-bold text-center tracking-wider">
                                    Peinture
                                </h2>
                                <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-4">
                                    <figure>
                                        <img src={img17} />
                                    </figure>
                                    <figure>
                                        <img src={img18} />
                                    </figure>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <h2 className="text-2xl md:text-3xl text-Amber font-bold mb-2 relative before:h-2.5 before:w-2.5 md:before:h-3.5 md:before:w-3.5 before:bg-Black before:absolute before:-left-0 before:top-3 pl-6 mt-8">
                        Guide de garantie des réclamations pour les outils
                    </h2>
                    <p className="leading-relaxed md:text-lg mb-6 tracking-wider mt-3 text-justify font-semibold">
                        Le but de ce guide est de vous permettre de montrer à
                        votre client l&apos;application correcte des outils{" "}
                        <span className="font-bold text-lg md:text-xl">
                            HRK
                        </span>{" "}
                        et de vous aider à résoudre immédiatement les plaintes
                        lorsqu&apos;elles surviennent. Lorsqu&apos;un outil
                        semble ne pas avoir une durée de vie satisfaisante, une
                        inspection visuelle résout souvent rapidement la cause
                        et permet d&apos;économiser sur les coûts de transport
                        et de prévenir la frustration lorsque la garantie est
                        refusée.
                    </p>
                    <h2 className="text-xl md:text-2xl font-bold mb-2 mt-6">
                        Comment un outil de démolition brise-t-il la roche et le
                        béton ?
                    </h2>
                    <div className="leading-relaxed md:text-lg mb-6 tracking-wider mt-3 text-justify font-semibold">
                        <p>
                            Lorsque le piston du marteau (briseur) frappe le
                            sommet de l&apos;outil de démolition, il envoie une
                            onde de contrainte compressive jusqu&apos;à
                            l&apos;extrémité de travail de l&apos;outil.
                        </p>
                        <p className="mt-2">
                            Tant que l&apos;outil de démolition est en contact
                            avec la roche ou le béton à casser, c&apos;est cette
                            onde de contrainte compressive qui fracture la
                            roche. Immédiatement après l&apos;onde de contrainte
                            compressive, une onde de contrainte de traction se
                            forme lorsque le piston du marteau se soulève du
                            sommet de l&apos;outil de démolition !
                        </p>
                        <p className="mt-10">
                            Ce cycle de contraintes compressives et de
                            contraintes de traction se répète pour chaque coup
                            de marteau. Évidemment, tout ce qui perturbe la
                            &quot;force&quot; de l&apos;onde de contrainte
                            compressive pendant le service, par exemple le
                            &quot;jeu libre&quot; ou la flexion de l&apos;outil
                            de démolition en raison de la levier, entraînera une
                            perte d&apos;efficacité du briseur pouvant atteindre
                            80 % et un risque de défaillance par fatigue de
                            l&apos;outil lui-même.
                        </p>
                    </div>
                    <hr className=" border-t-4 border-Amber mt-12 mb-6" />

                    <Swiper
                        navigation={viewportWidth > 767 ? true : false}
                        autoHeight={true}
                        modules={[Navigation, Pagination, EffectCards]}
                        pagination={{
                            clickable: true,
                        }}
                        style={{
                            "--swiper-pagination-color": "#FAC204",
                            "--swiper-navigation-color": "#FAC204",
                            "--swiper-navigation-size": "32px",
                            "--swiper-pagination-bullet-inactive-color":
                                "#747474",
                            "--swiper-pagination-bullet-inactive-opacity": ".3",
                            "--swiper-pagination-bullet-size": "12px",
                            "--swiper-pagination-bullet-horizontal-gap": "12px",
                        }}
                    >
                        <SwiperSlide className="md:px-6 py-8">
                            <div>
                                <h2 className="text-Amber text-xl md:text-2xl font-bold  tracking-wider">
                                    Causes et Effets de la Fatigue
                                </h2>
                                <div className="py-4 md:p-8 flex flex-col md:flex-row items-center justify-center">
                                    <figure className="basis-1/2">
                                        <img src={img19} />
                                    </figure>
                                    <div className="basis-1/2 md:px-12 space-y-4">
                                        <b className="border-b-2 border-b-Black text-lg">
                                            01
                                        </b>
                                        <p className="text-lg">
                                            La principale cause du stress de
                                            fatigue accru dans un outil de
                                            démolition est toute forme de
                                            pression latérale pendant le service
                                            qui crée de la flexion. Ainsi,
                                            utiliser l&apos;outil comme levier,
                                            utiliser le mauvais angle
                                            d&apos;attaque ou essayer de briser
                                            le sol en utilisant la traction de
                                            la machine sont tous préjudiciables
                                            à la durée de vie de l&apos;outil de
                                            démolition et doivent être évités.
                                        </p>
                                    </div>
                                </div>

                                <div className="py-4 md:p-8 flex flex-col md:flex-row items-center justify-center">
                                    <div className="order-2 md:order-1 basis-1/2 md:px-12 space-y-4">
                                        <b className="border-b-2 border-b-Black text-lg">
                                            02
                                        </b>
                                        <p className="text-lg">
                                            D&apos;autres causes de
                                            l&apos;augmentation du stress de
                                            fatigue dans un outil de démolition
                                            incluent : <br />{" "}
                                            <span className="font-bold">
                                                A) Jeu libre
                                            </span>
                                            <br /> En général, il s&apos;agit de
                                            toute situation où le piston du
                                            marteau frappe le sommet de
                                            l&apos;outil de démolition, mais
                                            l&apos;extrémité de travail
                                            n&apos;est pas en contact approprié
                                            avec la roche ou le béton à casser.
                                            Cela inclut les situations où
                                            l&apos;outil glisse hors du travail
                                            et également lorsque la percée de
                                            dalles de béton minces ou de gros
                                            rochers se produit.
                                        </p>
                                    </div>
                                    <figure className="basis-1/2 order-1 md:order-2">
                                        <img src={img20} />
                                    </figure>
                                </div>
                                <div className="md:px-20 space-y-2">
                                    <p className="text-lg">
                                        <span className="font-bold">
                                            B) Froid
                                        </span>
                                        <br />
                                        Les températures basses rendent un outil
                                        de démolition plus susceptible de subir
                                        une défaillance par fatigue. Les outils
                                        doivent être réchauffés avant
                                        utilisation.
                                    </p>
                                    <p className="text-lg">
                                        <span className="font-bold">
                                            C) Dommages mécaniques et thermiques
                                        </span>
                                        <br /> Toute forme de dommage à la
                                        surface d&apos;un outil de démolition le
                                        rend plus susceptible de subir une
                                        défaillance par fatigue. <br />
                                        Ainsi, il convient de prendre toutes les
                                        précautions nécessaires pour éviter les
                                        entailles accidentelles ou le soudage
                                        par contact (« galling » ou « pick-up »)
                                        en raison du contact entre l&apos;outil
                                        et la douille de mandrin par manque de
                                        lubrification ou de levier excessif.{" "}
                                        <span className="font-bold">
                                            (voir PIC 2)
                                        </span>
                                    </p>
                                    <p className="text-lg">
                                        <span className="font-bold">
                                            D) Lubrification
                                        </span>
                                        <br />
                                        Il faut veiller à éviter tout contact
                                        métal sur métal qui, suite au « galling
                                        » ou au « pick-up », pourrait causer des
                                        marques de dommage profondes,
                                        lesquelles, à leur tour, conduisent à la
                                        formation de fissures par fatigue et à
                                        la défaillance ultérieure de
                                        l&apos;outil de démolition. Assurez-vous
                                        que la tige de l&apos;outil de
                                        démolition est bien lubrifiée avant de
                                        la fixer dans la machine. La graisse au
                                        bisulfure de molybdène est recommandée
                                        pour cette application, à des
                                        intervalles de trois heures ou selon les
                                        instructions du fabricant.
                                    </p>
                                    <p className="text-lg">
                                        <span className="font-bold">
                                            E) Corrosion
                                        </span>
                                        <br />
                                        Un outil de démolition rouillé est plus
                                        susceptible de subir une défaillance par
                                        fatigue, il convient donc de bien
                                        graisser les outils et de les protéger
                                        des intempéries lorsqu&apos;ils ne sont
                                        pas utilisés.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="md:px-6 py-8">
                            <div>
                                <h2 className="text-Amber text-xl md:text-2xl font-bold  tracking-wider">
                                    Défaillance par fatigue de l&apos;outil de
                                    démolition
                                </h2>
                                <div className="py-4 md:p-8 flex flex-col md:flex-row items-center justify-center">
                                    <figure className="basis-1/2">
                                        <img src={img21} />
                                    </figure>
                                    <div className="basis-1/2 md:px-12 space-y-4">
                                        <b className="border-b-2 border-b-Black text-lg">
                                            03
                                        </b>
                                        <p className="text-lg">
                                            Une défaillance par fatigue de
                                            l&apos;outil de démolition se
                                            produira généralement à environ
                                            4&quot; (100 mm) de part et
                                            d&apos;autre de la face avant du
                                            mandrin.
                                        </p>
                                    </div>
                                </div>

                                <div className="py-4 md:p-8 flex flex-col md:flex-row items-center justify-center">
                                    <div className="order-2 md:order-1 basis-1/2 md:px-12 space-y-4">
                                        <b className="border-b-2 border-b-Black text-lg">
                                            04
                                        </b>
                                        <p className="text-lg">
                                            Une autre zone de défaillance
                                            légèrement moins courante peut se
                                            situer à environ 8&quot; (200 mm) de
                                            l&apos;extrémité de travail, en
                                            fonction de la nature de
                                            l&apos;utilisation.
                                            <br /> La surface de rupture
                                            elle-même présentera généralement
                                            une zone polie semi-circulaire, le
                                            reste ayant une apparence plus
                                            rugueuse.
                                        </p>
                                    </div>
                                    <figure className="basis-1/2 order-1 md:order-2">
                                        <img src={img22} />
                                    </figure>
                                </div>
                                <div className="py-4 space-y-2 border-t-2 border-dashed border-t-Amber">
                                    <p className="text-lg">
                                        The polished semi-circular area in pic4
                                        isthe fatigue area and generally
                                        startsfrom a damage mark or otherstress
                                        raisers on the outside of the demolition
                                        tool and spreads inwards. The fatigue
                                        area slowly widens until the stresses
                                        being applied to the demolition tool
                                        cause sudden failure of the remaining
                                        section. Generally, the size of the
                                        fatigue area indicates the level of
                                        stress applied to the tool, i.e. the
                                        smaller the fatigue area, the higher the
                                        stresslevel, although it must be borne
                                        in mind that once initiation of a
                                        fatigue crack hastaken place, it
                                        requires a lower stress level to cause
                                        it to grow.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="md:px-6 py-8">
                            <div>
                                <h2 className="text-Amber text-xl md:text-2xl font-bold  tracking-wider">
                                    Défaillances typiques (guide des
                                    réclamations de garantie)
                                </h2>
                                <div className="py-4 md:p-8 flex flex-col md:flex-row items-center justify-center">
                                    <figure className="basis-1/2">
                                        <img src={img23} />
                                    </figure>
                                    <div className="basis-1/2 md:px-12 space-y-4">
                                        <b className="border-b-2 border-b-Black text-lg">
                                            05
                                        </b>
                                        <p className="text-lg">
                                            Fissures typiques causées par une
                                            flexion excessive de l&apos;outil de
                                            démolition. Réclamations de garantie
                                            rejetées.
                                        </p>
                                    </div>
                                </div>

                                <div className="py-4 md:p-8 flex flex-col md:flex-row items-center justify-center">
                                    <div className="order-2 md:order-1 basis-1/2 md:px-12 space-y-4">
                                        <b className="border-b-2 border-b-Black text-lg">
                                            06
                                        </b>
                                        <p className="text-lg">
                                            Fracture typique due à un stress
                                            élevé, généralement causée par
                                            l&apos;utilisation de la machine
                                            pour &apos;tirer&apos;.
                                            <br /> Réclamations de garantie
                                            rejetées.
                                        </p>
                                    </div>
                                    <figure className="basis-1/2 order-1 md:order-2">
                                        <img src={img24} />
                                    </figure>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Fade>
            </div>
        </div>
    );
}

export default Tools;
