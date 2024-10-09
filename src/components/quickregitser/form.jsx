import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CandidateForm = () => {
  const formik = useFormik({
    initialValues: {
      whatsappNumber: '',
      secondNumber: '',
      fullName: '',
      category: '',
      position: '',
      termsAccepted: false,
      email: '',
      currentLocation: '',
      gulfExp: '',
      indiaExp: '',
      resume: null,
    },
    validationSchema: Yup.object({
      whatsappNumber: Yup.string()
        .required('WhatsApp number is required')
        .matches(/^[0-9]+$/, 'Must be only digits'),
      secondNumber: Yup.string()
        .required('Second mobile number is required')
        .matches(/^[0-9]+$/, 'Must be only digits'),
      fullName: Yup.string().required('Full name is required'),
      category: Yup.string().required('Category is required'),
      position: Yup.string().required('Position is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      currentLocation: Yup.string().required('Current location is required'),
      termsAccepted: Yup.boolean()
        .oneOf([true], 'You must accept the terms and conditions'),
      gulfExp: Yup.number()
        .min(0, 'Experience cannot be negative')
        .nullable(),
      indiaExp: Yup.number()
        .min(0, 'Experience cannot be negative')
        .nullable(),
      resume: Yup.mixed()
        .nullable()
        .test(
          'fileSize',
          'File size is too large',
          value => !value || (value && value.size <= 5 * 1024 * 1024)
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="max-w-2xl mx-auto p-6 mt-36 mb-7 bg-white rounded-md shadow-md">
      <h2 className="text-4xl font-semibold text-center text-red-900 mb-2">
        CANDIDATE REGISTRATION FORM
      </h2>
      <p className='text-1xl font-bold text-center text-red-500'>To Register with Ambe International for thousands of overseas jobs, please fill the below form.</p>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {/* Terms and Conditions */}
        <div>
          <p className="mb-3">Please click on the below link to save our Official WhatsApp Number to your contact list.</p>
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
                name="termsAccepted"
                className="mr-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.termsAccepted}
              />
              <span>I confirm I have read and understood Terms and Conditions</span>
            </label>
            {formik.touched.termsAccepted && formik.errors.termsAccepted ? (
              <div className="text-red-600">{formik.errors.termsAccepted}</div>
            ) : null}
          </div>
        </div>

        {/* WhatsApp Mobile Number */}
        <div>
          <label className="block mb-2 font-medium">WhatsApp Mobile Number <span className="text-red-600">*</span></label>
          <input
            type="tel"
            name="whatsappNumber"
            value={formik.values.whatsappNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          {formik.touched.whatsappNumber && formik.errors.whatsappNumber ? (
            <div className="text-red-600">{formik.errors.whatsappNumber}</div>
          ) : null}
        </div>

        {/* Second Mobile Number */}
        <div>
          <label className="block mb-2 font-medium">Second Mobile Number <span className="text-red-600">*</span></label>
          <input
            type="tel"
            name="secondNumber"
            value={formik.values.secondNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          {formik.touched.secondNumber && formik.errors.secondNumber ? (
            <div className="text-red-600">{formik.errors.secondNumber}</div>
          ) : null}
        </div>

        {/* Full Name */}
        <div>
          <label className="block mb-2 font-medium">Full Name <span className="text-red-600">*</span></label>
          <input
            type="text"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className="text-red-600">{formik.errors.fullName}</div>
          ) : null}
        </div>

        {/* Category */}
        <div>
          <label className="block mb-2 font-medium">Category <span className="text-red-600">*</span></label>
          <select
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
          {formik.touched.category && formik.errors.category ? (
            <div className="text-red-600">{formik.errors.category}</div>
          ) : null}
        </div>

        {/* Position */}
        <div>
          <label className="block mb-2 font-medium">Position <span className="text-red-600">*</span></label>
          <input
            type="text"
            name="position"
            value={formik.values.position}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          {formik.touched.position && formik.errors.position ? (
            <div className="text-red-600">{formik.errors.position}</div>
          ) : null}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-medium">Email <span className="text-red-600">*</span></label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600">{formik.errors.email}</div>
          ) : null}
        </div>

        {/* Current Location */}
        <div>
          <label className="block mb-2 font-medium">Current Location <span className="text-red-600">*</span></label>
          <select
            name="currentLocation"
            value={formik.values.currentLocation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">- Select -</option>
            <option value="India">India</option>
            <option value="UAE">UAE</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Other">Other</option>
          </select>
          {formik.touched.currentLocation && formik.errors.currentLocation ? (
            <div className="text-red-600">{formik.errors.currentLocation}</div>
          ) : null}
        </div>

        {/* Gulf Experience */}
        <div>
          <label className="block mb-2 font-medium">Gulf Exp in Years</label>
          <input
            type="number"
            name="gulfExp"
            step="0.25"
            placeholder="Please put your experience in years"
            value={formik.values.gulfExp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {formik.touched.gulfExp && formik.errors.gulfExp ? (
            <div className="text-red-600">{formik.errors.gulfExp}</div>
          ) : null}
        </div>

        {/* India Experience */}
        <div>
          <label className="block mb-2 font-medium">India Exp in Years</label>
          <input
            type="number"
            name="indiaExp"
            step="0.25"
            placeholder="Please put your experience in years"
            value={formik.values.indiaExp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {formik.touched.indiaExp && formik.errors.indiaExp ? (
            <div className="text-red-600">{formik.errors.indiaExp}</div>
          ) : null}
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block mb-2 font-medium">Upload Resume</label>
          <input
            type="file"
            name="resume"
            onChange={(event) => {
              formik.setFieldValue("resume", event.currentTarget.files[0]);
            }}
            onBlur={formik.handleBlur}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {formik.touched.resume && formik.errors.resume ? (
            <div className="text-red-600">{formik.errors.resume}</div>
          ) : null}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-red-700 rounded-md
             hover:bg-red-900"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CandidateForm;
