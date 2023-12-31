import { Fade, Slide } from "react-awesome-reveal";
import img1 from "../../../assets/HRK Pictures/Quick_Coupler.png"

function AttacheRapide() {
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
                            HRQC Series
                        </h1>
                        <ul className="p-6 space-y-2 pl-1 list-disc">
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg">
                                La plus grande durabilité dans la même
                                catégorie.
                            </li>
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg text-justify">
                                Double dispositif de sécurité.
                            </li>
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg text-justify">
                                Réduction des heures de travail avec un coupleur
                                amovible rapide.
                            </li>
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg text-justify">
                                Espace suffisant pour la goupille de sécurité.
                            </li>
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg text-justify">
                                Accessoire de marteau hydraulique.
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
                                <th rowSpan="2" scope="col" width="20%">
                                    DESCRIPTION
                                </th>
                                <th rowSpan="2" scope="col" width="10%">
                                    UNIT
                                </th>
                                <th colSpan="2">FIXED TYPE</th>
                                <th colSpan="5">FREE TYPE</th>
                            </tr>
                            <tr>
                                <th>GL300F</th>
                                <th>GL400F</th>
                                <th>GL30FR</th>
                                <th>GL50FR</th>
                                <th>GL80FR</th>
                                <th>GL130FR</th>
                                <th>GL200FR</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Weight</th>
                                <th>kg</th>
                                <td>420~430</td>
                                <td>450~580</td>
                                <td>30~40</td>
                                <td>50~60</td>
                                <td>80~100</td>
                                <td>120~130</td>
                                <td>280~290</td>
                            </tr>
                            <tr>
                                <th>Length</th>
                                <th>mm</th>
                                <td>1020~1050</td>
                                <td>1120~1140</td>
                                <td>306~475</td>
                                <td>490~540</td>
                                <td>610~640</td>
                                <td>780~800</td>
                                <td>880~910</td>
                            </tr>
                            <tr>
                                <th>Height</th>
                                <th>mm</th>
                                <td>513~520</td>
                                <td>540~555</td>
                                <td>230~268</td>
                                <td>260~280</td>
                                <td>330~340</td>
                                <td>380~390</td>
                                <td>440~450</td>
                            </tr>
                            <tr>
                                <th>Width</th>
                                <th>mm</th>
                                <td>520~590</td>
                                <td>550~660</td>
                                <td>175~245</td>
                                <td>270~285</td>
                                <td>330~340</td>
                                <td>370~400</td>
                                <td>470~490</td>
                            </tr>
                            <tr>
                                <th>Equipping Distance</th>
                                <th>mm</th>
                                <td>470~510</td>
                                <td>530~580</td>
                                <td>90~200</td>
                                <td>230~280</td>
                                <td>260~310</td>
                                <td>360~390</td>
                                <td>440~475</td>
                            </tr>
                            <tr>
                                <th>Pin Diameter</th>
                                <th>∮</th>
                                <td>80~90</td>
                                <td>90~120</td>
                                <td>25~40</td>
                                <td>45~50</td>
                                <td>50~60</td>
                                <td>50~70</td>
                                <td>70~80</td>
                            </tr>
                            <tr>
                                <th>Applicable Excavator</th>
                                <th>ton</th>
                                <td>25~33</td>
                                <td>34~50</td>
                                <td>1~3</td>
                                <td>3~5</td>
                                <td>5~8</td>
                                <td>9~16</td>
                                <td>17~23</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AttacheRapide;
