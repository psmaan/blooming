import Footer from "../Components/Footer";
import Header from "../Components/Header";
import backgroundImage from "/Images&logo/karen1.png";

const KarenPage: React.FC = () => {
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
          <h3 className="font-recoleta text-6xl text-[#b2ff02]">Go Karen!</h3>
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
              <span className="font-akhzid font-thin">NFT</span>
            </div>
            <div className="flex flex-col ">
              <h6 className="font-recoleta">Service</h6>
              <span className="font-akhzid font-thin">
                Collection, UI/UX, Promo
              </span>
            </div>
            <div className="flex flex-col">
              <h6 className="font-recoleta">Client</h6>
              <span className="font-akhzid font-thin">Karen NFT </span>
            </div>
          </div>
        </div>
      </div>

      <div className="tb:px-10 px-4 dk:px-20 ">
        <div className="flex flex-col items-center">
          <div>
            <img src="/Images&logo/karen2.png" alt="" />
          </div>

          <div className="font-akhzid flex   flex-col dk:flex-row gap-4 dk:gap-40 dk:-mt-28 ">
            <p className="dk:max-w-[600px] w-full">
              Each production is fragmented into a series of videos and images
              to capture the broader story of Laptops process and expertise.
              Echoing SIRAP’s unique approach to creating moving image, each
              production is presented as an immersive story-telling experience.
            </p>
          </div>
        </div>
      </div>
      <div className="tb:px-10  px-4 dk:px-20 ">
        <div className="flex flex-col items-center">
          <div>
            <img src="/Images&logo/karen3.png" alt="" />
          </div>

          <div className="font-akhzid flex   flex-col  gap-8 mt-8  ">
            <hr className="border-[#b2ff02] w-1/4" />
            <p className="dk:max-w-[600px] w-full">
              Each production is fragmented into a series of videos and images
              to capture the broader story of Laptops process and expertise.
            </p>
            <p className="dk:max-w-[600px] w-full">
              Each production is fragmented into a series of videos and images
              to capture the broader story of Laptops process and expertise.
            </p>
          </div>
        </div>
      </div>
      <div className="tb:px-10 px-4 dk:px-20 ">
        <div className="flex flex-col items-center">
          <div>
            <img src="/Images&logo/karen4.png" alt="" />
          </div>

          <div className="font-akhzid grid grid-cols-2  mt-4 gap-4">
            <p className="dk:max-w-[300px] w-full">
              Each production is fragmented into a series of videos and images
              to capture the broader story of Laptops process and expertise.
            </p>
            <p className="dk:max-w-[600px] w-full">
              Each production is fragmented into a series of videos and images
              to capture the broader story of Laptops process and expertise.
            </p>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="flex flex-col w-full items-center">
          <div className="w-full">
            <img src="/Images&logo/karen5.png" alt="" className="w-full" />
          </div>

          <div className="font-akhzid flex items-center">
            <p className="dk:max-w-[600px]  w-full tb:px-10 px-4 dk:px-20 ">
              Each production is fragmented into a series of videos and images
              to capture the broader story of Laptops process and expertise.
              Echoing SIRAP’s unique approach to creating moving image, each
              production is presented as an immersive story-telling experience.
            </p>
          </div>
        </div>
      </div>
      <div className="tb:px-10 px-4 dk:px-20 flex items-center flex-col  ">
        <div className="flex flex-col tb:flex-row  tb:gap-10">
          <div className="flex flex-row tb:flex-col gap-2  tb:gap-10 tb:p-8">
            <div>
              <img src="/Images&logo/karen8.png" alt="" />
            </div>
            <div className="mt-10 tb:mt-0">
              <img src="/Images&logo/karen9.png" alt="" />
            </div>
          </div>
          <div className="flex flex-row tb:flex-col gap-2 tb:gap-10  tb:p-8 dk:mt-80">
            <div>
              <img src="/Images&logo/karen7.png" alt="" />
            </div>
            <div className="mt-10 tb:mt-0">
              <img src="/Images&logo/karen10.png" alt="" />
            </div>
          </div>
          <div className="flex flex-row tb:flex-col gap-2 tb:gap-10  tb:p-8 dk:mt-40">
            <div>
              <img src="/Images&logo/karen6.png" alt="" />
            </div>
            <div className="mt-10 tb:mt-0">
              <img src="/Images&logo/karen11.png" alt="" />
            </div>
          </div>
        </div>
        <div className="font-akhzid flex items-center">
          <p className="dk:max-w-[600px]  w-full">
            Each production is fragmented into a series of videos and images to
            capture the broader story of Laptops process and expertise. Echoing
            SIRAP’s unique approach to creating moving image, each production is
            presented as an immersive story-telling experience.
          </p>
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
      <div className="tb:px-10 px-4 dk:px-20">
        <Footer></Footer>
      </div>
    </div>
  );
};
export default KarenPage;
