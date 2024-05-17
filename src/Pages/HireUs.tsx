import { useState, useEffect } from "react";
import ContactForm from "../Components/ContactForm";
import Header from "../Components/Header";

const HireUs: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("");
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setScrollDirection("down");
    } else if (currentScrollY < lastScrollY) {
      setScrollDirection("up");
    }

    setLastScrollY(currentScrollY);

    setIsScrolling(true);
    //@ts-ignore
    clearTimeout(window.scrollTimeout);
    //@ts-ignore
    window.scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 100); // Adjust the timeout as needed
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <div className="w-full  flex flex-col text-white  gap-20 min-h-screen bg-black">
      <div className="tb:px-10 px-4 dk:px-20 dk:py-4   w-full">
        <Header></Header>
      </div>
      <div
        className={`inertia-container tb:px-10 px-4 dk:px-20 ${
          isScrolling
            ? scrollDirection === "down"
              ? "inertia-containerscrollingDown"
              : "inertia-containerscrollingUp"
            : ""
        }`}
      >
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};
export default HireUs;
