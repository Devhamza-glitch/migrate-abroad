import React from 'react';

const ContentCanada = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Section - Form */}
      <div className="">
        <h2 className="text-red-800 text-xl font-semibold mb-4">
          Register to find out how to work and study for Canada at highly discounted fees during COVID so that you can earn back your fees within 1 year and the course becomes free
        </h2>
        <p className="mb-6 text-lg">
          Special discount due to Covid!!! and earning potential up to C$20,000 while you study
        </p>

        <form className='bg-white p-6 rounded-lg shadow-md'>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Name <span className="text-red-600">*</span>
              </label>
              <input 
                type="text" 
                placeholder="First Name" 
                className="w-full border border-gray-300 p-2 rounded-md" 
                required 
                aria-label="First Name"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input 
                type="text" 
                placeholder="Last Name" 
                className="w-full border border-gray-300 p-2 rounded-md"
                aria-label="Last Name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Phone <span className="text-red-600">*</span>
            </label>
            <input 
              type="tel" 
              placeholder="+92" 
              className="w-full border border-gray-300 p-2 rounded-md" 
              required 
              aria-label="Phone"
              pattern="^\+?\d{10,15}$" 
              title="Enter a valid phone number with country code"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email <span className="text-red-600">*</span>
            </label>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full border border-gray-300 p-2 rounded-md" 
              required 
              aria-label="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Your Age <span className="text-red-600">*</span>
            </label>
            <input 
              type="number" 
              placeholder="Your Age" 
              className="w-full border border-gray-300 p-2 rounded-md" 
              required 
              aria-label="Your Age"
              min="18" 
              max="99"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Your Current Location <span className="text-red-600">*</span>
            </label>
            <input 
              type="text" 
              placeholder="Your current location" 
              className="w-full border border-gray-300 p-2 rounded-md" 
              required 
              aria-label="Current Location"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Current Position <span className="text-red-600">*</span>
            </label>
            <input 
              type="text" 
              placeholder="Current Position" 
              className="w-full border border-gray-300 p-2 rounded-md" 
              required 
              aria-label="Current Position"
            />
          </div>
          {/* IELTS Dropdown */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Have you taken your academic IELTS (Yes/No) <span className="text-red-600">*</span>
            </label>
            <select 
              className="w-full border border-gray-300 p-2 rounded-md" 
              required 
              aria-label="IELTS Status"
            >
              <option value="">-Select-</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button 
            className="w-full bg-red-700 text-white px-4 py-2 hover:bg-red-600 transition duration-300"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Section - Info */}
      <div>
        <h2 className="text-red-800 text-4xl font-bold mb-4">
          Work and Study in Canada in Hospitality & Digital Marketing (1 Year)
        </h2>
        <ul className="list-disc list-inside mb-6 text-sm">
          <li>Enroll in a 1 year long Work and Study Diploma program in Canada</li>
          <li>Admissions open for intakes during COVID - one of the only colleges approved as of October 20 to do so!</li>
          <li>Unbelievably low tuition for the entire year</li>
          <li>Earning potential of up to C$ 20,000 while you study, with an average of C$ 15 wage per hour</li>
          <li>Close to 100% Campus Placements for previous batches</li>
          <li>If you are based in India, IELTS 6.0 (in each band) is needed, else IELTS not needed</li>
          <li>After completing the diploma – apply and transfer to Public College programs (which allow PGWP) or get LMIA sponsored employment</li>
        </ul>
        <p className="text-red-600 font-bold mb-4">
          This is a once in a lifetime opportunity to work and study in Canada at very attractive prices!
        </p>
        <p className="mb-2 font-bold text-[20px]">
          This offer is only due to COVID and it ends on November 30, or as soon as the batch fills up. Apply now to lock in these tuition rates and start the process!
        </p>

        {/* Contact Info */}
        <h3 className="text-red-600 text-xl font-semibold mb-2">CONTACT INFO</h3>
        <p className="text-sm mb-2">
          <a href="tel:+918291096487" className="hover:underline text-blue-600">+91-8291096487</a>
        </p>
        <p className="text-lg mb-2">
          <a href="mailto:shrutika@indianpersonnel.com" className="hover:underline text-blue-600">shrutika@indianpersonnel.com</a>
        </p>
        <p className="text-lg">
          <a href="tel:+918291096487" className="hover:underline text-blue-600">+91-8291096487</a>
        </p>
      </div>
    </div>
  );
};

export default ContentCanada;
