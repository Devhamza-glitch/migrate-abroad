import React from 'react';

// Sample Image - You will replace the src of the image below with the image you want to import.
import salaryImage from '../../assets/salary.png';

const SocialMedia = () => {
  return (
    <div className="bg-gray-100 py-12">
      {/* Social Media Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
        <SocialCard 
          title="How to Make Video Resume" 
          iframe={<iframe src="https://www.youtube.com/embed/your-video-id" title="How to Make Video Resume" className="w-full h-40"></iframe>}
        />
        <SocialCard 
          title="Like Our Facebook Page" 
          image="https://your-facebook-page-link/facebook-logo.png"
        />
        <SocialCard 
          title="Jobs On YouTube" 
          iframe={<iframe src="https://www.youtube.com/embed/your-second-video-id" title="Jobs On YouTube" className="w-full h-40"></iframe>}
        />
        
        <SocialCard 
          title="Join Ambe Facebook Group" 
          image="https://your-facebook-group-link/facebook-group-logo.png"
        />
        {/* <SocialCard 
          title="Follow Us on LinkedIn" 
          image="https://your-linkedin-page-link/linkedin-logo.png"
        /> */}
      </div>

      {/* Salary Survey Report Section */}
      <div className="bg-white py-0 mt-12">
        <div className="flex justify-center mt-6">
          <img src={salaryImage} alt="Salary Survey Report" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

const SocialCard = ({ title, iframe, image }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div className="mb-4">
        {iframe ? iframe : <img src={image} alt={title} className="w-full h-40 object-cover" />}
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
  );
};

export default SocialMedia;
