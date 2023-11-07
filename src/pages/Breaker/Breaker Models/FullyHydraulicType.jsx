import { Fade } from "react-awesome-reveal";
import img1 from "../../../assets/hammer/GBN220E-L-C.png";
import img2 from "../../../assets/hammer/GBN220E-L.png";
import img3 from "../../../assets/images/gbh.jpg";

export default function FullyHydraulicType() {
    return (
        <div className="mt-20 md:mt-24">
            <div className="border-y-8 border-y-Amber bg-gradient-to-b md:bg-gradient-to-r  from-Amber to-Black min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-95px)] flex flex-wrap md:flex-nowrap justify-center overflow-hidden">
                <div className="flex justify-center items-center md:block md:basis-1/2 md:relative">
                    <img
                        src={img1}
                        className="hidden absolute inset-y-16 w-3/6 rotate-45 md:block"
                    />
                    <img src={img2} className="p-4 w-3/6 md:hidden" />
                </div>
                <div className="md:basis-1/2 pl-8 -mt-5 md:pt-16 md:pl-12 md:pr-4 md:mt-0 text-white flex flex-col justify-center 2xl:gap-6">
                    <Fade cascade damping={0.5} direction="down">
                        <div>
                            <h1 className="text-Amber text-2xl md:text-3xl 2xl:text-5xl font-bold">
                                Fully Hydraulic type Breaker
                            </h1>
                        </div>
                        <ul className="p-6 space-y-2 pl-1 list-disc">
                            <li className="list-inside relative 2xl:text-2xl md:text-xll text-lg">
                                L&apos;accumulateur monté en haut aide à
                                accepter une large gamme de débit d&apos;huile
                                et à assister la course de puissance tout en
                                protégeant contre les chocs hydrauliques.
                            </li>
                            <li className="list-inside relative 2xl:text-2xl text-lg md:text-xl text-justify">
                                La technologie avancée de la soupape de contrôle
                                peut bloquer tout dommage résultant de
                                l&apos;énergie d&apos;impact élevée sur le
                                porteur.
                            </li>
                            <li className="list-inside relative 2xl:text-2xl text-lg md:text-xl text-justify">
                                La conception technique optimisée facilite le
                                fonctionnement et prolonge la durée de vie tout
                                en réduisant les coûts d&apos;entretien.
                            </li>
                            <li className="list-inside relative 2xl:text-2xl text-lg md:text-xl text-justify">
                                Le piston et le cylindre sont conçus pour
                                convertir l&apos;énergie cinétique en énergie de
                                marteau après avoir frappé l&apos;outil et la
                                transmettre à l&apos;outil pour une meilleure
                                fragmentation des roches sur le chantier.
                            </li>
                            <li className="list-inside relative 2xl:text-2xl text-lg md:text-xl text-justify">
                                Marteau entièrement hydraulique et briseur
                                entièrement hydraulique.
                            </li>
                        </ul>
                    </Fade>
                </div>
            </div>
            <div className="border-y-8 bg-Black border-y-Amber h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] p-4 flex items-center justify-center">
                    <Fade direction="left">
                        <img
                            src={img3}
                            className=" rounded-md"
                        />
                    </Fade>
            </div>
            <div className="min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-95px)] p-6 border-y-8 border-y-Amber">
                <h2 className="text-2xl 2xl:text-4xl my-12 text-Amber font-semibold tracking-wide">
                    Option
                </h2>
                <div className="overflow-hidden overflow-x-auto mt-6 2xl:flex items-center justify-center">
                    <table className="border-t-4 border-t-Amber">
                        <thead>
                            <tr className="">
                                <th
                                    className="font-bold py-3 px-[10px] relative text-left align-bottom p-12"
                                    rowSpan={2}
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
                                <th colSpan={8}>FULL HYDRAULIC TYPE</th>
                            </tr>
                            <tr>
                                <th scope="col">HRK150H</th>
                                <th scope="col">HRK180H</th>
                                <th scope="col">HRK210H</th>
                                <th scope="col">HRK260H</th>
                                <th scope="col">HRK300H</th>
                                <th scope="col">HRK390H</th>
                                <th scope="col">HRK480H</th>
                                <th scope="col">HRK680H</th>
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
                                    rowSpan={2}
                                    scope="col"
                                    width="90px"
                                >
                                    Silenced
                                </th>
                                <th>Kg</th>
                                <td>1,123</td>
                                <td>1,500</td>
                                <td>1,874</td>
                                <td>1,920</td>
                                <td>2,396</td>
                                <td>3,006</td>
                                <td>3,920</td>
                                <td>4,682</td>
                            </tr>
                            <tr>
                                <th>Lb</th>
                                <td>2,476</td>
                                <td>3,307</td>
                                <td>4,131</td>
                                <td>4,233</td>
                                <td>5,282</td>
                                <td>6,627</td>
                                <td>8,642</td>
                                <td>10,322</td>
                            </tr>
                            <tr>
                                <th className="text-left">
                                    Tool <br />
                                    (Moil Type)
                                </th>
                                <th className="text-left">Diameter</th>
                                <th>mm</th>
                                <td>115</td>
                                <td>120</td>
                                <td>130</td>
                                <td>135</td>
                                <td>140</td>
                                <td>155</td>
                                <td>170</td>
                                <td>180</td>
                            </tr>
                            <tr>
                                <th className="text-left" colSpan="2">
                                    Operating Pressure <br />
                                    (Breaker)
                                </th>
                                <th>bar</th>
                                <td>140</td>
                                <td>140</td>
                                <td>140</td>
                                <td>140</td>
                                <td>140</td>
                                <td>145</td>
                                <td>155</td>
                                <td>155</td>
                            </tr>
                            <tr>
                                <th className="text-left" colSpan="2">
                                    Setting Pressure <br />
                                    (Machine)
                                </th>
                                <th>bar</th>
                                <td>175</td>
                                <td>175</td>
                                <td>175</td>
                                <td>175</td>
                                <td>175</td>
                                <td>185</td>
                                <td>190</td>
                                <td>190</td>
                            </tr>
                            <tr>
                                <th className="text-left" colSpan="2">
                                    Impact Rate
                                </th>
                                <th>bpm</th>
                                <td>350~550</td>
                                <td>400~500</td>
                                <td>350~500</td>
                                <td>360~520</td>
                                <td>360~520</td>
                                <td>320~420</td>
                                <td>300~400</td>
                                <td>250~350</td>
                            </tr>

                            <tr>
                                <th className="text-left" colSpan="2">
                                    Accumulator Pressure <br />
                                    (N2-Gas)
                                </th>
                                <th>bar/ psi</th>
                                <td colSpan="8">40</td>
                            </tr>

                            <tr>
                                <th className="text-left" colSpan="2">
                                    Back Pressure
                                </th>
                                <th>bar/ psi</th>
                                <td colSpan="8">5</td>
                            </tr>
                            <tr>
                                <th
                                    className="text-left"
                                    colSpan="2"
                                >
                                    Required Oil Flow
                                </th>
                                <th>l/min</th>
                                <td>70~110</td>
                                <td>110~150</td>
                                <td>120~160</td>
                                <td>120~160</td>
                                <td>160~230</td>
                                <td>170~240</td>
                                <td>190~250</td>
                                <td>220~350</td>
                            </tr>

                            <tr>
                                <th className="text-left" rowSpan="2" colSpan={2}>
                                    Suitable Excavator
                                </th>
                                <th>ton</th>
                                <td>13~20</td>
                                <td>18~25</td>
                                <td>21~30</td>
                                <td>21~31</td>
                                <td>26~38</td>
                                <td>33~48</td>
                                <td>43~63</td>
                                <td>52~75</td>
                                
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
