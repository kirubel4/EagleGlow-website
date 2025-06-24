import master1 from "../assets/master1.jpg";

function Landing() {
  const applyGradientToWords = (text) => {
    return text.split(" ").map((word, index) => (
      <span
        key={index}
        className="text-transparent bg-gradient-to-b from-[#FFD900] to-[#FFFEFA] bg-clip-text"
      >
        {word}
        {index < text.split(" ").length - 1 && " "}
      </span>
    ));
  };
  return (
    <div className="flex flex-col lg:flex-row w-full h-auto bg-black">
      {/* Image section */}
      <div className="w-full lg:w-1/2 h-64 lg:h-[400px]">
        <img
          src={master1}
          alt="master"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text section */}
      <div className="w-full lg:w-1/2 flex items-center p-6 bg-black">
        <div className="lg:text-right items-center bg-black/60 p-4 rounded-md max-w-md">
          <p className="text-white text-xl">
            Welcome to EAGLE<span className="text-transparent bg-gradient-to-b from-[#FFD900]  to-[#FFFEFA] bg-clip-text">GLOW</span>
          </p>
          <h1 className="text-center mt-4 text-4xl font-semibold leading-snug">
           {applyGradientToWords('"Refine the body, discipline the mind, master the art of Wushu."')} <br />
          </h1>
          <p className=" mt-4 text-md font-semibold leading-snug">{applyGradientToWords('"I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times." — Bruce Lee')}</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
