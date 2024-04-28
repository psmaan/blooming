import { images } from "../assets/Images";

const Header: React.FC = () => {
  return (
    <div className="text-white flex  w-full z-10  py-4 ">
      <button className="flex flex-row flex-1 gap-2 items-center">
        <i>{images.menu}</i>
        <span className="font-recoleta ">Menu</span>
      </button>
      <div className="flex-1  flex items-center dk:justify-center justify-end">
        <h1>{images.logo}</h1>
      </div>
      <div className="flex-1 hidden dk:flex justify-end font-akhzid  items-center">
        <span className="mr-4 ">Our work:</span>
        <span className="mr-3">[PRINTT DESIGN]</span>
        <span>[UX/UI]</span>
      </div>
    </div>
  );
};
export default Header;
