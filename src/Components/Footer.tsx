import { useState } from "react";
import { images } from "../assets/Images";
import SocialButton from "./SocialButton";

const Footer: React.FC = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="w-full font-recoleta flex flex-col text-sm">
      <hr className="border-[#b2ff02] " />
      <div className=" grid grid-cols-2 tb:grid tb:grid-cols-2 gap-14  tb:gap-20 dk:flex dk:items-center dk:justify-between py-20 ">
        <div className="tb:col-span-2 col-span-2">
          <img src="/Images&logo/footerLogo.png" alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <h2>Our work</h2>
          <div className="flex flex-col">
            <span>[UI/UX]</span>
            <span>[PRINT DESIGN]</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 col-start-1 tb:col-start-auto ">
          <h2>Vancouver / Canada</h2>
          <div className="flex flex-col">
            <span>hello@bloomingdesign.ca</span>
            <span>778-222-2122</span>
          </div>
        </div>
        <hr className="border-[#b2ff02] col-span-2 dk:hidden hidden tb:flex " />

        <div className="flex flex-col gap-2  row-start-2 items-center tb:items-stretch row-span-2 col-start-2 tb:row-auto tb:row-start-auto tb:col-start-auto">
          <h2>Let’s be Friends</h2>
          <div className="flex gap-2 tb:flex-row flex-col ">
            <SocialButton image="/Images&logo/Dribblle.png"></SocialButton>
            <SocialButton image="/Images&logo/Behance.png"></SocialButton>
            <SocialButton image="/Images&logo/insta.png"></SocialButton>
          </div>
        </div>
        <hr className="border-[#b2ff02] col-span-2 dk:hidden tb:hidden " />

        <div className="flex flex-col gap-2">
          <h2>Tell us your needs</h2>
          <button
            className="flex gap-2 items-center"
            onMouseLeave={() => setHover(false)}
            onMouseEnter={() => setHover(true)}
          >
            <h2 className="text-[#b2ff02] text-4xl ">Contact </h2>
            <i className={hover ? "rotate-90 transition-all" : ""}>
              {images.headUp}
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
