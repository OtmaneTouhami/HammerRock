import { Fade } from "react-awesome-reveal";
import { FaTools } from "react-icons/fa";

function Partners() {
    return (
        <div className="mt-20 md:mt-24">
            <div className="min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-95px)] border-y-8 border-Amber p-4 bg-bg bg-cover grid grid-rows-6 grid-cols-1 justify-center items-center">
                <Fade>
                    <h1 className="text-Amber text-center text-3xl 2xl:text-5xl font-bold py-4 2xl:py-8 row-span-1 col-span-1">
                        Nos Partenaires
                    </h1>
                </Fade>
                <div className="flex items-center justify-center md:gap-12 row-span-5 col-span-1">
                    <FaTools className="w-12 h-12" />
                    <p className="text-xl px-4 md:text-3xl font-bold">
                        Page en cours de maintenance!
                    </p>
                </div>
                {/* <div className="text-xl text-center w-10/12 py-3">
                    Nous sommes ravis de vous présenter les partenaires qui
                    contribuent à notre succès et à notre engagement constant
                    envers l&apos;innovation, la qualité et le service
                    exceptionnel
                </div>
                <div className="w-full flex flex-wrap justify-evenly items-center gap-x-4 gap-y-8 my-8">
                    <div className="rounded-xl w-5/12 md:w-1/6 h-44 bg-Boulder hover:scale-105"></div>
                    <div className="rounded-xl w-5/12 md:w-1/6 h-44 bg-Boulder hover:scale-105"></div>
                    <div className="rounded-xl w-5/12 md:w-1/6 h-44 bg-Boulder hover:scale-105"></div>
                    <div className="rounded-xl w-5/12 md:w-1/6 h-44 bg-Boulder hover:scale-105"></div>
                    <div className="rounded-xl w-5/12 md:w-1/6 h-44 bg-Boulder hover:scale-105"></div>
                    <div className="rounded-xl w-5/12 md:w-1/6 h-44 bg-Boulder hover:scale-105"></div>
                    <div className="rounded-xl w-5/12 md:w-1/6 h-44 bg-Boulder hover:scale-105"></div>
                    <div className="rounded-xl w-5/12 md:w-1/6 h-44 bg-Boulder hover:scale-105"></div>
                    <div className="rounded-xl w-5/12 md:w-1/6 h-44 bg-Boulder hover:scale-105"></div>
                </div> */}
            </div>
        </div>
    );
}

export default Partners;
