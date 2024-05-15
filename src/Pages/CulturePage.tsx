import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
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
      breakpoint: { max: 1024, min: 700 },
      items: 2,
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

      <div className="flex w-full justify-start items-start dk:grid grid-cols-2 ">
        <div className="absolute dk:block dk:w-[500px] flex items-start justify-start">
          {/* <ThreeDVisual></ThreeDVisual> */}
          <img
            src="/Images&logo/anim2.png"
            alt=""
            className="-mt-20 -ms-32 tb:-ms-20 dk:ms-0"
          />
        </div>
        <div className="hidden dk:block row-start-2 -mt-20  dk:px-20 ">
          <h4 className="font-recoleta text-4xl tb:text-6xl dk:text-4xl text-[#7A7A7A] ">
            We’re about a mixture of science, logic and emotion...
          </h4>
        </div>
        <div className="tb:px-10 px-4 dk:px-20  z-10 flex flex-col gap-8 tb:gap-12 -mt-8 col-start-2 dk:gap-32 ">
          <div>
            <img src="/Images&logo/blooming.png" alt="" />
          </div>
          <div className="flex flex-col font-akhzid gap-4 dk:max-w-[400px] dk:-mt-10">
            <h4 className="text-[#B2FF02] text-4xl tb:text-6xl font-recoleta">
              Culture
            </h4>
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
          <div className="dk:hidden">
            <h4 className="font-recoleta text-4xl tb:text-6xl text-[#7A7A7A]">
              We’re about a mixture of science, logic and emotion...
            </h4>
          </div>
          <div className="flex flex-col gap-4 dk:max-w-[400px]">
            <div className="flex flex-col font-akhzid gap-4">
              <h4 className="text-[#B2FF02] text-4xl font-recoleta tb:text-6xl">
                Team
              </h4>
              <span>
                Discover the faces and personalities who make up Blooming and
                bring the agency to life every day.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Carousel
          responsive={responsive}
          // autoPlay
          infinite
          arrows={false}
          itemClass="flex items-center justify-center"
          containerClass=" pt-10 pb-10"
        >
          <div className="flex flex-col gap-4 w-[300px] h-[500px] justify-end ">
            <img src="/Images&logo/agent1.png" alt="" />
            <div className="ps-4">
              <h3 className="text-3xl font-recoleta">Anna Ivanova</h3>
              <span className="font-akhzid text-[#7A7A7A]">
                Digital director
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[300px] h-[500px] justify-end ">
            <img
              src="/Images&logo/agent2.png"
              alt=""
              className="w-full h-[450px]"
            />
            <div className="ps-4">
              <h3 className="text-3xl font-recoleta">Oleg Lednev</h3>
              <span className="font-akhzid text-[#7A7A7A]">
                Creative director
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[300px] h-[500px] justify-end">
            <img src="/Images&logo/agent3.png" alt="" />
            <div className="ps-4">
              <h3 className="text-3xl font-recoleta">Chris Johnson</h3>
              <span className="font-akhzid text-[#7A7A7A]">
                Front-end Developer{" "}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[300px] h-[500px] justify-end ">
            <img src="/Images&logo/agent1.png" alt="" />
            <div className="ps-4">
              <h3 className="text-3xl font-recoleta">Anna Ivanova</h3>
              <span className="font-akhzid text-[#7A7A7A]">
                Digital director
              </span>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="tb:px-10 px-4 dk:px-20 ">
        <ContactForm></ContactForm>
      </div>
      <div className="tb:px-10 px-4 dk:px-20">
        <Footer></Footer>
      </div>
    </div>
  );
};
export default CulturePage;
