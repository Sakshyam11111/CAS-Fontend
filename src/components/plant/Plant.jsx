import { useEffect } from 'react';
import Image1 from "../../assets/Plant.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Plant = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return (
        <div className="flex flex-col md:flex-row items-center rounded-lg p-6 max-w-6xl mx-auto" data-aos="fade-up"> 
            {/* Left Side: Content */}
            <div className="flex-1 mb-4 md:mb-0 p-4 md:p-20" data-aos="fade-right"> 
                <h2 className="text-2xl md:text-3xl font-bold mb-6">CAS AT A GLANCE</h2>
                <p className="text-gray-600 mb-6">
                    Cas Finance Limited (previously known as Industrial Promotion and Development Company of Nepal Bank Limit) is the first private sector financial institution of the country established in 1981 by a distinguished group of shareholders namely International Finance Corporation (IFC), USA, German Investment and Development Company (DEG), Germany, The Aga Khan Fund for Economic Development (AKFED), Switzerland, Commonwealth Development Corporation (CDC), UK and the Government of Nepal.
                </p>
                <button className="text-black py-2 px-4 rounded hover:bg-green-700 transition duration-200">
                    Read More &rarr;
                </button>
            </div>

            {/* Right Side: Image */}
            <div className="flex-1" data-aos="fade-left"> 
                <img
                    src={Image1}
                    alt="Plant"
                    className="rounded-lg object-cover w-full h-auto"
                />
            </div>
        </div>
    );
};

export default Plant;