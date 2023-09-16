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
            {model === "attache_rapide" ? (
                <AttacheRapide />
            ) : model === "compacteur" ? (
                <Compacteur />
            ) : model === "marteau_vibrant" ? (
                <MarteauVibrant />
            ) : model === "ripper_vibrant" ? (
                <RipperVibrant />
            ) : model === "grappin_pour_pierre" ? (
                <GrappinPierre />
            ) : model === "grappin_pour_bois" ? (
                <GrappinBois />
            ) : model === "grappin_de_recuperation" ? (
                <GrappinRecuperation />
            ) : model === "broyeuse" ? (
                <Broyeuse />
            ) : model === "pulveriseur" ? (
                <Pulveriseur />
            ) : (
                <NotFound />
            )}
        </>
    );
}
