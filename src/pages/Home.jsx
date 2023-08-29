import { useState } from "react";
import { PiArrowSquareRightBold } from "react-icons/pi";
import SelectionCards from "../components/SelectionCards";
// import img3 from "../assets/images/img3.jpg";
// import img2 from "../assets/images/img2.png";
import img1 from "../assets/images/img1.png";
import img4 from "../assets/images/img4.png";

function Home() {
    const [selected, setSelected] = useState(1);
    return (
        <div className="mt-20 md:mt-24">
            {/* First section */}
            <div className="h-[calc(100vh-80px)] grid grid-cols-2 grid-rows-2 px-4 py-8 md:h-[calc(100vh-96px)]">
                <div className="flex flex-col justify-center items-center gap-6 font-extrabold">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-Amber">
                        Crafting Quality,
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-Black">
                        Forging Success
                    </div>
                </div>
                {/* image placeholder */}
                <div className="flex justify-center h-auto w-auto p-4">
                    <div className="bg-Boulder w-4/6 rounded-3xl">
                        <img
                            src={img4}
                            className=" rounded-3xl  h-full  w-full object-cover"
                        />
                    </div>
                </div>
                {/* image placeholder */}
                <div className="flex justify-center h-auto w-auto p-4">
                <div className="bg-Boulder w-4/6 rounded-3xl">
                        <img
                            src={img1}
                            className="rounded-3xl  h-full  w-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-5 font-extrabold">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-Amber">
                        Tools of Tomorrow,
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-Black">
                        Built Today
                    </div>
                </div>
            </div>
            {/* Second section */}
            <div className="grid grid-rows-6 grid-cols-12  p-4 py-12 bg-Boulder">
                {/* Introduction */}
                <div className="row-span-1 col-span-12 px-12 flex flex-col justify-center items-center gap-2">
                    <div className="text-2xl text-Amber font-bold uppercase">
                        business
                    </div>
                    <div className="text-4xl text-Black font-bold uppercase">
                        hammer rock korea
                    </div>
                    <div className="text-xl text-center text-white font-medium">
                        HRK, a hydraulic breaker manufacturer, is committed to
                        continue doing our best in order to achieve our goal in
                        the future.
                    </div>
                </div>
                {/* Selection */}
                <div className="row-span-5 col-span-5 flex justify-center items-center">
                    <ul className="flex flex-col gap-5 w-3/4">
                        <li
                            className={`${
                                selected === 1
                                    ? "flex gap-4 items-center text-3xl text-Amber border-0"
                                    : "border-b-2 border-b-Black"
                            } capitalize text-2xl  font-bold text-Black w-fit cursor-pointer`}
                            onClick={() => setSelected(1)}
                        >
                            {selected === 1 && (
                                <PiArrowSquareRightBold className="text-Amber h-6 w-6" />
                            )}
                            <span>uncover our identity</span>
                        </li>
                        <li
                            className={`${
                                selected === 2
                                    ? "flex gap-4 items-center text-3xl text-Amber border-0"
                                    : "border-b-2 border-b-Black"
                            } capitalize text-2xl  font-bold text-Black w-fit cursor-pointer`}
                            onClick={() => setSelected(2)}
                        >
                            {selected === 2 && (
                                <PiArrowSquareRightBold className="text-Amber h-6 w-6" />
                            )}
                            <span>our hydraulic breaker</span>
                        </li>
                        <li
                            className={`${
                                selected === 3
                                    ? "flex gap-4 items-center text-3xl text-Amber border-0"
                                    : "border-b-2 border-b-Black"
                            } capitalize text-2xl  font-bold text-Black w-fit cursor-pointer`}
                            onClick={() => setSelected(3)}
                        >
                            {selected === 3 && (
                                <PiArrowSquareRightBold className="text-Amber h-6 w-6" />
                            )}
                            <span>attachments</span>
                        </li>
                        <li
                            className={`${
                                selected === 4
                                    ? "flex gap-4 items-center text-3xl text-Amber border-0"
                                    : "border-b-2 border-b-Black"
                            } capitalize text-2xl  font-bold text-Black w-fit cursor-pointer`}
                            onClick={() => setSelected(4)}
                        >
                            {selected === 4 && (
                                <PiArrowSquareRightBold className="text-Amber h-6 w-6" />
                            )}
                            <span>tools</span>
                        </li>
                    </ul>
                </div>
                {/* Selection Cards */}
                <SelectionCards selected={selected} />
            </div>
        </div>
    );
}

export default Home;
// className="capitalize flex gap-4 items-center text-xl font-semibold text-LightBrown bg-Amber py-3.5 px-2 rounded-md cursor-pointer"
