import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Typography, InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

const BuildResume = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [formData, setFormdata] = useState({
    fullname: "",
    title: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    portfolio: "",
    address: "",
    summary: "",
    skills: "",
    projects: "",
    education: "",
    language: "",
  });

  const printRef = React.useRef(null);
  const handleDownloadPdf = async () => {
    const element = printRef.current;

    if (!element) {
      return;
    }
    const canvas = await html2canvas(element, { scale: 2 });
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    console.log(imgProperties);
    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Resume.pdf");
  };

  return (
    <div className="mt-5 font-poppins">
      <h1
        variant="h5"
        gutterBottom
        className="text-heading font-bold text-3xl my-4"
      >
        Build Your Professional Resume
      </h1>

      <div className="p-2 bg-heading/40 h-screen grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className=" min-h-screen overflow-y-scroll">
          <h2 className="bg-background p-2 mb-2 rounded-md font-semibold">
            Fill With Your Resume Information
          </h2>
          <div className="bg-background  min-h-screen  rounded-md">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-4  grid grid-cols-2 gap-5 p-4"
            >
              {/* register your input into the hook by invoking the "register" function */}
              <TextField
                id="standard-name-input"
                label="Full Name"
                type="text"
                autoComplete="current-name"
                // defaultValue="Your Name"
                variant="standard"
                {...register("fullname")}
                className="bg-accent"
                onChange={(e) => {
                  setFormdata({ ...formData, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="standard-name-input"
                label="Title"
                type="text"
                autoComplete="current-name"
                // defaultValue="Your Name"
                variant="standard"
                {...register("title")}
                className="bg-accent "
                onChange={(e) => {
                  setFormdata({ ...formData, [e.target.name]: e.target.value });
                }}
              />
              <h1 className="text-left text-heading text-xl">
                Contact Information
              </h1>
              <h1></h1>
              <TextField
                label="Phone Number"
                placeholder="1XXXXXXXXX"
                type="text"
                {...register("phone")}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+880</InputAdornment>
                  ),
                }}
                className="bg-accent "
                onChange={(e) => {
                  setFormdata({ ...formData, [e.target.name]: e.target.value });
                }}
              />

              <TextField
                id="standard-email-input"
                label="Email"
                type="email"
                autoComplete="current-name"
                // defaultValue="Your Name"
                variant="standard"
                {...register("email")}
                className="bg-accent "
                onChange={(e) => {
                  setFormdata({ ...formData, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="standard-linkedin-input"
                label="LinkedIn Profile Link"
                type="text"
                autoComplete="current-name"
                // defaultValue="Your Name"
                variant="standard"
                {...register("linkedin")}
                className="bg-accent "
                onChange={(e) => {
                  setFormdata({ ...formData, [e.target.name]: e.target.value });
                }}
              />

              <TextField
                id="standard-github-input"
                label="Github Profile Link"
                type="text"
                autoComplete="current-name"
                // defaultValue="Your Name"
                variant="standard"
                {...register("github")}
                className="bg-accent "
                onChange={(e) => {
                  setFormdata({ ...formData, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="standard-portfolio-input"
                label="Portfolio Link"
                type="text"
                autoComplete="current-name"
                // defaultValue="Your Name"
                variant="standard"
                {...register("portfolio")}
                className="bg-accent "
                onChange={(e) => {
                  setFormdata({ ...formData, [e.target.name]: e.target.value });
                }}
              />

              <TextField
                id="standard-address-input"
                label="Address / Location"
                type="text"
                autoComplete="current-name"
                // defaultValue="Your Name"
                variant="standard"
                {...register("address")}
                className="bg-accent "
                onChange={(e) => {
                  setFormdata({ ...formData, [e.target.name]: e.target.value });
                }}
              />

              <h1 className="text-left text-heading text-xl">
                Details Information
              </h1>
              <h1></h1>
              <TextField
                id="outlined-summary-static"
                label="Summary"
                multiline
                rows={4}
                // defaultValue="Default Value"
                variant="standard"
                {...register("summary")}
                onChange={(e) => {
                  setFormdata({ ...formData, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="outlined-skill-static"
                label="Skills"
                multiline
                rows={4}
                // defaultValue="Default Value"
                variant="standard"
                {...register("skills")}
                placeholder="Please Enter Your Skills in a Format you like to show in your Resume."
                onChange={(e) => {
                  setFormdata({ ...formData, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="outlined-project-static"
                label="Projects"
                multiline
                rows={4}
                // defaultValue="Default Value"
                variant="standard"
                {...register("projects")}
                placeholder="Please Enter Your Projects in a Format you like to show in your Resume."
                onChange={(e) => {
                  setFormdata({ ...formData, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="outlined-education-static"
                label="Education"
                multiline
                rows={4}
                // defaultValue="Default Value"
                variant="standard"
                {...register("education")}
                placeholder="Please Enter Your Education in a Format you like to show in your Resume."
                onChange={(e) => {
                  setFormdata({ ...formData, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="outlined-language-static"
                label="Language"
                multiline
                rows={4}
                // defaultValue="Default Value"
                variant="standard"
                {...register("skills")}
                placeholder="Please Enter Your Language skill in a Format you like to show in your Resume."
                onChange={(e) => {
                  setFormdata({ ...formData, [e.target.name]: e.target.value });
                }}
              />

              {/* include validation with required or other standard HTML validation rules */}
              {/* <input type="submit" /> */}
            </form>
          </div>
        </div>
        <div className=" min-h-screen overflow-y-scroll text-foreground p-4 font-bold text-2xl">
          <h2 className="text-primary font-bold">Live Preview</h2>
          <button
            onClick={handleDownloadPdf}
            className="mt-1 p-3 flex justify-self-end text-lg bg-teal-700 text-white rounded"
          >
            Download as PDF
          </button>

          <div className="bg-background min-h-screen mt-3 p-3" ref={printRef}>
            <h1 className="text-2xl">{formData.fullname || "John Doe"}</h1>
            <h1 className="text-xl mt-1">
              {formData.title || "Web Developer"}
            </h1>
            <div className="text-sm text-center mt-2 font-normal  ">
              <span>{formData.phone || "1234567898"} | </span>
              <span>{formData.email || "meem.noosrat@gmail.com"} | </span>
              <Link to={formData.linkedin} target="blank">
                {" "}
                LinkedIn |{" "}
              </Link>
              <Link to={formData.github} target="blank">
                {" "}
                Github |{" "}
              </Link>
              <Link to={formData.portfolio} target="blank">
                {" "}
                Portfolio |{" "}
              </Link>
              <span>{formData.address || "Dhaka, Bangladesh"} </span>
            </div>
            <div>
              <h3 className="text-left border-black border-b py-2 text-lg ">
                Summary
              </h3>
              <p className=" text-sm font-normal text-justify mt-1">
                {formData.summary}
              </p>
            </div>
            <div>
              <h3 className="text-left border-black border-b py-2 text-lg ">
                Skills
              </h3>
              <p className=" text-sm font-normal text-justify mt-1">
                {formData.skills}
              </p>
            </div>
            <div>
              <h3 className="text-left border-black border-b py-2 text-lg ">
                Projects
              </h3>
              <p className=" text-sm font-normal text-justify mt-1">
                {formData.skills}
              </p>
            </div>
            <div>
              <h3 className="text-left border-black border-b py-2 text-lg ">
                Education
              </h3>
              <p className=" text-sm font-normal text-justify mt-1">
                {formData.skills}
              </p>
            </div>
            <div>
              <h3 className="text-left border-black border-b py-2 text-lg ">
                Languages
              </h3>
              <p className=" text-sm font-normal text-justify mt-1">
                {formData.skills}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildResume;
