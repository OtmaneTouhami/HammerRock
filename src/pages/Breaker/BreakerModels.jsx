import { useParams } from "react-router-dom";
import SerieX from "./Breaker Models/SerieX";
import SerieY from "./Breaker Models/SerieY";
import SerieZ from "./Breaker Models/SerieZ";
import NotFound from "../NotFound";

export default function BreakerModels() {
    const { serie } = useParams();

    return (
        <>
            {serie === "serie_x" ? (
                <SerieX />
            ) : serie === "serie_y" ? (
                <SerieY />
            ) : serie === "serie_z" ? (
                <SerieZ />
            ) : (
                <NotFound />
            )}
        </>
    );
}
