import { Fade, Slide } from "react-awesome-reveal";
import img1 from "../../../assets/HRK Pictures/compactor.png"

function Compacteur() {
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
                            HRCP Series
                        </h1>
                        <ul className="p-6 space-y-2 pl-1 list-disc">
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg">
                                Pression d&apos;huile de haute qualité pour tous
                                les types de modèles.
                            </li>
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg text-justify">
                                Soupape de commande tout-en-un bloquant le flux
                                d&apos;huile.
                            </li>
                            <li className="list-inside relative md:text-xl 2xl:text-2xl text-lg text-justify">
                                Haute efficacité dans la compaction des travaux
                                de tranchée étroite.
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
                                <th>GC04</th>
                                <th>GC06</th>
                                <th>GC08</th>
                                <th>GC10</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th rowSpan="2">Applicable Excavator</th>
                                <th>ton</th>
                                <td>2.0~7.0</td>
                                <td>6.0~15</td>
                                <td>18~25</td>
                                <td>24~ 35</td>
                            </tr>
                            <tr>
                                <th>lbs</th>
                                <td>4,409 ~ 15,431</td>
                                <td>13,227 ~ 33,067</td>
                                <td>39,681 ~ 55,112</td>
                                <td>52,908 ~ 77,157</td>
                            </tr>
                            <tr>
                                <th>Operating Weight</th>
                                <th>kg / lbs</th>
                                <td>270 / 595</td>
                                <td>500 / 1,102</td>
                                <td>900 / 1,984</td>
                                <td>950 / 2,094</td>
                            </tr>
                            <tr>
                                <th rowSpan="2">Dimension(HxLxW)</th>
                                <th>mm</th>
                                <td>700x450x725</td>
                                <td>975x600x900</td>
                                <td>1,265x800x1,200</td>
                                <td>1,350x900x1,300</td>
                            </tr>
                            <tr>
                                <th>inch</th>
                                <td>27.5 x 17.7 x 28.5</td>
                                <td>38.3 x 23.6 x 35.4</td>
                                <td>49.8 x 31.4 x 47.2</td>
                                <td>53.1 x 35.4 x 51.1</td>
                            </tr>
                            <tr>
                                <th>Plate Size</th>
                                <th>mm / inch</th>
                                <td>450 x 725 / 17.71 x 28.54</td>
                                <td>600 x 900 / 23.62 x 35.43</td>
                                <td>800 x 1,200 / 31.49 x 47.24</td>
                                <td>900 x 1,300 / 35.43 x 51.18</td>
                            </tr>
                            <tr>
                                <th>Vibration Per Minute (Max.)</th>
                                <th>v / min</th>
                                <td>2,400</td>
                                <td>2,000</td>
                                <td>2,000</td>
                                <td>2,000</td>
                            </tr>
                            <tr>
                                <th>Impact Force</th>
                                <th>ton / lbs</th>
                                <td>1.8 / 3,968</td>
                                <td>4 / 8,818</td>
                                <td>10 / 22,046</td>
                                <td>17 / 37,478</td>
                            </tr>
                            <tr>
                                <th rowSpan="2">Operating Pressure</th>
                                <th>bar</th>
                                <td>90 ~ 130</td>
                                <td>100~130</td>
                                <td>120~160</td>
                                <td>130~170</td>
                            </tr>
                            <tr>
                                <th>psi</th>
                                <td>1,305 ~ 1,885</td>
                                <td>1,450 ~ 1,885</td>
                                <td>1,740 ~ 2,320</td>
                                <td>1,885 ~ 2,465</td>
                            </tr>
                            <tr>
                                <th>Required Oil Flow</th>
                                <th>lpm</th>
                                <td>40 ~ 50</td>
                                <td>85~105</td>
                                <td>100~130</td>
                                <td>135~165</td>
                            </tr>
                            <tr>
                                <th>Motor (U.S.A)</th>
                                <th>type</th>
                                <td>M124-20</td>
                                <td>M5100-50</td>
                                <td>M5100-63</td>
                                <td>M5100-80</td>
                            </tr>
                        </tbody>
                    </table>
                
                </div>
            </div>
        </div>
    );
}

export default Compacteur;
