import { Fade } from "react-awesome-reveal";
import BreakersCards from "../../components/BreakersCards";

function Breaker() {
    return (
        <div className="mt-20 md:mt-24">
            <div className="border-y-8 border-y-Amber min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-95px)] p-4 flex flex-col bg-bg bg-cover">
                <h1 className="text-Amber text-center text-3xl 2xl:text-4xl font-bold pt-12">
                    <Fade>Brise Roche</Fade>
                </h1>
                <div className="h-full flex-grow flex items-center">
                    <BreakersCards />
                </div>
            </div>
        </div>
    );
}

export default Breaker;
