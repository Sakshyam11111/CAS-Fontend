import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <footer className="bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4" data-aos="fade-up">
                <div className="mb-6 md:mb-0">
                    <h1 className="text-3xl font-bold">Cas Bank</h1>
                    <p className="text-gray-600 mb-4">
                        Bank online, thrive in convenience, where transactions meet security for seamless financial empowerment.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <button className="bg-green-600 border border-green-600 text-white py-3 px-8 rounded hover:bg-green-700 hover:text-white transition duration-200">
                        Sign Up
                    </button>
                    <button className="bg-white border border-black text-black py-3 px-8 rounded hover:bg-green-700 transition duration-200">
                        Log In
                    </button>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-6 px-4" data-aos="fade-up" data-aos-delay="100">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-y-4">
                    <div><a href="#" className="text-black hover:text-green-600">Home</a></div>
                    <div><a href="#" className="text-black hover:text-green-600">Services</a></div>
                    <div><a href="#" className="text-black hover:text-green-600">Blog</a></div>
                    <div><a href="#" className="text-black hover:text-green-600">Saving</a></div>
                    <div><a href="#" className="text-black hover:text-green-600">Investing</a></div>
                    <div><a href="#" className="text-black hover:text-green-600">Tracking</a></div>
                    <div><a href="#" className="text-black hover:text-green-600">About</a></div>
                    <div><a href="#" className="text-black hover:text-green-600">Feature</a></div>
                    <div><a href="#" className="text-black hover:text-green-600">Contact</a></div>
                    <div><a href="#" className="text-black hover:text-green-600">Payments</a></div>
                    <div><a href="#" className="text-black hover:text-green-600">Loan</a></div>
                </div>
                <div className="text-center text-gray-500 mt-8">
                    <p>© 2023 Cas Bank by Thanks For Cas Studio. All Rights Reserved.</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="#" className="text-black hover:text-green-600">Legal Terms</a>
                        <a href="#" className="text-black hover:text-green-600">Privacy Policy</a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;