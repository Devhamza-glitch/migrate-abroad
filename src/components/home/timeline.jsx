import React from "react";
import timelineImage from '../../assets/timeline.png'; // Import the timeline image

const Timeline = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Time<span className="text-red-900">line</span></h2>
      <p className="text-center mb-8 max-w-3xl">
        We are one of India’s leading HR solutions companies with over 40 years of experience. Over the years, our clients have vouched for our expertise, creativity, and integrity. With an industry-acclaimed management team and a skilled team of experts, we deliver effective solutions in no time. We constantly push ourselves to build authentic and transparent relationships with our clients and associates.
      </p>
      <div className="w-full max-w-6xl flex justify-center">
        <img
          src={timelineImage}
          alt="Timeline"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Timeline;
