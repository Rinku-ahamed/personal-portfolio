import { Link, useParams } from "react-router-dom";
import usePortfolio from "../../hooks/usePortfolio";

const SinglePortfolio = () => {
  const [projects] = usePortfolio();
  console.log(projects);
  const { id } = useParams();
  const singleProject = projects?.find((project) => project?.id == id);
  console.log(id);
  return (
    <div className="lg:flex gap-3 bg-base-100 shadow-xl lg:me-9 pb-5">
      <div
        className="lg:basis-1/3 h-64 transition-all duration-[3000ms] ease-in-out bg-cover bg-top hover:bg-bottom"
        style={{ backgroundImage: `url(${singleProject?.photo})` }}
      ></div>
      <div className="basis-2/3">
        <h2 className="text-2xl text-sky-700">{singleProject?.name}</h2>
        <p className="text-gray-500 mt-2">{singleProject?.description}</p>
        <div className="mt-2">
          <b className="me-2">Technology Used:</b>
          {singleProject?.technology.map((tch, index) => (
            <span className="me-2" key={index}>
              {tch}
            </span>
          ))}
        </div>
        <div className="mt-2">
          <b className="me-2">Tools Used:</b>
          {singleProject?.tools.map((tch, index) => (
            <span className="me-2" key={index}>
              {tch}
            </span>
          ))}
        </div>
        <div className="mt-2 mb-3 flex">
          <b className="me-2">Code link:</b>
          <div>
            <Link
              to={singleProject?.client_side}
              target="_blank"
              className="me-3 underline text-sky-600"
            >
              Client Side
            </Link>
            <Link
              to={singleProject?.server_side}
              target="_blank"
              className="me-3 underline text-sky-600"
            >
              Sever Side
            </Link>
          </div>
        </div>
        <Link
          to={singleProject?.link}
          target="_blank"
          className="bg-sky-700 text-white px-3 py-1 rounded"
        >
          Live Website
        </Link>
      </div>
    </div>
  );
};

export default SinglePortfolio;
