import ThreeDVisual from "../Components/3DComponent";
import ContactForm from "../Components/ContactForm";
import Header from "../Components/Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const CulturePage: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-full  flex flex-col text-white  gap-20 min-h-screen bg-black">
      <div className="tb:px-10 px-4 dk:px-20 dk:py-4   w-full">
        <Header></Header>
      </div>

      <div className="flex w-full justify-start items-start  ">
        <div className="absolute ">
          <ThreeDVisual></ThreeDVisual>
        </div>
        <div className="tb:px-10 px-4 dk:px-20  z-10 flex flex-col gap-8 -mt-8">
          <div>
            <img src="/Images&logo/blooming.png" alt="" />
          </div>
          <div className="flex flex-col font-akhzid gap-4">
            <h4 className="text-[#B2FF02] text-4xl font-recoleta">Culture</h4>
            <span>
              Specializing in refined digital web experiences with a focus on
              animated, responsive, and interactive content.
            </span>
            <span>
              Delivering highly executed front-end user experiences by paying
              close attention to the nuances of design, optimization, and
              performance.
            </span>
            <span>
              Partnering with agencies and brands that value design and
              development integrity.
            </span>
          </div>
          <div>
            <h4 className="font-recoleta text-4xl text-[#7A7A7A]">
              We’re about a mixture of science, logic and emotion...
            </h4>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col font-akhzid gap-4 tb:hidden">
              <h4 className="text-[#B2FF02] text-4xl font-recoleta">Team</h4>
              <span>
                Discover the faces and personalities who make up Blooming and
                bring the agency to life every day.
              </span>
            </div>
            <div className="w-full block">
              <Carousel
                responsive={responsive}
                arrows={false}
                showDots={true}
                itemClass="flex items-center justify-center"
                containerClass=" pt-10 pb-10"
              >
                <div className="flex flex-col items-start">
                  <img src="/Images&logo/agent1.png" alt="" />
                  <h4 className="font-recoleta text-2xl">Anna Ivanova</h4>
                  <span className="font-akhzid">Digital director</span>
                </div>
                <div className="flex flex-col items-start">
                  <img src="/Images&logo/agent1.png" alt="" />
                  <h4 className="font-recoleta text-2xl">Anna Ivanova</h4>
                  <span className="font-akhzid">Digital director</span>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="tb:px-10 px-4 dk:px-20"></div>

      <div className="tb:px-10 px-4 dk:px-20 ">
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};
export default CulturePage;
