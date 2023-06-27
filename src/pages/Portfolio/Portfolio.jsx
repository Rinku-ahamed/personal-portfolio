import { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/portfolios.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-Karla text-center text-[#130f49] font-bold">
        My Recent Projects
      </h2>
      <div className="grid md:grid-cols-3 mt-6 gap-5">
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project}></PortfolioCard>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
