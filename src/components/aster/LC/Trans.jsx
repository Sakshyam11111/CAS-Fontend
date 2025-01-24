import { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';

const Trans = ({ data, handleChange, increaseFormStep, decreaseFormStep }) => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    Trans.propTypes = {
        data: PropTypes.shape({
            customEntryPoint: PropTypes.string.isRequired,
            shipmentFrom: PropTypes.string.isRequired,
            departurePort: PropTypes.string.isRequired,
            otherDetails: PropTypes.string,
            shipmentDetails: PropTypes.string.isRequired,
        }).isRequired,
        handleChange: PropTypes.func.isRequired,
        increaseFormStep: PropTypes.func.isRequired,
        decreaseFormStep: PropTypes.func.isRequired,
    };

    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-screen flex flex-col">
            <div className="bg-white shadow-md" data-aos="fade-down">
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
                    <h3 className="text-lg font-semibold mb-4">Steps</h3>
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
                            <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">2</div>
                            <div className="ml-4 text-black text-lg">Mode Of Transmission</div>
                        </div>
                        <div className="border-l-2 border-gray-300 h-10" />
                    </div>
                    <div className="mb-5">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">3</div>
                            <div className="ml-4 text-black text-lg">Tenure/Payment Terms</div>
                        </div>
                        <div className="border-l-2 border-gray-300 h-10" />
                    </div>
                    <div className="mb-5">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">4</div>
                            <div className="ml-4 text-black text-lg">Transshipment</div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-3/4" data-aos="fade-left">
                    <form className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className='mb-5 text-lg'>Partial Payments</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <div className="mb-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        {["Installment", "Prorated", "Balloon", "Split"].map((paymentType, index) => (
                                            <div className="flex items-center mb-2" key={index}>
                                                <input
                                                    type="radio"
                                                    id={paymentType.toLowerCase()}
                                                    name="partialPayments"
                                                    value={paymentType}
                                                    onChange={handleChange}
                                                    className="h-6 w-6 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                                />
                                                <label htmlFor={paymentType.toLowerCase()} className="ml-2">{paymentType}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className='mb-5 text-lg'>Custom Entry Point in Nepal</h3>
                                <select
                                    name="customEntryPoint"
                                    value={data.customEntryPoint}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                >
                                    <option value="">Select the custom entry point...</option>
                                </select>
                            </div>
                        </div>

                        <h3 className='mb-5 text-lg'>Shipment Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-gray-700 text-lg mb-2">Shipment From</label>
                                <input
                                    type="text"
                                    name="shipmentFrom"
                                    value={data.shipmentFrom}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                    placeholder="Shipment industry name..."
                                />
                                
                                <label className="block text-gray-700 text-lg mb-2">Port of loading/airport of departure</label>
                                <input
                                    type="text"
                                    name="departurePort"
                                    value={data.departurePort}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                    placeholder="Departure name..."
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-lg mb-2">If other (Specify)</label>
                                <input
                                    type="text"
                                    name="otherDetails"
                                    value={data.otherDetails}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                    placeholder="Details..."
                                />
                                
                                <label className="block text-gray-700 text-lg mb-2">Expiry/shipment details</label>
                                <input
                                    type="text"
                                    name="shipmentDetails"
                                    value={data.shipmentDetails}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                                    placeholder="Shipment industry name..."
                                />
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


export default Trans;