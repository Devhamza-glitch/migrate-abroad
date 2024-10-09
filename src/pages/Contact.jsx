import React, { Component } from 'react';
import * as Yup from 'yup';
import placeholderImage from '../assets/form_contact-removebg-preview.png'; // Update with the correct path to the image

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      errors: {
        name: '',
        email: '',
        message: '',
      },
    };
  }

  validationSchema = Yup.object({
    name: Yup.string()
      .max(50, 'Name cannot exceed 50 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters long')
      .required('Message is required'),
  });

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleBlur = async () => {
    const { name, email, message } = this.state;
    const validationErrors = await this.validationSchema.validate({
      name,
      email,
      message,
    }).catch((err) => err.errors);
    
    if (Array.isArray(validationErrors)) {
      this.setState({
        errors: {
          name: validationErrors[0] === 'Name is required' ? validationErrors[0] : '',
          email: validationErrors[1] === 'Email is required' ? validationErrors[1] : '',
          message: validationErrors[2] === 'Message must be at least 10 characters long' ? validationErrors[2] : '',
        },
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = this.state;

    const validationErrors = this.validationSchema.validate({
      name,
      email,
      message,
    });

    if (validationErrors) {
      alert(JSON.stringify(this.state, null, 2));
    }
  };

  render() {
    const { name, email, message, errors } = this.state;

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

          <form onSubmit={this.handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                className={`w-full p-2 border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-red-700 rounded-md`}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={name}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-red-700 rounded-md`}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={email}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-red-700 rounded-md`}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={message}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
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
  }
}

export default ContactForm;
