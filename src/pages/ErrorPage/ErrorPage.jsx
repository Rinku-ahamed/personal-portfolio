import Lottie from "react-lottie";
import Error from "../../../public/error-404.json";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Error,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex items-center flex-col-reverse md:flex-row max-w-screen-xl mx-auto ">
      <div className="w-full md:basis-1/3 text-center md:text-left mb-3">
        <h1 className="text-3xl md:text-7xl text-sky-600 font-bold mb-6">
          Page Not found{" "}
        </h1>
        <Link
          to="/"
          className="bg-sky-800 py-2 px-6 text-white rounded-md font-bold"
        >
          Go Back
        </Link>
      </div>
      <div className="md:basis-2/3">
        <Lottie options={defaultOptions} className="w-full" />
      </div>
    </div>
  );
};

export default ErrorPage;
