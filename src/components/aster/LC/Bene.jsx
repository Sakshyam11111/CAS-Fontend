import { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';

const Bene = ({ data, handleChange, increaseFormStep, decreaseFormStep }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-screen flex flex-col">
            <div className="bg-white shadow-md" data-aos="fade-down">
                <div className="flex items-center p-4">
                    <button
                        onClick={() => decreaseFormStep(0)}
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
                    <div className="mb-0">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">1</div>
                            <div className="ml-4 text-black text-lg">Applicant Details</div>
                        </div>
                        <div className="border-l-2 border-gray-300 h-10" />
                    </div>
                    <div className="mb-0">
                        <div className="flex items-center">
                            <div className="w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center"></div>
                            <div className="ml-4 text-gray-400 text-lg">Name and address</div>
                        </div>
                        <div className="border-l-2 border-gray-300 h-10" />
                    </div>
                    <div className="mb-5">
                        <div className="flex items-center">
                            <div className="w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center"></div>
                            <div className="ml-4 text-gray-800 text-lg">Beneficiary Details</div>
                        </div>
                        <div className="border-l-2 border-gray-300 h-10" />
                    </div>
                    <div className="mb-5">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">2</div>
                            <div className="ml-4 text-black text-lg">Mode Of Transmission</div>
                        </div>
                        <div className="border-l-2 border-gray-300 h-10" />
                    </div>
                    <div className="mb-5">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">3</div>
                            <div className="ml-4 text-black text-lg">Tenure/Payment Terms</div>
                        </div>
                        <div className="border-l-2 border-gray-300 h-10" />
                    </div>
                    <div className="mb-5">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">4</div>
                            <div className="ml-4 text-black text-lg">Transshipment</div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-3/4" data-aos="fade-left">
                    <form className="bg-white p-6 rounded-lg shadow-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                            <div>
                                <label className="block font-semibold mb-4">Name</label>
                                <input
                                    type="text"
                                    name="beneFirstName"
                                    value={data.beneFirstName}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-3 w-full"
                                    placeholder="First name"
                                />
                            </div>
                            <div className='mt-10'>
                                <input
                                    type="text"
                                    name="benePanCardNo"
                                    value={data.benePanCardNo}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-3 w-full"
                                    placeholder="PAN card no."
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="beneLastName"
                                    value={data.beneLastName}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-3 w-full"
                                    placeholder="Last name"
                                />
                            </div>
                        </div>

                        <h3 className="text-lg font-semibold mb-4">Address</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                            <div>
                                <input
                                    type="text"
                                    name="beneAddressLine"
                                    value={data.beneAddressLine}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-3 w-full"
                                    placeholder="Address line"
                                />
                            </div>
                            <div>
                                <label className="block font-semibold mb-4">Phone Number</label>
                                <input
                                    type="text"
                                    name="benePhoneNumber"
                                    value={data.benePhoneNumber}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-3 w-full"
                                    placeholder="e.g. +977 123-456-789"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                            <div>
                                <input
                                    type="text"
                                    name="beneCity"
                                    value={data.beneCity}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-3 w-full"
                                    placeholder="City"
                                />
                            </div>
                        </div>

                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                onClick={() => decreaseFormStep(0)}
                                className="bg-green-600 text-white rounded-lg px-10 py-3 hover:bg-green-700 transition duration-200"
                            >
                                ← Back
                            </button>

                            <button
                                type="button"
                                onClick={() => increaseFormStep(1)}
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


Bene.propTypes = {
    data: PropTypes.shape({
        beneFirstName: PropTypes.string.isRequired,
        beneLastName: PropTypes.string.isRequired,
        benePanCardNo: PropTypes.string.isRequired,
        beneAddressLine: PropTypes.string,
        benePhoneNumber: PropTypes.string,
        beneCity: PropTypes.string,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    increaseFormStep: PropTypes.func.isRequired,
    decreaseFormStep: PropTypes.func.isRequired,
};

export default Bene;