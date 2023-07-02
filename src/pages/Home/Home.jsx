import { Helmet } from "react-helmet";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Personal Portfolio</title>
      </Helmet>
      {/* website banner */}
      <Banner />
    </div>
  );
};

export default Home;
