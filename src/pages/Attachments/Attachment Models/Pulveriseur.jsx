import { Fade, Slide } from "react-awesome-reveal";
import img1 from "../../../assets/HRK Pictures/Pulverizer.png"

function Pulveriseur() {
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
                            HRPV
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
                            <col width="12%" />
                            <col width="9%" />
                            <col width="12%" />
                            <col width="12%" />
                            <col width="12%" />
                            <col width="12%" />
                            <col width="12%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th colSpan="3">UNIT</th>
                                <th>GBPC05R</th>
                                <th>GBPC160R</th>
                                <th>GBPC200R</th>
                                <th>GBPC300R</th>
                                <th>GBPC450R</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Weight</th>
                                <th colSpan="2">ton</th>
                                <td>0.55</td>
                                <td>1.4</td>
                                <td>2.1</td>
                                <td>3.3</td>
                                <td>4.2</td>
                            </tr>
                            <tr>
                                <th rowSpan="2">Operating pressure</th>
                                <th>Cylinder</th>
                                <th>bar</th>
                                <td>300</td>
                                <td>320</td>
                                <td>350</td>
                                <td>350</td>
                                <td>350</td>
                            </tr>
                            <tr>
                                <th>Rotating motor</th>
                                <th>bar</th>
                                <td>80</td>
                                <td>150</td>
                                <td>150</td>
                                <td>150</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <th rowSpan="2">Required oil flow</th>
                                <th>Cylinder</th>
                                <th>LPM</th>
                                <td>90</td>
                                <td>150</td>
                                <td>200</td>
                                <td>250</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <th>Rotating motor</th>
                                <th>LPM</th>
                                <td>15</td>
                                <td>30</td>
                                <td>30</td>
                                <td>30</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <th>Max jaw opening</th>
                                <th colSpan="2">mm</th>
                                <td>508</td>
                                <td>730</td>
                                <td>820</td>
                                <td>1000</td>
                                <td>1100</td>
                            </tr>
                            <tr>
                                <th>Suitable excavator</th>
                                <th colSpan="2">ton</th>
                                <td>4.5~8</td>
                                <td>12~18</td>
                                <td>19~26</td>
                                <td>27~36</td>
                                <td>37~48</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Pulveriseur;
