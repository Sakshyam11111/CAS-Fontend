import { useEffect } from 'react';
import Image1 from "../../assets/Bank.jpg";
import Image2 from "../../assets/financial.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Bank = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8" data-aos="fade-up"> 
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Latest Finance Information for You</h2>
            <p className="text-gray-600 mb-6 text-base md:text-lg">
                Stay updated with the latest in internet banking and financial innovations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 md:p-6 transition-transform transform hover:scale-105 hover:shadow-xl" data-aos="zoom-in"> {/* AOS animation for the first card */}
                    <img
                        src={Image1}
                        alt="Global Markets"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Global Markets Rally as Economic Recovery Gains Momentum</h3>
                        <p className="text-gray-500 mb-2 text-sm md:text-base">
                            Global markets surge on the back of a strengthening economic recovery, reflecting increased optimism and positive momentum.
                        </p>
                        <span className="text-gray-400 text-xs md:text-sm">December 07, 2023</span>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 md:p-6 transition-transform transform hover:scale-105 hover:shadow-xl" data-aos="zoom-in"> {/* AOS animation for the second card */}
                    <img
                        src={Image2}
                        alt="Financial Experts"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Financial Experts Predict Positive Outlook for Q4</h3>
                        <p className="text-gray-500 mb-2 text-sm md:text-base">
                            Robert McCaney, Financial experts, expect a positive Q4, reinforcing optimism and potential growth.
                        </p>
                        <span className="text-gray-400 text-xs md:text-sm">December 07, 2023</span>
                    </div>
                </div>
            </div>
            <div className="text-center mt-6" data-aos="fade-up"> 
                <button className="bg-white text-black border border-black px-4 py-2 rounded hover:bg-green-700 hover:text-white transition">
                    See More
                </button>
            </div>
        </div>
    );
};

export default Bank;