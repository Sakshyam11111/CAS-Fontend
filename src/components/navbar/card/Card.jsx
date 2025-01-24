import { useEffect } from 'react';
import Image1 from "../../../assets/Card.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Card = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return (
        <div
            className="flex flex-col md:flex-row items-center rounded-lg p-6 md:p-10 max-w-7xl mx-auto"
            data-aos="fade-up" 
        >
            {/* Left Side: Card Image */}
            <div className="flex-1 mb-4 md:mb-0" data-aos="fade-right"> 
                <img
                    src={Image1} 
                    alt="Card"
                    className="rounded-lg w-full h-auto object-cover" 
                />
            </div>

            {/* Right Side: Content */}
            <div className="flex-1 md:ml-6" data-aos="fade-left"> 
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Your Path to Financial Success is <br /> In Your Hand
                </h2>
                <p className="text-gray-600 mb-4 text-base md:text-lg">
                    Explore secure transactions and account management on <br /> Viztrust internet banking.
                </p>

                {/* Learn More Button */}
                <button className="bg-white text-black border border-black py-2 px-4 rounded hover:bg-green-700 transition duration-200">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Card;