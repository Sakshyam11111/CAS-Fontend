import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const Submit = ({ increaseFormStep, decreaseFormStep, handleSubmit }) => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-screen flex flex-col">
            <div className="sticky top-16 left-0 bg-white z-10 shadow-md">
                <div className="flex items-center p-4">
                    <button
                        onClick={() => decreaseFormStep(4)}
                        className="border border-gray-300 rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition duration-200"
                    >
                        <IoIosArrowBack className="text-gray-600" />
                    </button>
                    <h2 className="text-xl md:text-2xl font-bold ml-4">Customer Verification</h2>
                </div>
            </div>

            <div className="flex flex-col md:flex-row mt-4">
                <div className="w-full md:w-1/4 mb-4 md:mr-8" data-aos="fade-right">
                    <div className='sticky top-0 left-0'>
                        <h3 className="text-lg font-semibold mb-4">Steps</h3>
                        {/* Step Indicators */}
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
                                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">4</div>
                                <div className="ml-4 text-black text-lg">Description</div>
                                <IoCheckmarkCircleOutline className="ml-4 text-2xl text-green-600" />
                            </div>
                            <div className="border-l-2 border-gray-300 h-10" />
                        </div>
                        <div className="mb-5">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">5</div>
                                <div className="ml-4 text-black text-lg">Credit</div>
                                <IoCheckmarkCircleOutline className="ml-4 text-2xl text-green-600" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-3/4" data-aos="fade-left">
                    <form className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className='mb-5 text-lg'>Overview</h3>
                        <div className="mb-10 border border-red-600 text-red-600 p-4 rounded hover:bg-red-100 hover:border-red-500 transition duration-200">
                            <p>Are you sure you want to submit?</p>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                onClick={() => increaseFormStep(6)}
                                className="bg-gray-800 text-white rounded-lg px-4 py-2 hover:bg-gray-700 transition duration-200"
                            >
                                ← Preview
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    handleSubmit();
                                    // navigate('/lc');
                                }}
                                className="bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition duration-200"
                            >
                                Submit →
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
Submit.propTypes = {
    increaseFormStep: PropTypes.func.isRequired,
    decreaseFormStep: PropTypes.func.isRequired,
};

export default Submit;