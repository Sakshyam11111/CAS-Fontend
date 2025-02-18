import { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const Trans = ({ data, handleChange, increaseFormStep, decreaseFormStep }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-screen flex flex-col">
            <div className="sticky top-16 left-0 bg-white z-10 shadow-md">
                <div className="flex items-center p-4">
                    <button
                        onClick={() => decreaseFormStep(3)}
                        className="border border-gray-300 rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition duration-200"
                    >
                        <IoIosArrowBack className="text-gray-600" />
                    </button>
                    <h2 className="text-xl md:text-2xl font-bold ml-4">Customer Verification</h2>
                </div>
            </div>

            <div className="flex flex-col md:flex-row mt-4">
                <div className="w-full md:w-1/4 mb-4 md:mr-8" data-aos="fade-right">
                    <div className="sticky top-0 left-0">
                        <h3 className="text-lg font-semibold mb-4">Steps</h3>
                        <div className="mb-5">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">1</div>
                                <div className="ml-4 text-black text-lg">Applicant Details</div>
                                <IoCheckmarkCircleOutline className="ml-4 text-2xl text-green-600" />
                            </div>
                            <div className="border-l-2 border-gray-300 h-10" />
                        </div>
                        <div className="mb-5">
                            <div className="flex items-center">
                                <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center"></div>
                                <div className="ml-4 text-black text-lg">Name and Address</div>
                                <IoCheckmarkCircleOutline className="ml-4 text-2xl text-green-600" />
                            </div>
                            <div className="border-l-2 border-gray-300 h-10" />
                        </div>
                        <div className="mb-5">
                            <div className="flex items-center">
                                <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center"></div>
                                <div className="ml-4 text-black text-lg">Beneficiary Details</div>
                                <IoCheckmarkCircleOutline className="ml-4 text-2xl text-green-600" />
                            </div>
                            <div className="border-l-2 border-gray-300 h-10" />
                        </div>
                        <div className="mb-5">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">2</div>
                                <div className="ml-4 text-black text-lg">LC Details</div>
                                <IoCheckmarkCircleOutline className="ml-4 text-2xl text-green-600" />
                            </div>
                            <div className="border-l-2 border-gray-300 h-10" />
                        </div>
                        <div className="mb-5">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">3</div>
                                <div className="ml-4 text-black text-lg">Associated Parties</div>
                                <IoCheckmarkCircleOutline className="ml-4 text-2xl text-green-600" />
                            </div>
                            <div className="border-l-2 border-gray-300 h-10" />
                        </div>
                        <div className="mb-5">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">4</div>
                                <div className="ml-4 text-black text-lg">Description</div>
                            </div>
                            <div className="border-l-2 border-gray-300 h-10" />
                        </div>
                        <div className="mb-5">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">5</div>
                                <div className="ml-4 text-gray-400 text-lg">Credit</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="w-full md:w-3/4" data-aos="fade-left">
                    <form className="bg-white p-6 rounded-lg shadow-md">
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
                                        type="number"
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
                                        type="number"
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
                                        name="insurance_details_paid_date"
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

                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                onClick={() => decreaseFormStep(3)}
                                className="bg-green-600 text-white rounded-lg px-10 py-3 hover:bg-green-700 transition duration-200"
                            >
                                ← Back
                            </button>

                            <button
                                type="button"
                                onClick={() => increaseFormStep(5)}
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

Trans.propTypes = {
    data: PropTypes.shape({
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
    }),
    handleChange: PropTypes.func,
    increaseFormStep: PropTypes.func,
    decreaseFormStep: PropTypes.func,
};

export default Trans;