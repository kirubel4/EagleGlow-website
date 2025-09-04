import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import logo1 from "../assets/logo1.png";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#1B1A1A]">
      <div className="px-4 py-8">
        <div className="flex flex-row justify-around px-10 max-w-screen-xl mx-auto flex-wrap">
           <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <h1 className="text-[#FFD900] text-3xl">Quick Link</h1>
            <div className="py-4 flex flex-col gap-2">
              <a href="#" className="text-white">About us</a>
              <a href="#" className="text-white">Gallery</a>
              <a href="#" className="text-white">Classes</a>
              <a href="#" className="text-white">Schedule</a>
              <a href="#" className="text-white">Contact us</a>
            </div>
          </div>
          {/* Column 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="flex items-start">
              <img src={logo1} width={70} height={50} alt="logo" className="mr-4" />
              <div>
                <h1 className="text-white font-bold text-xl xl:text-3xl">
                  EAGLE<span className="text-yellow-400">GLOW</span>
                </h1>
                <p className="text-white font-serif text-sm">Shaolin Wushu Center</p>
              </div>
            </div>
            <p className="flex items-center text-white pt-6">
              <CiLocationOn className="text-[#FFD900] mr-2" size={20} />
              <a href="https://maps.app.goo.gl/VZvPhL3wotkprP9k9">Goro, Yerer Guilt</a>
            </p>
            <p className="flex items-center text-white pt-2">
              <AiOutlineMail className="text-[#FFD900] mr-2" size={18} />
              eaglewushuclub@gmail.com
            </p>
            <p className="flex items-center text-white pt-2">
              <BsTelephone className="text-[#FFD900] mr-2" size={16} />
              +251-912-05-23-49
            </p>
          </div>

          {/* Column 2 */}
         

          {/* Column 3 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <h1 className="text-[#FFD900] text-3xl">Stay Connected</h1>
            <div className="flex space-x-4 py-4">
              <BsYoutube className="text-[#FFD900]" size={25} />
              <FaTiktok className="text-[#FFD900]" size={25} />
              <FaTelegramPlane className="text-[#FFD900]" size={25} />
              <BsInstagram className="text-[#FFD900]" size={25} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom line */}
      <p className="text-white text-center pb-4">
        © {currentYear} EagleGlow. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;