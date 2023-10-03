import img1 from "../../assets/images/bg_top-hrk-tools.jpg";
import img2 from "../../assets/images/img_top-hrk-tools.png";

function Tools() {
    return (
        <div className="mt-20 md:mt-24">
            <div className="px-8 pt-12 pb-4 border-t-8 border-t-Amber">
                <h1 className="text-4xl font-bold mb-6">Outil</h1>
                <h2 className="text-3xl text-Amber font-bold mb-2 relative before:h-3.5 before:w-3.5  before:bg-Black before:absolute before:-left-0 before:top-3 pl-6">
                    HRK Outils
                </h2>
                <p className="md:w-5/6 leading-relaxed text-lg mb-6">
                    <span className="font-bold text-xl">HRK</span> fabrique la
                    plus large gamme d&apos;outils de démolition de haute
                    qualité en Corée, compatibles avec la plupart des marteaux
                    hydrauliques lourds. Les ingénieurs de{" "}
                    <span className="font-bold text-xl">HRK</span> font de leur
                    mieux dans le processus de fabrication, le contrôle de la
                    qualité et la recherche et développement pour produire les
                    outils de démolition de la plus haute qualité au monde.
                </p>
                <figure className="w-full relative mb-56">
                    <img
                        src={img1}
                        className="border-2 border-Amber max-w-full"
                    />
                    <img src={img2} className="max-w-full absolute top-3/4" />
                </figure>
                <h2 className="text-3xl text-Amber font-bold mb-2 relative before:h-3.5 before:w-3.5  before:bg-Black before:absolute before:-left-0 before:top-3 pl-6">
                    Description Code de l&apos;outil
                </h2>
                <div className="overflow-hidden overflow-x-auto mt-12 md:flex items-center justify-center">
                    <table className="border-t-4 border-t-Amber w-fit">
                        <thead className="bg-Amber/20">
                            <tr>
                                <th
                                    colSpan="2"
                                    className="text-lg py-[15px] px-[10px]"
                                >
                                    Shape
                                </th>
                                <th className="text-lg py-[15px] px-[10px]">
                                    Type
                                </th>
                                <th className="text-lg py-[15px] px-[10px]">
                                    Code
                                </th>
                                <th className="text-lg py-[15px] px-[10px]">
                                    Application
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="md:px-12">
                                    <img
                                        src="/src/assets/images/img_tool-code-ch_01.png"
                                        alt="chisel / shape"
                                    />
                                </td>
                                <td className="md:px-12">
                                    <img
                                        src="/src/assets/images/img_tool-code-ch_02.png"
                                        alt="chisel / shape"
                                    />
                                </td>
                                <td className="text-lg px-4">CHISEL</td>
                                <td className="text-lg px-8">CH</td>
                                <td className="md:px-12">
                                    <p className="text-lg mb-2">
                                        NON-ABRASIVE BUT DUCTILE ROCK
                                        <br />
                                        LOW OR MEDIUM PENETRATION RATE
                                    </p>
                                    <div>
                                        <ul className="text-lg flex items-center justify-center flex-wrap">
                                            <li className="basis-1/2">
                                                Concrete
                                            </li>
                                            <li className="basis-1/2">
                                                Tunnelling
                                            </li>
                                            <li className="basis-1/2">
                                                Benching
                                            </li>
                                            <li className="basis-1/2">
                                                Trenching
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="md:px-12">
                                    <img
                                        src="/src/assets/images/img_tool-code-mo_01.png"
                                        alt="MOIL / shape"
                                    />
                                </td>
                                <td className="md:px-12">
                                    <img
                                        src="/src/assets/images/img_tool-code-mo_02.png"
                                        alt="MOIL / shape"
                                    />
                                </td>
                                <td className="text-lg px-4">MOIL</td>
                                <td className="text-lg px-8">MO</td>
                                <td className="md:px-12">
                                    <p className="text-lg mb-2">
                                        SOFT, NON-AERASIVE ROCK
                                        <br />
                                        HIGH PENETRATION RATE
                                    </p>
                                    <div>
                                        <ul className="text-lg flex items-center justify-center flex-wrap">
                                            <li className="basis-1/2">
                                                Concrete
                                            </li>
                                            <li className="basis-1/2">
                                                Tunnelling
                                            </li>
                                            <li className="basis-1/2">
                                                Trenching
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="md:px-12">
                                    <img
                                        src="/src/assets/images/img_tool-code-co_01.png"
                                        alt="CONE / shape"
                                    />
                                </td>
                                <td className="md:px-12">
                                    <img
                                        src="/src/assets/images/img_tool-code-co_02.png"
                                        alt="CONE / shape"
                                    />
                                </td>
                                <td className="text-lg px-4">CONE</td>
                                <td className="text-lg px-8">CO</td>
                                <td>
                                    <p className="text-lg mb-2">
                                        SOFT, NON-AERASIVE ROCK
                                    </p>
                                    <div className="md:px-12">
                                        <ul className="text-lg flex items-center justify-center flex-wrap">
                                            <li className="basis-1/2">
                                                Concrete
                                            </li>
                                            <li className="basis-1/2">
                                                Tunnelling
                                            </li>
                                            <li className="basis-1/2">
                                                Trenching
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="md:px-12">
                                    <img
                                        src="/src/assets/images/img_tool-code-bl_01.png"
                                        alt="BLUNT / shape"
                                    />
                                </td>
                                <td className="md:px-12">
                                    <img
                                        src="/src/assets/images/img_tool-code-bl_02.png"
                                        alt="BLUNT / shape"
                                    />
                                </td>
                                <td className="text-lg px-4">BLUNT</td>
                                <td className="text-lg px-8">BL</td>
                                <td className="md:px-12">
                                    <p className="text-lg mb-2">
                                        SOFT OR HARD
                                        <br />
                                        BUT LOW OR MEDIUM ABRASIVE ROCK
                                    </p>
                                    <ul className="text-lg flex items-center justify-between flex-wrap">
                                        <li className="basis-1/2">Concrete</li>
                                        <li className="basis-1/2">
                                            Breaking Boulders
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Tools;
