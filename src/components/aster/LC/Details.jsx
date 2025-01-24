import { useState } from 'react';
import { IoMdExit } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { TfiReload } from "react-icons/tfi";
import { IoMdMore } from "react-icons/io";

const Details = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState("Preview");
    const [data, setData] = useState({
        firstName: '',
        panCardNo: '',
        lastName: '',
        addressLine: '',
        zip: '',
        city: '',
        phoneNumber: '',
        beneFirstName: '',
        benePanCardNo: '',
        beneLastName: '',
        beneAddressLine: '',
        benePhoneNumber: '',
        percentage: '',
        incoTerms: '',
        currency: '',
        amount: '',
        shipmentFrom: '',
        departurePort: '',
        otherDetails: '',
        shipmentDetails: '',
        paymentDetails: '',
    });

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/lc');
    };

    const handleExitClick = () => {
        navigate('/aster'); 
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="p-5 bg-gray-50 min-h-screen flex flex-col items-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl mt-4">
                <div className="mb-4 flex justify-between items-center border-b border-gray-300 pb-2">
                    <div
                        className="border border-gray-300 rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition duration-200 mb-2 cursor-pointer"
                        onClick={handleBackClick}
                    >
                        <IoIosArrowBack className="text-gray-600" />
                    </div>
                    <h2 className="text-2xl font-bold">Details</h2>

                    <div className="flex items-center space-x-2">
                        <div className="border border-gray-300 rounded-full p-2 hover:bg-gray-300 transition duration-200">
                            <TfiReload className="text-black" />
                        </div>
                        <button 
                            className="flex items-center bg-green-600 text-white rounded-full px-3 py-1 hover:bg-green-700 transition duration-200 gap-2"
                            onClick={handleExitClick} 
                        >
                            <IoMdExit className="mr-1" />
                            Exit
                        </button>
                        <div className="border border-gray-300 rounded-full p-2 hover:bg-gray-300 transition duration-200">
                            <IoMdMore className="text-black" />
                        </div>
                    </div>
                </div>

                <div className="flex space-x-4 mb-4">
                    {["Preview", "History"].map((tab, index) => (
                        <button
                            key={index}
                            className={`text-lg font-semibold ${activeTab === tab ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-600'} hover:text-green-500 border-b-2 border-transparent hover:border-gray-300`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">Documents</h3>
                    <div className="flex items-center space-x-2">
                        <div className="relative w-full md:w-96">
                            <input
                                type="text"
                                placeholder="Search by document name"
                                className="border border-gray-300 rounded-lg p-2 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-black"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <CiSearch className="absolute right-3 top-3 text-gray-500" />
                        </div>
                        <button
                            className="bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition duration-200 flex items-center"
                            onClick={() => navigate('/form')}
                        >
                            <IoDocumentTextOutline className="mr-1" />
                            Apply
                        </button>
                    </div>
                </div>

                {/* Unified Box for Document Details and Form */}
                <div className="mt-4" data-aos="fade-left">
                    {activeTab === "History" && (
                        <form className="bg-white w-[100%] mx-auto p-6 rounded-lg shadow-md mt-10 mb-10">
                            {/* Personal Information */}
                            <h3 className="text-lg font-semibold mb-4" data-aos="fade-up">Name</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                <div data-aos="fade-up">
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={data.firstName}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                        placeholder="First name"
                                    />
                                </div>
                                <div data-aos="fade-up">
                                    <input
                                        type="text"
                                        name="panCardNo"
                                        value={data.panCardNo}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                        placeholder="PAN card no."
                                    />
                                </div>
                                <div data-aos="fade-up">
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={data.lastName}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                        placeholder="Last name"
                                    />
                                </div>
                            </div>

                            {/* Address Information */}
                            <h3 className="text-lg font-semibold mb-4 mt-10" data-aos="fade-up">Address</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div data-aos="fade-up">
                                    <input
                                        type="text"
                                        name="addressLine"
                                        value={data.addressLine}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                        placeholder="Address line"
                                    />
                                </div>
                                <div data-aos="fade-up">
                                    <input
                                        type="text"
                                        name="zip"
                                        value={data.zip}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                        placeholder="ZIP code"
                                    />
                                </div>
                                <div data-aos="fade-up">
                                    <input
                                        type="text"
                                        name="city"
                                        value={data.city}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                        placeholder="City"
                                    />
                                </div>
                                <div data-aos="fade-up">
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        value={data.phoneNumber}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                        placeholder="Phone no."
                                    />
                                </div>
                            </div>

                            {/* Beneficiary Information */}
                            <h3 className="text-lg font-semibold mb-4" data-aos="fade-up">Beneficiary Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                <div data-aos="fade-up">
                                    <input
                                        type="text"
                                        name="beneFirstName"
                                        value={data.beneFirstName}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                        placeholder="Beneficiary First Name"
                                    />
                                </div>
                                <div data-aos="fade-up">
                                    <input
                                        type="text"
                                        name="benePanCardNo"
                                        value={data.benePanCardNo}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                        placeholder="Beneficiary PAN card no."
                                    />
                                </div>
                                <div data-aos="fade-up">
                                    <input
                                        type="text"
                                        name="beneLastName"
                                        value={data.beneLastName}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                        placeholder="Beneficiary Last Name"
                                    />
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold mb-4" data-aos="fade-up">Beneficiary Address</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                <div data-aos="fade-up">
                                    <input
                                        type="text"
                                        name="beneAddressLine"
                                        value={data.beneAddressLine}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                        placeholder="Beneficiary Address line"
                                    />
                                </div>
                                <div data-aos="fade-up">
                                    <input
                                        type="text"
                                        name="benePhoneNumber"
                                        value={data.benePhoneNumber}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                        placeholder="Beneficiary Phone no."
                                    />
                                </div>
                            </div>

                            {/* Transmission Details */}
                            <h3 className="text-lg font-semibold mb-4" data-aos="fade-up">By Tele Transmission</h3>
                            <div className="mb-4" data-aos="fade-up">
                                <div className="grid grid-cols-2 gap-4">
                                    {["NEP", "EURO", "INR", "SGD", "USD", "JYP", "AUD"].map((mode, index) => (
                                        <div className="flex items-center mb-2" key={index}>
                                            <input
                                                type="radio"
                                                id={mode.toLowerCase()}
                                                name="transmission"
                                                value={mode}
                                                className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                            />
                                            <label htmlFor={mode.toLowerCase()} className="ml-2">{mode}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Percentage and Inco Terms */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div className="mb-4 mt-4" data-aos="fade-up">
                                    <label className="block text-gray-700 mb-2">Percentage</label>
                                    <input
                                        type="text"
                                        name="percentage"
                                        value={data.percentage}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                        placeholder="%"
                                    />
                                </div>

                                <div className="mb-4 mt-4" data-aos="fade-up">
                                    <label className="block text-gray-700 mb-2">Inco Terms</label>
                                    <select
                                        name="incoTerms"
                                        value={data.incoTerms}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                    >
                                        <option value="">Please select</option>
                                        <option value="CIF">CIF</option>
                                        <option value="FOB">FOB</option>
                                        <option value="EXW">EXW</option>
                                    </select>
                                </div>
                            </div>

                            {/* Currency and Amount */}
                            <h3 className='mb-5 mt-8 text-lg' data-aos="fade-up">Currency and Amount</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="mb-4" data-aos="fade-up">
                                    <label className="block text-gray-700 mb-2">Currency</label>
                                    <select
                                        name="currency"
                                        value={data.currency}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                    >
                                        <option value="">Please select your Currency</option>
                                        <option value="NEP">NEP</option>
                                        <option value="INR">INR</option>
                                        <option value="USD">USD</option>
                                        <option value="EURO">EURO</option>
                                        <option value="AUD">AUD</option>
                                    </select>
                                </div>

                                <div className="mb-4" data-aos="fade-up">
                                    <label className="block text-gray-700 mb-2">Amount</label>
                                    <input
                                        type="text"
                                        name="amount"
                                        value={data.amount}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                        placeholder="Amount"
                                    />
                                </div>
                            </div>

                            {/* Payment Terms */}
                            <h3 className='mb-5 text-lg' data-aos="fade-up">Tenure/Payment Terms</h3>
                            <div className="mb-4" data-aos="fade-up">
                                <div className="grid grid-cols-2 gap-4">
                                    {["Sight", "Mixed", "Usance", "Deferred"].map((type, index) => (
                                        <div className="flex items-center mb-2" key={index}>
                                            <input
                                                type="radio"
                                                id={type.toLowerCase()}
                                                name="tenure"
                                                value={type}
                                                className="h-6 w-6 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                            />
                                            <label htmlFor={type.toLowerCase()} className="ml-2">{type}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Payment Details */}
                            <h3 className='mb-5 mt-8 text-lg' data-aos="fade-up">Payment Details</h3>
                            <label className="block text-gray-700 mb-4">Credit Available With/ Negotiating Bank By</label>
                            <div className="mb-10" data-aos="fade-up">
                                <select
                                    name="paymentDetails"
                                    value={data.paymentDetails}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-3 w-full"
                                >
                                    <option value="">Select...</option>
                                    <option value="Acceptance">Acceptance</option>
                                    <option value="Negotiation">Negotiation</option>
                                    <option value="Discount">Discount</option>
                                </select>
                            </div>

                            {/* Partial Payments */}
                            <h3 className='mb-5 text-lg' data-aos="fade-up">Partial Payments</h3>
                            <div className="mb-4" data-aos="fade-up">
                                <div className="grid grid-cols-2 gap-4">
                                    {["Installment", "Prorated", "Balloon", "Split"].map((paymentType, index) => (
                                        <div className="flex items-center mb-2" key={index}>
                                            <input
                                                type="radio"
                                                id={paymentType.toLowerCase()}
                                                name="partialPayments"
                                                value={paymentType}
                                                className="h-6 w-6 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                            />
                                            <label htmlFor={paymentType.toLowerCase()} className="ml-2">{paymentType}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Shipment Details */}
                            <h3 className='mb-5 text-lg' data-aos="fade-up">Shipment Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div data-aos="fade-up">
                                    <label className="block text-gray-700 mb-2">Shipment From</label>
                                    <input
                                        type="text"
                                        name="shipmentFrom"
                                        value={data.shipmentFrom}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        placeholder="Shipment industry name..."
                                    />
                                    <label className="block text-gray-700 mb-2">Port of loading/airport of departure</label>
                                    <input
                                        type="text"
                                        name="departurePort"
                                        value={data.departurePort}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        placeholder="Departure name..."
                                    />
                                </div>
                                <div data-aos="fade-up">
                                    <label className="block text-gray-700 mb-2">If other (Specify)</label>
                                    <input
                                        type="text"
                                        name="otherDetails"
                                        value={data.otherDetails}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        placeholder="Details..."
                                    />
                                    <label className="block text-gray-700 mb-2">Expiry/shipment details</label>
                                    <input
                                        type="text"
                                        name="shipmentDetails"
                                        value={data.shipmentDetails}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        placeholder="Details..."
                                    />
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Details;