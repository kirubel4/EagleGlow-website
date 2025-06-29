import master1 from "../assets/master1.jpg";

function Landing() {
  const applyGradientToWords = (text) => {
  return text.split(" ").map((word, index) => (
    <span
      key={index}
      className="text-transparent bg-clip-text"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #FFD900 0%, #FFD900 30%, #FFFEFA 70%, #FFFEFA 100%)",
      }}
    >
      {word}
      {index < text.split(" ").length - 1 && " "}
    </span>
  ));
};



  return (
    <div
      className="relative flex bg-black flex-col items-center justify-center w-full h-screen bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${master1})`, backgroundPosition: '0% center' }}
    >
      {/* Overlay for text readability with fade effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/80" />
      
      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center p-6 text-center">
        <p className="text-white text-xl md:text-2xl ml-[20rem]">
          Welcome to EAGLE
          <span className="text-transparent bg-gradient-to-b from-[#FFD900] from-50% via-[#FFD900] via-50% to-[#FFFEFA] bg-clip-text">
            GLOW
          </span>
        </p>
        <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight mt-4 space-y-2 ml-[35rem]">
          <div>
            <span className="text-[#FFD900]">{applyGradientToWords('"Refine The Body')}</span>
          </div>
          <div>Discipline The Mind</div>
          <div className="text-[#FFD900]">Master</div>
          <div className="text-[#FFD900] font-bold">{applyGradientToWords('The Art Of Wushu"')}</div>
        </h1>
        <p
  className="mt-4 text-md ml-[40rem] md:text-lg text-left font-semibold leading-snug bg-clip-text text-transparent"
  style={{
    backgroundImage:
      "linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 5%, #FFD900 100%)",
  }}
>
  "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times."
  <br /> — Bruce Lee
</p>


      </div>
    </div>
  );
}

export default Landing;