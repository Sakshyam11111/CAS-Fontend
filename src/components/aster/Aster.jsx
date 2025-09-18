import { useEffect } from 'react';
import { SlEnvolope, SlOptions } from "react-icons/sl";
import { CiBank } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import { FaTradeFederation } from "react-icons/fa";
import { TbTransferVertical } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const Aster = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleOptionClick = (option) => {
        if (option === 'LC') {
            navigate('/lc');
        }
    };

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col md:flex-row p-5">
            <aside className="w-full md:w-1/4 p-5 bg-gray-100 border-b md:border-r border-gray-300 rounded-3xl" data-aos="fade-right">
                <h2 className="text-3xl font-bold mb-5">Cas Bank</h2>
                <p className="mb-7 text-gray-500 text-xl">Chase Your Dream with us</p>
                <h3 className="text-md font-semibold text-2xl flex items-center mb-4">
                    <span className="flex items-center justify-center border border-gray-100 rounded-full p-1 hover:border-black transition duration-200 mr-2">
                        <SlOptions className="h-5 w-5 text-black" />
                    </span>
                    Other Options
                </h3>
                <ul className="list-none space-y-2 text-gray-600 text-lg">
                    {["Cash Management", "Loan & Credit", "Treasury", "Global Banking", "Insurance"].map((item, index) => (
                        <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md transition-all duration-200 hover:bg-gray-200 hover:shadow-lg cursor-pointer">
                            {item}
                        </li>
                    ))}
                </ul>
            </aside>
            <main className="w-full md:w-3/5 p-4 md:p-5" data-aos="fade-left">
                <h2 className="text-4xl md:text-3xl font-bold">Aster Bank</h2>
                <h3 className="text-3xl md:text-3xl font-semibold text-green-600">Trade Smart Options</h3>
                <p className="mb-4 text-gray-400 text-base md:text-lg">We’re a full service portal to help you trade smart.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    {[
                        { icon: <SlEnvolope className="h-6 w-6" />, title: "LC", description: "Letter of Credit" },
                        { icon: <CiBank className="h-6 w-6" />, title: "BG", description: "Bank Guarantee" },
                        { icon: <GiReceiveMoney className="h-6 w-6" />, title: "LF", description: "Loan Financing" },
                        { icon: <TbTransferVertical className="h-6 w-6" />, title: "SCF", description: "Supply Chain Financing" },
                        { icon: <FaTradeFederation className="h-6 w-6" />, title: "TL", description: "Trade Loans" },
                        { icon: <IoDocumentTextOutline className="h-6 w-6" />, title: "DR", description: "Document Recollection" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start p-6 bg-white border border-gray-300 rounded-3xl hover:bg-gray-200 transition duration-200 cursor-pointer"
                            data-aos="zoom-in"
                            onClick={() => handleOptionClick(item.title)}
                        >
                            <div className="flex flex-col items-start">
                                <div className="border border-gray-300 rounded-full p-2 mb-2">
                                    {item.icon}
                                </div>
                                <div className="text-left">
                                    <span className="text-black text-xl">{item.title}</span>
                                    <p className="mt-1 text-gray-500">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-start">
                    <button 
                        className="flex items-center px-4 py-2 border border-green-600 bg-white text-green-600 rounded hover:bg-gray-100 transition duration-200" 
                        data-aos="fade-up"
                        onClick={handleBack}  
                    >
                        <IoIosArrowBack className="h-4 w-4 mr-1" />
                        Go Back
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Aster;