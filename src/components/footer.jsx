import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import QRCode from 'react-qr-code';
import logo from "../assets/logo_new.png"
const Footer = () => {
  return (
    <footer className="bg-black text-white  ">

 <div className="bg-red-700 h-12 mb-2"></div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Logo and QR Code */}
        <div className="flex flex-col items-center lg:items-center">
          <img
            src={logo} // Replace with your logo
            alt="Ambe International"
            className="mb-4"
          />
          <QRCode value="https://example.com" size={128} className='items-center' />
          <p className="mt-2">Scan QR Code</p>
        </div>

        {/* Current Jobs */}
        <div>
  <h3 className="text-lg font-semibold mb-4">CURRENT JOBS</h3>
  <ul className="grid grid-cols-2 gap-5 cursor-pointer">
    <div className='pb-5'>
      <li className='hover:text-gray-300 pb-2'>Jobs in Romania</li>
      <li className='hover:text-gray-300 pb-2'>Jobs in Qatar</li>
      <li className='hover:text-gray-300 pb-2'>Jobs in Oman</li>
      <li className='hover:text-gray-300 pb-2'>Jobs in Bahrain</li>
      <li className='hover:text-gray-300 pb-2'>Terms and Conditions</li>
    </div>
    <div>
      <li className='hover:text-gray-300 pb-2'>Jobs in SA</li>
      <li className='hover:text-gray-300 pb-2'>Jobs in Kuwait</li>
      <li className='hover:text-gray-300 pb-2'>Jobs in India</li>
      <li className='hover:text-gray-300 pb-2'>Jobs in UAE</li>
    </div>
  </ul>
</div>



        {/* Office Location with Icon */}
        <div>
          <h3 className="text-lg font-semibold mb-4">OFFICE LOCATION</h3>
          <div className="flex items-start space-x-2">
            <HiOutlineLocationMarker className='text-red-700 text-2xl mt-1' />
            <div>
              <p>Ambe International</p>
              <p>507, Shah and Nahar Industrial Estate,</p>
              <p>Dr. E Moses Road, Worli Naka,</p>
              <p>Mumbai - 400018, India</p>
            </div>
          </div>
        </div>

        {/* Contact Info with Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">CONTACT INFO</h3>
          <div className="flex items-center space-x-2 mb-2">
            <HiOutlinePhone  className='text-red-700 text-2xl'/>
            <p>Landline: +91-22-61431234</p>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <HiOutlineMail className='text-red-700 text-2xl'/>
            <p>Email: contact@indianpersonnel.com</p>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <FaWhatsapp className='text-red-700 text-2xl' />
            <p>WhatsApp: +91-8291999288</p>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-8">
        <a href="#" className="hover:text-red-600">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-red-600">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-red-600">
          <FaLinkedinIn />
        </a>
        <a href="#" className="hover:text-red-600">
          <FaYoutube />
        </a>
        <a href="#" className="hover:text-red-600">
          <FaWhatsapp />
        </a>
      </div>

      {/* Footer Bottom */}
      
      
 <div className="bg-red-700 h-12 mt-10 ">
<p className='text-center pt-2 pb-1'>
© Copyright <span className="text-white">Clare.AI</span>. All rights reserved. Site designed & maintained by 
<span className="text-gray-100 font-bold"> GulfSkills Pvt Ltd</span>.
</p>
</div>
    </footer>
  );
};

export default Footer;
