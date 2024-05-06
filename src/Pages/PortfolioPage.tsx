import Header from "../Components/Header";
import EyeBallButton from "../Components/EyeBallButton";
import Footer from "../Components/Footer";
const PortfolioPage: React.FC = () => {
  return (
    <div className="w-full tb:px-10 px-4 dk:px-20  dk:py-4 flex flex-col text-white  min-h-screen bg-black">
      <Header></Header>

      {/* Projectt Showcase */}
      <div className="flex mt-20 flex-col  items-center justify-center w-full gap-10">
        <div className="grid grid-cols-1 dk:grid-cols-2 gap-x-40  w-full gap-y-28 dk:grid-rows-2">
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="">
              <img
                src="/Images&logo/Porfolio1.png"
                alt=""
                className="portfolioImg"
              />
            </div>
            <div className="flex flex-col gap-1 items-center justify-center">
              <h2 className="font-recoleta text-xl">Vancouver Laptop</h2>
              <span className="font-akhzid text-sm font-thin">
                UI/UX Design, Branding
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <img
              src="/Images&logo/Portfolio2.png"
              alt=""
              className=" portfolioImg"
            />
            <div className="flex flex-col gap-1 items-center justify-center">
              <h2 className="font-recoleta text-xl">Adorable chocolate</h2>
              <span className="font-akhzid text-sm font-thin">
                Branding, Packaging, UI/UX
              </span>
            </div>
          </div>{" "}
          <div className="flex flex-col items-center justify-center gap-10">
            <img
              src="/Images&logo/Portfolio3.png"
              alt=""
              className=" portfolioImg"
            />
            <div className="flex flex-col gap-1 items-center justify-center">
              <h2 className="font-recoleta text-xl">Quayqoffee</h2>
              <span className="font-akhzid text-sm font-thin">
                UI/UX Design, Branding
              </span>
            </div>
          </div>{" "}
          <div className="flex flex-col items-center justify-center gap-10">
            <img
              src="/Images&logo/Portfolio4.png"
              alt=""
              className="portfolioImg"
            />
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
      <div className="flex flex-row justify-between min-h-[500px] dk:items-center overflow-hidden  items-end">
        <div className="flex-2 dk:flex-1 flex flex-col  gap-4 max-w-[500px]  z-10 tbl:max-w-[600px] dk:max-w-[800px]">
          <h4 className="text-4xl tb:text-6xl  ">
            We build <span className="text-[#b2ff02]">brands</span> and{" "}
            <span className="text-[#b2ff02]">solutions</span> over 7 years
          </h4>
          <hr className="border-[#b2ff02] w-1/3" />
        </div>
        <div className="dk:-right-20 tb:-right-10 -right-4 absolute ">
          <img
            src="/Images&logo/animation.png"
            alt=""
            className="max-h-[600px] dk:max-h-[1000px]"
          />
        </div>
      </div>
      {/* What do we Offer */}
      <div className="mt-40 flex flex-col gap-10 pb-20">
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

      <Footer></Footer>
    </div>
  );
};
export default PortfolioPage;
