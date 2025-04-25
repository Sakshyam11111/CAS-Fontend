import { useEffect } from 'react';
import Image1 from "../../../assets/Img1.png";
import { GrFacebookOption } from "react-icons/gr";
import { FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <div
        className="flex-1 flex flex-col justify-center items-start p-8 md:ml-20"
        data-aos="fade-right"
      >
        <h2 className="text-5xl md:text-8xl font-semibold mb-4">Chase Your <br /> Dream with us</h2>
        <p className="text-gray-700 mb-6 text-base md:text-lg">
          The harder you work for something, the greater<br /> you’ll feel when you achieve it.
        </p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <Link to="aster">
            <button className="border border-transparent bg-green-600 text-white px-6 py-3 md:px-9 md:py-3 hover:bg-green-700 transition duration-200">
              SERVICE ONLINE
            </button>
          </Link>
          <Link to="/loan-calculator">
            <button className="border border-green-600 bg-white text-green-600 px-6 py-3 md:px-9 md:py-3 hover:bg-green-700 hover:text-white transition duration-200">
              LOAN CALCULATOR
            </button>
          </Link>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex items-center justify-start space-x-4 my-4">
          <a href="#" aria-label="Facebook" className="transform transition duration-200 hover:scale-110 hover:text-blue-700">
            <GrFacebookOption className="text-blue-600 text-2xl" />
          </a>
          <a href="#" aria-label="YouTube" className="transform transition duration-200 hover:scale-110 hover:text-red-400">
            <FaYoutube className="text-red-500 text-2xl" />
          </a>
          <a href="#" aria-label="LinkedIn" className="transform transition duration-200 hover:scale-110 hover:text-blue-500">
            <FaLinkedin className="text-blue-600 text-2xl" />
          </a>
          <a href="#" aria-label="Instagram" className="transform transition duration-200 hover:scale-110 hover:text-pink-500">
            <FaInstagram className="text-pink-600 text-2xl" />
          </a>
        </div>
      </div>

      <div
        className="flex-1 flex items-center justify-center"
        data-aos="fade-left"
      >
        <img
          src={Image1}
          alt="Family"
          className="w-full max-w-lg md:max-w-screen-xl rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;