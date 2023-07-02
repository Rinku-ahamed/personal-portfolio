/* eslint-disable react/no-unescaped-entities */
import ProgressBar from "@ramonak/react-progress-bar";
import Resume from "../../assets/Rinku_Resume.pdf";
import Animation from "../../shared/Animation/Animation";
const About = () => {
  return (
    <>
      <Animation>
        <div className="flex flex-col-reverse lg:flex-row gap-3">
          <div className="lg:w-5/12 pe-10">
            <h2 className="text-3xl font-Karla text-sky-700 font-bold mt-3">
              My Expertize on
            </h2>
            <div className="mt-6">
              <span className="uppercase font-Karla font-semibold">
                Html/css
              </span>
              <ProgressBar
                labelSize="12px"
                height="14px"
                completed={90}
                animateOnRender={true}
              />
            </div>
            <div className="mt-4">
              <span className="uppercase font-Karla font-semibold">
                bootstrap
              </span>
              <ProgressBar
                labelSize="12px"
                height="14px"
                animateOnRender={true}
                completed={85}
              />
            </div>
            <div className="mt-4">
              <span className="uppercase font-Karla font-semibold">
                tailwind css
              </span>
              <ProgressBar
                labelSize="12px"
                height="14px"
                animateOnRender={true}
                completed={80}
              />
            </div>
            <div className="mt-4">
              <span className="uppercase font-Karla font-semibold">
                JavaScript
              </span>
              <ProgressBar
                labelSize="12px"
                height="14px"
                animateOnRender={true}
                completed={65}
              />
            </div>
            <div className="mt-4">
              <span className="uppercase font-Karla font-semibold">React</span>
              <ProgressBar
                labelSize="12px"
                height="14px"
                animateOnRender={true}
                completed={70}
              />
            </div>
          </div>
          <div className="lg:w-7/12 lg:pe-6 mt-5 md:mt-0 pb-4">
            <span className="bg-sky-700 text-[#fff] px-2 py-1 rounded">
              ABOUT ME
            </span>
            <h2 className="text-3xl md:text-4xl font-Karla text-sky-700 font-bold mt-4 mb-4 uppercase">
              I am Rinku Ahamed
            </h2>
            <p className="text-textColorP">
              Welcome to my website! I'm Rinku Ahamed, a passionate and
              dedicated mern stack developer. I have a strong passion for
              creating responsive and user-friendly web applications that leave
              a lasting impression. With a solid foundation in web development
              technologies, I bring a fresh perspective and a commitment to
              continuous learning to every project.
            </p>
            <p className="text-textColorP mt-3 mb-4">
              I am expertize in creating responsive and user-friendly web
              applications using like Html, Css, JavaScript, React, Tailwind,
              Bootstrap, Node, Express and more.
            </p>
            <a
              href={Resume}
              download="Resume"
              className="bg-sky-800 text-white transition-colors duration-300   shadow-lg shadow-blue-500/50  py-2 px-4  font-bold rounded"
            >
              Download Resume
            </a>
          </div>
        </div>
      </Animation>
      <Animation>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-14">
          <div className="bg-sky-700 text-center py-8 px-3 rounded-md">
            <h3 className="font-Karla text-5xl text-[#fff]">2+</h3>
            <p className="text-lg text-[#fff]">YEARS OF EXPERIENCE</p>
          </div>
          <div className="bg-[#130f49] text-center py-8 px-3 rounded-md">
            <h3 className="font-Karla text-5xl text-[#fff]">12+</h3>
            <p className="text-lg text-[#fff]">PROJECTS COMPLETED</p>
          </div>
          <div className="bg-cyan-700 text-center py-8 px-3 rounded-md">
            <h3 className="font-Karla text-5xl text-[#fff]">5+</h3>
            <p className="text-lg text-[#fff]">HAPPY CLIENTS</p>
          </div>
        </div>
      </Animation>
    </>
  );
};

export default About;
