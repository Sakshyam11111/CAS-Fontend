import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaRegEye, FaSearch, FaFilter, FaStar, FaInfoCircle, FaChevronDown, FaChevronUp, FaBookmark, FaRegBookmark, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Registeropening = () => {
    const [isInNepal, setIsInNepal] = useState(false);
    const [isAbroad, setIsAbroad] = useState(false);
    const [hasNRNCard, setHasNRNCard] = useState(false);
    const [noNRNCard, setNoNRNCard] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [showFilters, setShowFilters] = useState(false);
    const [savedAccounts, setSavedAccounts] = useState(new Set());
    const [currentStep, setCurrentStep] = useState(1);
    const [showComparison, setShowComparison] = useState(false);
    const [comparisonList, setComparisonList] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true,
        });
    }, []);

    const accounts = [
        { 
            id: 1,
            title: 'CAS Premium Remittance Saving Account', 
            description: 'Only for individuals with remittance income.',
            type: 'remittance',
            interestRate: '8.5%',
            minBalance: 'Rs. 1,000',
            monthlyFee: 'Free',
            features: ['High interest rate', 'Free international transfers', 'Mobile banking'],
            popular: true
        },
        { 
            id: 2,
            title: 'CAS General Savings Account', 
            description: 'Perfect for everyday banking needs',
            type: 'general',
            interestRate: '6.5%',
            minBalance: 'Rs. 500',
            monthlyFee: 'Rs. 50',
            features: ['ATM card', 'Online banking', 'SMS alerts']
        },
        { 
            id: 3,
            title: 'CAS Shareholders Savings Account', 
            description: 'Exclusive benefits for shareholders',
            type: 'special',
            interestRate: '7.5%',
            minBalance: 'Rs. 2,000',
            monthlyFee: 'Free',
            features: ['Dividend benefits', 'Priority service', 'Lower loan rates']
        },
        { 
            id: 4,
            title: 'CAS Premium Nari Bachat Khata', 
            description: 'Designed especially for women',
            type: 'women',
            interestRate: '7.0%',
            minBalance: 'Rs. 1,000',
            monthlyFee: 'Free',
            features: ['Women-centric benefits', 'Insurance coverage', 'Special loan rates']
        },
        { 
            id: 5,
            title: 'CAS Dhukka Bachat Khata', 
            description: 'Goal-based savings account',
            type: 'savings',
            interestRate: '8.0%',
            minBalance: 'Rs. 1,500',
            monthlyFee: 'Free',
            features: ['Goal tracking', 'Auto-save options', 'Reward points']
        },
        { 
            id: 6,
            title: 'CAS Gen-N Account', 
            description: 'Next generation digital account',
            type: 'digital',
            interestRate: '7.25%',
            minBalance: 'Rs. 100',
            monthlyFee: 'Free',
            features: ['100% digital', 'Instant account opening', 'Crypto-friendly'],
            popular: true
        },
        { 
            id: 7,
            title: 'CAS Gold Savings', 
            description: 'Gold-backed savings account',
            type: 'investment',
            interestRate: '6.0%',
            minBalance: 'Rs. 5,000',
            monthlyFee: 'Rs. 100',
            features: ['Gold investment option', 'Hedge against inflation', 'Physical gold delivery']
        },
        { 
            id: 8,
            title: 'CAS Digo Bachat Khata', 
            description: 'Sustainable and eco-friendly banking',
            type: 'eco',
            interestRate: '7.75%',
            minBalance: 'Rs. 1,000',
            monthlyFee: 'Free',
            features: ['Green banking', 'Carbon offset program', 'Paperless statements']
        }
    ];

    const nrcAccounts = accounts.filter(acc => [1, 2, 7].includes(acc.id));
    const noNRCAccounts = accounts.filter(acc => [1, 2, 3, 5, 8, 6, 7].includes(acc.id));

    const handleInNepalChange = () => {
        setIsInNepal(true);
        setIsAbroad(false);
        setHasNRNCard(false);
        setNoNRNCard(false);
        setCurrentStep(2);
    };

    const handleOutsideNepalChange = () => {
        setIsInNepal(false);
        setIsAbroad(true);
        setHasNRNCard(false);
        setNoNRNCard(false);
        setCurrentStep(2);
    };

    const handleNRNCardChange = () => {
        setHasNRNCard(true);
        setNoNRNCard(false);
        setCurrentStep(3);
    };

    const handleNoNRNCardChange = () => {
        setNoNRNCard(true);
        setHasNRNCard(false);
        setCurrentStep(3);
    };

    const toggleSaveAccount = (accountId) => {
        const newSaved = new Set(savedAccounts);
        if (newSaved.has(accountId)) {
            newSaved.delete(accountId);
        } else {
            newSaved.add(accountId);
        }
        setSavedAccounts(newSaved);
    };

    const addToComparison = (account) => {
        if (comparisonList.length < 3 && !comparisonList.find(a => a.id === account.id)) {
            setComparisonList([...comparisonList, account]);
        }
    };

    const removeFromComparison = (accountId) => {
        setComparisonList(comparisonList.filter(a => a.id !== accountId));
    };

    const filterAccounts = (accountList) => {
        let filtered = accountList;

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(account =>
                account.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                account.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                account.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        // Type filter
        if (filterType !== 'all') {
            filtered = filtered.filter(account => account.type === filterType);
        }

        return filtered;
    };

    const AccountCard = ({ account }) => (
        <div className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay={`${100 + account.id * 100}`}>
            {account.popular && (
                <div className="absolute -top-3 left-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <FaStar className="mr-1" /> Popular
                </div>
            )}
            
            <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                        {account.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{account.description}</p>
                </div>
                <button
                    onClick={() => toggleSaveAccount(account.id)}
                    className="ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Save account"
                >
                    {savedAccounts.has(account.id) ? (
                        <FaBookmark className="text-green-600" />
                    ) : (
                        <FaRegBookmark className="text-gray-400" />
                    )}
                </button>
            </div>

            {/* Account Details Grid */}
            <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{account.interestRate}</div>
                    <div className="text-xs text-gray-500">Interest Rate</div>
                </div>
                <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{account.minBalance}</div>
                    <div className="text-xs text-gray-500">Min Balance</div>
                </div>
                <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{account.monthlyFee}</div>
                    <div className="text-xs text-gray-500">Monthly Fee</div>
                </div>
            </div>

            {/* Features */}
            <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                    {account.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            <FaCheck className="mr-1 w-3 h-3" />
                            {feature}
                        </span>
                    ))}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link
                    to={`/registerform/${account.title.toLowerCase().replace(/ /g, '-')}`}
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg flex items-center justify-center hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium"
                >
                    <FaCheck className="mr-2" /> Apply Now
                </Link>
                <button
                    onClick={() => addToComparison(account)}
                    className="px-4 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors font-medium"
                    disabled={comparisonList.length >= 3}
                >
                    Compare
                </button>
                <Link
                    to="/learnmore"
                    className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center"
                >
                    <FaRegEye className="mr-2" /> Details
                </Link>
            </div>
        </div>
    );

    const selectedAccounts = isAbroad
        ? hasNRNCard
            ? nrcAccounts
            : noNRNCard
                ? noNRCAccounts
                : []
        : isInNepal
            ? accounts
            : [];

    const filteredAccounts = filterAccounts(selectedAccounts);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16" data-aos="fade-down">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Open Your Account Online
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90">
                        Quick, Secure, and Hassle-free Banking Experience
                    </p>
                    <div className="flex justify-center items-center space-x-4">
                        <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-white text-green-600' : 'bg-green-300'}`}>1</div>
                            <span className="ml-2">Choose Location</span>
                        </div>
                        <div className="w-8 h-1 bg-white opacity-50"></div>
                        <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-white text-green-600' : 'bg-green-300'}`}>2</div>
                            <span className="ml-2">NRN Status</span>
                        </div>
                        <div className="w-8 h-1 bg-white opacity-50"></div>
                        <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-white text-green-600' : 'bg-green-300'}`}>3</div>
                            <span className="ml-2">Select Account</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-6">
                {/* Location Selection */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8" data-aos="fade-up" data-aos-delay="100">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Where are you currently residing?</h2>
                    <p className="text-gray-600 mb-6">के तपाई हाल कहाँ बस्नुहुन्छ?</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div 
                            className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${isInNepal ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}
                            onClick={handleInNepalChange}
                            data-aos="fade-right" data-aos-delay="200"
                        >
                            <div className="flex items-center mb-4">
                                <input
                                    type="radio"
                                    id="in-nepal"
                                    name="residency"
                                    className="mr-3 h-5 w-5 text-green-600"
                                    checked={isInNepal}
                                    onChange={handleInNepalChange}
                                />
                                <FaMapMarkerAlt className="text-green-600 mr-2" />
                                <label htmlFor="in-nepal" className="text-xl font-semibold">In Nepal</label>
                            </div>
                            <p className="text-gray-600">Currently residing within Nepal</p>
                        </div>

                        <div 
                            className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${isAbroad ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}
                            onClick={handleOutsideNepalChange}
                            data-aos="fade-left" data-aos-delay="300"
                        >
                            <div className="flex items-center mb-4">
                                <input
                                    type="radio"
                                    id="outside-nepal"
                                    name="residency"
                                    className="mr-3 h-5 w-5 text-green-600"
                                    checked={isAbroad}
                                    onChange={handleOutsideNepalChange}
                                />
                                <FaMapMarkerAlt className="text-blue-600 mr-2" />
                                <label htmlFor="outside-nepal" className="text-xl font-semibold">Outside Nepal</label>
                            </div>
                            <p className="text-gray-600">Currently residing abroad</p>
                        </div>
                    </div>
                </div>

                {/* NRN Card Status */}
                {isAbroad && (
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-8" data-aos="fade-up" data-aos-delay="400">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">NRN Card Status</h3>
                        <p className="text-gray-600 mb-6">के तपाईंसँग मान्य NRN कार्ड छ?</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div 
                                className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${hasNRNCard ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}
                                onClick={handleNRNCardChange}
                                data-aos="fade-right" data-aos-delay="500"
                            >
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="has-nrn"
                                        name="nrc-status"
                                        className="mr-3 h-5 w-5 text-green-600"
                                        checked={hasNRNCard}
                                        onChange={handleNRNCardChange}
                                    />
                                    <label htmlFor="has-nrn" className="text-lg font-semibold">I have NRN Card</label>
                                </div>
                            </div>

                            <div 
                                className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${noNRNCard ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}
                                onClick={handleNoNRNCardChange}
                                data-aos="fade-left" data-aos-delay="600"
                            >
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="no-nrn"
                                        name="nrc-status"
                                        className="mr-3 h-5 w-5 text-green-600"
                                        checked={noNRNCard}
                                        onChange={handleNoNRNCardChange}
                                    />
                                    <label htmlFor="no-nrn" className="text-lg font-semibold">I do not have NRN card</label>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Account Selection */}
                {selectedAccounts.length > 0 && (
                    <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="700">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-800 mb-2">Choose Your Account</h3>
                                <p className="text-gray-600">Found {filteredAccounts.length} accounts matching your criteria</p>
                            </div>
                            
                            {/* Search and Filter */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-0">
                                <div className="relative">
                                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search accounts..."
                                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                                >
                                    <FaFilter className="mr-2" />
                                    Filters
                                    {showFilters ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                                </button>
                            </div>
                        </div>

                        {/* Filter Options */}
                        {showFilters && (
                            <div className="mb-6 p-4 bg-gray-50 rounded-lg" data-aos="fade-up" data-aos-delay="800">
                                <div className="flex flex-wrap gap-2">
                                    {['all', 'general', 'remittance', 'savings', 'digital', 'investment'].map(type => (
                                        <button
                                            key={type}
                                            onClick={() => setFilterType(type)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                                filterType === type
                                                    ? 'bg-green-600 text-white'
                                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                            }`}
                                        >
                                            {type.charAt(0).toUpperCase() + type.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Comparison Banner */}
                        {comparisonList.length > 0 && (
                            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg" data-aos="fade-up" data-aos-delay="900">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <FaInfoCircle className="text-blue-600 mr-2" />
                                        <span className="font-medium">
                                            {comparisonList.length} account{comparisonList.length > 1 ? 's' : ''} selected for comparison
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setShowComparison(true)}
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Compare Now
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Account Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {filteredAccounts.map((account) => (
                                <AccountCard key={account.id} account={account} />
                            ))}
                        </div>

                        {filteredAccounts.length === 0 && (
                            <div className="text-center py-12" data-aos="fade-up" data-aos-delay="1000">
                                <div className="text-gray-400 text-6xl mb-4">🏦</div>
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">No accounts found</h3>
                                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                            </div>
                        )}
                    </div>
                )}

                {selectedAccounts.length === 0 && (
                    <div className="bg-white rounded-xl shadow-lg p-12 text-center" data-aos="fade-up" data-aos-delay="1100">
                        <div className="text-gray-400 text-6xl mb-6">📍</div>
                        <h3 className="text-2xl font-semibold text-gray-600 mb-4">Select Your Location</h3>
                        <p className="text-gray-500">Please choose your current residence to view available account options</p>
                    </div>
                )}
            </div>

            {/* Comparison Modal */}
            {showComparison && comparisonList.length > 0 && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" data-aos="zoom-in" data-aos-delay="100">
                    <div className="bg-white rounded-xl max-w-4xl w-full max-h-96 overflow-auto">
                        <div className="p-6 border-b">
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-bold">Account Comparison</h3>
                                <button
                                    onClick={() => setShowComparison(false)}
                                    className="text-gray-500 hover:text-gray-700 text-2xl"
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {comparisonList.map((account) => (
                                    <div key={account.id} className="border rounded-lg p-4" data-aos="fade-up" data-aos-delay={`${200 + account.id * 100}`}>
                                        <div className="flex justify-between items-start mb-4">
                                            <h4 className="font-semibold text-sm">{account.title}</h4>
                                            <button
                                                onClick={() => removeFromComparison(account.id)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                ×
                                            </button>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                            <div><strong>Interest:</strong> {account.interestRate}</div>
                                            <div><strong>Min Balance:</strong> {account.minBalance}</div>
                                            <div><strong>Monthly Fee:</strong> {account.monthlyFee}</div>
                                            <div><strong>Features:</strong></div>
                                            <ul className="list-disc list-inside text-xs">
                                                {account.features.map((feature, idx) => (
                                                    <li key={idx}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Registeropening;