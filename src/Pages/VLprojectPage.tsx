import Header from "../Components/Header";
import backgroundImage from "/Images&logo/VL screens 1.png";

const VLprojectPage: React.FC = () => {
  return (
    <div className="w-full  flex flex-col text-white gap-20 tb:gap-20 dk:gap-40 min-h-screen bg-black">
      <div className="tb:px-10 px-4 dk:px-20 dk:py-4  absolute w-full">
        <Header></Header>
      </div>
      <div
        className=" h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="grid grid-cols-1 dk:grid-cols-2 dk:gap-0 gap-4">
        <div className="tb:px-10 px-4 dk:px-20 flex flex-col gap-4">
          <h3 className="font-recoleta text-6xl text-[#b2ff02]">
            Vancouver Laptops
          </h3>
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
              <span className="font-akhzid font-thin">UI/UX</span>
            </div>
            <div className="flex flex-col">
              <h6 className="font-recoleta">Client</h6>
              <span className="font-akhzid font-thin">Vancouver Laptops</span>
            </div>
          </div>
        </div>
      </div>
      <div className="tb:px-10 px-4 dk:px-20 ">
        <img src="/Images&logo/VL screens 2.png" alt="" />
      </div>
      <div className="tb:px-10 px-4 dk:px-20 ">
        <div className="grid  grid-cols-1 gap-10 dk:gap-0  dk:grid-cols-3">
          <div className="col-span-2 flex order-1 dk:-order-10 flex-col gap-20">
            <div>
              <img src="/Images&logo/VL screens 3.png" alt="" />
            </div>
            <div className="flex flex-col gap-10">
              <hr className="w-64 border-[#b2ff02]" />
              <span className="font-akhzid text-lg">
                The website was carefully adapted for mobile platforms, with
                optimised functionality and video integration.
              </span>
            </div>
          </div>
          <div className="font-akhzid flex  flex-col gap-2 mt-4">
            <p>
              Each production is fragmented into a series of videos and images
              to capture the broader story of Laptops process and expertise.
            </p>
            <p>
              Echoing SIRAP’s unique approach to creating moving image, each
              production is presented as an immersive story-telling experience.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="tb:px-10 px-4 dk:px-20 gap-10 grid dk:grid-cols-3 tb:grid-cols-2 grid-cols-1  ">
          <div className=" flex items-center justify-center">
            <img
              src="/Images&logo/VL screens 4.png"
              alt=""
              className=" w-[50%] tb:w-[80%]"
            />
          </div>
          <div className=" flex items-center justify-center">
            <img
              src="/Images&logo/VL screens 5.png"
              alt=""
              className=" w-[50%] tb:w-[80%]"
            />
          </div>
          <div className=" flex items-center justify-center">
            <img
              src="/Images&logo/VL screens 6.png"
              alt=""
              className=" w-[50%] tb:w-[80%]"
            />
          </div>
        </div>
        <div className="flex justify-end tb:justify-between tb:px-10 px-4 dk:px-20 ">
          <div className="tb:flex  hidden items-center gap-4">
            <hr className="w-6 border border-[#b2ff02]" />
            <span className="font-recoleta text-lg">Previos Project</span>
          </div>
          <div className="flex  items-center gap-4">
            <span className="font-recoleta text-lg">Next Project</span>
            <hr className="w-6 border border-[#b2ff02]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default VLprojectPage;
