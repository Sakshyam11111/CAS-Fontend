import { useEffect } from 'react';
import { FaDollarSign, FaCreditCard, FaChartLine, FaHandHoldingUsd, FaClipboardList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Create = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4" data-aos="fade-up">Creating Extraordinary Customer Experience</h2>
        <p className="text-gray-600 mb-10" data-aos="fade-up" data-aos-delay="200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum erat morbi <br /> dignissim eu gravida consequat montes, sagittis.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Trade Smart Icon */}
          <Link to="/aster">
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
              <div className="border border-green-600 rounded-full p-4 mb-4 flex items-center justify-center transition-transform transform hover:scale-110 hover:border-green-700">
                <FaDollarSign className="text-4xl text-green-600 transition-colors duration-200 hover:text-green-700" />
              </div>
              <h3 className="text-xl font-semibold">Trade Smart</h3>
              <p className="text-gray-500 p-4">Build your future with effective savings strategies</p>
            </div>
          </Link>

          {/* Payments Icon */}
          <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="500">
            <div className="border border-green-600 rounded-full p-4 mb-4 flex items-center justify-center transition-transform transform hover:scale-110 hover:border-green-700">
              <FaCreditCard className="text-4xl text-green-600 transition-colors duration-200 hover:text-green-700" />
            </div>
            <h3 className="text-xl font-semibold">Payments</h3>
            <p className="text-gray-500 p-4">Simplify payments with secure internet banking solutions</p>
          </div>

          {/* Investing Icon */}
          <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="600">
            <div className="border border-green-600 rounded-full p-4 mb-4 flex items-center justify-center transition-transform transform hover:scale-110 hover:border-green-700">
              <FaChartLine className="text-4xl text-green-600 transition-colors duration-200 hover:text-green-700" />
            </div>
            <h3 className="text-xl font-semibold">Investing</h3>
            <p className="text-gray-500 p-4">Invest online for maximum returns with internet banking</p>
          </div>

          {/* Lend Smart Icon */}
          <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="700">
            <div className="border border-green-600 rounded-full p-4 mb-4 flex items-center justify-center transition-transform transform hover:scale-110 hover:border-green-700">
              <FaHandHoldingUsd className="text-4xl text-green-600 transition-colors duration-200 hover:text-green-700" />
            </div>
            <h3 className="text-xl font-semibold">Lend Smart</h3>
            <p className="text-gray-500 p-4">Secure hassle-free loans with internet banking convenience</p>
          </div>

          {/* Tracking Icon */}
          <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="800">
            <div className="border border-green-600 rounded-full p-4 mb-4 flex items-center justify-center transition-transform transform hover:scale-110 hover:border-green-700">
              <FaClipboardList className="text-4xl text-green-600 transition-colors duration-200 hover:text-green-700" />
            </div>
            <h3 className="text-xl font-semibold">Tracking</h3>
            <p className="text-gray-500 p-4">Easily track finances with the convenience of online banking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;