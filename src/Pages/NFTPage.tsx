import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "../Components/Header";
import { images } from "../assets/Images";
import EyeBallButton from "../Components/EyeBallButton";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import ContactForm from "../Components/ContactForm";
const NFTPage: React.FC = () => {
  const screenWidth = window.screen.width;
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

  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [hover, setHover] = useState(false);
  const maxValue = 190000; // Set the maximum value
  const maxValue2 = 20; // Set the maximum value
  const maxValue3 = 250; // Set the maximum value
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
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(
      {},
      {
        duration: 0.1,
        onUpdate: () => {
          setValue((prevValue) => {
            const newValue = prevValue + 500;
            return newValue <= maxValue ? newValue : prevValue;
          });
        },
      }
    );

    return () => {
      tl.kill();
    };
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(
      {},
      {
        duration: 0.1,
        onUpdate: () => {
          setValue2((prevValue) => {
            const newValue = prevValue + 1;
            return newValue <= maxValue2 ? newValue : prevValue;
          });
        },
      }
    );

    return () => {
      tl.kill();
    };
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(
      {},
      {
        duration: 0.1,
        onUpdate: () => {
          setValue3((prevValue) => {
            const newValue = prevValue + 1;
            return newValue <= maxValue3 ? newValue : prevValue;
          });
        },
      }
    );

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className="w-full font-recoleta  dk:py-4 flex flex-col text-white  min-h-screen bg-black ">
      <div className=" tb:px-10 px-4 dk:px-20 ">
        <Header></Header>
      </div>
      <div
        className={`inertia-container  tb:px-10 px-4 dk:px-20  pt-4 flex flex-col gap-40 w-full ${
          isScrolling
            ? scrollDirection === "down"
              ? "inertia-containerscrollingDown"
              : "inertia-containerscrollingUp"
            : ""
        }`}
      >
        <div className="flex flex-col dk:flex-row gap-2 w-full">
          <div className="dk:flex dk:flex-col gap-2">
            <h1 className="text-5xl tb:text-8xl  font-bold">
              <span className="text-[#B2FF02]">NFT</span> Development Service
            </h1>
            <h1 className="text-3xl hidden dk:block text-[#7A7A7A]">
              Create a unique and distinguishable non-fungible token
            </h1>
          </div>
          <div className="tb:w-full tb:flex tb:items-center tb:justify-center">
            <img src="/Images&logo/nft1.png" alt="" />
          </div>
          <h1 className="text-3xl dk:hidden text-[#7A7A7A]">
            Create a unique and distinguishable non-fungible token
          </h1>
        </div>
        <div className="flex flex-col dk:flex-col dk:items-center tb:flex-row gap-8 dk:gap-16 w-full">
          <div className="flex flex-col gap-2 ">
            <h2 className="text-[#B2FF02] text-3xl dk:text-5xl font-medium">
              NFT Project Roadmap
            </h2>
            <span className="text-white font-akhzid">
              Here's how a #Successful NFT Project is build. And we help you in
              every step!
            </span>
          </div>
          <div className="flex flex-col dk:hidden ">
            <div className="flex gap-4 ">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[#B2FF02]"></div>
                <div
                  className="flex-grow  bg-[#B2FF02]"
                  style={{ width: "1px" }}
                ></div>
              </div>
              <div className="flex flex-col gap-4 pb-12 -mt-2">
                <div className="flex flex-col gap-2">
                  <h2 className="text-4xl">0.1</h2>
                  <h3 className="text-2xl">Find your Niche</h3>
                </div>
                <div>
                  <span className="font-akhzid text-[#7A7A7A]">
                    The very first step for any successful NFT project is
                    finding the Niche. What audience you want to cater? What is
                    their interest area?
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 ">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full border border-[#B2FF02]"></div>
                <div
                  className="flex-grow  bg-[#808080]"
                  style={{ width: "1px" }}
                ></div>
              </div>
              <div className="flex flex-col gap-4 pb-12 -mt-2">
                <div className="flex flex-col gap-2">
                  <h2 className="text-4xl">0.2</h2>
                  <h3 className="text-2xl">Define the Utility</h3>
                </div>
                <div>
                  <span className="font-akhzid text-[#7A7A7A]">
                    Successful NFT projects provide value to their community eg.
                    unlocking exclusive access, VIP parties, digital merch, etc.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 ">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full border border-[#B2FF02]"></div>
                <div
                  className="flex-grow  bg-[#808080]"
                  style={{ width: "1px" }}
                ></div>
              </div>
              <div className="flex flex-col gap-4 pb-12 -mt-2">
                <div className="flex flex-col gap-2">
                  <h2 className="text-4xl">0.3</h2>
                  <h3 className="text-2xl">Timeline/ Roadmap</h3>
                </div>
                <div>
                  <span className="font-akhzid text-[#7A7A7A]">
                    Successful NFT projects have a proper plan and are
                    transparent with the community on their project’s roadmap.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 ">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full border border-[#B2FF02]"></div>
              </div>
              <div className="flex flex-col gap-4 pb-12 -mt-2">
                <div className="flex flex-col gap-2">
                  <h2 className="text-4xl">0.4</h2>
                  <h3 className="text-2xl">Community Building</h3>
                </div>
                <div>
                  <span className="font-akhzid text-[#7A7A7A]">
                    This is arguably the most important and necessary step. An
                    NFT project is only as successful as the community behind
                    it.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="dk:flex flex-row hidden ">
            <div className="flex gap-4 flex-col ">
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl text-[#7A7A7A]">0.1</h2>
                <h3 className="text-2xl">Find your Niche</h3>
              </div>
              <div className="flex flex-row items-center ">
                <div className="w-3 h-3 rounded-full bg-[#B2FF02]"></div>
                <div
                  className="flex-grow  bg-[#B2FF02]"
                  style={{ height: "1px" }}
                ></div>
              </div>
              <div className="pe-10">
                <span className="font-akhzid text-[#7A7A7A] ">
                  The very first step for any successful NFT project is finding
                  the Niche. What audience you want to cater? What is their
                  interest area?
                </span>
              </div>
            </div>
            <div className="flex gap-4 flex-col ">
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl text-[#7A7A7A]">0.2</h2>
                <h3 className="text-2xl">Define the Utility</h3>
              </div>
              <div className="flex flex-row items-center ">
                <div className="w-3 h-3 rounded-full border border-[#B2FF02]"></div>
                <div
                  className="flex-grow  bg-[#808080]"
                  style={{ height: "1px" }}
                ></div>
              </div>
              <div className="pe-10">
                <span className="font-akhzid text-[#7A7A7A] ">
                  Successful NFT projects provide value to their community eg.
                  unlocking exclusive access, VIP parties, digital merch, etc.
                </span>
              </div>
            </div>
            <div className="flex gap-4 flex-col ">
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl text-[#7A7A7A]">0.3</h2>
                <h3 className="text-2xl">Timeline/ Roadmap</h3>
              </div>
              <div className="flex flex-row items-center ">
                <div className="w-3 h-3 rounded-full border border-[#B2FF02]"></div>
                <div
                  className="flex-grow  bg-[#808080]"
                  style={{ height: "1px" }}
                ></div>
              </div>
              <div className="pe-10">
                <span className="font-akhzid text-[#7A7A7A] ">
                  Successful NFT projects have a proper plan and are transparent
                  with the community on their project’s roadmap.
                </span>
              </div>
            </div>
            <div className="flex gap-4 flex-col ">
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl text-[#7A7A7A]">0.4</h2>
                <h3 className="text-2xl">Community Building</h3>
              </div>
              <div className="flex flex-row items-center ">
                <div className="w-3 h-3 rounded-full border border-[#B2FF02]"></div>
                <div
                  className="flex-grow  bg-[#808080]"
                  style={{ height: "1px" }}
                ></div>
              </div>
              <div className="pe-10">
                <span className="font-akhzid text-[#7A7A7A] ">
                  This is arguably the most important and necessary step. An NFT
                  project is only as successful as the community behind it.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full items-center gap-8">
          <h1 className="text-3xl dk:text-5xl font-medium text-[#B2FF02]">
            Choose your Plan
          </h1>{" "}
          <div className="w-full block">
            <Carousel
              responsive={responsive}
              // autoPlay
              // infinite
              arrows={false}
              showDots={screenWidth > 1024 ? false : true}
              itemClass="flex items-center justify-center"
              containerClass=" pt-10 pb-10"
            >
              <div
                style={{
                  background:
                    "linear-gradient(256.65deg, rgba(55, 55, 55, 0.2) 14.46%, rgba(55, 55, 55, 0) 84.25%)",
                }}
                className="py-20 px-12 border border-[#303030] hover:-translate-y-5  cursor-pointer  hover:shadow-greenish hover:border-[#B2FF02] flex flex-col items-center gap-8 mb-5 h-[530px] w-[350px] mx-6 "
              >
                <div className="flex items-center gap-4 flex-col">
                  <h4 className="text-[#B2FF02] text-3xl  text-center">
                    Development
                  </h4>
                  <span className="font-akhzid text-center">
                    Hire us as your Tech arm (NFT Developer), so you can focus
                    on your art and community building.
                  </span>
                </div>

                <ul className="text-[#7A7A7A] list-disc font-akhzid">
                  <li>
                    <span>1 Base Artwork</span>
                  </li>
                  <li>
                    <span> 1 Trait/Accessory</span>
                  </li>
                  <li>
                    <span> 2 Variations</span>
                  </li>
                  <li>
                    <span> Source File</span>
                  </li>
                  <li>
                    <span> 3 Days Delivery</span>
                  </li>
                </ul>
                <div className="flex gap-4 items-center">
                  <h5>Get quote</h5>
                  <hr className="border-[#B2FF02] min-w-[30px]" />
                </div>
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(256.65deg, rgba(55, 55, 55, 0.2) 14.46%, rgba(55, 55, 55, 0) 84.25%)",
                }}
                className="py-20 px-12 border border-[#303030] hover:-translate-y-5  cursor-pointer   hover:shadow-greenish hover:border-[#B2FF02] flex flex-col items-center gap-8 mb-5 h-[530px] w-[350px] mx-6 "
              >
                <div className="flex items-center gap-4 flex-col">
                  <h4 className="text-[#B2FF02] text-3xl  text-center">
                    Marketing & Development
                  </h4>
                  <span className="font-akhzid text-center">
                    Hire us as your Tech arm (NFT Developer), so you can focus
                    on your art and community building.
                  </span>
                </div>

                <ul className="text-[#7A7A7A] list-disc font-akhzid">
                  <li>
                    <span>1 Base Artwork</span>
                  </li>
                  <li>
                    <span> 1 Trait/Accessory</span>
                  </li>
                  <li>
                    <span> 2 Variations</span>
                  </li>
                  <li>
                    <span> Source File</span>
                  </li>
                  <li>
                    <span> 3 Days Delivery</span>
                  </li>
                </ul>
                <div className="flex gap-4 items-center">
                  <h5>Get quote</h5>
                  <hr className="border-[#B2FF02] min-w-[30px]" />
                </div>
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(256.65deg, rgba(55, 55, 55, 0.2) 14.46%, rgba(55, 55, 55, 0) 84.25%)",
                }}
                className="py-20 px-12 border border-[#303030] hover:-translate-y-5 cursor-pointer  hover:shadow-greenish hover:border-[#B2FF02] flex flex-col items-center gap-8 mb-5 h-[530px] w-[350px] mx-6 "
              >
                <div className="flex items-center gap-4 flex-col">
                  <h4 className="text-[#B2FF02] text-3xl  text-center">
                    Development
                  </h4>
                  <span className="font-akhzid text-center">
                    Hire us as your Tech arm (NFT Developer), so you can focus
                    on your art and community building.
                  </span>
                </div>

                <ul className="text-[#7A7A7A] list-disc font-akhzid">
                  <li>
                    <span>1 Base Artwork</span>
                  </li>
                  <li>
                    <span> 1 Trait/Accessory</span>
                  </li>
                  <li>
                    <span> 2 Variations</span>
                  </li>
                  <li>
                    <span> Source File</span>
                  </li>
                  <li>
                    <span> 3 Days Delivery</span>
                  </li>
                </ul>
                <div className="flex gap-4 items-center">
                  <h5>Get quote</h5>
                  <hr className="border-[#B2FF02] min-w-[30px]" />
                </div>
              </div>
            </Carousel>
          </div>
        </div>

        <div className="flex flex-col gap-8 dk:flex-row dk:gap-20">
          <h2 className="text-[#B2FF02] text-3xl dk:text-5xl tb:text-4xl font-medium text-center">
            Analytics
          </h2>
          <div className="flex flex-col dk:w-full gap-8 tb:grid tb:grid-cols-2 dk:items-center dk:justify-center">
            <div className="flex flex-col dk:col-span-2 dk:items-center">
              <h2 className="text-[#B2FF02] text-6xl font-bold">{value2}+</h2>
              <span className="text-xl">Projects Managed</span>
            </div>
            <div className="flex flex-col dk:items-center">
              <h2 className="text-[#B2FF02] text-6xl font-bold">{value3}+</h2>
              <span className="text-xl">Days in Business</span>
            </div>
            <div className="flex flex-col tb:col-start-2 tb:row-start-1 dk:col-start-auto dk:row-start-auto dk:items-center ">
              <h2 className="text-[#B2FF02] text-6xl font-bold">{value}+</h2>
              <span className="text-xl">NFTs Created</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <h2 className="text-[#B2FF02] text-3xl dk:text-5xl font-medium text-center">
            Custom Services
          </h2>
          <div className="flex flex-col gap-16 tb:grid tb:grid-cols-2 dk:flex dk:flex-row">
            <div className="flex flex-col items-center gap-4">
              <i>{images.cart}</i>
              <div className="flex flex-col items-center gap-2">
                <h4 className="text-2xl">NFT Marketplace</h4>
                <span className="text-center font font-akhzid font-extralight">
                  Get your own custom NFT marketplace developed & help your
                  community buy & sell your NFTs easily.
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <i>{images.screen}</i>
              <div className="flex flex-col items-center gap-2">
                <h4 className="text-2xl">Staking Website</h4>
                <span className="text-center font font-akhzid font-extralight">
                  Get a NFT staking website developed for your project, as per
                  the requirements.
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <i>{images.db}</i>
              <div className="flex flex-col items-center gap-2">
                <h4 className="text-2xl">Token Development</h4>
                <span className="text-center font font-akhzid font-extralight">
                  Get an exclusive cryptocurrency token developed for the NFT
                  project & provide utility like voting and more.
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <i>{images.dev}</i>
              <div className="flex flex-col items-center gap-2">
                <h4 className="text-2xl">DAO Development</h4>
                <span className="text-center font font-akhzid font-extralight">
                  Get a NFT-backed Decentralized Autonomous Organisation (DAO)
                  developed for your Brand’s project.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-16">
          <div className="gap-4 flex flex-col">
            <h2 className="text-[#B2FF02] text-3xl dk:text-5xl font-medium ">
              NFT Use Cases
            </h2>
            <span className="font-akhzid">
              NFTs can be leveraged by Brands in every industry. And we help you
              in every step!
            </span>
          </div>
          <div className="w-full block tb:hidden dk:block ">
            <Carousel
              responsive={responsive}
              // autoPlay

              // infinite
              className=""
              arrows={false}
              deviceType="mobile"
            >
              <div className="w-[300px] flex flex-col gap-2">
                <h5 className="text-2xl">NFT for Sports</h5>
                <img
                  src="/Images&logo/nft2.png"
                  alt=""
                  className="w-full h-[350px]"
                />
                <span className="text-sm font-akhzid font-extralight">
                  People love sports all over the world. Tokenizing the cards of
                  players, their autographs, clippings of rare moments,
                  providing exclusive access to fans to special events, etc. can
                  pull in a lot of fans to strive to acquire the ownership of
                  these tokens.
                </span>
              </div>
              <div className="w-[300px] flex flex-col gap-2">
                <h5 className="text-2xl">NFT for Music</h5>
                <img
                  src="/Images&logo/nft3.png"
                  alt=""
                  className="w-full h-[350px]"
                />
                <span className="text-sm font-akhzid font-extralight">
                  Everyone loves music and the industry has a huge following.
                  However, piracy has always been an issue. NFTs for music can
                  rectify these issues and support music artists by getting them
                  their desired royalty with no middlemen intervention.
                </span>
              </div>
              <div className="w-[300px] flex flex-col gap-2">
                <h5 className="text-2xl">NFT in Games</h5>
                <img
                  src="/Images&logo/nft4.png"
                  alt=""
                  className="w-full h-[350px]"
                />
                <span className="text-sm font-akhzid font-extralight">
                  Games have in-app products to be purchased already. Therefore
                  embedding NFTs will be just an upgrade to this already
                  existing practice in a more efficient, and profitable manner.
                  The NFT marketplace will increase the overall efficiency.
                </span>
              </div>
              <div className="w-[300px] flex flex-col gap-2">
                <h5 className="text-2xl">NFT in Fashion</h5>
                <img
                  src="/Images&logo/nft5.png"
                  alt=""
                  className="w-full h-[350px]"
                />
                <span className="text-sm font-akhzid font-extralight">
                  The encryption of NFTs in the fashion industry can provide
                  insights to customers on the origin of the apparel they wear
                  and consumers can also verify the ownership of coutures and
                  ornaments to eliminate the risk of counterfeits.
                </span>
              </div>
              <div className="w-[300px] flex flex-col gap-2">
                <h5 className="text-2xl">NFT Lending Platform</h5>
                <img
                  src="/Images&logo/nft6.png"
                  alt=""
                  className="w-full h-[350px]"
                />
                <span className="text-sm font-akhzid font-extralight">
                  NFTs are used as assets to loan up money. Creating a platform
                  that lends money for NFTs can account for a business with a
                  huge volume of transactions.
                </span>
              </div>
            </Carousel>
          </div>
          <div className=" grid-cols-2 hidden tb:grid dk:hidden tb:gap-10">
            {" "}
            <div className="w-[300px] flex flex-col items-start gap-2 m-auto">
              <h5 className="text-2xl">NFT for Sports</h5>
              <img
                src="/Images&logo/nft2.png"
                alt=""
                className="w-full h-[350px]"
              />
              <span className="text-sm font-akhzid font-extralight">
                People love sports all over the world. Tokenizing the cards of
                players, their autographs, clippings of rare moments, providing
                exclusive access to fans to special events, etc. can pull in a
                lot of fans to strive to acquire the ownership of these tokens.
              </span>
            </div>
            <div className="w-[300px] flex flex-col gap-2  m-auto">
              <h5 className="text-2xl">NFT for Music</h5>
              <img
                src="/Images&logo/nft3.png"
                alt=""
                className="w-full h-[350px]"
              />
              <span className="text-sm font-akhzid font-extralight">
                Everyone loves music and the industry has a huge following.
                However, piracy has always been an issue. NFTs for music can
                rectify these issues and support music artists by getting them
                their desired royalty with no middlemen intervention.
              </span>
            </div>
            <div className="w-[300px] flex flex-col gap-2  m-auto">
              <h5 className="text-2xl">NFT in Games</h5>
              <img
                src="/Images&logo/nft4.png"
                alt=""
                className="w-full h-[350px]"
              />
              <span className="text-sm font-akhzid font-extralight">
                Games have in-app products to be purchased already. Therefore
                embedding NFTs will be just an upgrade to this already existing
                practice in a more efficient, and profitable manner. The NFT
                marketplace will increase the overall efficiency.
              </span>
            </div>
            <div className="w-[300px] flex flex-col gap-2  m-auto">
              <h5 className="text-2xl">NFT in Fashion</h5>
              <img
                src="/Images&logo/nft5.png"
                alt=""
                className="w-full h-[350px]"
              />
              <span className="text-sm font-akhzid font-extralight">
                The encryption of NFTs in the fashion industry can provide
                insights to customers on the origin of the apparel they wear and
                consumers can also verify the ownership of coutures and
                ornaments to eliminate the risk of counterfeits.
              </span>
            </div>
            <div className="w-[300px] flex flex-col gap-2  m-auto">
              <h5 className="text-2xl">NFT Lending Platform</h5>
              <img
                src="/Images&logo/nft6.png"
                alt=""
                className="w-full h-[350px]"
              />
              <span className="text-sm font-akhzid font-extralight">
                NFTs are used as assets to loan up money. Creating a platform
                that lends money for NFTs can account for a business with a huge
                volume of transactions.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="gap-4 flex flex-col">
            <h2 className="text-[#B2FF02] text-3xl dk:text-5xl font-medium ">
              Types of NFTs
            </h2>
          </div>
          <div className="flex flex-col gap-4  items-center tb:grid tb:grid-cols-2 tb:items-start dk:grid-cols-3">
            <div className="w-[300px] tb:w-full tb:max-w-[400px]  flex flex-col gap-8 border border-[#303030] hover:shadow-greenish hover:border-[#B2FF02] px-4 py-8 dk:col-span-2 dk:w-full dk:max-w-max dk:flex-row-reverse dk:px-8 dk:py-4 dk:items-center dk:h-[400px] ">
              <i>{images.artwork}</i>
              <div className="flex flex-col gap-2">
                <h5 className="text-2xl">Artwork (1/1)</h5>
                <span className="font-light font-akhzid text-[#7A7A7A]">
                  A 1/1, 1 of 1, or one of one, is an NFT that has been issued
                  as a single, unique edition. One of ones are seen as more
                  scarce and therefore more valuable, because only one person
                  can own them at a time. Sometimes artists will release 10, 50,
                  100, etc. copies of the same piece of art, just like in real
                  life. The takeaway is still the same though, as it creates
                  scarcity and value because they are scarce.
                </span>
              </div>
            </div>
            <div className="w-[300px] tb:w-full tb:max-w-[400px]  flex flex-col gap-8 border border-[#303030] hover:shadow-greenish hover:border-[#B2FF02] px-4 py-8  dk:w-full dk:max-w-max dk:flex-row-reverse dk:px-8 dk:py-4 dk:items-center dk:h-[400px] ">
              <i>{images.collectables}</i>
              <div className="flex flex-col gap-2">
                <h5 className="text-2xl">Collectibles</h5>
                <span className="font-light font-akhzid text-[#7A7A7A]">
                  NFT collectibles take the form of digital trading cards,
                  sports memorabilia, video clips, photographs and tickets from
                  music and games. NBA TopShot is an example, where people can
                  buy collectibles of certain moments from their favorite NBA
                  players, including dunks and game-winning shots.
                </span>
              </div>
            </div>
            <div className="w-[300px] tb:w-full tb:max-w-[400px]  flex flex-col gap-8 border border-[#303030] hover:shadow-greenish hover:border-[#B2FF02] px-4 py-8  dk:w-full dk:max-w-max dk:flex-row-reverse dk:px-8 dk:py-4 dk:items-center dk:h-[400px] ">
              <i>{images.generatvie}</i>
              <div className="flex flex-col gap-2">
                <h5 className="text-2xl">Generative Art</h5>
                <span className="font-light font-akhzid text-[#7A7A7A]">
                  Generative art is an art that has been wholly or partially
                  produced by an autonomous system that can independently
                  determine features of an artwork that would otherwise require
                  decisions made directly by the artist. There are image layers
                  (input) which uses algorithm(processing) to create unique art
                  variations (output), automatically.
                </span>
              </div>
            </div>
            <div className="w-[300px] tb:w-full tb:max-w-[400px]  flex flex-col gap-8 border border-[#303030] hover:shadow-greenish hover:border-[#B2FF02] px-4 py-8 dk:col-span-2 dk:w-full dk:max-w-max dk:flex-row-reverse dk:px-8 dk:py-4 dk:items-center dk:h-[400px] ">
              <i>{images.pfp}</i>
              <div className="flex flex-col gap-2">
                <h5 className="text-2xl">Avatars/PFP</h5>
                <span className="font-light font-akhzid text-[#7A7A7A]">
                  Avatars & Profile Pic (PFP) are projects that people often use
                  as their social media profile pics. They’ve been popularized
                  by projects like CryptoPunks and Deadfellaz. It’s become so
                  widely used that social media companies, like Twitter, have
                  updated features that enable users to display NFTs as their
                  avatars while also including details that prove they are the
                  owner the millions of dollars per NFT.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-4xl text-center dk:text-5xl text-[#7A7A7A]">
            Launch your NFT Project
          </h3>
          <div className="flex items-center justify-center">
            <button
              className="flex items-center justify-center gap-2 "
              onMouseLeave={() => setHover(false)}
              onMouseEnter={() => setHover(true)}
            >
              <h3 className="text-4xl ">Hire us</h3>
              <i className={hover ? "rotate-90 transition-all" : ""}>
                {images.headUp}
              </i>
            </button>
          </div>
        </div>

        <div className="flex mt-20 flex-col  items-center justify-center w-full gap-10">
          <h3 className="text-4xl text-center dk:text-5xl text-[#B2FF02]">
            Latest projects
          </h3>
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
        <div className="flex flex-col gap-12 dk:flex-row dk:justify-between">
          <div className="flex flex-col gap-4 tb:flex-row dk:flex-col dk:w-[600px]">
            <h3 className="text-4xl dk:text-5xl  text-[#B2FF02]">
              The Better Studio Benefit
            </h3>
            <h4 className="text-3xl dk:text-4xl text-[#7A7A7A]">
              You project is in safe hands!
            </h4>
          </div>
          <div className="flex flex-col gap-12 tb:grid tb:grid-cols-2 dk:w-[600px] dk:-mt-4">
            <div className="flex flex-col gap-4">
              <i>{images.rocket}</i>
              <div className="flex flex-col gap-2">
                <h5 className="text-2xl">On-time Project Delivery</h5>
                <span className="font-akhzid font-light text-[#7A7A7A]">
                  Our developers’ team will ensure to deliver the NFT and
                  Blockchain development solution within a stipulated time.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <i>{images.confidential}</i>
              <div className="flex flex-col gap-2">
                <h5 className="text-2xl">Confidentiality</h5>
                <span className="font-akhzid font-light text-[#7A7A7A]">
                  The information of your project would not be shared with third
                  parties at any cost. We would ensure the confidentiality of
                  your project.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <i>{images.team}</i>
              <div className="flex flex-col gap-2">
                <h5 className="text-2xl">Expertise Team</h5>
                <span className="font-akhzid font-light text-[#7A7A7A]">
                  Our team of developers have years of experience in the field
                  of blockchain technology and have worked on prominent
                  blockchain networks, including Ethereum, BSC, TRON, etc.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <i>{images.support}</i>
              <div className="flex flex-col gap-2">
                <h5 className="text-2xl">Support & Maintenance</h5>
                <span className="font-akhzid font-light text-[#7A7A7A]">
                  Our responsive support team is here to assist you in the case
                  of any queries from your side to be resolved.
                </span>
              </div>
            </div>
          </div>
        </div>
        <ContactForm></ContactForm>
      </div>
      <div className=" tb:px-10 px-4 dk:px-20 ">
        <Footer></Footer>
      </div>
    </div>
  );
};
export default NFTPage;
