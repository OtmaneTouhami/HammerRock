import ReactLoading from "react-loading";

function LoadingPage() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <ReactLoading type="spin" color="#FAC204" height={100} width={50} />
        </div>
    );
}

export default LoadingPage;
