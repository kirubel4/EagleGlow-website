import { MdLanguage } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import logo1 from "../assets/logo1.png";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const routes = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/About" },
    { name: "Gallery", path: "/Gallery" },
    { name: "Classes", path: "/Classes" },
    { name: "Schedules", path: "/Schedules" },
    { name: "Contact us", path: "/Contact" },
  ];


  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  const [language, setLanguage] = useState("en");
  const [langOpen, setLangOpen] = useState(false);           // desktop dropdown
  const [mobileLangOpen, setMobileLangOpen] = useState(false); // mobile dropdown

  const langRef = useRef(null);
  const mobileLangRef = useRef(null);

  // Close dropdowns when clicking outside or pressing Escape
  useEffect(() => {
    function handleOutside(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
      if (mobileLangRef.current && !mobileLangRef.current.contains(e.target)) {
        setMobileLangOpen(false);
      }
    }
    function handleKey(e) {
      if (e.key === "Escape") {
        setLangOpen(false);
        setMobileLangOpen(false);
        setIsMobileMenuShown(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  function handleMobileMenu() {
    setIsMobileMenuShown((s) => !s);
    // Close dropdowns when toggling the main mobile menu
    setMobileLangOpen(false);
    setLangOpen(false);
  }

  function handleLangSelect(lng) {
    setLanguage(lng);
    setLangOpen(false);
    setMobileLangOpen(false);
  }

  return (
    <nav className="relative z-50 flex flex-wrap items-center justify-between px-4 py-2 bg-gradient-to-b from-[#333333] to-[#666666]">
      {/* Logo */}
      <Link to="/" onClick={() => setIsMobileMenuShown(false)}>
        <div className="flex items-center">
          <img src={logo1} width={60} height={50} alt="logo" className="mr-3" />
          <div>
            <h1 className="text-white font-bold text-xl xl:text-3xl">
              EAGLE<span className="text-yellow-400">GLOW</span>
            </h1>
            <p className="text-white font-serif text-xs sm:text-sm">
              Wushu & Fitness Center
            </p>
          </div>
        </div>
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={handleMobileMenu}
        className="block lg:hidden rounded-lg p-2 focus:ring-2 focus:ring-gray-200"
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuShown}
      >
        <GiHamburgerMenu size={28} className="text-white" />
      </button>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-6">
        <ul className="flex gap-6">
          {routes.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className="text-white hover:text-yellow-400 transition"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Dropdown (desktop - CLICKABLE) */}
        <div className="relative" ref={langRef}>
          <button
            onClick={() => setLangOpen((o) => !o)}
            className="flex items-center gap-2 text-white px-2 py-1 rounded-md hover:bg-white/10 focus:ring-2 focus:ring-yellow-400"
            aria-haspopup="menu"
            aria-expanded={langOpen}
          >
            <MdLanguage className="text-yellow-500" size={22} />
            <span className="whitespace-nowrap">
              {language === "en" ? "English" : "Amharic"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-4 h-4 transition ${langOpen ? "rotate-180" : ""}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {langOpen && (
            <div className="absolute top-10 right-0 bg-white border rounded-lg shadow-lg w-40 z-50">
              <button
                onClick={() => handleLangSelect("en")}
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
              >
                🇺🇸 English
              </button>
              <button
                onClick={() => handleLangSelect("am")}
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
              >
                🇪🇹 Amharic
              </button>
              
function Nav(){
    const routes = [
        { name: "Home", path: "/" },
        { name: "About us", path: "/About" },
        { name: "Gallery", path: "/Gallery" },
        { name: "Classes", path: "/Classes" },
        { name: "Schedules", path: "/Schedules" },
        { name: "Contact us", path: "/Contact" }
    ];

    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
    
        function handleMobileMenu() {
            setIsMobileMenuShown(!isMobileMenuShown);
        }
    return (
        // Nav bar mobile and desktop mode
        <nav className="flex bg-[#1B1A1A] flex-wrap items-center justify-between px-4">
            <Link to="/">
            <div>
                <div className="flex">
                    <img src={logo1} width={70} height={50} alt="logo" className="mr-6" />
                    <div className="">
                        <h1 className=" text-white font-bold  text-xl xl:text-3xl">
                            EAGLE<span className="text-yellow-400">GLOW</span>
                        </h1>
                        <p className="text-white font-serif text-sm">Shaolin Wushu Center</p>
                    </div>
                </div>
                
                    
                </div>  
                
                
            </Link>

            <button
                onClick={handleMobileMenu}
                className="block lg:hidden hover:bg-white-200 rounded-lg p-2 focus:ring-2 focus:ring-gray-200"
                >
                <GiHamburgerMenu size={30} className="text-white"/>
            </button>

            <div className={`${isMobileMenuShown ? "" : "hidden"} w-full lg:w-auto lg:block py-4`}>
                <ul className="flex flex-col lg:flex-row xl:space-x-6 mt-4 xl:mt-0">
                    {routes.map(({ name, path }) => (
                    <li key={name}>
                    <Link
                        to={path}
                        className="block text-white px-4 py-2 hover:text-[#FFD900]"
                    >
                        {name}
                    </Link>
                    </li>

                    ))}
                </ul>
            </div>
          )}
        </div>

        {/* Buttons */}
        <button className="px-3 py-1 rounded-md border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
          Register
        </button>
        <button className="px-3 py-1 rounded-md bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition">
          Login
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuShown && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#444] shadow-lg">
          <ul className="flex flex-col divide-y divide-gray-600">
            {routes.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className="block text-white px-4 py-2 hover:bg-gray-700"
                  onClick={() => {
                    setIsMobileMenuShown(false);
                    setMobileLangOpen(false);
                  }}
                >
                  {name}
                </Link>
              </li>
            ))}

            {/* Mobile Language Dropdown (click to open) */}
            <li className="relative" ref={mobileLangRef}>
              <button
                onClick={() => setMobileLangOpen((o) => !o)}
                className="flex items-center gap-2 text-white px-4 py-2 w-full"
                aria-haspopup="menu"
                aria-expanded={mobileLangOpen}
              >
                <MdLanguage className="text-yellow-500" size={20} />
                <span>{language === "en" ? "English" : "Amharic"}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-4 h-4 ml-auto transition ${mobileLangOpen ? "rotate-180" : ""}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {mobileLangOpen && (
                <div className="bg-white border rounded-lg shadow-lg w-40 mx-4 mb-3 z-50">
                  <button
                    onClick={() => handleLangSelect("en")}
                    className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
                  >
                    🇺🇸 English
                  </button>
                  <button
                    onClick={() => handleLangSelect("am")}
                    className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
                  >
                    🇪🇹 Amharic
                  </button>
                </div>
              )}
            </li>

            {/* Auth Buttons */}
            <li className="flex gap-2 px-4 py-3">
              <button className="flex-1 px-3 py-2 rounded-md border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                Register
              </button>
              <button className="flex-1 px-3 py-2 rounded-md bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition">
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}


export default Nav;
