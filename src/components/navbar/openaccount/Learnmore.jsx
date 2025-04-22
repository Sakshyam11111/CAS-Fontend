import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSearch } from 'react-icons/fa';
import Image1 from "../../../assets/CASdigo.png";
import Image2 from "../../../assets/CASkarmashil.png";
import Image3 from "../../../assets/CASdhukka.png";
import Image4 from "../../../assets/CASgold.jpg";
import Image5 from "../../../assets/CASNRN.jpg";
import Image6 from "../../../assets/CASgoldpayroll.png";
import Image7 from "../../../assets/CASgenalpha.png";
import Image8 from "../../../assets/CASgrouppersonal.png";
import Image9 from "../../../assets/CASpre.png";
import Image10 from "../../../assets/CASvideo.png";
import Image11 from "../../../assets/CASgeneral.jpg";
import Image12 from "../../../assets/CASjestha.png";
import Image13 from "../../../assets/CASBAl.png";
import Image14 from "../../../assets/CASpressrooll.png";
import Image15 from "../../../assets/CASsahul.jpg";
import Image16 from "../../../assets/CASnaribachat.png";
import Image17 from "../../../assets/CASshareholders.jpg";
import Image18 from "../../../assets/CASgennaccount.jpg";

const savingsAccounts = [
    { title: "CAS Digo Bachat Khata", image: Image1, label: "Most Recent" },
    { title: "CAS Karmashil Bachat Khata", image: Image2 },
    { title: "CAS Dhukka Bachat Katha", image: Image3 },
    { title: "CAS Gold Savings Account", image: Image4 },
    { title: "CAS NRN Savings Account", image: Image5 },
    { title: "CAS Gold Payroll Savings", image: Image6 },
    { title: "CAS Gen Alpha Account", image: Image7 },
    { title: "Group Personal Accident Policy", image: Image8 },
    { title: "CAS Premium Savings Account", image: Image9 },
    { title: "Video KYC", image: Image10 },
    { title: "CAS General Savings", image: Image11 },
    { title: "CAS Jestha Bachat Khata", image: Image12 },
    { title: "CAS Bal Bachat Khata", image: Image13 },
    { title: "CAS Premium Payroll Savings", image: Image14 },
    { title: "CAS Sahuliyat Khata", image: Image15 },
    { title: "CAS Premium Nari Bachat", image: Image16 },
    { title: "CAS Shareholders Savings", image: Image17 },
    { title: "CAS Gen-N Account", image: Image18 },
];

function Learnmore() {
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const filteredAccounts = savingsAccounts.filter(account =>
        account.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-10">
            <div className="flex items-center mb-4">
                <select className="border rounded-md p-2 mr-4">
                    <option value="all">All</option>
                    {/* Add more filter options here if needed */}
                </select>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border rounded-md p-2 flex-grow"
                />
                <button className="bg-green-500 text-white rounded-md p-2 ml-2 transition-all duration-300 ease-in-out hover:bg-green-600 hover:shadow-lg transform hover:scale-105">
                    <FaSearch />
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredAccounts.map((account, idx) => (
                    <div
                        key={idx}
                        className="relative bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-xl transform hover:scale-105"
                        data-aos="fade-up"
                    >
                        {account.label && (
                            <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                {account.label}
                            </div>
                        )}
                        <img
                            src={account.image}
                            alt={account.title}
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2 text-gray-800">
                                {account.title}
                            </h2>
                            <div className="flex justify-between text-sm text-pink-600 font-medium">
                                <button className="hover:underline">Learn More</button>
                                <button className="hover:underline">Apply Now</button>
                            </div>
                        </div>
                        <div className="bg-gray-200 text-center py-2 text-green-500 font-semibold text-sm cursor-pointer">
                            Quick View ▼
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Learnmore;