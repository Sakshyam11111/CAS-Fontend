import { useEffect } from 'react';
import { FaDollarSign, FaCreditCard, FaChartLine, FaHandHoldingUsd, FaClipboardList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Award, Shield, Users } from 'lucide-react';

const Create = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Award className="h-8 w-8 text-green-600" />
          <span className="text-green-600 font-semibold text-lg">Award-Winning Services</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          Creating Extraordinary <br />
          <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Customer Experience
          </span>
        </h2>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover our comprehensive suite of financial services designed to empower your financial journey
          with cutting-edge technology and personalized solutions.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-green-600" />
            <span className="font-semibold">2.5+ Customers</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" />
            <span className="font-semibold">FDIC Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-purple-600" />
            <span className="font-semibold">Best Digital Bank</span>
          </div>
        </div>

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