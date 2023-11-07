import { Fade, Slide } from "react-awesome-reveal";
import img1 from "../../../assets/HRK Pictures/Scrap_grapple_2.png"

function GrappinRecuperation() {
    return (
        <div className="mt-20 md:mt-24">
            <div className="border-y-8 border-y-Amber bg-gradient-to-b md:bg-gradient-to-r from-Amber to-Black min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-95px)] flex flex-wrap md:flex-nowrap justify-center overflow-hidden">
                <Slide className="md:basis-1/2 flex justify-center items-center">
                    <img
                        src={img1}
                        className="w-4/6"
                    />
                </Slide>
                <div className="md:basis-1/2 pl-8 -mt-5 md:pt-16 md:pl-12 md:pr-4 md:mt-0 text-white flex flex-col justify-center 2xl:gap-6">
                    <Fade cascade damping={0.5} direction="down">
                        <h1 className="text-Amber text-3xl md:text-4xl 2xl:text-5xl font-bold">
                            HRSG
                        </h1>
                        <ul className="p-6 space-y-2 pl-1 list-disc">
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg">
                                Chargement et déchargement faciles de billes, de
                                bois de construction et d&apos;arbustes.
                            </li>
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg text-justify">
                                Efficacité élevée dans un environnement de
                                travail difficile avec une rotation à 360
                                degrés.
                            </li>
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg text-justify">
                                Cylindre puissant et durable.
                            </li>
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg text-justify">
                                Structure mécanique solide pour un travail en
                                toute sécurité.
                            </li>
                        </ul>
                    </Fade>
                </div>
            </div>
            <div className="border-y-8 border-y-Amber min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-95px)] p-6">
                <h2 className="text-2xl text-Amber font-semibold tracking-wide">
                    Models
                </h2>
                <div className="overflow-hidden overflow-x-auto mt-6 2xl:flex items-center justify-center">
                    <table className="border-t-4 border-t-Amber mx-auto">
                        <colgroup>
                            <col />
                            <col width="11%" />
                            <col width="8%" />
                            <col width="11%" />
                            <col width="11%" />
                            <col width="11%" />
                            <col width="11%" />
                            <col width="11%" />
                            <col width="11%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th colSpan="3">UNIT</th>
                                <th>GBSG600</th>
                                <th>GBSG800</th>
                                <th>GBSG1000</th>
                                <th>GBSG1200</th>
                                <th>GBSG1500</th>
                                <th>GBSG2000</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Weight</th>
                                <th colSpan="2">ton</th>
                                <td>1</td>
                                <td>1.35</td>
                                <td>1.55</td>
                                <td>1.65</td>
                                <td>2.1</td>
                                <td>2.7</td>
                            </tr>
                            <tr>
                                <th>Capacity</th>
                                <th colSpan="2">㎥</th>
                                <td>0.6</td>
                                <td>0.8</td>
                                <td>1</td>
                                <td>1.2</td>
                                <td>1.5</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <th rowSpan="2">Operating pressure</th>
                                <th>Cylinder</th>
                                <th>bar</th>
                                <td>320</td>
                                <td>320</td>
                                <td>320</td>
                                <td>320</td>
                                <td>320</td>
                                <td>320</td>
                            </tr>
                            <tr>
                                <th>Rotating motor</th>
                                <th>bar</th>
                                <td>150</td>
                                <td>150</td>
                                <td>150</td>
                                <td>150</td>
                                <td>150</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <th rowSpan="2">Required oil flow</th>
                                <th>Cylinder</th>
                                <th>LPM</th>
                                <td>130</td>
                                <td>150</td>
                                <td>200</td>
                                <td>200</td>
                                <td>220</td>
                                <td>250</td>
                            </tr>
                            <tr>
                                <th>Rotating motor</th>
                                <th>LPM</th>
                                <td>30</td>
                                <td>30</td>
                                <td>30</td>
                                <td>30</td>
                                <td>30</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <th>Max opening</th>
                                <th colSpan="2">mm</th>
                                <td>Ø1,720</td>
                                <td>Ø1,870</td>
                                <td>Ø2,000</td>
                                <td>Ø2,160</td>
                                <td>Ø2,360</td>
                                <td>Ø2,540</td>
                            </tr>
                            <tr>
                                <th>Overall Height</th>
                                <th colSpan="2">mm</th>
                                <td>1700</td>
                                <td>1,910</td>
                                <td>1,940</td>
                                <td>2,000</td>
                                <td>2,280</td>
                                <td>2,490</td>
                            </tr>
                            <tr>
                                <th>Suitable excavator</th>
                                <th colSpan="2">ton</th>
                                <td>12~18</td>
                                <td>19~26</td>
                                <td>27~32</td>
                                <td>33~36</td>
                                <td>37~42</td>
                                <td>43~50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default GrappinRecuperation;
