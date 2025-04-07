import { useEffect } from 'react';
import PropTypes from 'prop-types';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Preview = ({ data, handleChange, updateCurrent }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    return (
        <div className="w-full mx-auto" data-aos="fade-left">
            <form className="bg-white p-6 rounded-lg shadow-md mt-10 mb-10">
                {/* Applicant details */}
                <div className="w-full" data-aos="fade-left">
                    <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                        <h3 className='text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>Applicant Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                            <div>
                                <h1>Name</h1>
                                <input
                                    type="text"
                                    name="Name"
                                    value={data.applicant_name}
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
                                    value={data.applicant_email}
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
                                    value={data.applicant_address}
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
                                    value={data.applicant_phone}
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
                                    value={data.applicant_postal_code}
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
                                    value={data.applicant_country}
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
                                    value={data.account_number}
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
                                    value={data.applicant_exim_code}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-3 w-full"
                                    placeholder=""
                                />
                            </div>
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
                                value={data.beneficiary_name}
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
                                value={data.beneficiary_account_number}
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
                                value={data.country}
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
                                value={data.beneficiary_address_1}
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
                                value={data.beneficiary_address_2}
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
                                value={data.beneficiary_address_3}
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
                                value={data.email}
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
                                value={data.mobile_code}
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
                                value={data.phone_number}
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
                                value={data.exim_code}
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
                                value={data.pan_no}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                                placeholder=""
                            />
                        </div>
                    </div>
                </div>

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
                                value={data.form_of_documentary_credit}
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
                                value={data.date_of_issue}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Applicable Rules</label>
                            <select
                                name="applicable_rules"
                                value={data.applicable_rules}
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
                                value={data.ref_to_pre_advice}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Transferable</label>
                            <select
                                name="lctransferable"
                                value={data.lctransferable}
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
                                value={data.lc_transferred_to}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Revolving</label>
                            <select
                                name="lcrevolving"
                                value={data.lcrevolving}
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
                                value={data.date_of_expiry}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>


                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Place of Expiry</label>
                            <input
                                type="text"
                                name="place_of_expire"
                                value={data.place_of_expire}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Amount</label>
                            <input
                                type="number"
                                name="amount_amount"
                                value={data.amount_amount}
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
                                value={data.tolerance_positive}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Tolerance Negative</label>
                            <input
                                type="text"
                                name="tolerance_negative"
                                value={data.tolerance_negative}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Add Amount Covered</label>
                            <input
                                type="number"
                                name="add_amount_covered"
                                value={data.add_amount_covered}
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
                                value={data.confirmation_instruction}
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
                                value={data.confirming_bank}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Swift code</label>
                            <input
                                type="number"
                                name="confirming_swift_code"
                                value={data.confirming_swift_code}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Confirmation Charges</label>
                            <select
                                name="confirmation_charges"
                                value={data.confirmation_charges}
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
                                value={data.other_charges_outside_country}
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
                                value={data.advisingBankName}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">SWIFT Code</label>
                            <input
                                type="number"
                                name="advisingSWIFT"
                                value={data.advisingSWIFT}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Advising Banks Charges</label>
                            <select
                                name="advising_bank_charges"
                                value={data.advising_bank_charges}
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
                                value={data.bank_name}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">SWIFT Code</label>
                            <input
                                type="number"
                                name="advising_swift_code"
                                value={data.advising_swift_code}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Advising Banks Charges</label>
                            <select
                                name="advisingBankschargesifany"
                                value={data.advisingBankschargesifany}
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
                                value={data.direct_reimbursement}
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
                                value={data.description_goods}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Type of Goods</label>
                            <input
                                type="text"
                                name="type_of_goods"
                                value={data.type_of_goods}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">HS Code</label>
                            <input
                                type="text"
                                name="hs_code"
                                value={data.hs_code}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">License Code</label>
                            <input
                                type="text"
                                name="description_license_code"
                                value={data.description_license_code}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">License Description</label>
                            <input
                                type="text"
                                name="description_license_description"
                                value={data.description_license_description}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Quanity</label>
                            <input
                                type="number"
                                name="quality"
                                value={data.quality}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Unit Price</label>
                            <input
                                type="text"
                                name="description_unit_price"
                                value={data.description_unit_price}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Amount</label>
                            <input
                                type="text"
                                name="description_amount"
                                value={data.description_amount}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Capital Goods</label>
                            <select
                                name="description_capital_goods"
                                value={data.description_capital_goods}
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
                                value={data.description_delivery_terms}
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
                                value={data.description_place}
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
                                value={data.covered_by_details}
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
                                value={data.insurance_no}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Policy No.</label>
                            <input
                                type="text"
                                name="insurance_policy_no"
                                value={data.insurance_policy_no}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Insured Amount</label>
                            <input
                                type="text"
                                name="insurance_details_amount"
                                value={data.insurance_details_amount}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Company Name</label>
                            <input
                                type="text"
                                name="insurance_company_name"
                                value={data.insurance_company_name}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Expiry</label>
                            <input
                                type="date"
                                name="insurance_details_expiry"
                                value={data.insurance_details_expiry}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Premium Amount</label>
                            <input
                                type="text"
                                name="insurance_details_premium_amount"
                                value={data.insurance_details_premium_amount}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Paid Date</label>
                            <input
                                type="date"
                                name="paidDate"
                                value={data.insurance_details_paid_date}
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
                                value={data.proforma_reference_number}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Date</label>
                            <input
                                type="date"
                                name="proforma_date"
                                value={data.proforma_date}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Valid Until</label>
                            <input
                                type="date"
                                name="proforma_valid_until"
                                value={data.proforma_valid_until}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Origin of Goods</label>
                            <select
                                name="proforma_origin_of_goods"
                                value={data.proforma_origin_of_goods}
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
                                value={data.credit_bank_name}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Swift Code</label>
                            <input
                                type="text"
                                name="credit_swift_code"
                                value={data.credit_swift_code}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Any Bank</label>
                            <input
                                type="number"
                                name="credit_any_bank"
                                value={data.credit_any_bank}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Beneficiary Drafts at</label>
                            <select
                                name="beneficiary_drafts_at"
                                value={data.beneficiary_drafts_at}
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
                                value={data.credit_drawee}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Mixed Payment Details</label>
                            <input
                                type="text"
                                name="credit_mixed_payment"
                                value={data.credit_mixed_payment}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Place of taking in charge/dispatch</label>
                            <input
                                type="text"
                                name="place_of_taking_in_charge"
                                value={data.place_of_taking_in_charge}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Port of loading</label>
                            <input
                                type="text"
                                name="credit_port_of_loading"
                                value={data.credit_port_of_loading}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Port of discharge</label>
                            <input
                                type="text"
                                name="credit_port_of_discharge"
                                value={data.credit_port_of_discharge}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Place of final destination</label>
                            <input
                                type="text"
                                name="credit_place_of_destination"
                                value={data.credit_place_of_destination}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Latest date of Shipment</label>
                            <input
                                type="date"
                                name="credit_latest_date_of_shipment"
                                value={data.credit_latest_date_of_shipment}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Customs Entry Point</label>
                            <input
                                type="text"
                                name="customs_entry_point"
                                value={data.customs_entry_point}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Intransit to</label>
                            <input
                                type="text"
                                name="intransit_to"
                                value={data.intransit_to}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Shipment Period</label>
                            <input
                                type="text"
                                name="credit_shipment_period"
                                value={data.credit_shipment_period}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Period for presentation</label>
                            <input
                                type="date"
                                name="credit_period_of_presentation"
                                value={data.credit_period_of_presentation}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">House Airway bill allowed</label>
                            <select
                                name="credit_house_airway"
                                value={data.credit_house_airway}
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
                                value={data.credit_non_conference_line}
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
                                value={data.on_deck_shipment_allowed}
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

                {/* Submit Button */}
                <div className="flex justify-end mt-4">
                    <button
                        type="button"
                        onClick={() => updateCurrent("Submit")}
                        className="bg-green-600 text-white rounded-lg px-8 py-3 hover:bg-green-700 transition duration-200"
                    >
                        Continue →
                    </button>
                </div>
            </form>
        </div>
    );
};

Preview.propTypes = {
    data: PropTypes.shape({
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

        LCdetailsPercentage: PropTypes.string,
        LCdetailsIncoterms: PropTypes.string,
        LCdetailsCurrency: PropTypes.string,
        LCdetailsDeliveryTerm: PropTypes.string,
        LCdetailsAmount: PropTypes.string,
        LCdetailsNamePlaced: PropTypes.string,
        LCdetailsTolerance: PropTypes.string,
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
    updateCurrent: PropTypes.func,
};

export default Preview;