import PortfolioCard from "./PortfolioCard";
import usePortfolio from "../../hooks/usePortfolio";
import { Helmet } from "react-helmet";

const Portfolio = () => {
  const [projects] = usePortfolio();

  return (
    <div>
      <Helmet>
        <title>Portfolio | Personal Portfolio</title>
      </Helmet>
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
