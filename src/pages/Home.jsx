// import { PiArrowCircleRightBold } from "react-icons/pi";

function Home() {
    return (
        <div className="mt-16 md:mt-24">
            {/* First section */}
            <div className="h-[calc(100vh-64px)] grid grid-cols-2 grid-rows-2 px-4 py-8 md:h-[calc(100vh-96px)]">
                <div className="flex flex-col justify-center items-center gap-6 font-extrabold">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-bluey">
                        Crafting Quality,
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-darkGray">
                        Forging Success
                    </div>
                </div>
                {/* image placeholder */}
                <div className="flex justify-center h-auto w-auto p-4">
                    <div className="bg-darkGray h-full w-5/6 rounded-md"></div>
                </div>
                {/* image placeholder */}
                <div className="flex justify-center h-auto w-auto p-4">
                    <div className="bg-darkGray h-full w-5/6 rounded-md"></div>
                </div>
                <div className="flex flex-col justify-center items-center gap-5 font-extrabold">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-bluey">
                        Tools of Tomorrow,
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-darkGray">
                        Built Today
                    </div>
                    {/* <div className="flex items-center gap-3 text-2xl font-bold bg-bluey text-goldBrown px-6 py-2  rounded-lg cursor-pointer">
                        Uncover Our Identity
                        <PiArrowCircleRightBold />
                    </div> */}
                </div>
            </div>
            {/* Second section */}
            <div className="h-[calc(100vh-64px)] grid grid-rows-6 grid-cols-3 p-4 md:h-[calc(100vh-96px)] bg-bluey">
                <div className="row-span-2 col-span-3 px-12 flex flex-col justify-center gap-2">
                    <div className="text-2xl text-goldBrown font-bold">BUSINESS</div>
                    <div className="text-4xl text-darkGray font-bold">GENERAL BREAKER</div>
                    <div className="text-xl w-8/12 text-white font-medium">
                        GB, a hydraulic breaker manufacturer, is committed to
                        continue doing our best in order to achieve our goal in
                        the future.
                    </div>
                </div>
                <div className="row-span-4 col-span-1">2</div>
                <div className="row-span-4 col-span-1">3</div>
                <div className="row-span-4 col-span-1">4</div>
            </div>
        </div>
    );
}

export default Home;
