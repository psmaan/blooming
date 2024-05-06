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
          className="absolute right-0 w-full tb:w-11/12 tbl:w-3/4   font-recoleta  perspective-style    pb-20 h-screen  font-bold tb:pr-20 pr-4 dk:pr-40 overflow-y-auto pt-28 overflow-x-hidden"
        >
          <div className="innerPrep ">
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
      <div className="absolute left-20 bottom-8 hidden dk:flex flex-col text-white font-akhzid z-20">
        <span>Vancouver / Canada</span>
        <span>blmngdsgn@blooming.ca</span>
        <span>778-222-2122</span>
      </div>
    </div>
  );
};
export default Homepage;
