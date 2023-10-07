import BreakersCards from "../../components/BreakersCards";
import { useEffect, useState } from "react";
import LoadingPage from "../../components/LoadingPage";

function Breaker() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const readyState = document.readyState;
        if (readyState === "loading") {
            setIsLoading(true);
        } else {
            setTimeout(() => setIsLoading(false), 2500);
        }
    }, []);
    return (
        <div className="mt-20 md:mt-24">
            {isLoading ? (
                <LoadingPage />
            ) : (
                <div className="border-y-8 border-y-Amber min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-95px)] p-4 flex flex-col">
                    <h1 className="text-Amber text-center text-3xl font-bold pt-12">
                        Brise Roche
                    </h1>
                    <div className="h-full flex-grow flex items-center">
                        <BreakersCards />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Breaker;
