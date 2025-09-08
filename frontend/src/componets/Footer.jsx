import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane, FaTiktok } from "react-icons/fa";
import { BsYoutube, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.png";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-b from-[#555] to-[#000] text-white">
      {/* Logo & tagline */}
      <div className="flex flex-col ml-10 pt-6">
        <Link to="/">
          <div className="flex  space-x-3">
            <img src={logo1} alt="logo" className="w-12 h-12 sm:w-16 sm:h-16" />
            <h1 className="font-bold text-xl sm:text-2xl">
              EAGLE<span className="text-yellow-400">GLOW</span>
              <p className="text-xs sm:text-sm font-normal text-gray-300">
                Shaolin Wushu & Fitness Center
              </p>
            </h1>
          </div>
        </Link>
      </div>
      <hr className="mt-4 border-t-2 border-gray-400 opacity-30 w-11/12 mx-auto" />
      <div className="grid grid-cols-3 gap-4 sm:gap-8 px-4 sm:px-8 py-8 w-full text-xs sm:text-sm md:text-base">
        
        {/* Quick links */}
        <div className="text-center sm:text-left">
          <h2 className="text-yellow-400 font-bold text-sm sm:text-lg mb-3">Quick links</h2>
          <ul className="space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Classes</a></li>
            <li><a href="#">Schedule</a></li>
          </ul>
        </div>

        {/* Follow us */}
        <div className="text-center">
          <h2 className="text-yellow-400 font-bold text-sm sm:text-lg mb-3">Follow us</h2>
          <div className="grid grid-cols-2 gap-4 justify-center max-w-[120px] mx-auto">
            <FaTelegramPlane className="text-yellow-400 w-6 h-6 sm:w-7 sm:h-7 mx-auto" />
            <BsInstagram className="text-yellow-400 w-6 h-6 sm:w-7 sm:h-7 mx-auto" />
            <BsYoutube className="text-yellow-400 w-6 h-6 sm:w-7 sm:h-7 mx-auto" />
            <FaTiktok className="text-yellow-400 w-6 h-6 sm:w-7 sm:h-7 mx-auto" />
          </div>
        </div>

        {/* Contact us */}
        <div className="text-center sm:text-left">
          <h2 className="text-yellow-400 font-bold text-sm sm:text-lg mb-3">Contact us</h2>
          <p className="flex items-center justify-center sm:justify-start gap-2 mb-2">
            <CiLocationOn className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
            <span>Gerji Jacros, Woreda 07<br/>Yerer Guilt, Market</span>
          </p>
          <p className="flex items-center justify-center sm:justify-start gap-2 mb-2">
            <BsTelephone className="text-yellow-400 w-4 h-4" />
            <span>+251-900-636-249</span>
          </p>
          <p className="flex items-center justify-center sm:justify-start gap-2">
            <AiOutlineMail className="text-yellow-400 w-4 h-4" />
            <span>Eagleglow@gmail.com</span>
          </p>
        </div>
      </div>

      {/* Footer bottom */}
      <p className="text-center text-xs sm:text-sm pb-4 text-gray-300">
        © {currentYear} EagleGlow Wushu & Fitness Center. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
