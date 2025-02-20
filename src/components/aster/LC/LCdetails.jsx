import { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const LCDetails = ({ data, handleChange, increaseFormStep, decreaseFormStep }) => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    console.log(typeof (data.amount_amount));

    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-screen flex flex-col ">
            <div className="bg-white z-10 shadow-md">
                <div className="flex items-center p-4">
                    <button
                        onClick={() => decreaseFormStep(1)}
                        className="border border-gray-300 rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition duration-200"
                    >
                        <IoIosArrowBack className="text-gray-600" />
                    </button>
                    <h2 className="text-xl md:text-2xl font-bold ml-4">Customer Verification</h2>
                </div>
            </div>

            <div className="flex flex-col md:flex-row mt-4">
                <div className=" w-full md:w-1/4 mb-4 md:mr-8" data-aos="fade-right">
                    <div className="sticky top-0 left-0">
                        <h3 className="text-lg font-semibold mb-4">Steps</h3>
                        {/* Step indicators */}
                        <div className="mb-5">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">1</div>
                                <div className="ml-4 text-black text-lg flex items-center">
                                    Applicant Details
                                    <IoCheckmarkCircleOutline className="ml-4 text-2xl text-green-600" />
                                </div>
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
                                <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">2</div>
                                <div className="ml-4 text-black text-lg">LC Details</div>
                            </div>
                            <div className="border-l-2 border-gray-300 h-10" />
                        </div>
                        <div className="mb-5">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">3</div>
                                <div className="ml-4 text-gray-400 text-lg">Associated Parties</div>
                            </div>
                            <div className="border-l-2 border-gray-300 h-10" />
                        </div>
                        <div className="mb-5">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">4</div>
                                <div className="ml-4 text-gray-400 text-lg">Description</div>
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

                <div className="w-full md:w-3/4" data-aos="fade-left">
                    <form className="bg-white p-6 rounded-lg shadow-md">
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
                                        name="transferable_lc"
                                        value={data.transferable_lc}
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
                                        value={Number(data.amount_amount)}
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

                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                onClick={() => decreaseFormStep(1)}
                                className="bg-green-600 text-white rounded-lg px-10 py-3 hover:bg-green-700 transition duration-200"
                            >
                                ← Back
                            </button>

                            <button
                                type="button"
                                onClick={() => increaseFormStep(3)}
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



LCDetails.propTypes = {
    data: PropTypes.shape({
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
    }),
    handleChange: PropTypes.func,
    increaseFormStep: PropTypes.func,
    decreaseFormStep: PropTypes.func,
};
export default LCDetails;