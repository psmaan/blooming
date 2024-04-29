import Header from "../Components/Header";
import EyeBallButton from "../Components/EyeBallButton";
import Footer from "../Components/Footer";
const PortfolioPage: React.FC = () => {
  return (
    <div className="w-full tb:px-10 px-4 dk:px-20 dk:py-4 flex flex-col text-white  min-h-screen bg-black">
      <Header></Header>

      {/* Projectt Showcase */}
      <div className="flex mt-20 flex-col  items-center justify-center w-full gap-10">
        <div className="grid grid-cols-1 dk:grid-cols-2 gap-x-40  w-full gap-y-28 dk:grid-rows-2">
          <div className="flex flex-col items-center justify-center gap-10">
            <img src="/Images&logo/Porfolio1.png" alt="" />
            <div className="flex flex-col gap-1 items-center justify-center">
              <h2 className="font-recoleta text-xl">Vancouver Laptop</h2>
              <span className="font-akhzid text-sm font-thin">
                UI/UX Design, Branding
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <img src="/Images&logo/Portfolio2.png" alt="" />
            <div className="flex flex-col gap-1 items-center justify-center">
              <h2 className="font-recoleta text-xl">Adorable chocolate</h2>
              <span className="font-akhzid text-sm font-thin">
                Branding, Packaging, UI/UX
              </span>
            </div>
          </div>{" "}
          <div className="flex flex-col items-center justify-center gap-10">
            <img src="/Images&logo/Portfolio3.png" alt="" />
            <div className="flex flex-col gap-1 items-center justify-center">
              <h2 className="font-recoleta text-xl">Quayqoffee</h2>
              <span className="font-akhzid text-sm font-thin">
                UI/UX Design, Branding
              </span>
            </div>
          </div>{" "}
          <div className="flex flex-col items-center justify-center gap-10">
            <img src="/Images&logo/Portfolio4.png" alt="" />
            <div className="flex flex-col gap-1 items-center justify-center">
              <h2 className="font-recoleta text-xl">UniBrain caps</h2>
              <span className="font-akhzid text-sm font-thin">
                Branding, Packaging
              </span>
            </div>
          </div>
        </div>
        <EyeBallButton></EyeBallButton>
      </div>
      {/* Brands */}
      <div className="flex flex-row justify-between items-center">
        <div className="flex-1 flex flex-col  gap-4">
          <h4 className="text-6xl  ">
            We build <span className="text-[#b2ff02]">brands</span> and{" "}
            <span className="text-[#b2ff02]">solutions</span> over 7 years
          </h4>
          <hr className="border-[#b2ff02] w-1/3" />
        </div>
        <div className="flex-1 flex items-center justify-end -mr-20">
          <img src="/Images&logo/animation.png" alt="" width={"50%"} />
        </div>
      </div>
      {/* What do we Offer */}
      <div className="mt-40 flex flex-col gap-10">
        <div>
          <h4 className="text-6xl">
            <span className="text-[#b2ff02]">What do we</span> offer
          </h4>
        </div>
        <div className="flex flex-col dk:flex-row dk:justify-between dk:gap-0 gap-12">
          <div className="dk:max-w-80 tb:w-full flex flex-col gap-2">
            <h5 className="font-recoleta text-3xl">Brand identity.</h5>
            <p className="font-akhzid font-thin">
              Bringing the history of your brand to the forefront gives an
              emotional dimension to your visual identity, which is essential
              today more than ever in today's digital landscape.
            </p>
            <div className="flex flex-row justify-between ">
              <div className="font-recoleta">
                <span className="text-[#b2ff02] text-xs">From: </span>
                <span>1000$</span>
              </div>
              <div className="font-recoleta flex flex-row items-center gap-2">
                <span className="">Learn more</span>
                <hr className="w-8 border-[#b2ff02]" />
              </div>
            </div>
          </div>
          <div className="dk:max-w-80 tb:w-full  flex flex-col gap-2">
            <h5 className="font-recoleta text-3xl">Packaging.</h5>
            <p className="font-akhzid font-thin">
              Bringing the history of your brand to the forefront gives an
              emotional dimension to your visual identity, which is essential
              today more than ever in today's digital landscape.
            </p>
            <div className="flex flex-row justify-between ">
              <div className="font-recoleta">
                <span className="text-[#b2ff02] text-xs">From: </span>
                <span>350$</span>
              </div>
              <div className="font-recoleta flex flex-row items-center gap-2">
                <span className="">Learn more</span>
                <hr className="w-8 border-[#b2ff02]" />
              </div>
            </div>
          </div>
          <div className="dk:max-w-80 tb:w-full flex flex-col gap-2">
            <h5 className="font-recoleta text-3xl">UI/UX Design.</h5>
            <p className="font-akhzid font-thin">
              Bringing the history of your brand to the forefront gives an
              emotional dimension to your visual identity, which is essential
              today more than ever in today's digital landscape.
            </p>
            <div className="flex flex-row justify-between ">
              <div className="font-recoleta">
                <span className="text-[#b2ff02] text-xs">From: </span>
                <span>1200$</span>
              </div>
              <div className="font-recoleta flex flex-row items-center gap-2">
                <span className="">Learn more</span>
                <hr className="w-8 border-[#b2ff02]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      {/* <div className="flex w-full flex-col gap-20  mt-40">
        <hr className="w-full border-[#b2ff02]" />
        <div className="flex gap-20 justify-between py-20 ">
          <div className="  ">
            <i>{images.footerLogo}</i>
          </div>
          <div className="flex gap-10">
            <div className="flex gap-2 flex-col font-akhzid">
              <span>Our work</span>
              <div className="flex flex-col">
                <span>[UX/UI]</span> <span>[PRINT DESIGN]</span>
              </div>
            </div>
            <div className="flex gap-2 flex-col font-akhzid">
              <span>Vancouver / Canada</span>
              <div className="flex flex-col">
                <span>hello@bloomingdesign.ca</span> <span>778-222-2122</span>
              </div>
            </div>
            <div className="flex gap-2 flex-col font-akhzid">
              <span>Let’s be Friends</span>
              <div className="flex gap-2">
                <button>{images.dribble}</button>
                <button>{images.behance}</button>
                <button>{images.instagram}</button>
              </div>
            </div>
            <div className="flex gap-2 flex-col font-akhzid">
              <span>Tell us your needs</span>
              <div className="flex flex-col">
                <span>hello@bloomingdesign.ca</span> <span>778-222-2122</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Footer></Footer>
    </div>
  );
};
export default PortfolioPage;
