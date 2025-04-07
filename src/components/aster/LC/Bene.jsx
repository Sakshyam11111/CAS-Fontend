import { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';


const Bene = ({ data, handleChange, updateCurrent }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    return (
        <div className="p-4 md:p-8 bg-gray-50 flex flex-col">
            <div className="bg-white z-10 shadow-md">
                <div className="flex items-center p-4">
                    <button
                        onClick={() => updateCurrent("Apply")}
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
                                        name="beneficiary_address_1"
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
                                        name="beneficiary_address_2"
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
                                        name="beneficiary_address_3"
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
                                        name="mobile_code"
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
                                        placeholder="+977-"
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
                                        type="text"
                                        name="pan_no"
                                        value={data.pan_no}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                onClick={() => updateCurrent("Apply")}
                                className="bg-green-600 text-white rounded-lg px-10 py-3 hover:bg-green-700 transition duration-200"
                            >
                                ← Back
                            </button>

                            <button
                                type="button"
                                onClick={() => updateCurrent("LCDetails")}
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
    }),
    handleChange: PropTypes.func,
    updateCurrent: PropTypes.func,
};

export default Bene;