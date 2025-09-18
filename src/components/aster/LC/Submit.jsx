import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';

const Submit = ({ data, updateCurrent }) => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    const handleSubmit = () => {
        // Logic to submit the data (if needed)
        console.log("Submitting data: ", data);

        // Navigate to the LC page
        navigate('/lc');
    };

    return (
        <div className="p-4 md:p-8 bg-gray-50 flex flex-col">
            <div className="sticky top-16 left-0 bg-white z-10 shadow-md">
                <div className="flex items-center p-4">
                    <button
                        onClick={() => updateCurrent("Credit")}
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
                        <h3 className='mb-5 text-lg'>Overview</h3>
                        <div className="mb-10 border border-red-600 text-red-600 p-4 rounded hover:bg-red-100 hover:border-red-500 transition duration-200">
                            <p>Are you sure you want to submit?</p>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                onClick={() => updateCurrent("Preview")}
                                className="bg-gray-800 text-white rounded-lg px-4 py-2 hover:bg-gray-700 transition duration-200"
                            >
                                ← Preview
                            </button>
                            <button
                                type="button"
                                onClick={handleSubmit}
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
    data: PropTypes.object.isRequired,
    updateCurrent: PropTypes.func.isRequired,
};

export default Submit;