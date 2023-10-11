import { useParams } from "react-router-dom";
import GBN30TL from "./Breaker Models/GBN30TL";
import GBN70TL from "./Breaker Models/GBN70TL";
import GBN220TL from "./Breaker Models/GBN220TL";
import GBN220E from "./Breaker Models/GBN220E";
import GBN1000TL from "./Breaker Models/GBN1000TL";
import NotFound from "../NotFound";

export default function BreakerModels() {
    const { serie } = useParams();

    return (
        <>
            {serie === "GBN30TL" ? (
                <GBN30TL />
            ) : serie === "GBN70TL" ? (
                <GBN70TL />
            ) : serie === "GBN220TL" ? (
                <GBN220TL />
            ) : serie === "GBN220E" ? (
                <GBN220E />
            ) : serie === "GBN1000TL" ? (
                <GBN1000TL />
            ) : (
                <NotFound />
            )}
        </>
    );
}
