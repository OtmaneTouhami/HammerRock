import { useParams } from "react-router-dom";
import NotFound from "../NotFound";
import AttacheRapide from "./Attachment Models/AttacheRapide";
import Compacteur from "./Attachment Models/Compacteur";
import MarteauVibrant from "./Attachment Models/MarteauVibrant";
import RipperVibrant from "./Attachment Models/RipperVibrant";
import GrappinPierre from "./Attachment Models/GrappinPierre";
import GrappinBois from "./Attachment Models/GrappinBois";
import GrappinRecuperation from "./Attachment Models/GrappinRecuperation";
import Broyeuse from "./Attachment Models/Broyeuse";
import Pulveriseur from "./Attachment Models/Pulveriseur";

export default function AttachmentModel() {
    const { model } = useParams();
    console.log(model);

    return (
        <>
            {model === "HRQC_Series" ? (
                <AttacheRapide />
            ) : model === "HRCP_series" ? (
                <Compacteur />
            ) : model === "HRVH" ? (
                <MarteauVibrant />
            ) : model === "HRVR" ? (
                <RipperVibrant />
            ) : model === "HRDG" ? (
                <GrappinPierre />
            ) : model === "HRWG" ? (
                <GrappinBois />
            ) : model === "HRSG" ? (
                <GrappinRecuperation />
            ) : model === "HRCS" ? (
                <Broyeuse />
            ) : model === "HRPV" ? (
                <Pulveriseur />
            ) : (
                <NotFound />
            )}
        </>
    );
}
