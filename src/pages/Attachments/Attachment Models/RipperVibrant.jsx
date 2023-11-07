import { Fade, Slide } from "react-awesome-reveal";

function RipperVibrant() {
    return (
        <div className="mt-20 md:mt-24">
            <div className="border-y-8 border-y-Amber bg-gradient-to-b md:bg-gradient-to-r from-Amber to-Black min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-95px)] flex flex-wrap md:flex-nowrap justify-center overflow-hidden">
                <Slide className="md:basis-1/2 flex justify-center items-center">
                    <img
                        src="/src/assets/HRK Pictures/Vibro-Ripper.png"
                        className="w-4/6"
                    />
                </Slide>
                <div className="md:basis-1/2 pl-8 -mt-5 md:pt-16 md:pl-12 md:pr-4 md:mt-0 text-white flex flex-col justify-center 2xl:gap-6">
                    <Fade cascade damping={0.5} direction="down">
                        <h1 className="text-Amber text-3xl md:text-4xl 2xl:text-5xl font-bold">
                            HRVR
                        </h1>
                        <ul className="p-6 space-y-2 pl-1 list-disc">
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg">
                                Force de creusement puissante grâce à une
                                structure de liaison spéciale.
                            </li>
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg text-justify">
                                Excellente puissance de creusement sur les
                                roches tendres.
                            </li>

                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg text-justify">
                                Produit respectueux de l&apos;environnement
                                (moins de vibrations et de bruit).
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
                    <table className="border-t-4 border-t-Amber mx-auto" width={"1000px"}>
                        <thead>
                            <tr>
                                <th colSpan="2">DESCRIPTION</th>
                                <th>UNIT</th>
                                <th>GVR200</th>
                                <th>GVR300</th>
                                <th>GVR400</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colSpan="2">
                                    Operating Weight
                                    <br />
                                    (Without Mounting Cap)
                                </th>
                                <th>kg</th>
                                <td>2300</td>
                                <td>2980</td>
                                <td>3700</td>
                            </tr>
                            <tr>
                                <th colSpan="2">Operating Pressure</th>
                                <th>vpm</th>
                                <td>180~200</td>
                                <td>220~240</td>
                                <td>220~240</td>
                            </tr>
                            <tr>
                                <th colSpan="2">Operating Oil Flow</th>
                                <th>bar</th>
                                <td>130~150</td>
                                <td>170~190</td>
                                <td>190~210</td>
                            </tr>
                            <tr>
                                <th colSpan="2">Hydraulic Motor Power</th>
                                <th>lpm</th>
                                <td>50</td>
                                <td>67</td>
                                <td>76</td>
                            </tr>
                            <tr>
                                <th colSpan="2">Frequency</th>
                                <th>ton</th>
                                <td>2,100</td>
                                <td>1,400</td>
                                <td>1,100</td>
                            </tr>
                            <tr>
                                <th rowSpan="3">
                                    Dimensions
                                    <br />
                                    (Without Mounting Cap)
                                </th>
                                <th>Height</th>
                                <th>mm</th>
                                <td>2,480</td>
                                <td>2,790</td>
                                <td>3,280</td>
                            </tr>
                            <tr>
                                <th>Width</th>
                                <th>mm</th>
                                <td>1,090</td>
                                <td>1,280</td>
                                <td>1,420</td>
                            </tr>
                            <tr>
                                <th>Length</th>
                                <th>mm</th>
                                <td>840</td>
                                <td>880</td>
                                <td>990</td>
                            </tr>
                            <tr>
                                <th colSpan="2">Hydraulic Excavator</th>
                                <th>ton</th>
                                <td>18~24</td>
                                <td>25~34</td>
                                <td>35~44</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default RipperVibrant;
