import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../../../assets/Registeropening.png';
import Image2 from '../../../assets/PremiumRemittance.png';
import Image3 from '../../../assets/GeneralSavings.png';
import Image4 from '../../../assets/ShareholderSaving.png';
import Image5 from '../../../assets/PremiumNari.png';
import Image6 from '../../../assets/DhukkaBachat.png';
import Image7 from '../../../assets/Gen-NAccount.png';
import Image8 from '../../../assets/GoldSavings.png';
import Image9 from '../../../assets/PremiumRemittance.png';
import { FaCheck, FaRegEye } from 'react-icons/fa6';

const Registeropening = () => {
    const [isInNepal, setIsInNepal] = useState(false);
    const [isAbroad, setIsAbroad] = useState(false);
    const [hasNRNCard, setHasNRNCard] = useState(false);
    const [noNRNCard, setNoNRNCard] = useState(false);

    const handleInNepalChange = () => {
        setIsInNepal(true);
        setIsAbroad(false);
        setHasNRNCard(false);
        setNoNRNCard(false);
    };

    const handleOutsideNepalChange = () => {
        setIsInNepal(false);
        setIsAbroad(true);
        setHasNRNCard(false);
        setNoNRNCard(false);
    };

    const handleNRNCardChange = () => {
        setHasNRNCard(true);
        setNoNRNCard(false);
    };

    const handleNoNRNCardChange = () => {
        setNoNRNCard(true);
        setHasNRNCard(false);
    };

    const accounts = [
        { title: 'CAS Premium Remittance Saving Account', description: 'Only for individuals with remittance income.', image: Image2 },
        { title: 'CAS General Savings Account', description: 'CAS General Savings Account', image: Image3 },
        { title: 'CAS Shareholders Savings Account', description: 'CAS General Savings Account', image: Image4 },
        { title: 'CAS Premium Nari Bachat Khata', description: 'CAS General Savings Account', image: Image5 },
        { title: 'CAS Dhukka Bachat Khata', description: 'CAS General Savings Account', image: Image6 },
        { title: 'CAS Gen-N Account', description: 'CAS General Savings Account', image: Image7 },
        { title: 'CAS Gold Savings', description: 'CAS Gold Savings', image: Image8 },
        { title: 'CAS Digo Bachat Khata', description: 'CAS Digo Bachat Khata', image: Image9 },
    ];

    const nrcAccounts = [
        { title: 'CAS NRN Savings Account', description: 'CAS NRN Savings Account', image: Image2 },
        { title: 'CAS General Savings Account', description: 'CAS General Savings Account', image: Image3 },
        { title: 'CAS NRN Savings Account', description: 'CAS NRN Savings Account', image: Image8 },
    ];

    const noNRCAccounts = [
        { title: 'CAS Premium Remittance Saving Account', description: 'Only for individuals with remittance income.', image: Image2 },
        { title: 'CAS General Savings Account', description: 'CAS General Savings Account', image: Image3 },
        { title: 'CAS Shareholders Savings Account', description: 'CAS General Savings Account', image: Image4 },
        { title: 'CAS Dhukka Bachat Khata', description: 'CAS Dhukka Bachat Khata', image: Image6 },
        { title: 'CAS Digo Bachat Khata', description: 'CAS Digo Bachat Khata', image: Image9 },
        { title: 'CAS Karmashil Bachat Khata', description: 'CAS Karmashil Bachat Khata', image: Image7 },
        { title: 'CAS NRN Savings Account', description: 'CAS NRN Savings Account', image: Image8 },
    ];

    const renderAccounts = useCallback((accountList) => {

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                {accountList.map((account, index) => (
                    <div key={index} className="border p-4 rounded-lg flex items-start flex-col sm:flex-row hover:shadow-lg transition-shadow duration-200">
                        <img src={account.image} alt={account.title} className="w-16 h-16 mb-2 sm:mb-0 sm:mr-4" />
                        <div className="flex-1">
                            <h3 className="font-bold text-xl">{account.title}</h3>
                            <div className="flex items-center text-gray-500 text-sm mt-1">
                                <FaCheck className="mr-1" />
                                <p>{account.description}</p>
                            </div>
                            <div className="border-b border-gray-300 my-2"></div>
                            <div className="flex flex-col sm:flex-row justify-between mt-4">
                                <Link
                                    to={`/registerform/${account.title.toLowerCase().replace(/ /g, '-')}`}
                                    className="bg-green-600 text-white px-8 py-2 rounded-3xl flex items-center hover:bg-green-700 transition duration-200"
                                    aria-label={`Apply for ${account.title}`}
                                >
                                    <FaCheck className="mr-2" /> Apply
                                </Link>
                                <Link
                                    to="/learnmore"
                                    className="bg-green-600 text-white px-4 py-2 rounded-3xl flex items-center hover:bg-green-700 transition duration-200"
                                    aria-label={`Learn more about ${account.title}`}
                                >
                                    <FaRegEye className="mr-2" /> Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }, []);

    const selectedAccounts = isAbroad
        ? hasNRNCard
            ? nrcAccounts
            : noNRNCard
                ? noNRCAccounts
                : []
        : isInNepal
            ? accounts
            : [];

    return (
        <div className="flex flex-col items-center justify-center max-w-8xl mx-auto p-4">
            <img src={Image1} alt="nRemit" className="max-w-full h-auto mt-10" />

            <div className="container text-left mt-20 max-w-7xl flex flex-col sm:flex-row">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold">Register for Online Account Opening</h2>
                    <p className="mt-2">Kindly provide your basic information, validate your email ID and start Online Account Opening.</p>

                    <div className="mt-4">
                        <p>Are you residing in Nepal or abroad?</p>
                        <p>के तपाई हाल नेपालमा हुनुहुन्छ?</p>
                        <div className="flex flex-col sm:flex-row items-center mt-2">
                            <input
                                type="radio"
                                id="in-nepal"
                                name="residency"
                                className="mr-2 h-5 w-5"
                                onChange={handleInNepalChange}
                                aria-label="Residing in Nepal"
                            />
                            <label htmlFor="in-nepal" className="mr-4">In Nepal</label>
                            <input
                                type="radio"
                                id="outside-nepal"
                                name="residency"
                                className="mr-2 h-5 w-5"
                                onChange={handleOutsideNepalChange}
                                aria-label="Residing outside Nepal"
                            />
                            <label htmlFor="outside-nepal">Outside Nepal (Abroad)</label>
                        </div>
                    </div>

                    {isAbroad && (
                        <div className="mt-4 p-4 border rounded-lg">
                            <p>Are you a non-resident Nepali and have a valid NRN card?</p>
                            <p>के तपाई गैरआवासीय नेपाली हुनुहुन्छ र तपाईंसँग मान्य NRN कार्ड छ?</p>
                            <div className="flex flex-col sm:flex-row items-center mt-2">
                                <div className="flex items-center mr-4">
                                    <input
                                        type="radio"
                                        id="has-nrn"
                                        name="nrc-status"
                                        className="mr-2 h-6 w-6"
                                        onChange={handleNRNCardChange}
                                        aria-label="Has NRN card"
                                    />
                                    <label htmlFor="has-nrn">I have NRN Card</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="no-nrn"
                                        name="nrc-status"
                                        className="mr-2 h-6 w-6"
                                        onChange={handleNoNRNCardChange}
                                        aria-label="Does not have NRN card"
                                    />
                                    <label htmlFor="no-nrn">I do not have NRN card</label>
                                </div>
                            </div>
                        </div>
                    )}

                    {selectedAccounts.length > 0 ? (
                        renderAccounts(selectedAccounts)
                    ) : (
                        <p className="mt-4 text-gray-500">Please select your residency status to view available accounts.</p>
                    )}
                </div>

                {/* Sticky Sidebar */}
                <div className="sticky top-20 ml-0 sm:ml-8 mt-8 sm:mt-0 p-4 w-full sm:w-80">
                    <h3 className="text-lg font-bold">Steps to Register</h3>
                    <div className="mt-4">
                        <p className="text-xl mr-2">Signup</p>
                        <p className="text-gray-500">Create a profile with your basic details and validate via email/mobile.</p>
                        <p className="text-xl mr-2 mt-10">Account Application</p>
                        <p className="text-gray-500">Fill out the form and submit required documents including valid ID and photograph (PDF or image).</p>
                        <p className="text-xl mr-2 mt-10">Activate Account</p>
                        <p className="text-gray-500">Choose video KYC (link sent to email) with your original ID for KYC verification.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registeropening;