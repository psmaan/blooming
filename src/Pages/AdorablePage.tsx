import { useState, useEffect } from "react";
import AnimatedButton from "../Components/AnimatedButton";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PrevButton from "../Components/PrevButton";
import backgroundImage from "/Images&logo/adorable1.png";
const AdorablePage: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("");
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setScrollDirection("down");
    } else if (currentScrollY < lastScrollY) {
      setScrollDirection("up");
    }

    setLastScrollY(currentScrollY);

    setIsScrolling(true);
    //@ts-ignore
    clearTimeout(window.scrollTimeout);
    //@ts-ignore
    window.scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 100); // Adjust the timeout as needed
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <div className="w-full  flex flex-col text-white gap-20 dk:gap-40 min-h-screen bg-black">
      <div className="tb:px-10 px-4 dk:px-20 dk:py-4  absolute w-full">
        <Header></Header>
      </div>
      <section
        className={`inertia-container flex flex-col gap-20 dk:gap-40 ${
          isScrolling
            ? scrollDirection === "down"
              ? "inertia-containerscrollingDown"
              : "inertia-containerscrollingUp"
            : ""
        }`}
      >
        <div
          className=" h-screen bg-center bg-cover"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="grid grid-cols-1 dk:grid-cols-2 dk:gap-0 gap-4">
          <div className="tb:px-10 px-4 dk:px-20 flex flex-col gap-4">
            <h3 className="font-recoleta text-6xl text-[#b2ff02]">Adorable</h3>
            <span className="font-akhzid font-thin">
              Bringing the history of your brand to the forefront gives an
              emotional dimension to your visual identity, which is essential
              today more than ever in today's digital landscape.
            </span>
          </div>
          <div className="flex dk:items-center dk:justify-center">
            <div className="flex w-full dk:w-max tb:flex-wrap tb:flex-row flex-col  justify-between  dk:flex-col gap-4 tb:px-10 px-4 dk:px-0">
              <div className="flex flex-col ">
                <h6 className="font-recoleta">Sector</h6>
                <span className="font-akhzid font-thin">Creative Services</span>
              </div>
              <div className="flex flex-col ">
                <h6 className="font-recoleta">Service</h6>
                <span className="font-akhzid font-thin">
                  Package, Branding, UI/UX
                </span>
              </div>
              <div className="flex flex-col">
                <h6 className="font-recoleta">Client</h6>
                <span className="font-akhzid font-thin">Adorable</span>
              </div>
            </div>
          </div>
        </div>
        <div className="tb:px-10 px-4 dk:px-20 flex flex-col gap-10  ">
          <img src="/Images&logo/adorable2.png" alt="" />
          <hr className="border-[#b2ff02] w-3/4 block tb:hidden dk:block dk:w-1/6" />
          <p className="font-akhzid max-w-[600px]">
            Each production is fragmented into a series of videos and images to
            capture the broader story of Laptops process and expertise.
          </p>
        </div>
        <div className="flex flex-col gap-10 tb:px-10 px-4 dk:px-20 w-full">
          <div className="flex flex-col gap-4 w-full tb:grid tb:grid-cols-2 dk:grid-cols-3 ">
            <div className="w-full">
              <img src="/Images&logo/adorable3.png" className="w-full" alt="" />
            </div>
            <div>
              <img src="/Images&logo/adorable4.png" className="w-full" alt="" />
            </div>
            <div>
              <img src="/Images&logo/adorable5.png" className="w-full" alt="" />
            </div>
          </div>

          <div className="gap-4 flex flex-col w-full dk:items-end ">
            <hr className="border-[#b2ff02] w-3/4 block tb:hidden dk:block dk:w-1/6" />
            <p className="font-akhzid">
              Each production is fragmented into a series of videos and images
              to capture the broader story of Laptops process and expertise.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 tb:px-10 px-4 dk:px-20 w-full">
          <div className="flex flex-col gap-4 w-full">
            <div className="w-full">
              <img
                src="/Images&logo/adorable6.png"
                className="w-full dk:w-[1000px]"
                alt=""
              />
            </div>
            <div className="w-full dk:flex dk:items-center dk:justify-center dk:-mt-20">
              <img
                src="/Images&logo/adorable7.png"
                className="w-full  dk:w-[1000px]"
                alt=""
              />
            </div>
            <div className="w-full dk:flex dk:items-center dk:justify-end dk:-mt-20">
              <img
                src="/Images&logo/adorable8.png"
                className="w-full  dk:w-[1000px]"
                alt=""
              />
            </div>
          </div>
          <div className="gap-4 flex flex-col dk:max-w-[600px]">
            <hr className="border-[#b2ff02] w-3/4 block tb:hidden dk:w-1/6 dk:block " />
            <p className="font-akhzid">
              Each production is fragmented into a series of videos and images
              to capture the broader story of Laptops process and expertise.
            </p>
            <p className="font-akhzid">
              Echoing SIRAP’s unique approach to creating moving image, each
              production is presented as an immersive story-telling experience.
            </p>
          </div>
        </div>
        <div className="tb:px-10 px-4 dk:px-20 w-full dk:flex dk:items-center dk:flex-col">
          <img
            src="/Images&logo/adorable9.png"
            alt=""
            className="w-full dk:max-w-[1300px]"
          />
          <div className="gap-4 flex flex-col dk:max-w-[600px] dk:block hidden">
            <hr className="border-[#b2ff02] w-3/4 block tb:hidden dk:w-1/6 dk:block dk:-mt-60 " />
            <p className="font-akhzid">
              Each production is fragmented into a series of videos and images.
            </p>
          </div>
        </div>
        <div className="flex justify-end tb:justify-between tb:px-10 px-4 dk:px-20 ">
          <PrevButton
            innerText="Previous Project"
            textClass="text-white font-recoleta text-xl"
          ></PrevButton>

          <AnimatedButton
            innerText="Next Project"
            textClass="text-white font-recoleta text-xl"
            justifyEnd
          ></AnimatedButton>
        </div>
      </section>
      <div className="tb:px-10 px-4 dk:px-20">
        <Footer></Footer>
      </div>
    </div>
  );
};
export default AdorablePage;
