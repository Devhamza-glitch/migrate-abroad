import React from 'react';
import { FaBriefcase, FaFileAlt } from 'react-icons/fa';
import img1 from "../../assets/companies/realty.png"; // Update with the actual path to the image
import img2 from "../../assets/companies/realty.png"; // Update with the actual path to the image
import img3 from "../../assets/companies/realty.png"; // Update with the actual path to the image
import img4 from "../../assets/companies/realty.png";

const JobEmployeeSection = () => {
  return (
    <section className="flex flex-col items-center justify-center p-8 space-y-8 bg-gray-50">
      {/* Job and Employee Sections */}
      <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0 md:space-x-12">
        {/* Job Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-red-900 rounded-full p-4">
            <FaFileAlt className="text-white text-5xl" />
          </div>
          <h2 className="text-red-900 text-xl   hover:text-gray-700 cursor-pointer font-bold">LOOKING FOR JOB?</h2>
        </div>

        {/* Employee Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-red-900 rounded-full p-4">
            <FaBriefcase className="text-white text-5xl" />
          </div>
          <h2 className="text-red-900 text-center hover:text-gray-700 cursor-pointer text-xl font-bold">LOOKING FOR EMPLOYEES?</h2>
        </div>
      </div>

      {/* Button Section */}
      <div className="text-center">
        <button className="bg-red-800 text-white px-6 py-3 border-0 ">
          For Current Job Openings click here
        </button>
      </div>

      {/* Icons Section */}
      <div className="flex flex-wrap justify-center space-x-8 mt-48">
        <div className="flex flex-col items-center">
          <img src={img1} alt="Licensing" className="w-48 h-24" />
          <p className="text-sm text-center mt-2 font-semibold">Licensed by Ministry of External Affairs </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={img2} alt="ISO" className="w-48 h-24" />
          <p className="text-sm text-center mt-2 font-semibold">ISO 9001:2015 Certified</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={img3} alt="Excellence" className="w-48 h-24" />
          <p className="text-sm text-center mt-2 font-semibold">40+ years of Excellence</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={img4} alt="Best Agency" className="w-48 h-24" />
          <p className="text-sm text-center mt-2 font-semibold">Ranked 2nd Best Agency in India by MEA in 2017</p>
        </div>
      </div>
    </section>
  );
};

export default JobEmployeeSection;
