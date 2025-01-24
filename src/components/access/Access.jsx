import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Access = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return (
        <div className="flex flex-col items-center bg-gradient-to-r from-green-100 to-green-300 rounded-2xl p-8 md:p-12 max-w-7xl mx-auto text-center"
            data-aos="fade-up" 
        >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Access Your Account Here</h1>
            <p className="text-base md:text-lg text-gray-700 mb-7">
                Log in now for seamless control over your accounts with Vitrust,<br /> where security meets simplicity.
            </p>
            <button className="bg-black text-white py-2 px-4 md:px-6 rounded hover:bg-green-700 transition duration-200">
                Log In
            </button>
        </div>
    );
};

export default Access;