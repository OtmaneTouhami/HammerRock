import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BREAKERS } from "../../db/Breakers";

export default function BreakerModel() {
    const { id } = useParams(),
        [breaker, setBreaker] = useState(BREAKERS[id - 1]);

    console.log(typeof breaker.models[0].spesification.impact.units);

    useEffect(() => setBreaker(BREAKERS[id - 1]), [id]);
    return (
        <div className="mt-20 md:mt-24">
            <div className="border-y-8 border-y-Amber min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-95px)] p-4 flex flex-col justify-center gap-6">
                <h1 className="text-Amber text-center text-3xl font-bold py-4">
                    {breaker.name}
                </h1>
                <div className="flex items-center justify-center">
                    <ul className="w-5/6 p-6 space-y-2 bg-Amber/30 rounded-sm">
                        {breaker.characteristics.map((char, index) => (
                            <li
                                key={index}
                                className="list-inside list-disc text-lg text-justify"
                            >
                                {char}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="border-y-8 bg-Black border-y-Amber h-[calc(100vh-80px)] md:h-[calc(100vh-95px)] p-4 flex justify-center">
                <div className="basis-1/2 p-12 flex justify-center items-center">
                    <div className="h-5/6 w-full rounded-md bg-Boulder"></div>
                </div>
                <div className="basis-1/2 p-12 flex justify-center items-center">
                    <div className="h-5/6 w-full rounded-md bg-Boulder"></div>
                </div>
            </div>
            <div className="border-y-8 border-y-Amber min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-95px)] p-6">
                <h2 className="text-2xl text-Amber font-semibold tracking-wide">
                    Models
                </h2>
                {/* <table className="min-w-full max-w-full border-t-2 border-t-Amber mt-4 overflow-x-scroll">
                    <thead>
                        <tr>
                            <th rowSpan={2} className="p-2">
                                <div className="flex flex-col ">
                                    <span className="self-end">Models</span>
                                    <span className="self-start">
                                        Description
                                    </span>
                                </div>
                            </th>
                            <th rowSpan={2} className="p-2">
                                Unit
                            </th>
                            <th colSpan={breaker.models.length} className="p-2">
                                Full Hydrolic Model
                            </th>
                        </tr>
                        <tr>
                            {breaker.models.map((model, index) => (
                                <th key={index} className="p-2">
                                    {model.name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(breaker.models[0].spesification).map(
                            (key) =>
                                breaker.models.map(
                                    ({ spesification }, index) => (
                                        <tr key={index}>
                                            <td>{key}</td>
                                            {typeof spesification[key].units !==
                                            "string" ? (
                                                spesification[key].units.map(
                                                    (unit, index) => (
                                                        <React.Fragment
                                                            key={index}
                                                        >
                                                            <td>{unit}</td>
                                                        </React.Fragment>
                                                    )
                                                )
                                            ) : (
                                                <td>
                                                    {spesification[key].units}
                                                </td>
                                            )}
                                        </tr>
                                    )
                                )

                                // <tr key={index}>
                                //     <td>{key}</td>
                                //     {breaker.models.map(
                                //         ({ spesification }, index) => (
                                //             <React.Fragment key={index}>
                                //                 {typeof spesification[key]
                                //                     .units !== "string" ? (
                                //                     spesification[
                                //                         key
                                //                     ].units.map(
                                //                         (unit, index) => (
                                //                             <React.Fragment
                                //                                 key={index}
                                //                             >
                                //                                 <td>{unit}</td>
                                //                             </React.Fragment>
                                //                         )
                                //                     )
                                //                 ) : (
                                //                     <td>
                                //                         {
                                //                             spesification[key]
                                //                                 .units
                                //                         }
                                //                     </td>
                                //                 )}
                                //             </React.Fragment>
                                //         )
                                //     )}
                                // </tr>
                        )}
                    </tbody>
                </table> */}
                <div className="overflow-hidden overflow-x-auto mt-6 ">
                    <table className="border-t-2 border-t-Amber w-full min-w-[840px] border-2">
                        <thead>
                            <tr>
                                <th
                                    className="font-bold py-3 px-[10px] relative text-left align-bottom bg-slash" 
                                    colSpan="2"
                                    rowSpan="2"
                                    width="190px"
                                >
                                    <span className="absolute top-[10px] right-[10px]">Model</span>
                                    <span className="inline-block pt-[10px]">Description</span>
                                </th>
                                <th scope="col" width="70px" rowSpan="2">
                                    GBN SERIES
                                </th>
                                <th colSpan="9">T-SERIES</th>
                                <th colSpan="3">F-SERIES</th>
                            </tr>
                            <tr>
                                <th scope="col">GBN10T</th>
                                <th scope="col">GBN20T</th>
                                <th scope="col">GBN30T</th>
                                <th scope="col">GBN45T</th>
                                <th scope="col">GBN60T</th>
                                <th scope="col">GBN70T</th>
                                <th scope="col">GBN100T</th>
                                <th scope="col">GBN140T</th>
                                <th scope="col">GBN170T</th>
                                <th scope="col">GBN210T</th>
                                <th scope="col">GBN220T</th>
                                <th scope="col">GBN400T</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th
                                    className="text-left"
                                    rowSpan="4"
                                    scope="col"
                                    width="100px"
                                >
                                    Operating Weight <br />
                                    (Tool + M/C){" "}
                                </th>
                                <th
                                    className="text-left"
                                    rowSpan="2"
                                    scope="col"
                                    width="90px"
                                >
                                    Silenced
                                </th>
                                <th>Kg</th>
                                <td>135</td>
                                <td>145</td>
                                <td>180</td>
                                <td>250</td>
                                <td>310</td>
                                <td>380</td>
                                <td>570</td>
                                <td>890</td>
                                <td>1,200</td>
                                <td>1,700</td>
                                <td>1,930</td>
                                <td>2,400</td>
                            </tr>
                            <tr>
                                <th>lb</th>
                                <td>298</td>
                                <td>320</td>
                                <td>397</td>
                                <td>551</td>
                                <td>683</td>
                                <td>838</td>
                                <td>1,257</td>
                                <td>1,962</td>
                                <td>2,646</td>
                                <td>3,748</td>
                                <td>4,255</td>
                                <td>5,291</td>
                            </tr>
                            <tr>
                                <th
                                    className="text-left"
                                    rowSpan="2"
                                    scope="col"
                                    width="90px"
                                >
                                    Open Top
                                </th>
                                <th>Kg</th>
                                <td>75</td>
                                <td>86</td>
                                <td>160</td>
                                <td>225</td>
                                <td>324</td>
                                <td>380</td>
                                <td>613</td>
                                <td>850</td>
                                <td>1,280</td>
                                <td>1,800</td>
                                <td>2,020</td>
                                <td>2,640</td>
                            </tr>
                            <tr>
                                <th>lb</th>
                                <td>165</td>
                                <td>190</td>
                                <td>353</td>
                                <td>496</td>
                                <td>714</td>
                                <td>838</td>
                                <td>1,351</td>
                                <td>1,874</td>
                                <td>2,822</td>
                                <td>3,968</td>
                                <td>4,453</td>
                                <td>5,820</td>
                            </tr>
                            <tr>
                                <th className="text-left" rowSpan="2">
                                    Tool <br />
                                    (Moil Type)
                                </th>
                                <th className="text-left">Weight</th>
                                <th>Kg</th>
                                <td>4</td>
                                <td>6.0</td>
                                <td>9</td>
                                <td>12</td>
                                <td>20</td>
                                <td>25</td>
                                <td>41</td>
                                <td>59</td>
                                <td>97</td>
                                <td>125</td>
                                <td>129</td>
                                <td>193</td>
                            </tr>
                            <tr>
                                <th className="text-left">Diameter</th>
                                <th>mm</th>
                                <td>40</td>
                                <td>45</td>
                                <td>53</td>
                                <td>60</td>
                                <td>70</td>
                                <td>75</td>
                                <td>90</td>
                                <td>100</td>
                                <td>125</td>
                                <td>135</td>
                                <td>140</td>
                                <td>155</td>
                            </tr>
                            <tr>
                                <th
                                    className="text-left"
                                    rowSpan="2"
                                    colSpan="2"
                                >
                                    Operating Pressure <br />
                                    (Breaker)
                                </th>
                                <th>bar</th>
                                <td>80~100</td>
                                <td>80~100</td>
                                <td>90~120</td>
                                <td>100~130</td>
                                <td>95~130</td>
                                <td>100~140</td>
                                <td>130~160</td>
                                <td>150~170</td>
                                <td>150~170</td>
                                <td>160~180</td>
                                <td>160~180</td>
                                <td>160~180</td>
                            </tr>
                            <tr>
                                <th>psi</th>
                                <td>1,160 ~ 1,450</td>
                                <td>1,160 ~ 1,450</td>
                                <td>1,305 ~ 1,740</td>
                                <td>1,450 ~ 1,885</td>
                                <td>1,377 ~ 1,885</td>
                                <td>1,450 ~ 2,030</td>
                                <td>1,885 ~ 2,320</td>
                                <td>2,175 ~ 2,465</td>
                                <td>2,175 ~ 2,465</td>
                                <td>2,320 ~ 2,610</td>
                                <td>2,320 ~ 2,610</td>
                                <td>2,320 ~ 2,610</td>
                            </tr>
                            <tr>
                                <th
                                    className="text-left"
                                    rowSpan="2"
                                    colSpan="2"
                                >
                                    Setting Pressure <br />
                                    (Machine)
                                </th>
                                <th>bar</th>
                                <td>150</td>
                                <td>150</td>
                                <td>150</td>
                                <td>160</td>
                                <td>170</td>
                                <td>180</td>
                                <td>190</td>
                                <td>200</td>
                                <td>200</td>
                                <td>210</td>
                                <td>210</td>
                                <td>220</td>
                            </tr>
                            <tr>
                                <th>psi</th>
                                <td>2,175</td>
                                <td>2,175</td>
                                <td>2,175</td>
                                <td>2,320</td>
                                <td>2,465</td>
                                <td>2,610</td>
                                <td>2,755</td>
                                <td>2,900</td>
                                <td>2,900</td>
                                <td>3,045</td>
                                <td>3,045</td>
                                <td>3,190</td>
                            </tr>
                            <tr>
                                <th className="text-left" colSpan="2">
                                    Impact Rate
                                </th>
                                <th>bpm</th>
                                <td>800~1,400</td>
                                <td>700~1,200</td>
                                <td>600~1,100</td>
                                <td>500~1,000</td>
                                <td>450~1,000</td>
                                <td>475~950</td>
                                <td>480~850</td>
                                <td>450~780</td>
                                <td>420~730</td>
                                <td>350~680</td>
                                <td>280~550</td>
                                <td>280~550</td>
                            </tr>

                            <tr>
                                <th className="text-left" colSpan="2">
                                    Accumulator Pressure <br />
                                    (N2-Gas)
                                </th>
                                <th>bar/ psi</th>
                                <td colSpan="9">NONE ACCUMULATOR</td>
                                <td colSpan="3">60/870</td>
                            </tr>

                            <tr>
                                <th className="text-left" colSpan="2">
                                    Back Head Pressure <br />
                                    (N2-Gas)
                                </th>
                                <th>bar/ psi</th>
                                <td>14/203</td>
                                <td>14/203</td>
                                <td>16/232</td>
                                <td>16/232</td>
                                <td>16/232</td>
                                <td>16/232</td>
                                <td>16/232</td>
                                <td>16/232</td>
                                <td>16/232</td>
                                <td>16/232</td>
                                <td>16/232</td>
                                <td>16/232</td>
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
                                <td>15~30</td>
                                <td>20~35</td>
                                <td>25~50</td>
                                <td>30~60</td>
                                <td>34~60</td>
                                <td>40~80</td>
                                <td>45~85</td>
                                <td>85~110</td>
                                <td>100~120</td>
                                <td>120~150</td>
                                <td>120~150</td>
                                <td>160~240</td>
                            </tr>
                            <tr>
                                <th>g/min</th>
                                <td>3.9~7.9</td>
                                <td>5.3~9.2</td>
                                <td>6.6~13.2</td>
                                <td>7.9~15.8</td>
                                <td>8.9~15.8</td>
                                <td>10.5~21.1</td>
                                <td>11.8~22.4</td>
                                <td>22.4~29</td>
                                <td>26.4~31.6</td>
                                <td>31.6~39.6</td>
                                <td>31.6~39.6</td>
                                <td>42.2~63.3</td>
                            </tr>

                            <tr>
                                <th className="text-left" rowSpan="3">
                                    Suitable Excavator
                                </th>
                                <th className="text-left">Min</th>
                                <th>ton</th>
                                <td>0.8</td>
                                <td>1.2</td>
                                <td>2.5</td>
                                <td>3</td>
                                <td>3.5</td>
                                <td>6</td>
                                <td>6</td>
                                <td>10</td>
                                <td>15</td>
                                <td>18</td>
                                <td>20</td>
                                <td>28</td>
                            </tr>
                            <tr>
                                <th className="text-left">Max</th>
                                <th>ton</th>
                                <td>2.5</td>
                                <td>3</td>
                                <td>4.5</td>
                                <td>5.5</td>
                                <td>7</td>
                                <td>9</td>
                                <td>13</td>
                                <td>17</td>
                                <td>20</td>
                                <td>28</td>
                                <td>30</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <th className="text-left">Suitable</th>
                                <th>ton</th>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>10</td>
                                <td>14</td>
                                <td>17</td>
                                <td>20</td>
                                <td>24</td>
                                <td>34</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
