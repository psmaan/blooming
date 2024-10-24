import { useRef, useEffect } from "react";
import ThreeDVisual from "../Components/3DComponent";
import Header from "../Components/Header";
const Homepage: React.FC = () => {
  const mainTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mainText = mainTextRef.current;

    // if (mainText) {
    //   mainText.addEventListener("scroll", () => {
    //     if (!mainText) return;
    //     console.log(mainText?.scrollHeight, "scrool Height");
    //     console.log(mainText?.scrollTop, "scroll top");
    //     console.log(mainText?.clientHeight, " client height");
    //     console.log(
    //       "bottom?",
    //       mainText?.scrollHeight - mainText?.scrollTop <=
    //         mainText?.clientHeight * 2
    //     );

    //     // const isAtBottom =
    //     //   mainText.scrollHeight - mainText.scrollTop === mainText.clientHeight;
    //     // if (!isAtBottom) {
    //     //   mainText.scrollTop = mainText.scrollHeight - mainText.clientHeight;
    //     // }
    //   });
    // }

    return () => {
      if (mainText) {
        mainText.removeEventListener("scroll", () => {});
      }
    };
  }, []);

  return (
    <div className="max-w-screen  flex flex-col w-full overflow-hidden  bg-black h-screen  ">
      <div className="tb:px-10 px-4 dk:px-20 dk:py-4  absolute w-full">
        <Header></Header>
      </div>
      <div className="flex w-full justify-start items-start ">
        <ThreeDVisual></ThreeDVisual>
        <div
          id="mainText"
          ref={mainTextRef}
          className="fixed right-0 w-10/12 tb:w-11/12 tbl:w-3/4 overflow-y-auto  font-recoleta  perspective-style    pb-20 h-screen tb:h-[120vh] dk:h-[150vh] font-bold tb:pr-20 pr-4 dk:pr-40  pt-36 dk:pt-48 overflow-x-hidden"
        >
          <div className="innerPrep  h-screen ">
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
