import ContactForm from "../Components/ContactForm";
import Header from "../Components/Header";

const HireUs: React.FC = () => {
  return (
    <div className="w-full  flex flex-col text-white  gap-20 min-h-screen bg-black">
      <div className="tb:px-10 px-4 dk:px-20 dk:py-4   w-full">
        <Header></Header>
      </div>
      <div className="tb:px-10 px-4 dk:px-20 ">
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};
export default HireUs;
