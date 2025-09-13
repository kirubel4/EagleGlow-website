import master1 from "../assets/master1.jpg";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
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
        <div className="relative w-full h-screen flex items-center justify-center text-center">
        {/* Background */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        ></div>

        {/* Overlay */}
        <div className="relative z-10 text-white p-6">
          <h1 className="text-5xl font-bold drop-shadow-lg">
            WELCOME TO EAGLE GLOW!
          </h1>
          <p className="mt-6 text-xl font-medium drop-shadow-lg max-w-2xl mx-auto">
            REFINE THE BODY. DISCIPLINE THE MIND. <br />
            MASTER THE ART OF WUSHU
          </p>
        </div>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
  );
  };

export default Landing;