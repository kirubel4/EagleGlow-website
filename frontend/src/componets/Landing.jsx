import { BiRightArrowCircle } from "react-icons/bi"; 
import { BiRightArrow } from "react-icons/bi"; 
import master1 from "../assets/master1.jpg";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import masterendale from "../assets/masterendale.jpg";
import {useState, useEffect} from "react";

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
     <div className="flex flex-col md:flex-row  text-white items-center gap-6 mt-10 mb-10">
        {/* Text block */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4 ml-14">OUR STORY</h1>
          <p className="items-center ml-14">
            EagleGlow was founded in 2002 by Master Endale Melse with a vision to create a space where people could grow stronger—in both body and mind. What started with a foundation in Chinese martial arts later expanded to include modern fitness programs like Zumba,
             Tae Bo, and Aerobics. While our martial arts and fitness classes are taught separately, they are all guided by the same purpose: helping people build confidence, discipline, and a sense of community. This is further supported by our unique mentorship program,
              designed to provide personalized guidance for every member.
          </p>
          <button className="bg-yellow-500 rounded-sm ml-14 mt-3">LEARN MORE<BiRightArrowCircle /></button>
        </div>

        {/* Photo block */}
        <div className="flex-1 justify-center">
          <img
            src={masterendale}
            alt="master endale"
            className="max-w-xs md:max-w-sm lg:max-w-md object-contain rounded-xl w-52 h-60 ml-10"
          />
        </div>
      </div>

  </>);
  };

export default Landing;