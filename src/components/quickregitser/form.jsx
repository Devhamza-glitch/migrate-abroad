import React, { useState } from 'react';

const CandidateForm = () => {
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [category, setCategory] = useState('');
  const [position, setPosition] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [email, setEmail] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [gulfExp, setGulfExp] = useState('');
  const [indiaExp, setIndiaExp] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termsAccepted) {
      console.log({
        whatsappNumber,
        secondNumber,
        fullName,
        category,
        position,
        email,
        currentLocation,
        gulfExp,
        indiaExp,
        resume,
      });
    } else {
      alert("Please accept the terms and conditions.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-36 mb-7 bg-white rounded-md shadow-md">
      <h2 className="text-4xl font-semibold text-center text-red-900 mb-2">
        CANDIDATE REGISTRATION FORM
      </h2>
      <p className='text-1xl font-bold text-center text-red-500'>To Register with Ambe International for thousands of overseas jobs, please fill the below form.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Terms and Conditions */}
        <div>
          <p className="mb-3">
            Please click on the below link to save our Official WhatsApp Number to your contact list.
          </p>
          <a href="https://wa.me/918291999288" className="text-blue-500 underline">
            https://wa.me/918291999288
          </a>
          <p className="text-sm text-gray-500">
            Once you add our WhatsApp Number to your contact list, fill out the form so we can add you to our broadcast list.
          </p>
          <div className="mt-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
              />
              <span>I confirm I have read and understood Terms and Conditions</span>
            </label>
          </div>
        </div>

        {/* WhatsApp Mobile Number */}
        <div>
          <label className="block mb-2 font-medium">WhatsApp Mobile Number <span className="text-red-600">*</span></label>
          <input
            type="tel"
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            pattern="[0-9]*" // Accept only numbers
            required
          />
        </div>

        {/* Second Mobile Number */}
        <div>
          <label className="block mb-2 font-medium">Second Mobile Number <span className="text-red-600">*</span></label>
          <input
            type="tel"
            value={secondNumber}
            onChange={(e) => setSecondNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            pattern="[0-9]*" // Accept only numbers
            required
          />
        </div>

        {/* Full Name */}
        <div>
          <label className="block mb-2 font-medium">Full Name <span className="text-red-600">*</span></label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-2 font-medium">Category <span className="text-red-600">*</span></label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">- Select -</option>
            <option value="Engineering">Engineering</option>
            <option value="Healthcare">Healthcare</option>
            <option value="IT">IT</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Position */}
        <div>
          <label className="block mb-2 font-medium">Position <span className="text-red-600">*</span></label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-medium">Email <span className="text-red-600">*</span></label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Current Location */}
        <div>
          <label className="block mb-2 font-medium">Current Location <span className="text-red-600">*</span></label>
          <select
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">- Select -</option>
            <option value="India">India</option>
            <option value="UAE">UAE</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Gulf Experience */}
        <div>
          <label className="block mb-2 font-medium">Gulf Exp in Years</label>
          <input
            type="number"
            step="0.25"
            placeholder="Please put your experience in years"
            value={gulfExp}
            onChange={(e) => setGulfExp(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <p className="text-sm text-gray-500">For 6 months use 0.5, for 3 months use 0.25, etc.</p>
        </div>

        {/* India Experience */}
        <div>
          <label className="block mb-2 font-medium">India Exp in Years</label>
          <input
            type="number"
            step="0.25"
            placeholder="Please put your experience in years"
            value={indiaExp}
            onChange={(e) => setIndiaExp(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <p className="text-sm text-gray-500">For 6 months use 0.5, for 3 months use 0.25, etc.</p>
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block mb-2 font-medium">Upload Word or PDF Resume</label>
          <input
            type="file"
            accept=".pdf, .doc, .docx"
            onChange={(e) => setResume(e.target.files[0])}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <p className="text-sm text-gray-500">Maximum size 5 MB</p>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CandidateForm;
