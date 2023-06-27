import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PortfolioCard = ({ project }) => {
  const { name, photo } = project;
  return (
    <div className="shadow-lg p-4 rounded bg-[#fff] border border-gray-200 text-center">
      <div className="w-full h-60 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-all duration-200 hover:scale-105"
          src={photo}
          alt=""
        />
      </div>
      <h3 className="text-xl mt-6 capitalize">{name}</h3>
      <p className="text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </p>
      <div className="mt-3 flex gap-3 justify-center">
        <Link to="/" className="bg-sky-700 text-white px-3 py-1 rounded">
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
