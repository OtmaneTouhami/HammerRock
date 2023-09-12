import Cards from "../../components/Cards";
import { BREAKERS } from "../../db/Breakers";

function Breaker() {
    return (
        <div className="mt-20 md:mt-24">
            <div className="border-y-8 border-y-Amber min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-95px)] p-4 flex flex-col">
                <h1 className="text-Amber text-center text-3xl font-bold pt-12">
                    Brise Roche
                </h1>
                <div className="h-full flex-grow flex items-center">
                    <Cards elements={BREAKERS} type={"brise_roche"} />
                </div>
            </div>
        </div>
    );
}

export default Breaker;
