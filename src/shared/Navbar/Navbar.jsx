/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Navbar = ({ setIsOpen }) => {
  const navLinks = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },

    {
      id: 3,
      path: "/portfolio",
      text: "Portfolio",
    },
    {
      id: 4,
      path: "/blogs",
      text: "Blogs",
    },
    {
      id: 5,
      path: "/contact",
      text: "Contact",
    },
  ];
  return (
    <div className="mt-12">
      <ul className="hidden lg:flex flex-col gap-4">
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink
              className={({ isActive }) => (isActive ? "text-sky-700" : "")}
              to={link.path}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-4  lg:hidden">
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? "text-[#6f71e9]" : "")}
              to={link.path}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
