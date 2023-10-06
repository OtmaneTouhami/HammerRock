import { useEffect, useState } from "react";
import Routers from "./Routers/Routers";
import ReactLoading from "react-loading";

const loadingPage = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <ReactLoading type="spin" color="#FAC204" height={100} width={50} />
        </div>
    );
};

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const readyState = document.readyState;
        if (readyState === "loading") {
            setIsLoading(true);
        } else {
            setTimeout(() => setIsLoading(false), 3000);
        }
    }, []);
    return (
        <div className="font-Cairo">
            {isLoading ? loadingPage() : <Routers />}
        </div>
    );
}

export default App;
