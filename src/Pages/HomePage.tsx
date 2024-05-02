import ThreeDVisual from "../Components/3DComponent";
import Header from "../Components/Header";
// Function to prevent scrolling
// Add event listener to the window
const Homepage: React.FC = () => {
  return (
    <div className="max-w-screen  flex flex-col w-full overflow-hidden  bg-black h-screen  ">
      <div className="tb:px-10 px-4 dk:px-20 dk:py-4  absolute w-full">
        <Header></Header>
      </div>
      <div className="flex w-full justify-start items-start ">
        <ThreeDVisual></ThreeDVisual>
        <div
          id="mainText"
          className="absolute right-0 w-full tb:w-11/12 tbl:w-3/4   font-recoleta  perspective-style    pb-20 h-screen  font-bold tb:pr-20 pr-4 dk:pr-40 overflow-y-auto pt-80 overflow-x-hidden"
        >
          <div className="innerPrep ">
            {/* <div className="w-full sticky -top-20 left-0 h-[20vh] dk:h-[30vh]   gradientDiv"></div> */}
            <h1 className="text-[#B2FF02] text-3xl font-black tb:text-6xl dk:text-8xl   text-end ">
              BLOOMING DESIGN IS A BRANDING, PACKAGING AND GRAPHIC DESIGN
              STUDIO. WE MERGE TRADITION WITH INNOVATION TO PRODUCE FUNCTIONAL
              AND ENGAGING SOLUTIONS THAT CONNECT YOU TO YOUR CUSTOMERS. BY
              SYNTHESIZING YOUR STORY AND ASPIRATIONS WITH OUR AWARD-WINNING
              IDEAS AND STRATEGIC THINKING, WE CREATE TIMELESS PIECES THAT MAKE
              YOUR BRAND THE FINEST IT CAN BE. WE TRUST OUR CREATIVE INSTINCTS
              WITH POWER TO TRANSFORM AND DELIVER A UNIQUE VISUAL IDENTITY, THE
              ONE TO EVOKE EMOTIONS & ENABLE YOUR BUSINESS TO BE CATEGORY
              DEFYING.
            </h1>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-[20vh] bg-red-500 absolute perspective-style">
        <div className="innerPrep "></div>
      </div> */}
    </div>
  );
};
export default Homepage;
