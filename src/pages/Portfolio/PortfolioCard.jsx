import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PortfolioCard = ({ project }) => {
  const { id, name, photo, description } = project;
  return (
    <div className="shadow-lg p-4 rounded bg-[#fff] border border-gray-200 text-center">
      <div
        className="w-full h-60 transition-all duration-[3000ms] ease-in-out bg-cover bg-top hover:bg-bottom"
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
      <h3 className="text-xl mt-6 capitalize text-sky-700">{name}</h3>
      <p className="text-[14px]">{description.slice(0, 70)}...</p>
      <div className="mt-3 flex gap-3 justify-center">
        <Link
          to={`/portfolio/${id}`}
          className="bg-indigo-700 text-white px-3 py-1 rounded"
        >
          Details
        </Link>
        <Link
          to="https://github.com/Rinku-ahamed"
          target="_blank"
          className="bg-sky-700 text-white px-3 py-1 rounded"
        >
          Github
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
