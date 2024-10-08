import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa'; // For job icons
import searchImage from '../../assets/search.png'; // Image path for the diagram

// Jobs data (you can add links or dynamic data here if necessary)
const jobs = [
  'Jobs in Romania',
  'Jobs in Saudi Arabia',
  'Jobs in Qatar',
  'Jobs in Germany',
  'Jobs in Oman',
  
  'Jobs in Romania',
  'Jobs in Saudi Arabia',
  'Jobs in Qatar',
  'Jobs in Germany',
  'Jobs in Oman',
];

const ProductCategories = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        
        {/* Left Content: Ambe International and Right Sidebar in Two Halves */}
        <div className="lg:w-1/2">
          {/* Ambe International Section */}
          <section className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold">
              Ambe International: <br />
              <span className="text-red-900">Manpower Consultancy & Employment Agency</span>
            </h1>
            <p className="mt-4 text-lg">
              Ambe International is a Manpower Consultancy which holds the first recruitment license issued in India in 1983 
              to any overseas recruitment company in India. Ambe has made over 3,50,000 placements in 25+ countries. Over the 
              years we have been serving as a catalyst in bringing together career seekers and employers from across the world. 
              We have been instrumental in placing unskilled, semi-skilled, skilled, and highly skilled personnel in the various 
              sectors globally with an aim to achieve more in the future.
            </p>
          </section>
        </div>

        {/* Right Sidebar: Jobs in Countries */}
        <aside className="lg:w-1/2 lg:mt-0 mt-8">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Jobs in Countries</h3>
            <ul className="space-y-1 text-gray-800">
              {jobs.map((job, index) => (
                <li key={index} className="flex items-center hover:text-red-800">
                  <FaChevronRight className="mr-2" />
                  <Link to="#" className=''>{job}</Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Who We Are Section with Image and Button, in Two Halves */}
      <section className="flex flex-col lg:flex-row lg:space-x-8 mt-12">
        <div className="lg:w-1/2">
          <h2 className="text-2xl lg:text-3xl font-bold">
            WHO <span className="text-red-900">WE ARE ?</span>
          </h2>
          <p className="mt-4 text-lg">
            Ambe International is a Manpower Consultancy which holds the first recruitment license issued in India in 1983 
            to any overseas recruitment company in India. Ambe is India's pioneering recruitment organisation with having 
            placed 350,000 candidates in over 25 countries worldwide. Over the years we have been serving as a catalyst in 
            bringing together career seekers and employers from across the world. We have been instrumental in placing unskilled, 
            semi-skilled, skilled, and highly skilled personnel in the Oil & Gas, Construction, Maintenance, Trading, and various 
            other sectors globally.
          </p>
          <Link to="#" className="inline-block mt-4 px-6 py-2
           bg-red-900 text-white  hover:bg-gray-900">
            Read More
          </Link>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img src={searchImage} alt="Who We Are" className="w-full h-auto object-cover rounded" />
        </div>
      </section>
    </div>
  );
};

export default ProductCategories;
