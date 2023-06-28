import { useEffect } from "react";
import { useState } from "react";

const usePortfolio = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/portfolios.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return [projects];
};

export default usePortfolio;
