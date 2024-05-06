const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 mb-20 dk:flex-row  dk:justify-between">
      <div className="flex flex-col gap-4 tb:flex-row items-start tb:items-end dk:flex-col dk:items-start dk:w-[600px] dk:ps-20">
        <h3 className="text-4xl dk:text-5xl text-start text-[#B2FF02]">
          Tell us your needs
        </h3>
        <h4 className=" font-akhzid text-sm dk:text-xl dk">
          Describe your project and leave us your contact info, we’ll get back
          to you within 24 hours.
        </h4>
      </div>
      <form action="" className="flex flex-col gap-16 dk:w-[600px]">
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xl">
            What's Your Name?
          </label>
          <input
            type="text"
            className="px-4 py-2 bg-transparent border-b border-b-[#B2FF02] outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xl">
            What's Your Email?
          </label>
          <input
            type="text"
            className="px-4 py-2 bg-transparent border-b border-b-[#B2FF02] outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xl">
            Tell us about your project frankly :)
          </label>
          <textarea
            name=""
            id=""
            className="px-4 py-2 bg-transparent border-b border-b-[#B2FF02] outline-none w-full"
            rows={10}
          ></textarea>
        </div>
        <div className="flex items-center justify-end gap-2">
          <span className="text-xl">Send</span>
          <hr className="border-[#B2FF02] w-[25px]" />
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
