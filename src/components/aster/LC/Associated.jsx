import { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';

const Associated = ({ data, handleChange, updateCurrent }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    return (
        <div className="p-4 md:p-8 bg-gray-50 flex flex-col">
            <div className="bg-white z-10 shadow-md">
                <div className="flex items-center p-4">
                    <button
                        onClick={() => updateCurrent("LCDetails")}
                        className="border border-gray-300 rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition duration-200"
                    >
                        <IoIosArrowBack className="text-gray-600" />
                    </button>
                    <h2 className="text-xl md:text-2xl font-bold ml-4">Customer Verification</h2>
                </div>
            </div>

            <div className="flex flex-col md:flex-row mt-4">
                <div className="w-full" data-aos="fade-left">
                    <form className="bg-white p-6 rounded-lg shadow-md">
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

                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                onClick={() => updateCurrent("LCDetails")}
                                className="bg-green-600 text-white rounded-lg px-10 py-3 hover:bg-green-700 transition duration-200"
                            >
                                ← Back
                            </button>

                            <button
                                type="button"
                                onClick={() => updateCurrent("Description")}
                                className="bg-green-600 text-white rounded-lg px-8 py-3 hover:bg-green-700 transition duration-200"
                            >
                                Continue →
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

Associated.propTypes = {
    data: PropTypes.shape({
        confirmation_instruction: PropTypes.string,
        confirming_bank: PropTypes.string,
        confirming_swift_code: PropTypes.string,
        confirmation_charges: PropTypes.string,
        other_charges_outside_country: PropTypes.string,
        bank_name: PropTypes.string,
        advising_swift_code: PropTypes.string,
        advising_bank_charges: PropTypes.string,
        direct_reimbursement: PropTypes.string,
    }),
    handleChange: PropTypes.func,
    updateCurrent: PropTypes.func,
};

export default Associated;