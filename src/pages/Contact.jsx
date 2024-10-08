import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import placeholderImage from '../assets/form_contact-removebg-preview.png'; // Update with the correct path to the image

const ContactForm = () => {
  // Formik setup with initial values and validation
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, 'Name cannot exceed 50 characters')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      message: Yup.string()
        .min(10, 'Message must be at least 10 characters long')
        .required('Message is required'),
    }),
    onSubmit: (values) => {
      // Handle form submission
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="max-w-7xl mt-24 mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left Section - Image */}
      <div className="h-[400px] rounded-lg flex justify-center items-center">
        <img
          src={placeholderImage}
          alt="Placeholder"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Right Section - Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>

        <form onSubmit={formik.handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="name"
              className={`w-full p-2 border ${
                formik.errors.name && formik.touched.name
                  ? 'border-red-500'
                  : 'border-gray-300'
              } focus:outline-none focus:border-red-700 rounded-md`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            ) : null}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              className={`w-full p-2 border ${
                formik.errors.email && formik.touched.email
                  ? 'border-red-500'
                  : 'border-gray-300'
              } focus:outline-none focus:border-red-700 rounded-md`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            ) : null}
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              name="message"
              rows="5"
              className={`w-full p-2 border ${
                formik.errors.message && formik.touched.message
                  ? 'border-red-500'
                  : 'border-gray-300'
              } focus:outline-none focus:border-red-700 rounded-md`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.errors.message && formik.touched.message ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
            ) : null}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-700 text-white p-2 rounded-md font-semibold hover:bg-red-900 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
