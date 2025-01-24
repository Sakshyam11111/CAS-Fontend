import { useEffect } from 'react';
import Logo1 from '../../assets/logo1.png'; 
import Logo2 from '../../assets/logo2.png'; 
import Logo3 from '../../assets/logo3.png'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Power = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-6" data-aos="fade-up">
            <div className="flex flex-col md:flex-row items-start justify-between" data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Powering Progress Together: Banking Partnerships</h2>
                <p className="text-gray-600 mb-6 md:ml-6 text-base md:text-lg">
                    Embark on a transformative journey with Viztrust, fostering <br /> innovative Internet Banking partnerships to expand the reach of advanced financial services.
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-8 mt-6">
                <img src={Logo1} alt="Logo 1" className="w-3/4 md:w-1/3 h-auto opacity-70 mb-4 md:mb-0" data-aos="zoom-in" />
                <img src={Logo2} alt="Logo 2" className="w-3/4 md:w-1/3 h-auto opacity-70 mb-4 md:mb-0" data-aos="zoom-in" />
                <img src={Logo3} alt="Logo 3" className="w-3/4 md:w-1/3 h-auto opacity-70 mb-4 md:mb-0" data-aos="zoom-in" />
            </div>
        </div>
    );
};

export default Power;