import { useEffect, useRef, useState } from "react";
import { images } from "../assets/Images";
import ThreeDVisual from "./3DComponent";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  const ourWorkRef = useRef<HTMLDivElement>(null);
  const nftRef = useRef<HTMLDivElement>(null);
  const cultureRef = useRef<HTMLDivElement>(null);
  const hireRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState(false);
  const [close, setClose] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.2 } });

    tl.to(animRef.current, {
      y: 400,
      opacity: 0,
      ease: "power3.out",
      duration: 0.5,
    })
      .to(
        ourWorkRef.current,
        { y: 100, opacity: 0, ease: "power3.out" },
        "-=0.2"
      )
      .to(nftRef.current, { y: 100, opacity: 0, ease: "power3.out" }) // Overlap the start by 0.5 seconds
      .to(cultureRef.current, { y: 50, opacity: 0, ease: "power3.out" })
      .to(hireRef.current, {
        y: 50,
        opacity: 0,
        ease: "power3.out",
        onComplete: () => {
          setMenu(false);
          setClose(false);
        },
      });
  }, [close]);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const tl = gsap.timeline({ defaults: { duration: 0.4 } });

    tl.from(animRef.current, {
      y: 400,
      opacity: 0,
      ease: "power3.out",
      duration: 0.4,
    })
      .from(ourWorkRef.current, { y: 100, opacity: 0, ease: "power3.out" })
      .from(nftRef.current, { y: 100, opacity: 0, ease: "power3.out" }, "-=0.1") // Overlap the start by 0.5 seconds
      .from(
        cultureRef.current,
        { y: 50, opacity: 0, ease: "power3.out" },
        "-=0.2"
      )
      .from(
        hireRef.current,
        { y: 50, opacity: 0, ease: "power3.out" },
        "-=0.2"
      );

    // Use the ref as the target for your animation
  }, [menu]);
  return (
    <div
      className={"text-white flex  flex-col w-full z-50  py-4 max-h-screen "}
    >
      <div className="flex z-20 w-full">
        {menu ? (
          <button
            className="flex flex-row flex-1 gap-2 items-center"
            onClick={() => {
              setClose(true);
            }}
          >
            <i className="text-[#b2ff02]">{images.close}</i>
            <span className="font-recoleta ">Close</span>
          </button>
        ) : (
          <button
            className="flex flex-row flex-1 gap-2 items-center"
            onClick={() => setMenu(true)}
          >
            <i>{images.menu}</i>
            <span className="font-recoleta ">Menu</span>
          </button>
        )}
        <div className="flex-1  flex items-center dk:justify-center justify-end">
          <img
            src="/Images&logo/bloomingLogo.png"
            alt=""
            className="w-3/4 max-w-40"
          />
        </div>
        <div className="flex-1 hidden dk:flex justify-end font-akhzid  items-center">
          <span className="mr-4 ">Our work:</span>
          <span className="mr-3">[PRINTT DESIGN]</span>
          <span>[UX/UI]</span>
        </div>
      </div>
      {menu ? (
        <div className="flex absolute top-0 left-0 w-full h-full  z-10">
          <div className="absolute w-full h-screen top-0 left-0 bg-black"></div>
          <div ref={animRef} className=" ">
            <ThreeDVisual></ThreeDVisual>
          </div>
          <div className="absolute right-0 w-full tb:w-5/6 tbl:w-4/6 rotate font-recoleta pt-52   font-bold tb:pr-10 pr-4 dk:pr-20 h-screen overflow-y-auto overflow-x-hidden">
            <div
              className="flex justify-end gap-8  text-[#B2FF02] cursor-pointer"
              ref={ourWorkRef}
            >
              <label htmlFor="" className="pt-3">
                01.
              </label>
              <Link
                to={"/portfolio"}
                className=" text-4xl tb:text-6xl dk:text-8xl whitespace-nowrap font-bold hover:text-stroke-2-green text-end hover:text-black text-st"
              >
                OUR WORK
              </Link>
            </div>{" "}
            <div
              ref={nftRef}
              className="flex justify-end gap-8  text-[#B2FF02] cursor-pointer"
            >
              <label htmlFor="" className=" pt-3">
                02.
              </label>
              <Link
                to={"/vlproject"}
                className=" text-4xl tb:text-6xl dk:text-8xl  whitespace-nowrap  font-bold hover:text-stroke-2-green text-end hover:text-black text-st"
              >
                NFT SERVICE
              </Link>
            </div>{" "}
            <div
              ref={cultureRef}
              className="flex justify-end gap-8  text-[#B2FF02] cursor-pointer"
            >
              <label htmlFor="" className=" pt-3">
                03.
              </label>
              <Link
                to={"/unibrain"}
                className=" text-4xl tb:text-6xl dk:text-8xl  whitespace-nowrap font-bold hover:text-stroke-2-green text-end hover:text-black text-st"
              >
                CULTURE
              </Link>
            </div>
            <div
              ref={hireRef}
              className="flex justify-end gap-8  text-[#B2FF02] cursor-pointer"
            >
              <label htmlFor="" className=" pt-3">
                04.
              </label>
              <Link
                to={"/coffee"}
                className=" text-4xl tb:text-6xl dk:text-8xl  whitespace-nowrap font-bold hover:text-stroke-2-green text-end hover:text-black text-st"
              >
                HIRE US
              </Link>
            </div>{" "}
            <div className="flex flex-col text-white font-akhzid z-20 absolute bottom-4 text-sm font-normal dk:hidden tb:right-10 right-4">
              <span>Vancouver / Canada</span>
              <span>blmngdsgn@blooming.ca</span>
              <span>778-222-2122</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Header;
