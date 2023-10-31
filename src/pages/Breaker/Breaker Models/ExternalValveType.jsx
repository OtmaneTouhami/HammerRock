import { Fade } from "react-awesome-reveal";
import img1 from "../../../assets/hammer/GBN70TL-L-C.png";
import img2 from "../../../assets/hammer/GBN70TL-L.png";
import { Disclosure } from "@headlessui/react";
import { FiChevronUp } from "react-icons/fi";

export default function ExternalValveType() {
    return (
        <div className="mt-20 md:mt-24">
            <div className="border-y-8 border-y-Amber bg-gradient-to-b md:bg-gradient-to-r  from-Amber to-Black min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-95px)] flex flex-wrap md:flex-nowrap justify-center overflow-hidden">
                <div className="flex justify-center items-center md:block md:basis-1/2 md:relative">
                    <img
                        src={img1}
                        className="hidden absolute inset-1 w-4/6 rotate-45 md:block"
                    />
                    <img src={img2} className="p-4 w-3/6 md:hidden" />
                </div>
                <div className="md:basis-1/2 pl-8 -mt-5 md:pt-16 md:pl-12 md:pr-4 md:mt-0 text-white flex flex-col justify-center 2xl:gap-2">
                    <Fade cascade damping={0.5} direction="down">
                        <div>
                            <h1 className="text-Amber text-2xl md:text-4xl 2xl:text-5xl font-bold">
                                External valve type breaker
                            </h1>
                            <h3 className="text-md md:text-lg">
                                (HRK170N~HRK400N)
                            </h3>
                        </div>
                        <ul className="p-6 space-y-2 pl-1 list-disc">
                            <li className="list-inside relative 2xl:text-2xl md:text-xll text-lg">
                                Pièces couramment utilisées pour un entretien et
                                une maintenance faciles.
                            </li>
                            <li className="list-inside relative 2xl:text-2xl md:text-xl text-lg text-justify">
                                Des prix plus compétitifs.
                            </li>
                            <li className="list-inside relative 2xl:text-2xl md:text-xl text-lg text-justify">
                                Brise-roche pour excavatrice
                            </li>
                        </ul>
                        <div>
                            <h1 className="text-Amber text-2xl md:text-4xl 2xl:text-5xl font-bold">
                                Heavy-duty breaker
                            </h1>
                            <h3 className="text-md md:text-lg">
                                (HRK450N~HRK1000N)
                            </h3>
                        </div>
                        <ul className="p-6 space-y-2 pl-1 list-disc">
                            <li className="list-inside relative 2xl:text-2xl md:text-xll text-lg">
                                Les séries HD sont conçues pour maximiser la
                                force et l&apos;énergie nécessaires pour briser
                                la roche dure.
                            </li>
                            <li className="list-inside relative 2xl:text-2xl md:text-xl text-lg text-justify">
                                Haute efficacité opérationnelle !
                            </li>
                            <li className="list-inside relative 2xl:text-2xl md:text-xl text-lg text-justify">
                                Brise-roche.
                            </li>
                        </ul>
                    </Fade>
                </div>
            </div>
            {/* <div className="border-y-8 bg-Black border-y-Amber h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] p-4 flex flex-wrap flex-row justify-center">
                <div className="basis-2/4 md:basis-1/4 px-4 md:p-12 flex justify-center items-center">
                    <div className="basis-5/6 md:basis-4/6  w-full rounded-lg flex justify-center">
                        <Fade direction="left">
                            <img src={img2} className="w-3/4 object-cover" />
                        </Fade>
                    </div>
                </div>
                <div className="basis-2/4 md:basis-1/4 px-4 md:p-12 flex justify-center items-center">
                    <div className="basis-5/6 md:basis-4/6 w-full rounded-lg flex justify-center">
                        <Fade direction="left" delay={500}>
                            <img src={img2} className="w-3/4 object-cover" />
                        </Fade>
                    </div>
                </div>
                <div className="basis-2/4 md:basis-1/4 px-4 md:p-12 flex justify-center items-center">
                    <div className="basis-5/6 md:basis-4/6  w-full rounded-lg flex justify-center">
                        <Fade direction="left" delay={1000}>
                            <img src={img2} className="w-3/4 object-cover" />
                        </Fade>
                    </div>
                </div>
                <div className="basis-2/4 md:basis-1/4 px-4 md:p-12 flex justify-center items-center">
                    <div className="basis-5/6 md:basis-4/6  w-full rounded-lg flex justify-center">
                        <Fade direction="left" delay={1500}>
                            <img src={img2} className="w-3/4 object-cover" />
                        </Fade>
                    </div>
                </div>
            </div> */}
            <div className="min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-95px)] p-6 mb-12">
                <h2 className="text-2xl 2xl:text-4xl my-12 text-Amber font-semibold tracking-wide">
                    Option
                </h2>
                <div className="overflow-hidden overflow-x-auto mt-6 2xl:flex items-center justify-center">
                    <table className="border-t-4 border-t-Amber">
                        <thead>
                            <tr className="">
                                <th
                                    className="font-bold py-3 px-[10px] relative text-left align-bottom p-12"
                                    colSpan="2"
                                    width="190px"
                                >
                                    <span className="absolute top-[10px] right-[10px]">
                                        Model
                                    </span>
                                    <span className="inline-block pt-[10px]">
                                        Description
                                    </span>
                                </th>
                                <th scope="col" width="70px" rowSpan="2">
                                    HRK SERIES
                                </th>
                                <th scope="col">HRK170N</th>
                                <th scope="col">HRK220N</th>
                                <th scope="col">HRK300N</th>
                                <th scope="col">HRK400N</th>
                                <th scope="col">HRK450N</th>
                                <th scope="col">HRK600N</th>
                                <th scope="col">HRK745N</th>
                                <th scope="col">HRK770N</th>
                                <th scope="col">HRK800N</th>
                                <th scope="col">HRK900N</th>
                                <th scope="col">HRK1000N</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th
                                    className="text-left"
                                    rowSpan="2"
                                    scope="col"
                                    width="100px"
                                >
                                    Operating Weight <br />
                                    (Tool + M/C){" "}
                                </th>
                                <th
                                    className="text-left"
                                    scope="col"
                                    width="90px"
                                >
                                    Silenced
                                </th>
                                <th>Kg</th>
                                <td>1,120</td>
                                <td>1,750</td>
                                <td>2,200</td>
                                <td>2,800</td>
                                <td>3,360</td>
                                <td>4,900</td>
                                <td>3,300</td>
                                <td>3,800</td>
                                <td>4,800</td>
                                <td>6,300</td>
                                <td>10,500</td>
                            </tr>
                            <tr>
                                <th
                                    className="text-left"
                                    scope="col"
                                    width="90px"
                                >
                                    Open Top
                                </th>
                                <th>Kg</th>
                                <td>1,280</td>
                                <td>1,820</td>
                                <td>2,390</td>
                                <td>2,950</td>
                                <td>3,240</td>
                                <td>4,890</td>
                                <td>3,500</td>
                                <td>4,050</td>
                                <td>5,050</td>
                                <td>6,430</td>
                                <td>10,750</td>
                            </tr>
                            <tr>
                                <th
                                    className="text-left"
                                    scope="col"
                                    width="100px"
                                    colSpan={2}
                                >
                                    Main Body Weight
                                </th>
                                <th>Kg</th>
                                <td>494</td>
                                <td>690</td>
                                <td>889</td>
                                <td>1,228</td>
                                <td>1,270</td>
                                <td>1,910</td>
                                <td>1,260</td>
                                <td>1,690</td>
                                <td>1,700</td>
                                <td>2,720</td>
                                <td>4,800</td>
                            </tr>
                            <tr>
                                <th className="text-left" rowSpan="2">
                                    Tool <br />
                                    (Moil Type)
                                </th>
                                <th className="text-left">Weight</th>
                                <th>Kg</th>
                                <td>88</td>
                                <td>120</td>
                                <td>162</td>
                                <td>213</td>
                                <td>226</td>
                                <td>288</td>
                                <td>236</td>
                                <td>279</td>
                                <td>326</td>
                                <td>415</td>
                                <td>470</td>
                            </tr>
                            <tr>
                                <th className="text-left">Diameter</th>
                                <th>mm</th>
                                <td>120</td>
                                <td>135</td>
                                <td>150</td>
                                <td>160</td>
                                <td>165</td>
                                <td>180</td>
                                <td>165</td>
                                <td>175</td>
                                <td>190</td>
                                <td>208</td>
                                <td>230</td>
                            </tr>
                            <tr>
                                <th className="text-left" colSpan="2">
                                    Operating Pressure <br />
                                    (Breaker)
                                </th>
                                <th>bar</th>
                                <td>150~170</td>
                                <td>160~180</td>
                                <td>160~180</td>
                                <td>160~180</td>
                                <td>160~180</td>
                                <td>160~180</td>
                                <td>160~190</td>
                                <td>160~200</td>
                                <td>160~210</td>
                                <td>150~200</td>
                                <td>220~240</td>
                            </tr>
                            <tr>
                                <th className="text-left" colSpan="2">
                                    Setting Pressure <br />
                                    (Machine)
                                </th>
                                <th>bar</th>
                                <td>200</td>
                                <td>210</td>
                                <td>220</td>
                                <td>220</td>
                                <td>220</td>
                                <td>220</td>
                                <td>240</td>
                                <td>250</td>
                                <td>250</td>
                                <td>250</td>
                                <td>270</td>
                            </tr>
                            <tr>
                                <th className="text-left" colSpan="2">
                                    Impact Rate
                                </th>
                                <th>bpm</th>
                                <td>400~750</td>
                                <td>350~700</td>
                                <td>300~650</td>
                                <td>260~450</td>
                                <td>250~370</td>
                                <td>220~350</td>
                                <td>160~230</td>
                                <td>160~220</td>
                                <td>160~210</td>
                                <td>150~200</td>
                                <td>140~170</td>
                            </tr>

                            <tr>
                                <th className="text-left" colSpan="2">
                                    Accumulator Pressure <br />
                                    (N2-Gas)
                                </th>
                                <th>bar/ psi</th>
                                <td colSpan="11">60/870</td>
                            </tr>

                            <tr>
                                <th className="text-left" colSpan="2">
                                    Back Head Pressure <br />
                                    (N2-Gas)
                                </th>
                                <th>bar/ psi</th>
                                <td>6/87</td>
                                <td>6/87</td>
                                <td>6/87</td>
                                <td>6/87</td>
                                <td>16/232</td>
                                <td>12/174</td>
                                <td>17/246</td>
                                <td>18/261</td>
                                <td>18/261</td>
                                <td>18/261</td>
                                <td>18/261</td>
                            </tr>
                            <tr>
                                <th
                                    className="text-left"
                                    rowSpan="2"
                                    colSpan="2"
                                >
                                    Required Oil Flow
                                </th>
                                <th>l/min</th>
                                <td>90~120</td>
                                <td>125~150</td>
                                <td>150~190</td>
                                <td>180~250</td>
                                <td>190~280</td>
                                <td>250~340</td>
                                <td>180~250</td>
                                <td>210~280</td>
                                <td>220~290</td>
                                <td>230~300</td>
                                <td>360~430</td>
                            </tr>
                            <tr>
                                <th>g/min</th>
                                <td>23.7~31.6</td>
                                <td>33~39.6</td>
                                <td>39.6~50.1</td>
                                <td>47.5~66</td>
                                <td>50.1~73.9</td>
                                <td>66~89.7</td>
                                <td>47.5~52.8</td>
                                <td>63.4~68.7</td>
                                <td>68.7~74</td>
                                <td>74~79.2</td>
                                <td>92.4~97.7</td>
                            </tr>

                            <tr>
                                <th className="text-left" rowSpan="3">
                                    Suitable Excavator
                                </th>
                                <th className="text-left">Min</th>
                                <th>ton</th>
                                <td>14</td>
                                <td>18</td>
                                <td>24</td>
                                <td>33</td>
                                <td>37</td>
                                <td>44</td>
                                <td>33</td>
                                <td>45</td>
                                <td>45</td>
                                <td>55</td>
                                <td>70</td>
                            </tr>
                            <tr>
                                <th className="text-left">Max</th>
                                <th>ton</th>
                                <td>20</td>
                                <td>28</td>
                                <td>36</td>
                                <td>50</td>
                                <td>55</td>
                                <td>70</td>
                                <td>50</td>
                                <td>55</td>
                                <td>70</td>
                                <td>100</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <th className="text-left">Suitable</th>
                                <th>ton</th>
                                <td>14~20+P25</td>
                                <td>18~28</td>
                                <td>24~36</td>
                                <td>33~50</td>
                                <td>37~55</td>
                                <td>44~70</td>
                                <td>33~50</td>
                                <td>45~55</td>
                                <td>45~70</td>
                                <td>55~100</td>
                                <td>70~150</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mt-12 border-y-8 border-y-Amber">
                <h2 className="text-2xl 2xl:text-4xl p-6 mt-8  text-Amber font-semibold tracking-wide">
                    Structure et Caractéristiques
                </h2>
                <div className="px-8 md:px-0 flex justify-center my-12">
                    <img
                        src="/src/assets/images/img_internal-valve-structure.png"
                        alt="Structure"
                    />
                </div>
                <div className="lg:grid space-y-4 lg:space-y-0 grid-cols-2 gap-4 p-4 mb-12">
                    <div>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-Amber/30 px-6 py-4 text-left text-2xl font-bold text-Amber hover:bg-Amber/40">
                                        <span>Partie arrière</span>
                                        <FiChevronUp
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-8 w-8 text-Amber`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl text-gray-500">
                                        La conception d&apos;une chambre à gaz
                                        plus grande procure une puissance
                                        d&apos;impact élevée.
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                    <div>
                        <Disclosure as="div">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-Amber/30 px-6 py-4 text-left text-2xl font-bold text-Amber hover:bg-Amber/40">
                                        <span>Piston</span>
                                        <FiChevronUp
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-8 w-8 text-Amber`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl text-gray-500">
                                        Une excellente durabilité et une longue
                                        durée de vie grâce à l&apos;utilisation
                                        de matériaux de haute qualité et à une
                                        technologie de traitement thermique
                                        spéciale. Une puissance d&apos;impact
                                        plus élevée avec une course de piston
                                        prolongée.
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                    <div>
                        <Disclosure as="div">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-Amber/30 px-6 py-4 text-left text-2xl font-bold text-Amber hover:bg-Amber/40">
                                        <span>Cylindre</span>
                                        <FiChevronUp
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-8 w-8 text-Amber`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl text-gray-500">
                                        La conception optimisée de la gorge du
                                        cylindre et l&apos;équilibre et le ratio
                                        uniques améliorent la résistance à la
                                        surchauffe de la température de
                                        l&apos;huile, permettant un
                                        fonctionnement stable et réduisant les
                                        dommages tels que les égratignures.
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                    <div>
                        <Disclosure as="div">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-Amber/30 px-6 py-4 text-left text-2xl font-bold text-Amber hover:bg-Amber/40">
                                        <span>Soupape</span>
                                        <FiChevronUp
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-8 w-8 text-Amber`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl text-gray-500">
                                        Une faible résistance réduit la
                                        température du fluide hydraulique, ce
                                        qui augmente l&apos;efficacité. |
                                        Brise-roche hydraulique Koren.
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                    <div>
                        <Disclosure as="div">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-Amber/30 px-6 py-4 text-left text-2xl font-bold text-Amber hover:bg-Amber/40">
                                        <span>Réglage de soupape</span>
                                        <FiChevronUp
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-8 w-8 text-Amber`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl text-gray-500">
                                        Le nombre de coups par minute du marteau
                                        peut être ajusté en modifiant le réglage
                                        de la soupape. La vitesse variable
                                        maximise la productivité du marteau. (de
                                        HRK170 à HRK400)
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                    <div>
                        <Disclosure as="div">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-Amber/30 px-6 py-4 text-left text-2xl font-bold text-Amber hover:bg-Amber/40">
                                        <span>Accumulateur</span>
                                        <FiChevronUp
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-8 w-8 text-Amber`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl text-gray-500">
                                        La longue broche d&apos;outil protège la
                                        tête avant contre les tirs à blanc et a
                                        une longue durée de vie. Les deux
                                        broches de retenue d&apos;outil
                                        garantissent un alignement correct de
                                        l&apos;outil et une répartition de
                                        l&apos;usure de l&apos;outil. (HRK100 et
                                        supérieur)
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                    <div>
                        <Disclosure as="div">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-Amber/30 px-6 py-4 text-left text-2xl font-bold text-Amber hover:bg-Amber/40">
                                        <span>Boulon traversant</span>
                                        <FiChevronUp
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-8 w-8 text-Amber`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl text-gray-500">
                                        Utilisation d&apos;un matériau brut de
                                        haute qualité sur les boulons
                                        traversants pour améliorer la durabilité
                                        et favoriser un meilleur soutien de la
                                        structure globale du corps du marteau de
                                        manière stable.
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                    <div>
                        <Disclosure as="div">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-Amber/30 px-6 py-4 text-left text-2xl font-bold text-Amber hover:bg-Amber/40">
                                        <span>Attache d&apos;outil</span>
                                        <FiChevronUp
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-8 w-8 text-Amber`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl text-gray-500">
                                        La longue broche d&apos;outil protège la
                                        tête avant contre les tirs à blanc et a
                                        une longue durée de vie. Les deux
                                        attaches d&apos;outil assurent un
                                        alignement correct de l&apos;outil et la
                                        répartition de l&apos;usure de
                                        l&apos;outil. (HRK100 et supérieur)
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                    <div>
                        <Disclosure as="div">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-Amber/30 px-6 py-4 text-left text-2xl font-bold text-Amber hover:bg-Amber/40">
                                        <span>Boîtier</span>
                                        <FiChevronUp
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-8 w-8 text-Amber`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl text-gray-500">
                                        Conception de boîtier optimisée grâce à
                                        la modélisation 3D, et le côté inférieur
                                        est renforcé par de l&apos;acier
                                        hautement résistant à l&apos;abrasion.
                                        Application d&apos;une conception de
                                        boîtier arrondi qui offre une meilleure
                                        durabilité.
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                    <div>
                        <Disclosure as="div">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-Amber/30 px-6 py-4 text-left text-2xl font-bold text-Amber hover:bg-Amber/40">
                                        <span>
                                            Plaques d&apos;usure et amortisseurs
                                        </span>
                                        <FiChevronUp
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-8 w-8 text-Amber`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl text-gray-500">
                                        Absorbe les vibrations pour prévenir les
                                        impulsions entre le porteur et le
                                        marteau, augmentant ainsi la durabilité
                                        du boîtier du marteau et la durée de vie
                                        des pièces de rechange. (Marteau de type
                                        silencieux).
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                    <div>
                        <Disclosure as="div">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-Amber/30 px-6 py-4 text-left text-2xl font-bold text-Amber hover:bg-Amber/40">
                                        <span>Outil HRK</span>
                                        <FiChevronUp
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-8 w-8 text-Amber`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl text-gray-500">
                                        Tous les outils HRK sont fabriqués dans
                                        nos propres installations sous un
                                        contrôle qualité strict en utilisant des
                                        matériaux de première qualité.
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </div>
        </div>
    );
}
