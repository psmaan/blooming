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
            sx={{
              color: "red",
              "& .MuiInputLabel-root": {
                color: "white",
                fontSize: "1.5rem",
                fontFamily: "Recoleta",
              },
              "& .MuiInput-root": {
                fontFamily: "Recoleta",
              },
              "& .css-1eed5fa-MuiInputBase-root-MuiInput-root::after": {
                borderBottom: "none",
                transition: "all",
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "25%",
                height: "2px",
                backgroundColor: "#B2FF02",
                color: "#B2FF02",
              },
              "& .css-1eed5fa-MuiInputBase-root-MuiInput-root::before": {
                borderBottom: "none",
              },

              "& .css-1eed5fa-MuiInputBase-root-MuiInput-root": {
                position: "relative",

                marginTop: "40px",
                borderBottom: "1px solid #B2FF02",
              },
              "& .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root": {
                color: "white",
              },
              "& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                {
                  color: "white",
                },
              "& .css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                color: "white",
              },
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <TextField
            id="standard-basic"
            label="What's Your Email?"
            variant="standard"
            sx={{
              color: "red",
              "& .MuiInputLabel-root": {
                color: "white",
                fontSize: "1.5rem",
                fontFamily: "Recoleta",
              },
              "& .MuiInput-root": {
                fontFamily: "Recoleta",
              },
              "& .css-1eed5fa-MuiInputBase-root-MuiInput-root::after": {
                borderBottom: "none",
                transition: "all",
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "25%",
                height: "2px",
                backgroundColor: "#B2FF02",
                color: "#B2FF02",
              },
              "& .css-1eed5fa-MuiInputBase-root-MuiInput-root::before": {
                borderBottom: "none",
              },

              "& .css-1eed5fa-MuiInputBase-root-MuiInput-root": {
                position: "relative",

                marginTop: "40px",
                borderBottom: "1px solid #B2FF02",
              },
              "& .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root": {
                color: "white",
              },
              "& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                {
                  color: "white",
                },
              "& .css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                color: "white",
              },
            }}
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
            sx={{
              color: "red",
              "& .MuiInputLabel-root": {
                color: "white",
                fontSize: "1.5rem",
                fontFamily: "Recoleta",
              },
              "& .MuiInput-root": {
                fontFamily: "Recoleta",
              },
              "& .css-uhyr2s-MuiInputBase-root-MuiInput-root::after": {
                borderBottom: "none",
                transition: "all",
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "25%",
                height: "2px",
                backgroundColor: "#B2FF02",
                color: "#B2FF02",
              },
              "& .css-uhyr2s-MuiInputBase-root-MuiInput-root::before": {
                borderBottom: "none",
              },

              "& .css-uhyr2s-MuiInputBase-root-MuiInput-root": {
                position: "relative",
                color: "white",

                marginTop: "40px",
                borderBottom: "1px solid #B2FF02",
              },
              "& .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root": {
                color: "white",
              },
              "& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                {
                  color: "white",
                },
              "& .css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                color: "white",
              },
            }}
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
