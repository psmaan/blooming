import AnimatedButton from "./AnimatedButton";
import * as React from "react";
import TextField from "@mui/material/TextField";
const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 mb-20 dk:flex-row  dk:justify-between font-recoleta">
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
          <TextField
            id="standard-basic"
            label="What's Your Name?"
            variant="standard"
            className="inputArea"
          />
        </div>
        <div className="flex flex-col gap-1">
          <TextField
            id="standard-basic"
            label="What's Your Email?"
            variant="standard"
            className="inputArea"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xl"></label>
          <TextField
            id="standard-basic"
            label="Tell us about your project frankly :)"
            variant="standard"
            multiline
            rows={10}
            className="textArea"
          />
        </div>

        <AnimatedButton
          justifyEnd
          innerText="Send"
          textClass="text-white font-recoleta text-xl"
        ></AnimatedButton>
      </form>
    </div>
  );
};
export default ContactForm;
