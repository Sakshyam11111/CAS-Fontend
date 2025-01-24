import { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';

const Mode = ({ data, handleChange, increaseFormStep, decreaseFormStep }) => {


    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-screen flex flex-col">


            <div className="bg-white shadow-md" data-aos="fade-down">
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
                    <div className='sticky top-0 left-0'>


                        <h3 className="text-lg font-semibold mb-4">Steps</h3>
                        {/* Step indicators */}
                        <div className="mb-5">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">1</div>
                                <div className="ml-4 text-black text-lg">Applicant Details</div>
                            </div>
                            <div className="border-l-2 border-gray-300 h-10" />
                        </div>
                        <div className="mb-5">
                            <div className="flex items-center">
                                <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center"></div>
                                <div className="ml-4 text-black text-lg">Name and Address</div>
                            </div>
                            <div className="border-l-2 border-gray-300 h-10" />
                        </div>
                        <div className="mb-5">
                            <div className="flex items-center">
                                <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center"></div>
                                <div className="ml-4 text-black text-lg">Beneficiary Details</div>
                            </div>
                            <div className="border-l-2 border-gray-300 h-10" />
                        </div>
                        <div className="mb-5">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">2</div>
                                <div className="ml-4 text-black text-lg">Mode Of Transmission</div>
                            </div>
                            <div className="border-l-2 border-gray-300 h-10" />
                        </div>
                        <div className="mb-5">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">3</div>
                                <div className="ml-4 text-gray-400 text-lg">Tenure/Payment Terms</div>
                            </div>
                            <div className="border-l-2 border-gray-300 h-10" />
                        </div>
                        <div className="mb-5">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">4</div>
                                <div className="ml-4 text-gray-400 text-lg">Transshipment</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-3/4" data-aos="fade-left">
                    <form className="bg-white p-6 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-lg mb-2">By Tele Transmission</label>
                            <div className="grid grid-cols-2 gap-4">
                                {["NEP", "EURO", "INR", "SGD", "USD", "JYP", "AUD"].map((mode, index) => (
                                    <div className="flex items-center mb-2" key={index}>
                                        <input
                                            type="radio"
                                            id={mode.toLowerCase()}
                                            name="transmissionMode"
                                            value={mode}
                                            onChange={handleChange}
                                            className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                        />
                                        <label htmlFor={mode.toLowerCase()} className="ml-2">{mode}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="mb-4 mt-4">
                                <label className="block text-gray-700 mb-2">Percentage</label>
                                <input
                                    type="text"
                                    name="modePercentage"
                                    value={data.modePercentage}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-3 w-full"
                                    placeholder="%"
                                />
                            </div>

                            <div className="mb-4 mt-4">
                                <label className="block text-gray-700 mb-2">Inco Terms</label>
                                <select
                                    name="modeIncoterms"
                                    value={data.modeIncoterms}
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

                        <h3 className='mb-5 mt-8 text-lg'>Currency and Amount</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Currency</label>
                                <select
                                    name="modeCurrency"
                                    value={data.modeCurrency}
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

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Delivery Term</label>
                                <input
                                    type="text"
                                    name="modeDeliveryTerm"
                                    value={data.modeDeliveryTerm}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-3 w-full"
                                    placeholder="terms..."
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Amount</label>
                                <input
                                    type="text"
                                    name="modeAmount"
                                    value={data.modeAmount}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-3 w-full"
                                    placeholder="Rs."
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Name Placed</label>
                                <input
                                    type="text"
                                    name="modeNamePlaced"
                                    value={data.modeNamePlaced}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-3 w-full"
                                    placeholder="place"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Tolerance</label>
                                <select
                                    name="modeTolerance"
                                    value={data.modeTolerance}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-3 w-full"
                                >
                                    <option value="">Please select your tolerance.</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
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

Mode.propTypes = {
    data: PropTypes.shape({
        modePercentage: PropTypes.string.isRequired,
        modeIncoterms: PropTypes.string.isRequired,
        modeCurrency: PropTypes.string.isRequired,
        modeDeliveryTerm: PropTypes.string.isRequired,
        modeAmount: PropTypes.string.isRequired,
        modeNamePlaced: PropTypes.string.isRequired,
        modeTolerance: PropTypes.string.isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    increaseFormStep: PropTypes.func.isRequired,
    decreaseFormStep: PropTypes.func.isRequired,
};
export default Mode;