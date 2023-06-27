import { Link } from "react-router-dom";
import Resume from "../../assets/Rinku_Resume.pdf";
const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row ">
      <div className="lg:w-7/12 pt-6 lg:pe-6">
        <h1 className="text-3xl md:text-5xl text-sky-700 font-Karla font-extrabold">
          I’m Rinku Ahamed <br className="hidden sm:block" />
          <span>Mern Stack</span>
          <br className="hidden sm:block" /> Developer
        </h1>
        <p className="text-gray-500 mt-4">
          I am an junior developer with a passion for learning and growth and
          eager to contribute to projects, collaborate with teammates and learn
          new technologies. I have a 2+ year of experience in web development.
        </p>
        <div className="mt-6">
          <Link
            to="/contact"
            className="bg-sky-700 text-white transition-colors duration-300 shadow-lg shadow-blue-500/50 text-textWhite py-2 px-4 md:px-8 me-2 md:me-4 font-bold rounded"
          >
            Hire Me
          </Link>
          <a
            href={Resume}
            download="Resume"
            className="bg-sky-800 text-white transition-colors duration-300   shadow-lg shadow-blue-500/50  py-2 px-4  font-bold rounded"
          >
            Download Resume
          </a>
        </div>
        <div className="flex mt-12 pb-10 lg:pb-0">
          <span className="w-[3px] bg-sky-800 me-3"></span>
          <div className="flex flex-col gap-1">
            <Link
              to="tel:+8801760-107764"
              className="text-[15px] text-gray-500 transition-colors duration-200 hover:text-sky-600 font-Karla"
            >
              +880 1760-107764
            </Link>
            <Link
              to="mailto:ringkuali18@gmail.com"
              className="text-[15px] text-gray-500 transition-colors duration-200 hover:text-sky-600 font-Karla"
            >
              Ringkuali18@gmail.com
            </Link>
            <Link className="text-[15px] text-gray-500 transition-colors duration-200 hover:text-sky-600 font-Karla">
              Kushtia, Khulna, Bangladesh
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-5/12">
        <img src="https://i.ibb.co/hXJSTpB/Your-Image-1.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
