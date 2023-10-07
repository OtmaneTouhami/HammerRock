import { useEffect, useState } from "react";
import Routers from "./Routers/Routers";
import LoadingPage from "./components/LoadingPage";

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
            {isLoading ? <LoadingPage /> : <Routers />}
        </div>
    );
}

export default App;
