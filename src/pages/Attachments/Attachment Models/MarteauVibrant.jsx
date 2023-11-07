import { Fade, Slide } from "react-awesome-reveal";

function MarteauVibrant() {
    return (
        <div className="mt-20 md:mt-24">
            <div className="border-y-8 border-y-Amber bg-gradient-to-b md:bg-gradient-to-r from-Amber to-Black min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-95px)] flex flex-wrap md:flex-nowrap justify-center overflow-hidden">
                <Slide className="md:basis-1/2 flex justify-center items-center">
                    <img
                        src="/src/assets/HRK Pictures/vibro-hammer.png"
                        className="w-4/6"
                    />
                </Slide>
                <div className="md:basis-1/2 pl-8 -mt-5 md:pt-16 md:pl-12 md:pr-4 md:mt-0 text-white flex flex-col justify-center 2xl:gap-6">
                    <Fade cascade damping={0.5} direction="down">
                        <h1 className="text-Amber text-3xl md:text-4xl 2xl:text-5xl font-bold">
                            HRVH
                        </h1>
                        <ul className="p-6 space-y-2 pl-1 list-disc">
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg">
                                Peut être directement connecté à une pelle (pas
                                besoin de grue).
                            </li>
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg text-justify">
                                Efficacité de travail supérieure et large gamme
                                de travaux.
                            </li>
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg text-justify">
                                BPM hautement efficace avec faible bruit.
                            </li>
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg text-justify">
                                Disponible dans la plomberie de marteau
                                hydraulique.
                            </li>
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg text-justify">
                                Rotation à 360°.
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
                    <table className="border-t-4 border-t-Amber mx-auto" width={"900px"}>
                        <thead>
                            <tr>
                                <th scope="col" width="20%">
                                    DESCRIPTION
                                </th>
                                <th scope="col" width="10%">
                                    UNIT
                                </th>
                                <th>GVH2000</th>
                                <th>GVH3000</th>
                                <th>GVH4000</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Operating Weight</th>
                                <th>kg</th>
                                <td>1,600</td>
                                <td>1,800</td>
                                <td>1,900</td>
                            </tr>
                            <tr>
                                <th>Extension Boom Weight</th>
                                <th>kg</th>
                                <td>600</td>
                                <td>700</td>
                                <td>700</td>
                            </tr>
                            <tr>
                                <th>Clamping Jaw</th>
                                <th>mm</th>
                                <td colSpan="3">65</td>
                            </tr>
                            <tr>
                                <th>Frequency</th>
                                <th>bpm</th>
                                <td colSpan="3">2000~2500</td>
                            </tr>
                            <tr>
                                <th>Rotation</th>
                                <th>-</th>
                                <td colSpan="3">360°</td>
                            </tr>
                            <tr>
                                <th>Length</th>
                                <th>mm</th>
                                <td>1,857</td>
                                <td>1,959</td>
                                <td>2,016</td>
                            </tr>
                            <tr>
                                <th>Width</th>
                                <th>mm</th>
                                <td>1042</td>
                                <td>1103</td>
                                <td>1,196</td>
                            </tr>
                            <tr>
                                <th>Height</th>
                                <th>mm</th>
                                <td>650</td>
                                <td>792</td>
                                <td>830</td>
                            </tr>
                            <tr>
                                <th>Hydraulic Oil Flow</th>
                                <th>lpm</th>
                                <td>130~180</td>
                                <td>170~200</td>
                                <td>200~260</td>
                            </tr>
                            <tr>
                                <th>Hydraulic Working Pressure</th>
                                <th>bar</th>
                                <td>180~200</td>
                                <td>200~250</td>
                                <td>200~250</td>
                            </tr>
                            <tr>
                                <th>Suitable Excavator</th>
                                <th>ton</th>
                                <td>20~28</td>
                                <td>28~34</td>
                                <td>33~40</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MarteauVibrant;
