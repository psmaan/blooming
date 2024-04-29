import { images } from "../assets/Images";

const Footer: React.FC = () => {
  return (
    <div className="w-full tb:px-10 px-4 dk:px-20 font-recoleta flex flex-col text-sm">
      <hr className="border-[#b2ff02] " />
      <div className=" grid grid-cols-2 tb:grid tb:grid-cols-2 gap-14  tb:gap-20 dk:flex dk:items-center dk:justify-between py-20 ">
        <div className="tb:col-span-2 col-span-2">{images.footerLogo}</div>
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
            <i>{images.dribble}</i>
            <i>{images.behance}</i>
            <i>{images.instagram}</i>
          </div>
        </div>
        <hr className="border-[#b2ff02] col-span-2 dk:hidden tb:hidden " />

        <div className="flex flex-col gap-2">
          <h2>Tell us your needs</h2>
          <div className="flex gap-2 items-center">
            <h2 className="text-[#b2ff02] text-4xl ">Contact </h2>
            <i>{images.headUp}</i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
