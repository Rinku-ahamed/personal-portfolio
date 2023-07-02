import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Sidebar from "../shared/Sidebar/Sidebar";
import { FcMenu } from "react-icons/fc";
import { useState } from "react";
import PreLoader from "../shared/PreLoader/PreLoader";
import "./main.css";
import { useEffect } from "react";
const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [preLoader, setPreLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreLoader(false);
    }, 2000);
  }, []);
  return (
    <>
      {preLoader ? (
        <PreLoader />
      ) : (
        <main className="lg:flex items-center gap-3 pt-3 md:pt-7 relative  font-Karla h-full">
          <Toaster />
          <div
            className={`lg:w-3/12 shadow absolute lg:fixed overflow-y-auto h-screen z-20 top-0 left-0 pt-7 md:border-r border-r-blueColor hidden lg:block bg-[#fff] scrollbar`}
          >
            <Sidebar />
          </div>
          {/* mobile menu */}
          <div
            className={`w-full lg:w-3/12 shadow absolute lg:fixed overflow-y-auto h-screen z-20 top-0 left-0 pt-7 md:border-r border-r-blueColor transition-all duration-500 ease-in-out block lg:hidden ${
              isOpen
                ? "visible opacity-100"
                : "invisible opacity-0 -translate-x-20"
            } lg:block bg-[#fff]`}
          >
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div className="w-full lg:w-9/12 lg:ms-[27%]">
            {/* mobile menu header */}
            <div className="flex justify-between items-center lg:hidden mb-5 shadow-sm">
              <h2 className="text-3xl text-sky-600 font-Karla font-extrabold">
                Rinku
              </h2>
              <button className="text-3xl" onClick={() => setIsOpen(!isOpen)}>
                <FcMenu />
              </button>
            </div>
            <div className="lg:pe-4">
              <Outlet></Outlet>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Main;
