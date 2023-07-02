import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Animation from "../../shared/Animation/Animation";
import { Helmet } from "react-helmet";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_t9pdm3u",
        "template_cl2qcwo",
        form.current,
        "iSuTDC_mBLmg8njp3"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully");
          e.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };
  return (
    <>
      <Helmet>
        <title>Contact | Personal Portfolio</title>
      </Helmet>
      <div className="md:flex gap-7 pt-10">
        <div className="lg:w-5/12">
          <h4>- LET IS CONNECT</h4>
          <h2 className="text-4xl mt-3 text-[#130f49] font-bold font-Karla">
            Get in touch
          </h2>
          <p className="text-textColorP mt-3">
            I am currently available to take on new projects, so feel free to
            send me a message about anything that you want to run past me. You
            can contact anytime at 24/7
          </p>
          <div className="flex mt-12 pb-10 lg:pb-0">
            <span className="w-[3px] bg-sky-700 me-3"></span>
            <div className="flex flex-col gap-1">
              <Link
                to="tel:+8801760-107764"
                className="text-[15px] text-[#130f49] transition-colors duration-200 hover:text-sky-600 font-Karla"
              >
                +880 1760-107764
              </Link>
              <Link
                to="mailto:ringkuali18@gmail.com"
                className="text-[15px] text-[#130f49] transition-colors duration-200 hover:text-sky-600 font-Karla"
              >
                Ringkuali18@gmail.com
              </Link>
              <Link className="text-[15px] text-[#130f49] transition-colors duration-200 hover:text-sky-600 font-Karla">
                Kushtia, Khulna, Bangladesh
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-7/12 md:ps-7 md:pe-4">
          <Animation>
            <form ref={form} onSubmit={sendEmail}>
              <input
                className="w-full bg-[#edecec] outline-none py-2 px-3 rounded mb-5"
                type="text"
                name="user_name"
                placeholder="Your Name"
              />
              <input
                className="w-full bg-[#edecec] outline-none py-2 px-3 rounded mb-5"
                type="email"
                name="user_email"
                placeholder="Your email"
              />
              <textarea
                className="w-full bg-[#edecec] outline-none py-2 px-3 rounded mb-5 h-32"
                name="message"
                placeholder="Your message"
              ></textarea>
              <input
                type="submit"
                value="Submit Now"
                className="bg-[#130f49] text-[#fff] py-2 px-3 rounded cursor-pointer"
              />
            </form>
          </Animation>
        </div>
      </div>
      <div className="mt-14 pb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466740.4272678779!2d88.70179761828932!3d23.945952386152097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39febca82f6a21ed%3A0x4040980d7c6874f8!2sKushtia%20District!5e0!3m2!1sen!2sbd!4v1687152731967!5m2!1sen!2sbd"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
