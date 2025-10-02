import { AiOutlineSchedule } from "react-icons/ai"; 
import { FaRegHandshake } from "react-icons/fa"; 
import { GiPunchingBag } from "react-icons/gi"; 
import { MdSportsMartialArts } from "react-icons/md"; 
import { GiJumpingRope } from "react-icons/gi"; 
import { GiBoxingGlove } from "react-icons/gi"; 
import { FaHeartbeat } from "react-icons/fa"; 
import { FaRunning } from "react-icons/fa"; 
import { CgYinyang } from "react-icons/cg"; 
import { BsYinYang } from "react-icons/bs"; 
import { BiRightArrowCircle } from "react-icons/bi"; 
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import masterendale from "../assets/masterendale.jpg";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Landing() {
  const images = [photo1, photo2, photo3];
  const [currentImage , setCurrentImage] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setIsFading(true);
      setTimeout(()=>{
        setCurrentImage((prev) => (prev + 1) % images.length);
        setIsFading(false);
      }, 100);
    },10000);
    return ()=> clearInterval(interval);

  },[]);




  return (
    <>
    
        <div className="relative w-full h-screen flex items-center  ">
        {/* Background */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        ></div>

        {/* Overlay */}
        <div className="relative z-10 text-white p-6">
          <h1 className="text-5xl font-bold drop-shadow-lg ">
            WELCOME
          </h1>
          <h1 className="text-5xl font-bold drop-shadow-lg ">
            TO EAGLE GLOW!
          </h1>
          <p className="mt-6 text-lg font-light drop-shadow-lg max-w-2xl mx-auto">
            REFINE THE BODY. DISCIPLINE THE MIND. <br />
            MASTER THE ART OF WUSHU
          </p>
        </div>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>


       {/* Our story section  */}
     <div className="flex text-white items-center gap-6 mt-10 mb-10">
  {/* Image block */}
  <div className="w-1/2 flex justify-center">
    <img
      src={masterendale}
      alt="Master Endale"
      className="rounded-[20px] w-[140px] h-[180px] sm:w-[180px] sm:h-[220px] md:w-[250px] md:h-[320px] object-cover"
    />
  </div>

  {/* Text block */}
  <div className="w-1/2  md:text-left px-2 sm:px-4">
    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">OUR STORY</h1>
    <p className="sm:text-[9px] md:text-base leading-relaxed">
      EagleGlow was founded in 2002 by Master Endale Melse with a vision to
      create a space where people could grow stronger—in both body and mind.
      What started with a foundation in Chinese martial arts later expanded to
      include modern fitness programs like Zumba, Tae Bo, and Aerobics. While
      our martial arts and fitness classes are taught separately, they are all
      guided by the same purpose: helping people build confidence, discipline,
      and a sense of community. This is further supported by our unique
      mentorship program, designed to provide personalized guidance for every
      member.
    </p>
    <Link href="/about-us">
      <button className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold px-4 py-2 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 mx-auto md:mx-0 mt-3 text-sm sm:text-base">
        LEARN MORE
        <BiRightArrowCircle className="text-lg sm:text-xl" />
      </button>
    </Link>
  </div>
</div>



      {/* Our moment */}
      <div className="mt-7">
        <h1 className="text-center text-white text-4xl font-super-bold">OUR MOMENTS</h1>
        <p className="text-center text-white">Dicover our journey through pictures</p>
          <div className="grid grid-cols-2 gap-2 w-fit mx-auto mt-10">
            <img src={masterendale} alt="" className="rounded-[20px] w-[180px] h-[220px] object-cover" />
            <img src={masterendale} alt="" className="rounded-[20px] w-[180px] h-[220px] object-cover" />
            <img src={masterendale} alt="" className="rounded-[20px] w-[180px] h-[220px] object-cover" />
            <img src={masterendale} alt="" className="rounded-[20px] w-[180px] h-[220px] object-cover" />
          </div>

          <div className="flex items-center justify-center">
            <Link href="/some-page">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 ml-14 mt-5">
                VIEW MORE
              </button>
            </Link>
          </div>

          {/* our program */}
          <div className="mt-5">
            <h1 className="text-white font-extrabold text-4xl text-center">OUR PROGRAM</h1>
            <p className="text-white text-center">Choose your perfect training time</p>

            <div className="flex justify-center gap-10 mt-4">
              <div className="flex flex-col items-center">
                <img src={masterendale} alt="" className="rounded-[20px] w-[180px] h-[220px]" />
                <p className="mt-4 flex gap-2 text-3xl items-center font-extralight text-white">
                  <BsYinYang style={{ color: "#FFD700" }} size={40} /> WUSHU
                </p>
                <p className="ml-3 mt-5 max-w-sm text-white"> Our Wushu program builds strength and discipline through
                  <span className="text-[#FFD700]"> Taolu</span> (forms) and
                  <span className="text-[#FFD700]"> Sanda</span> (sparring), blending
                  tradition with modern practice.
                </p>

                <div className="mt-4 flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border-4 border-yellow-400 flex items-center justify-center">
                      <MdSportsMartialArts style={{ color: "#FFD700" }} size={30} />
                    </div>
                    <p className="mt-2 text-white">Taolu</p>
                  </div>

                  {/* Sanda */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border-4 border-yellow-400 flex items-center justify-center">
                      <GiBoxingGlove style={{ color: "#FFD700" }} size={30} />
                    </div>
                    <p className="mt-2 text-white">Sanda</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={masterendale}
                  alt=""
                  className="rounded-[20px] w-[180px] h-[220px]"
                />
                <p className="mt-4 mr-2 flex gap-2 text-3xl items-center font-extralight text-white">
                  <FaRunning style={{ color: "#FFD700" }} size={40} />
                  <FaHeartbeat style={{ color: "#FFD700" }} size={40} /> FITNESS
                </p>
                <p className=" mt-5 max-w-sm text-white">
                  Our fitness program brings energy and fun through
                  <span className=" text-[#FFD700]"> Tae Bo</span>,{" "}
                  <span className=" text-[#FFD700]"> Zumba</span>, and{" "}
                  <span className=" text-[#FFD700]"> Aerobics</span>, helping you stay
                  active, strong, and motivated.
                </p>
                <div className="lg:mt-4 mt-14 sm:mt-4 flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border-4 border-yellow-400 flex items-center justify-center">
                      <GiJumpingRope style={{ color: "#FFD700" }} size={30} />
                    </div>
                    <p className="mt-2 text-white">Zumba</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border-4 border-yellow-400 flex items-center justify-center">
                      <GiPunchingBag style={{ color: "#FFD700" }} size={30} />
                    </div>
                    <p className="mt-2 text-white">Tae Bo</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="flex justify-center items-center w-full mt-6">
            <div className="border-4 gap-2 border-yellow-400 rounded-[40px] px-4 py-2 w-[360px] flex items-center justify-center ">
              <FaRegHandshake className="text-yellow-400 "size={30}/>
              <p className="text-white  md:text-[12px] sm:text-[8px] leading-snug">
                In addition to training, we also provide <span className=" text-[#FFD700]"> mentorship</span>,{" "} 
                to support your personal growth and journey.
              </p>
            </div>
          </div>
      </div>

      {/* Our schedules */}

      <div>
          <p className="justify-center mt-6 align-middle flex gap-2 text-3xl font-extrabold text-white"><AiOutlineSchedule className="grid align-top text-yellow-400 "size={40} />OUR SCHEDULES</p>
          <p className="align-bottom text-white text-center text-md">Find the best time to train with us</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center p-6">
        {/* Monday */}
        <div className="w-full md:w-64 rounded-2xl shadow-md p-4 bg-white">
          <h2 className="text-xl font-semibold mb-4 text-center">Monday</h2>
          <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
          <span><BsYinYang  size={25} /></span>
          <span className="font-medium">12:00 AM</span>
          <span className="text-gray-600">- Wushu</span>
          </li>
          <li className="flex items-center gap-2">
          <span className="text-xl">🏋️</span>
          <span className="font-medium">12:00 PM</span>
          <span className="text-gray-600">- Fitness</span>
          </li>
          </ul>
        </div>


        {/* Tuesday */}
        <div className="w-full md:w-64 rounded-2xl shadow-md p-4 bg-white">
          <h2 className="text-xl font-semibold mb-4 text-center">Tuesday</h2>
          <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
          <span className="text-xl">🏋️</span>
          <span className="font-medium">12:00 AM</span>
          <span className="text-gray-600">- Fitness</span>
          </li>
          <li className="flex items-center gap-2">
          <span><BsYinYang  size={25} /></span>
          <span className="font-medium">11:00 PM</span>
          <span className="text-gray-600">- Wushu Kid's</span>
          </li>
          <li className="flex items-center gap-2">
          <span><BsYinYang  size={25} /></span>
          <span className="font-medium">12:30 AM</span>
          <span className="text-gray-600">- Wushu</span>
          </li>
          </ul>
        </div>


        {/* Wednesday */}
        <div className="w-full md:w-64 rounded-2xl shadow-md border-2 p-4 bg-white">
          <h2 className="text-xl font-semibold mb-4 text-center">Wednesday</h2>
          <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
          <span><BsYinYang  size={25} /></span>
          <span className="font-medium">12:00 AM</span>
          <span className="text-gray-600">- Wushu</span>
          </li>
          <li className="flex items-center gap-2">
          <span ><BsYinYang  size={25} /></span>
          <span className="font-medium">12:00 PM</span>
          <span className="text-gray-600">- Wushu</span>
          </li>
          </ul>
        </div>
        </div>
      </div>

  </>);
  };

export default Landing;