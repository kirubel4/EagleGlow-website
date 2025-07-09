import master1 from "../assets/master1.jpg";
// landing page componet with function
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
  className="font-inter italic mt-4  ml-[40rem] md:text-lg text-left font-bold leading-snug bg-clip-text text-transparent"
  style={{
    backgroundImage:
      "linear-gradient(25deg, #FFFFFF 0%, #FFFFFF 1%, #FFD900 100%)",
  }}
>
  "<span class="text-white">I </span>Fear Not The Man Who Has Practiced <span className="font-ultra-bold text-[19px]">10,000 Kicks Once</span>,<br /> <span class="text-white">But I Fear The Man</span> Who Has Practiced <span className="font-ultra-bold text-[19px]">One Kick 10,000 Times</span>."
  <br /><span class="text-white">— Bruce Lee</span>
</p>


      </div>
    </div>
  );
}

export default Landing;