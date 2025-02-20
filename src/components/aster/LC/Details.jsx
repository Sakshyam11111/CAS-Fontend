import { useState } from 'react';
import { IoMdExit } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { CiSearch } from "react-icons/ci";
import { useLocation, useNavigate } from 'react-router-dom';
import { TfiReload } from "react-icons/tfi";
import { IoMdMore } from "react-icons/io";
import PropTypes from 'prop-types';

const Details = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState("Preview");

    const navigate = useNavigate();

    const location = useLocation();

    const { document } = location.state || {};

    console.log("The received document from LC: ", document);

    const handleBackClick = () => {
        navigate('/lc');
    };

    const handleExitClick = () => {
        navigate('/aster');
    };

    const handleChange = () => {
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
                        <form className="bg-white w-[100%] mx-auto p-6 rounded-lg  mt-10 mb-10">
                            {/* Applicant details */}

                            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                                <h3 className='text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>Applicant Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                                    <div>
                                        <h1>Name</h1>
                                        <input
                                            type="text"
                                            name="Name"
                                            value={document.applicant_name}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        <h1>Email</h1>
                                        <input
                                            type="email"
                                            name="email"
                                            value={document.applicant_email}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        <h1>Address</h1>
                                        <input
                                            type="text"
                                            name="address"
                                            value={document.applicant_address}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        <h1>Phone</h1>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={document.applicant_phone}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        <h1>Postal Code</h1>
                                        <input
                                            type="text"
                                            name="postalCode"
                                            value={document.applicant_postal_code}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        <h1>Country</h1>
                                        <input
                                            type="text"
                                            name="country"
                                            value={document.applicant_country}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        <h1>Account Number</h1>
                                        <input
                                            type="text"
                                            name="accountNumber"
                                            value={document.account_number}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        <h1>Exim Code</h1>
                                        <input
                                            type="text"
                                            name="eximCode"
                                            value={document.applicant_exim_code}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                            </div>


                            {/* Beneficiary  */}
                            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                                <h3 className='text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>Beneficiary Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                                    <div>
                                        <h1>Beneficiary Name</h1>
                                        <input
                                            type="text"
                                            name="beneficiary_name"
                                            value={document.beneficiary_name}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        <h1>Account Number</h1>
                                        <input
                                            type="number"
                                            name="beneficiary_account_number"
                                            value={document.beneficiary_account_number}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        <h1>Country</h1>
                                        <input
                                            type="text"
                                            name="country"
                                            value={document.country}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        <h1>Address Line 1</h1>
                                        <input
                                            type="text"
                                            name="beneAddressLine"
                                            value={document.beneficiary_address_1}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        <h1>Address Line 2</h1>
                                        <input
                                            type="text"
                                            name="beneAddressLine2"
                                            value={document.beneficiary_address_2}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        <h1>Address Line 3</h1>
                                        <input
                                            type="text"
                                            name="beneAddressLine3"
                                            value={document.beneficiary_address_3}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        <h1>Email</h1>
                                        <input
                                            type="text"
                                            name="email"
                                            value={document.email}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        <h1>Mobile Code</h1>
                                        <input
                                            type="number"
                                            name="beneMobileCode"
                                            value={document.mobile_code}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        <h1>Phone Number</h1>
                                        <input
                                            type="number"
                                            name="phone_number"
                                            value={document.phone_number}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        <h1>Exim Code</h1>
                                        <input
                                            type="number"
                                            name="exim_code"
                                            value={document.exim_code}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        <h1>Pan No.</h1>
                                        <input
                                            type="number"
                                            name="pan_no"
                                            value={document.pan_no}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* lc Issuance  */}
                            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                                <h3 className='text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>LC Issuance</h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    {["Transferable", "Revolving", "Deferred", "Back to Back", "Red Letter", "Open Ended", "StandBy"].map((option, index) => (
                                        <div className="flex items-center" key={index}>
                                            <input
                                                type="checkbox"
                                                id={option.toLowerCase()}
                                                name={option.toLowerCase()}
                                                value={option}
                                                onChange={handleChange}
                                                className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                            />
                                            <label htmlFor={option.toLowerCase()} className="ml-2">{option}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            {/* LC Details Section */}
                            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                                <h3 className='text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>LC Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">Form of Documentary Credit</label>
                                        <select
                                            name="form_of_documentary_credit"
                                            value={document.form_of_documentary_credit}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        >
                                            <option value="">Select</option>
                                            <option value="LC1">Irrevocable</option>
                                            <option value="LC2">Revocable</option>
                                        </select>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">Date of Issue</label>
                                        <input
                                            type="date"
                                            name="date_of_issue"
                                            value={document.date_of_issue}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">Applicable Rules</label>
                                        <select
                                            name="applicable_rules"
                                            value={document.applicable_rules}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        >
                                            <option value="">Select</option>
                                            <option value="UCP600">UCP600</option>
                                            <option value="ISBP745">ISBP745</option>
                                        </select>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">Ref to Pre Advice</label>
                                        <input
                                            type="text"
                                            name="ref_to_pre_advice"
                                            value={document.ref_to_pre_advice}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">Transferable</label>
                                        <select
                                            name="lctransferable"
                                            value={document.lctransferable}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        >
                                            <option value="">Select</option>
                                            <option value="LC1">Yes</option>
                                            <option value="LC2">No</option>
                                        </select>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">LC Transferred To</label>
                                        <input
                                            type="text"
                                            name="lc_transferred_to"
                                            value={document.lc_transferred_to}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">Revolving</label>
                                        <select
                                            name="lcrevolving"
                                            value={document.lcrevolving}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        >
                                            <option value="">Select</option>
                                            <option value="LC1">Yes</option>
                                            <option value="LC2">No</option>
                                        </select>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">Date of Expiry</label>
                                        <input
                                            type="date"
                                            name="date_of_expiry"
                                            value={document.date_of_expiry}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>


                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">Place of Expiry</label>
                                        <input
                                            type="text"
                                            name="place_of_expire"
                                            value={document.place_of_expire}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">Amount</label>
                                        <input
                                            type="number"
                                            name="amount_amount"
                                            value={document.amount_amount}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                            placeholder=""
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">Tolerance Positive</label>
                                        <input
                                            type="text"
                                            name="tolerance_positive"
                                            value={document.tolerance_positive}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">Tolerance Negative</label>
                                        <input
                                            type="text"
                                            name="tolerance_negative"
                                            value={document.tolerance_negative}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">Add Amount Covered</label>
                                        <input
                                            type="number"
                                            name="add_amount_covered"
                                            value={document.add_amount_covered}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Confirmation Instructions */}
                            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                                <h3 className='text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>
                                    Confirmation Instructions
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Confirm Instructions</label>
                                        <select
                                            name="confirmation_instruction"
                                            value={document.confirmation_instruction}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        >
                                            <option value="">Select an option...</option>
                                            <option value="Yes">Confirm</option>
                                            <option value="Yes/No">May Add</option>
                                            <option value="No">Without</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Confirming Bank</label>
                                        <input
                                            type="text"
                                            name="confirming_bank"
                                            value={document.confirming_bank}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Swift code</label>
                                        <input
                                            type="number"
                                            name="confirming_swift_code"
                                            value={document.confirming_swift_code}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Confirmation Charges</label>
                                        <select
                                            name="confirmation_charges"
                                            value={document.confirmation_charges}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        >
                                            <option value="">Select an option...</option>
                                            <option value="Applicant">Applicant</option>
                                            <option value="Beneficiary">Beneficiary</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Other Charges Outside Country</label>
                                        <select
                                            name="other_charges_outside_country"
                                            value={document.other_charges_outside_country}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        >
                                            <option value="">Select an option...</option>
                                            <option value="Applicant">Applicant</option>
                                            <option value="Beneficiary">Beneficiary</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Advising Bank Details */}
                            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                                <h3 className='text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>
                                    Advising Bank
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Bank Name</label>
                                        <input
                                            type="text"
                                            name="advisingBankName"
                                            value={document.advisingBankName}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">SWIFT Code</label>
                                        <input
                                            type="number"
                                            name="advisingSWIFT"
                                            value={document.advisingSWIFT}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Advising Banks Charges</label>
                                        <select
                                            name="advising_bank_charges"
                                            value={document.advising_bank_charges}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        >
                                            <option value="">Select an option...</option>
                                            <option value="Applicant">Applicant</option>
                                            <option value="Beneficiary">Beneficiary</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Advise Through Bank Details */}
                            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                                <h3 className='text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>
                                    Advise Through Bank (if any)
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Bank Name</label>
                                        <input
                                            type="text"
                                            name="bank_name"
                                            value={document.bank_name}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">SWIFT Code</label>
                                        <input
                                            type="number"
                                            name="advising_swift_code"
                                            value={document.advising_swift_code}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Advising Banks Charges</label>
                                        <select
                                            name="advisingBankschargesifany"
                                            value={document.advisingBankschargesifany}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        >
                                            <option value="">Select an option...</option>
                                            <option value="Applicant">Applicant</option>
                                            <option value="Beneficiary">Beneficiary</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Direct Reimbursements */}
                            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                                <h3 className='text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>
                                    Direct Reimbursements
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Reimbursements</label>
                                        <select
                                            name="direct_reimbursement"
                                            value={document.direct_reimbursement}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        >
                                            <option value="">Select...</option>
                                            <option value="Allow">Allow</option>
                                            <option value="Not Allowed">Not Allowed</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Description of Goods and Services */}
                            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                                <h3 className='text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>
                                    Description of Goods and Services
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Goods</label>
                                        <input
                                            type="text"
                                            name="description_goods"
                                            value={document.description_goods}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Type of Goods</label>
                                        <input
                                            type="text"
                                            name="type_of_goods"
                                            value={document.type_of_goods}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">HS Code</label>
                                        <input
                                            type="text"
                                            name="hs_code"
                                            value={document.hs_code}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">License Code</label>
                                        <input
                                            type="text"
                                            name="description_license_code"
                                            value={document.description_license_code}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">License Description</label>
                                        <input
                                            type="text"
                                            name="description_license_description"
                                            value={document.description_license_description}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Quanity</label>
                                        <input
                                            type="number"
                                            name="quality"
                                            value={document.quality}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Unit Price</label>
                                        <input
                                            type="text"
                                            name="description_unit_price"
                                            value={document.description_unit_price}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Amount</label>
                                        <input
                                            type="text"
                                            name="description_amount"
                                            value={document.description_amount}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Capital Goods</label>
                                        <select
                                            name="description_capital_goods"
                                            value={document.description_capital_goods}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        >
                                            <option value="">Select an option...</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Delivery Terms</label>
                                        <select
                                            name="description_delivery_terms"
                                            value={document.description_delivery_terms}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        >
                                            <option value="">Select an option...</option>
                                            <option value="CIF">CIF</option>
                                            <option value="FOB">FOB</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Place</label>
                                        <input
                                            type="text"
                                            name="description_place"
                                            value={document.description_place}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Insurance Details */}
                            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                                <h3 className='text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>
                                    Insurance Details
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Insurance Covered by</label>
                                        <select
                                            name="covered_by_details"
                                            value={document.covered_by_details}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        >
                                            <option value="">Select...</option>
                                            <option value="Applicant">Applicant</option>
                                            <option value="Beneficiary">Beneficiary</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Insurance No.</label>
                                        <input
                                            type="text"
                                            name="insurance_no"
                                            value={document.insurance_no}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Policy No.</label>
                                        <input
                                            type="text"
                                            name="insurance_policy_no"
                                            value={document.insurance_policy_no}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Insured Amount</label>
                                        <input
                                            type="text"
                                            name="insurance_details_amount"
                                            value={document.insurance_details_amount}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Company Name</label>
                                        <input
                                            type="text"
                                            name="insurance_company_name"
                                            value={document.insurance_company_name}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Expiry</label>
                                        <input
                                            type="date"
                                            name="insurance_details_expiry"
                                            value={document.insurance_details_expiry}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Premium Amount</label>
                                        <input
                                            type="text"
                                            name="insurance_details_premium_amount"
                                            value={document.insurance_details_premium_amount}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Paid Date</label>
                                        <input
                                            type="date"
                                            name="paidDate"
                                            value={document.insurance_details_paid_date}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Proforma Invoice / Purchase Order */}
                            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                                <h3 className='text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>
                                    Proforma Invoice / Purchase Order
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Reference Number</label>
                                        <input
                                            type="number"
                                            name="proforma_reference_number"
                                            value={document.proforma_reference_number}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Date</label>
                                        <input
                                            type="date"
                                            name="proforma_date"
                                            value={document.proforma_date}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Valid Until</label>
                                        <input
                                            type="date"
                                            name="proforma_valid_until"
                                            value={document.proforma_valid_until}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Origin of Goods</label>
                                        <select
                                            name="proforma_origin_of_goods"
                                            value={document.proforma_origin_of_goods}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        >
                                            <option value="">Select an option...</option>
                                            <option value="Nepal">Nepal</option>
                                            <option value="India">India</option>
                                            <option value="China">China</option>
                                            <option value="Japan">Japan</option>
                                            <option value="USA">USA</option>
                                            <option value="Australia">Australia</option>
                                            <option value="England">England</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Confirming Bank */}
                            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                                <h3 className='text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>Credit Available with</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Bank Name</label>
                                        <input
                                            type="text"
                                            name="credit_bank_name"
                                            value={document.credit_bank_name}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-2">Swift Code</label>
                                        <input
                                            type="text"
                                            name="credit_swift_code"
                                            value={document.credit_swift_code}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Any Bank</label>
                                        <input
                                            type="number"
                                            name="credit_any_bank"
                                            value={document.credit_any_bank}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">Beneficiary Drafts at</label>
                                        <select
                                            name="beneficiary_drafts_at"
                                            value={document.beneficiary_drafts_at}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        >
                                            <option value="">Select</option>
                                            <option value="LC1">Sight</option>
                                            <option value="LC2">Usance</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Drawee</label>
                                        <input
                                            type="text"
                                            name="credit_drawee"
                                            value={document.credit_drawee}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Mixed Payment Details</label>
                                        <input
                                            type="text"
                                            name="credit_mixed_payment"
                                            value={document.credit_mixed_payment}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Place of taking in charge/dispatch</label>
                                        <input
                                            type="text"
                                            name="place_of_taking_in_charge"
                                            value={document.place_of_taking_in_charge}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Port of loading</label>
                                        <input
                                            type="text"
                                            name="credit_port_of_loading"
                                            value={document.credit_port_of_loading}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Port of discharge</label>
                                        <input
                                            type="text"
                                            name="credit_port_of_discharge"
                                            value={document.credit_port_of_discharge}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Place of final destination</label>
                                        <input
                                            type="text"
                                            name="credit_place_of_destination"
                                            value={document.credit_place_of_destination}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Latest date of Shipment</label>
                                        <input
                                            type="date"
                                            name="credit_latest_date_of_shipment"
                                            value={document.credit_latest_date_of_shipment}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Customs Entry Point</label>
                                        <input
                                            type="text"
                                            name="customs_entry_point"
                                            value={document.customs_entry_point}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Intransit to</label>
                                        <input
                                            type="text"
                                            name="intransit_to"
                                            value={document.intransit_to}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Shipment Period</label>
                                        <input
                                            type="text"
                                            name="credit_shipment_period"
                                            value={document.credit_shipment_period}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Period for presentation</label>
                                        <input
                                            type="date"
                                            name="credit_period_of_presentation"
                                            value={document.credit_period_of_presentation}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">House Airway bill allowed</label>
                                        <select
                                            name="credit_house_airway"
                                            value={document.credit_house_airway}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        >
                                            <option value="">Select an option...</option>
                                            <option value="Option 1">Yes</option>
                                            <option value="Option 2">No</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">Non Conference line Shipment allowed</label>
                                        <select
                                            name="credit_non_conference_line"
                                            value={document.credit_non_conference_line}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        >
                                            <option value="">Select an option...</option>
                                            <option value="Option 1">Yes</option>
                                            <option value="Option 2">No</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">On Deck Shipment allowed</label>
                                        <select
                                            name="on_deck_shipment_allowed"
                                            value={document.on_deck_shipment_allowed}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg p-3 w-full"
                                        >
                                            <option value="">Select an option...</option>
                                            <option value="Option 1">Yes</option>
                                            <option value="Option 2">No</option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                                <h3 className='text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>Credit Available with</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    {["Payment", "Negotiation", "Acceptance", "Deferred Payment", "Mixed Payment"].map((option, index) => (
                                        <div className="flex items-center" key={index}>
                                            <input
                                                type="radio"
                                                id={option.toLowerCase()}
                                                name="credit_available_with_check_session"
                                                value={option}
                                                onChange={handleChange}
                                                className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                            />
                                            <label htmlFor={option.toLowerCase()} className="ml-2">{option}</label>
                                        </div>
                                    ))}
                                </div>

                                <h3 className='text-xl font-semibold mb-4 mt-10 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>Tenor</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    {["Deferred ", "Mixed ", "Sight", "Usance", "Days / Months"].map((option, index) => (
                                        <div className="flex items-center" key={index}>
                                            <input
                                                type="radio"
                                                id={option.toLowerCase()}
                                                name="tenor_section"
                                                value={option}
                                                onChange={handleChange}
                                                className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                            />
                                            <label htmlFor={option.toLowerCase()} className="ml-2">{option}</label>
                                        </div>
                                    ))}
                                </div>

                                <h3 className='text-xl font-semibold mb-4 mt-10 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>Due Date Indicator</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    {["Lodge Date ", "Shipment Date ", "Bill date", "Acceptance Date", "Invoice Date", "Others"].map((option, index) => (
                                        <div className="flex items-center" key={index}>
                                            <input
                                                type="radio"
                                                id={option.toLowerCase()}
                                                name="due_date_indicator_section"
                                                value={option}
                                                onChange={handleChange}
                                                className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                            />
                                            <label htmlFor={option.toLowerCase()} className="ml-2">{option}</label>
                                        </div>
                                    ))}
                                </div>

                                <h3 className='text-xl font-semibold mb-4 mt-10 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>Partial Shipment</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    {["Allow", "Not Allowed", "Conditional"].map((option, index) => (
                                        <div className="flex items-center" key={index}>
                                            <input
                                                type="radio"
                                                id={option.toLowerCase()}
                                                name="partial_shipment_section"
                                                value={option}
                                                onChange={handleChange}
                                                className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                            />
                                            <label htmlFor={option.toLowerCase()} className="ml-2">{option}</label>
                                        </div>
                                    ))}
                                </div>

                                <h3 className='text-xl font-semibold mb-4 mt-10 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>Transhipment</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    {["Allow ", "Not Allowed", "Conditional"].map((option, index) => (
                                        <div className="flex items-center" key={index}>
                                            <input
                                                type="radio"
                                                id={option.toLowerCase()}
                                                name="transhipment_section"
                                                value={option}
                                                onChange={handleChange}
                                                className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                            />
                                            <label htmlFor={option.toLowerCase()} className="ml-2">{option}</label>
                                        </div>
                                    ))}
                                </div>


                                <h3 className='text-xl font-semibold mb-4 mt-10 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>Shipment Mode</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    {["Road ", "Rail", "Sea", "Air", "Courier", "Others"].map((option, index) => (
                                        <div className="flex items-center" key={index}>
                                            <input
                                                type="radio"
                                                id={option.toLowerCase()}
                                                name="shipment_mode_section"
                                                value={option}
                                                onChange={handleChange}
                                                className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                            />
                                            <label htmlFor={option.toLowerCase()} className="ml-2">{option}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </form>
                    )}
                </div>
            </div>
        </div >
    );
};
Details.propTypes = {
    document: PropTypes.shape({
        applicant_name: PropTypes.string,
        applicant_email: PropTypes.string,
        applicant_address: PropTypes.string,
        applicant_phone: PropTypes.string,
        applicant_postal_code: PropTypes.string,
        applicant_country: PropTypes.string,
        account_number: PropTypes.string,
        applicant_exim_code: PropTypes.string,


        beneficiary_name: PropTypes.string,
        beneficiary_account_number: PropTypes.string,
        country: PropTypes.string,
        benePanCardNo: PropTypes.string,
        beneficiary_address_1: PropTypes.string,
        beneficiary_address_2: PropTypes.string,
        beneficiary_address_3: PropTypes.string,
        phone_number: PropTypes.string,
        email: PropTypes.string,
        mobile_code: PropTypes.string,
        exim_code: PropTypes.string,
        pan_no: PropTypes.string,

        form_of_documentary_credit: PropTypes.string,
        date_of_issue: PropTypes.string,
        applicable_rules: PropTypes.string,
        lctransferable: PropTypes.string,
        lcrevolving: PropTypes.string,
        lc_transferred_to: PropTypes.string,
        date_of_expiry: PropTypes.string,
        place_of_expire: PropTypes.string,
        amount_amount: PropTypes.number,
        tolerance_positive: PropTypes.string,
        tolerance_negative: PropTypes.string,
        add_amount_covered: PropTypes.number,
        ref_to_pre_advice: PropTypes.string,
        transferable_lc: PropTypes.string,

        credit_bank_name: PropTypes.string,
        credit_swift_code: PropTypes.string,
        credit_any_bank: PropTypes.string,
        beneficiary_drafts_at: PropTypes.string,
        credit_drawee: PropTypes.string,
        credit_mixed_payment: PropTypes.string,
        deferredPaymentDetails: PropTypes.string,
        place_of_taking_in_charge: PropTypes.string,
        credit_port_of_loading: PropTypes.string,
        credit_port_of_discharge: PropTypes.string,
        credit_place_of_destination: PropTypes.string,
        credit_latest_date_of_shipment: PropTypes.string,
        customs_entry_point: PropTypes.string,
        intransit_to: PropTypes.string,
        credit_shipment_period: PropTypes.string,
        credit_period_of_presentation: PropTypes.string,
        credit_house_airway: PropTypes.string,
        credit_non_conference_line: PropTypes.string,
        on_deck_shipment_allowed: PropTypes.string,

        description_goods: PropTypes.string,
        type_of_goods: PropTypes.string,
        hs_code: PropTypes.string,
        description_license_code: PropTypes.string,
        description_license_description: PropTypes.string,
        quality: PropTypes.string,
        description_unit_price: PropTypes.string,
        description_amount: PropTypes.string,
        description_capital_goods: PropTypes.string,
        description_delivery_terms: PropTypes.string,
        description_place: PropTypes.string,
        cif: PropTypes.string,
        fob: PropTypes.string,
        incoterms: PropTypes.string,
        covered_by_details: PropTypes.string,
        insurance_no: PropTypes.string,
        insurance_policy_no: PropTypes.string,
        insurance_details_amount: PropTypes.string,
        insurance_company_name: PropTypes.string,
        insurance_details_expiry: PropTypes.string,
        insurance_details_premium_amount: PropTypes.string,
        insurance_details_paid_date: PropTypes.string,
        proforma_reference_number: PropTypes.string,
        proforma_date: PropTypes.string,
        proforma_valid_until: PropTypes.string,
        proforma_origin_of_goods: PropTypes.string,

        confirmation_instruction: PropTypes.string,
        confirming_bank: PropTypes.string,
        confirming_swift_code: PropTypes.string,
        confirmation_charges: PropTypes.string,
        other_charges_outside_country: PropTypes.string,
        advisingBankName: PropTypes.string,
        advisingSWIFT: PropTypes.string,
        advising_bank_charges: PropTypes.string,
        bank_name: PropTypes.string,
        advising_swift_code: PropTypes.string,
        advisingBankschargesifany: PropTypes.string,
        direct_reimbursement: PropTypes.string,
    }),
    handleChange: PropTypes.func,
    decreaseFormStep: PropTypes.func,
};

export default Details;