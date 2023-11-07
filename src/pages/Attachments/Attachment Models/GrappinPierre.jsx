import { Fade, Slide } from "react-awesome-reveal";
import img1 from "../../../assets/HRK Pictures/Stone_Grab_2.png"

function GrappinPierre() {
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
                            HRDG
                        </h1>
                        <ul className="p-6 space-y-2 pl-1 list-disc">
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg">
                                La soupape de sécurité dans le cylindre empêche
                                que le matériau saisi ne tombe.
                            </li>
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg text-justify">
                                Résistance à l&apos;abrasion excellente et cadre
                                optimal des mâchoires.
                            </li>
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg text-justify">
                                Durabilité de longue durée.
                            </li>
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg text-justify">
                                Excellentes performances dans le transport de
                                roches.
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
                        <thead>
                            <tr>
                                <th scope="col" width="20%">
                                    DESCRIPTION
                                </th>
                                <th scope="col" width="10%">
                                    UNIT
                                </th>
                                <th>GSG50</th>
                                <th>GSG120</th>
                                <th>GSG200</th>
                                <th>GSG300</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Carrier</th>
                                <th>ton</th>
                                <td>4~6</td>
                                <td>9~13</td>
                                <td>18~22</td>
                                <td>28~32</td>
                            </tr>
                            <tr>
                                <th>Max. Opening Width</th>
                                <th>mm</th>
                                <td>1,280</td>
                                <td>1,700</td>
                                <td>2,100</td>
                                <td>2,345</td>
                            </tr>
                            <tr>
                                <th>Overall Height</th>
                                <th>mm</th>
                                <td>430</td>
                                <td>507</td>
                                <td>620</td>
                                <td>665</td>
                            </tr>
                            <tr>
                                <th>Overall Length</th>
                                <th>mm</th>
                                <td>1,190</td>
                                <td>1,400</td>
                                <td>1,740</td>
                                <td>1,870</td>
                            </tr>
                            <tr>
                                <th>Operating Weight</th>
                                <th>kg</th>
                                <td>365</td>
                                <td>850</td>
                                <td>1,960</td>
                                <td>2,100</td>
                            </tr>
                            <tr>
                                <th>Cylinder Oil Pressure</th>
                                <th>kg/cm²</th>
                                <td>110~200</td>
                                <td>150~220</td>
                                <td>160~240</td>
                                <td>160~240</td>
                            </tr>
                            <tr>
                                <th>Cylinder Setting Pressure</th>
                                <th>kg/cm²</th>
                                <td>250</td>
                                <td>250</td>
                                <td>260</td>
                                <td>260</td>
                            </tr>
                            <tr>
                                <th>Flow Rate</th>
                                <th>l/min</th>
                                <td>30~50</td>
                                <td>90~120</td>
                                <td>100~150</td>
                                <td>130~200</td>
                            </tr>
                            <tr>
                                <th>Hydraulic Motor</th>
                                <th>-</th>
                                <td>MT500</td>
                                <td>MT500</td>
                                <td>white800A</td>
                                <td>White800A</td>
                            </tr>
                            <tr>
                                <th>Max. Torque</th>
                                <th>daNm</th>
                                <td>61</td>
                                <td>160</td>
                                <td>160</td>
                                <td>160</td>
                            </tr>
                            <tr>
                                <th>Max. Inlet Pressure</th>
                                <th>bar</th>
                                <td>225</td>
                                <td>300</td>
                                <td>300</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <th>Max. Speed</th>
                                <th>rpm</th>
                                <td>240</td>
                                <td>285</td>
                                <td>285</td>
                                <td>285</td>
                            </tr>
                            <tr>
                                <th>Max. Flow Rate</th>
                                <th>l/min</th>
                                <td>75</td>
                                <td>150</td>
                                <td>150</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <th>Tooth</th>
                                <th>Number</th>
                                <td>MX40-1070-05031</td>
                                <td>RX140-61M4-31210</td>
                                <td>DX220-K1000344A</td>
                                <td>DX300-713-00054A</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default GrappinPierre;
