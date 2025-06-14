import moment from "moment";
import React, { useRef, useState } from "react";
import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";

const BuildCoverLetter = () => {
  const [formData, setFormdata] = useState({
    fullname: "",
    area: "",
    district: "",
    country: "",
    phone: "",
    email: "",
    date: "",
    company: "",
    company_address: "",
    salutation: "",
    introduction: "",
    experience: "",
    alignment: "",
    closing: "",
    sign_off: "",
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
    pdf.save("cover letter.pdf");
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      {/* form for filling info */}
      <div className="bg-accent overflow-y-scroll p-6  shadow">
        <h2 className="text-xl font-semibold mb-4">Fill Your Info</h2>

        <div className="grid grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow border">
          <h2 className="font-semibold text-left my-3">Personal Details</h2>
          {/* name field  */}
          <div className="col-span-2 text-left">
            <label className="text-lg text-gray-500">Fullname</label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter Your Full Name"
              onChange={(e) => {
                setFormdata({ ...formData, [e.target.name]: e.target.value });
              }}
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md border-none focus:outline-none"
            />
          </div>
          {/* address field  */}
          <div className="col-span-1 text-left">
            <label className="text-lg text-gray-500">Area</label>
            <input
              type="text"
              name="area"
              placeholder="Enter Your Current Living Area"
              onChange={(e) => {
                setFormdata({ ...formData, [e.target.name]: e.target.value });
              }}
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md border-none focus:outline-none"
            />
          </div>
          <div className="col-span-1 text-left">
            <label className="text-lg text-gray-500">District</label>
            <input
              type="text"
              name="district"
              placeholder="Enter Your Current District"
              onChange={(e) => {
                setFormdata({ ...formData, [e.target.name]: e.target.value });
              }}
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md border-none focus:outline-none"
            />
          </div>
          <div className="col-span-1 text-left">
            <label className="text-lg text-gray-500">Country</label>
            <input
              type="text"
              name="country"
              placeholder="Enter Your Current Living Country"
              onChange={(e) => {
                setFormdata({ ...formData, [e.target.name]: e.target.value });
              }}
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md border-none focus:outline-none"
            />
          </div>

          {/* phone number  */}
          <div className="col-span-1 text-left">
            <label className="text-lg text-gray-500">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter Your Contact Number"
              onChange={(e) => {
                setFormdata({ ...formData, [e.target.name]: e.target.value });
              }}
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md border-none focus:outline-none"
            />
          </div>

          {/* email address  */}
          <div className="col-span-1 text-left">
            <label className="text-lg text-gray-500">Email address</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              onChange={(e) => {
                setFormdata({ ...formData, [e.target.name]: e.target.value });
              }}
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md border-none focus:outline-none"
            />
          </div>

          <div className="col-span-2 text-left font-semibold">
            <h2>Application Information</h2>
          </div>
          {/* date input  */}
          <div className="col-span-1 text-left">
            <label className="text-lg text-gray-500">Apply date</label>
            <input
              type="date"
              name="date"
              placeholder="Enter Apply Date"
              onChange={(e) => {
                setFormdata({ ...formData, [e.target.name]: e.target.value });
              }}
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md border-none focus:outline-none"
            />
          </div>

          {/* company name  */}
          <div className="col-span-1 text-left">
            <label className="text-lg text-gray-500">Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="Enter Company Name"
              onChange={(e) => {
                setFormdata({ ...formData, [e.target.name]: e.target.value });
              }}
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md border-none focus:outline-none"
            />
          </div>

          {/* company address  */}
          <div className="col-span-1 text-left">
            <label className="text-lg text-gray-500">Company Address</label>
            <input
              type="text"
              name="company_address"
              placeholder="Enter Company Address"
              onChange={(e) => {
                setFormdata({ ...formData, [e.target.name]: e.target.value });
              }}
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md border-none focus:outline-none"
            />
          </div>

          {/* salutation  */}
          <div className="col-span-1 text-left">
            <label className="text-lg text-gray-500">Salutation</label>
            <input
              type="text"
              name="salutation"
              placeholder="Enter Salutation"
              onChange={(e) => {
                setFormdata({ ...formData, [e.target.name]: e.target.value });
              }}
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md border-none focus:outline-none"
            />
          </div>

          <div className="col-span-2 text-left font-semibold">
            <h2>Body Section Information</h2>
          </div>

          {/* introduction  */}
          <div className="col-span-2 text-left">
            <label className="text-lg text-gray-500">Introduction</label>
            <textarea
              type="text"
              name="introduction"
              placeholder="Introduction Part"
              onChange={(e) => {
                setFormdata({ ...formData, [e.target.name]: e.target.value });
              }}
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md border-none focus:outline-none"
            ></textarea>
          </div>
          {/* experience  */}
          <div className="col-span-2 text-left">
            <label className="text-lg text-gray-500">Experience</label>
            <textarea
              type="text"
              name="experience"
              placeholder="Experience Part"
              onChange={(e) => {
                setFormdata({ ...formData, [e.target.name]: e.target.value });
              }}
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md border-none focus:outline-none"
            ></textarea>
          </div>
          {/* alignment  */}
          <div className="col-span-2 text-left">
            <label className="text-lg text-gray-500">Alignment</label>
            <textarea
              type="text"
              name="alignment"
              placeholder="Alignment Part"
              onChange={(e) => {
                setFormdata({ ...formData, [e.target.name]: e.target.value });
              }}
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md border-none focus:outline-none"
            ></textarea>
          </div>

          {/* closing  */}
          <div className="col-span-2 text-left">
            <label className="text-lg text-gray-500">Closing</label>
            <textarea
              type="text"
              name="closing"
              placeholder="Closing Part"
              onChange={(e) => {
                setFormdata({ ...formData, [e.target.name]: e.target.value });
              }}
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md border-none focus:outline-none"
            ></textarea>
          </div>

          {/* sign off  */}
          <div className="col-span-1 text-left">
            <label className="text-lg text-gray-500">Sign-Off</label>
            <input
              type="text"
              name="sign_off"
              placeholder=" Sign Off Text"
              onChange={(e) => {
                setFormdata({ ...formData, [e.target.name]: e.target.value });
              }}
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md border-none focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Live preview  */}
      <div className="bg-teal-200 p-6 overflow-y-scroll min-h-screen">
        <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
        <div className="bg-background min-h-screen p-6" ref={printRef}>
          <div>
            <h2 className="text-2xl">{formData.fullname || "Erich Edward"} </h2>
            <p className="text-center py-3 text-sm border-b-2">
              {formData.area || "Mouchak"}, {formData.district || "Dhaka"},{" "}
              {formData.country || "Bangladesh"} | 📞{" "}
              {formData.phone || "+8801632387861"} | ✉️{" "}
              {formData.email || "meem.noosrat@gmail.com"}
            </p>
            <div className="text-left mt-3 ">
              <p>{moment(formData.date).format("MMMM Do YYYY")}</p>
              <p>{formData.salutation || "Hiring Team"}</p>
              <p>{formData.company || "XYZ IT Limited"}</p>
              <p>{formData.company_address || "Gulshan, Dhaka, Bangladesh"}</p>
            </div>

            <p className="mt-6 text-left">
              Dear {formData.salutation || "Hiring Team"}
            </p>
          </div>

          {/* body part */}
          <div className="text-left mt-4">
            {formData.introduction ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias sapiente praesentium cumque corrupti. Nostrum laudantium illo cum ratione ea?"}
          </div>
          <div className="text-left mt-4">
            {formData.experience ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias sapiente praesentium cumque corrupti. Nostrum laudantium illo cum ratione ea?"}
          </div>
          <div className="text-left mt-4">
            {formData.alignment ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias sapiente praesentium cumque corrupti. Nostrum laudantium illo cum ratione ea?"}
          </div>
          <div className="text-left mt-4 mb-4">
            {formData.closing ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias sapiente praesentium cumque corrupti. Nostrum laudantium illo cum ratione ea?"}
          </div>

          {/* sign off  */}
          <div className="text-left">
            <p>{formData.sign_off || "Sincerely"}</p>
            <p>{formData.fullname || "Erich Edward"}</p>
            <p>{formData.email || "meem.noosrat@gmail.com"}</p>
          </div>
        </div>
        <button
          onClick={handleDownloadPdf}
          className="mt-4 px-4 py-2 flex justify-self-end bg-teal-700 text-white rounded"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default BuildCoverLetter;
