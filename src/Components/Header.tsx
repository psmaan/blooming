import { useEffect, useRef, useState } from "react";
import { images } from "../assets/Images";
import ThreeDVisual from "./3DComponent";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const menuRefs = {
    anim: useRef<HTMLDivElement>(null),
    ourWork: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    culture: useRef<HTMLDivElement>(null),
    hireUs: useRef<HTMLDivElement>(null),
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // Tracks animation state

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
    setIsAnimating(true);
  };

  const handleMenuClose = () => {
    setIsAnimating(true);
    gsap
      .timeline({ defaults: { duration: 0.2 } })
      .to(menuRefs.anim.current, { y: 400, opacity: 0, ease: "power3.out" })
      .to(menuRefs.ourWork.current, { y: 100, opacity: 0, ease: "power3.out" }, "-=0.2")
      .to(menuRefs.services.current, { y: 100, opacity: 0, ease: "power3.out" })
      .to(menuRefs.culture.current, { y: 50, opacity: 0, ease: "power3.out" })
      .to(menuRefs.hireUs.current, { y: 50, opacity: 0, ease: "power3.out" })
      .call(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
      });
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
      gsap
        .timeline({ defaults: { duration: 0.4 } })
        .from(menuRefs.anim.current, { y: 400, opacity: 0, ease: "power3.out" })
        .from(menuRefs.ourWork.current, { y: 100, opacity: 0, ease: "power3.out" })
        .from(menuRefs.services.current, { y: 100, opacity: 0, ease: "power3.out" }, "-=0.1")
        .from(menuRefs.culture.current, { y: 50, opacity: 0, ease: "power3.out" }, "-=0.2")
        .from(menuRefs.hireUs.current, { y: 50, opacity: 0, ease: "power3.out" }, "-=0.2")
        .call(() => setIsAnimating(false));
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }
  }, [isMenuOpen]);

  return (
    <div className="text-white flex flex-col w-full z-50 py-4 max-h-screen">
      {/* Header Buttons */}
      <div className="flex z-50 w-full">
        <button
          className={`flex flex-row ml-6 dk:ml-12 flex-1 gap-2 items-center transition-opacity ${isAnimating ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          onClick={isMenuOpen ? handleMenuClose : handleMenuOpen}
        >
          <i className={isMenuOpen ? "text-[#b2ff02]" : ""}>
            {isMenuOpen ? images.close : images.menu}
          </i>
          <span className="font-recoleta">{isMenuOpen ? "Close" : "Menu"}</span>
        </button>

        <a href="/" className="flex-1 flex items-center dk:justify-center justify-end">
          <img
            src="/Images&logo/bloomingLogo.png"
            alt="Blooming Logo"
            className="w-3/4 max-w-40"
          />
        </a>

        <div className="flex-1 hidden dk:flex justify-end font-akhzid items-center">
          <span className="mr-12">Our work</span>
        </div>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full z-40 flex">
          <div className="absolute w-full h-screen top-0 left-0 bg-black"></div>
          <div ref={menuRefs.anim} className="w-full h-full absolute">
            <ThreeDVisual />
          </div>


          <div className="absolute right-0 w-full tb:w-5/6 tbl:w-4/6 rotate font-recoleta pt-52 font-bold tb:pr-10 pr-4 dk:pr-20 h-screen overflow-hidden perspective-style">
            <div className="hidden sm:block w-full font-recoleta font-bold h-screen overflow-hidden innerPrep">
              {[
                { ref: menuRefs.ourWork, label: "01.", text: "OUR WORK", to: "/portfolio" },
                { ref: menuRefs.services, label: "02.", text: "SERVICES", to: "/services" },
                { ref: menuRefs.culture, label: "03.", text: "CULTURE", to: "/unibrain" },
                { ref: menuRefs.hireUs, label: "04.", text: "HIRE US", to: "/coffee" },
              ].map(({ ref, label, text, to }, idx) => (
                <div key={idx} className="flex justify-end gap-8 text-[#B2FF02] cursor-pointer" ref={ref}>
                  <label className="pt-3">{label}</label>
                  <Link
                    to={to}
                    className="text-4xl tb:text-6xl dk:text-8xl whitespace-nowrap font-bold hover:text-stroke-2-green text-end hover:text-black text-st"
                  >
                    {text}
                  </Link>
                </div>
              ))}
            </div>

            <div className="sm:hidden w-full font-recoleta font-bold h-screen overflow-hidden">
              {[
                { ref: menuRefs.ourWork, label: "01.", text: "OUR WORK", to: "/portfolio" },
                { ref: menuRefs.services, label: "02.", text: "SERVICES", to: "/services" },
                { ref: menuRefs.culture, label: "03.", text: "CULTURE", to: "/unibrain" },
                { ref: menuRefs.hireUs, label: "04.", text: "HIRE US", to: "/coffee" },
              ].map(({ ref, label, text, to }, idx) => (
                <div key={idx} className="flex justify-end gap-2 text-[#B2FF02] cursor-pointer" ref={ref}>
                  <label className="pt-1 text-[16px] font-normal ">{label}</label>
                  <Link
                    to={to}
                    className="text-[48px] leading-tight tb:text-6xl dk:text-8xl whitespace-nowrap font-bold hover:text-stroke-2-green text-end hover:text-black text-st"
                  >
                    {text}
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex flex-col text-white font-akhzid z-20 absolute bottom-4 text-sm font-normal dk:hidden tb:right-10 right-4 text-end">
              <span>Vancouver / Canada</span>
              <span className="font-medium">blmngdsgn@blooming.ca</span>
              <span className="font-medium">778-222-2122</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
