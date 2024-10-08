import React from 'react';
import { FaUsers, FaSearch, FaBriefcase, FaBook, FaPlane, FaUserPlus, FaDollarSign, FaChalkboardTeacher } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        Our <span className="text-red-700">Services</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-10 text-center">
        <ServiceCard icon={<FaUsers size={60} />} title="Bulk Recruitment" />
        <ServiceCard icon={<FaSearch size={60} />} title="Executive Search" />
        <ServiceCard icon={<FaBriefcase size={60} />} title="Turnkey Solutions" special />
        <ServiceCard icon={<FaBook size={60} />} title="Student Recruitment" />
        <ServiceCard icon={<FaPlane size={60} />} title="Permanent Migration" />
        <ServiceCard icon={<FaUserPlus size={60} />} title="Assessment and Testing Services" />
        <ServiceCard icon={<FaDollarSign size={60} />} title="Payroll and Contract Staffing Solutions" />
        <ServiceCard icon={<FaChalkboardTeacher size={60} />} title="Training" />
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title }) => {
  return (
    <div className="p-4 sm:p-6 transform transition-transform cursor-pointer">
      <div className="flex text-red-700 justify-center mb-4 hover:text-gray-700">
        {icon}
      </div>
      <h3 className="text-sm sm:text-lg font-medium text-center hover:text-red-700">{title}</h3>
    </div>
  );
};

export default Services;
