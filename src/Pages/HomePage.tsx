import ThreeDVisual from "../Components/3DComponent";
import ThreeDComponent from "../Components/3DComponent";
import Header from "../Components/Header";

const Homepage: React.FC = () => {
  return (
    <div className="max-w-screen flex flex-col w-full overflow-hidden h-screen bg-black ">
      <div className="tb:px-10 px-4 dk:px-20 dk:py-4  absolute w-full">
        <Header></Header>
      </div>
      <div className="flex w-full justify-start items-start ">
        <ThreeDVisual></ThreeDVisual>
        <div className="absolute right-0 w-3/5 font-recoleta pt-80  font-bold tb:pr-10 pr-4 dk:pr-20 h-screen overflow-y-scroll">
          <h1 className="text-[#B2FF02] text-8xl   text-end ">
            BLOOMING DESIGN IS A BRANDING, PACKAGING AND GRAPHIC DESIGN STUDIO.
            WE MERGE TRADITION WITH INNOVATION TO PRODUCE FUNCTIONAL AND
            ENGAGING SOLUTIONS THAT CONNECT YOU TO YOUR CUSTOMERS. BY
            SYNTHESIZING YOUR STORY AND ASPIRATIONS WITH OUR AWARD-WINNING IDEAS
            AND STRATEGIC THINKING, WE CREATE TIMELESS PIECES THAT MAKE YOUR
            BRAND THE FINEST IT CAN BE. WE TRUST OUR CREATIVE INSTINCTS WITH
            POWER TO TRANSFORM AND DELIVER A UNIQUE VISUAL IDENTITY, THE ONE TO
            EVOKE EMOTIONS & ENABLE YOUR BUSINESS TO BE CATEGORY DEFYING.
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
