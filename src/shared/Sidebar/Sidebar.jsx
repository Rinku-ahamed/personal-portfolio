/* eslint-disable react/prop-types */
import Navbar from "../Navbar/Navbar";
// import Profile from "../../assets/Profile.jpg";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = ({ setIsOpen }) => {
  return (
    <div className="text-center px-10 relative">
      <button
        className=" absolute top-0 right-0 bg-sky-600 text-white px-1 rounded-sm block lg:hidden"
        onClick={() => setIsOpen(false)}
      >
        X
      </button>
      <div>
        <img
          src="https://i.ibb.co/M1vmNWG/197044480-161556039343108-1949220722968995316-n.jpg"
          alt=""
          className="mx-auto w-28 h-28 rounded-full border-2 border-sky-700 object-cover hidden md:block"
        />
        <h2 className="text-xl text-sky-700 font-extrabold font-Karla mt-2 tracking-[0px]">
          Rinku <span>Ahamed</span>
        </h2>
        <p className="text-[14px] text-gray-500">Mern Stack Developer</p>
        <div className="flex gap-5 items-center justify-center mt-3">
          <Link
            to="https://www.facebook.com/rinkuali64/"
            target="_blank"
            rel="noreferrer"
            className=" text-sky-700 text-lg"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="https://www.linkedin.com/in/rinku-ahamed/"
            target="_blank"
            rel="noreferrer"
            className="  text-sky-700 text-lg"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to="https://github.com/Rinku-ahamed"
            target="_blank"
            rel="noreferrer"
            className=" text-sky-700 text-lg"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
      <div>
        <Navbar setIsOpen={setIsOpen} />
      </div>
      <p className="mt-12 text-textColorP">
        Copyright © {new Date().getFullYear()} Rinku Ahamed. All rights
        reserved.
      </p>
    </div>
  );
};

export default Sidebar;
