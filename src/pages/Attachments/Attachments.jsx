import { Fade } from "react-awesome-reveal";
import AttachmentsCards from "../../components/AttachmentsCards";

function Attachments() {
    return (
        <div className="mt-20 md:mt-24">
            <div className="border-y-8 border-y-Amber min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-95px)] p-4 flex flex-col bg-bg bg-cover">
                <h1 className="text-Amber text-center text-3xl 2xl:text-4xl font-bold pt-12">
                    <Fade>Pièces jointes</Fade>
                </h1>
                <div className="h-full flex-grow flex items-center">
                    <AttachmentsCards />
                </div>
            </div>
        </div>
    );
}

export default Attachments;
