import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';

const Apply = ({ data, handleChange, increaseFormStep }) => {
    const [panNumber, setPanNumber] = useState('');
    const [panDetails, setPanDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    const handlePanChange = (e) => {
        setPanNumber(e.target.value);
    };

    const fetchPanDetails = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://192.168.10.3/api/method/frappe.credit_card.pan_scrape.fetch_pan_details?pan_number=${panNumber}`);
            const data = await response.json();

            if (data) {
                setPanDetails(data);
                setError(null);
                handleChange({ target: { name: 'panCardNo', value: panNumber } });
            } else {
                setError('An error occurred while fetching PAN details.');
                setPanDetails(null);
            }
        } catch (err) {
            setError('Network error: ' + err.message);
            setPanDetails(null);
        } finally {
            setLoading(false);
        }
    };

    const handleFetchPanDetails = () => {
        if (panNumber) {
            fetchPanDetails();
        } else {
            setError('Please enter a PAN number.');
        }
    };

    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-screen flex flex-col">
            {loading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <div className="loader">Loading...</div>
                </div>
            ) : (
                <>
                    <div className="sticky top-16 left-0 bg-white z-10 shadow-md">
                        <div className="flex items-center p-4">
                            <button
                                onClick={() => navigate('/lc')}
                                className="border border-gray-300 rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition duration-200"
                            >
                                <IoIosArrowBack className="text-gray-600" />
                            </button>
                            <h2 className="text-2xl font-bold ml-4">Customer Verification</h2>
                            <div className="ml-auto flex items-center">
                                <AiOutlineMail className="text-gray-600 mr-2" />
                                <span className="text-gray-600">Message from bank</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-grow mt-4 flex-col md:flex-row">
                        <div className="hidden md:block w-1/4 mr-8" data-aos="fade-down">
                            <div className='sticky top-48 left-0'>
                                <h3 className="text-lg font-semibold mb-4">Steps</h3>
                                <div className="mb-4">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">1</div>
                                        <div className="ml-4 text-black text-lg">Applicant Details</div>
                                    </div>
                                    <div className="border-l-2 border-gray-300 h-10" />
                                </div>
                                <div className="mb-4">
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center"></div>
                                        <div className="ml-4 text-gray-800 text-lg">Name and Address</div>
                                    </div>
                                    <div className="border-l-2 border-gray-300 h-10" />
                                </div>
                                <div className="mb-4">
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center"></div>
                                        <div className="ml-4 text-gray-400 text-lg">Beneficiary Details</div>
                                    </div>
                                    <div className="border-l-2 border-gray-300 h-10" />
                                </div>
                                <div className="mb-4">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">2</div>
                                        <div className="ml-4 text-black text-lg">LC Details</div>
                                    </div>
                                    <div className="border-l-2 border-gray-300 h-10" />
                                </div>
                                <div className="mb-4">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">3</div>
                                        <div className="ml-4 text-black text-lg">Associated Parties</div>
                                    </div>
                                    <div className="border-l-2 border-gray-300 h-10" />
                                </div>
                                <div className="mb-4">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">4</div>
                                        <div className="ml-4 text-black text-lg">Description</div>
                                    </div>
                                    <div className="border-l-2 border-gray-300 h-10" />
                                </div>
                                <div className="mb-4">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">5</div>
                                        <div className="ml-4 text-black text-lg">Credit</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Applicant details */}
                        <div className="w-full md:w-3/4" data-aos="fade-left">
                            <form className="bg-white p-6 rounded-lg shadow-md">
                                <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                                    <h3 className='text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>
                                        Applicant Details
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                                        <div>
                                            <h1>Name</h1>
                                            <input
                                                type="text"
                                                name="applicant_name"
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
                                                name="applicant_email"
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
                                                name="applicant_address"
                                                value={data.applicant_address}
                                                onChange={handleChange}
                                                className="border border-gray-300 rounded-lg p-3 w-full"
                                                placeholder=""
                                            />
                                        </div>
                                        <div>
                                            <h1>Phone</h1>
                                            <input
                                                type="number"
                                                name="applicant_phone"
                                                value={data.applicant_phone_no}
                                                onChange={handleChange}
                                                className="border border-gray-300 rounded-lg p-3 w-full"
                                                placeholder="+977-"
                                            />
                                        </div>
                                        <div>
                                            <h1>Postal Code</h1>
                                            <input
                                                type="number"
                                                name="applicant_postal_code"
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
                                                name="applicant_country"
                                                value={data.applicant_country}
                                                onChange={handleChange}
                                                className="border border-gray-300 rounded-lg p-3 w-full"
                                                placeholder=""
                                            />
                                        </div>
                                        <div>
                                            <h1>Account Number</h1>
                                            <input
                                                type="number"
                                                name="account_number"
                                                value={data.account_number}
                                                onChange={handleChange}
                                                className="border border-gray-300 rounded-lg p-3 w-full"
                                                placeholder=""
                                            />
                                        </div>
                                        <div>
                                            <h1>Exim Code</h1>
                                            <input
                                                type="number"
                                                name="applicant_exim_code"
                                                value={data.applicant_exim_code}
                                                onChange={handleChange}
                                                className="border border-gray-300 rounded-lg p-3 w-full"
                                                placeholder=""
                                            />
                                        </div>
                                        <div>
                                            <h1>Pan Card No</h1>
                                            <input
                                                type="text"
                                                name="applicant_pan_no"
                                                value={data.applicant_pan_no}
                                                onChange={handlePanChange}
                                                className="border border-gray-300 rounded-lg p-3 w-full"
                                                placeholder=""
                                            />
                                            <button
                                                type="button"
                                                onClick={handleFetchPanDetails}
                                                className="mt-2 bg-blue-600 text-white rounded-lg px-3 py-1 hover:bg-blue-700 transition duration-200"
                                            >
                                                Fetch PAN Details
                                            </button>
                                            {error && <div className="text-red-600 mt-2">{error}</div>}
                                            {panDetails && <div className="text-green-600 mt-2">PAN Details Fetched Successfully!</div>}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between mt-4">
                                    <button
                                        type="button"
                                        onClick={() => navigate('/lc')}
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
                </>
            )}
        </div>
    );
};

Apply.propTypes = {
    data: PropTypes.shape({
        applicant_name: PropTypes.string,
        applicant_email: PropTypes.string,
        applicant_address: PropTypes.string,
        applicant_phone_no: PropTypes.string,
        applicant_postal_code: PropTypes.string,
        applicant_country: PropTypes.string,
        account_number: PropTypes.string,
        applicant_exim_code: PropTypes.string,
        applicant_pan_no: PropTypes.string,
    }),
    handleChange: PropTypes.func,
    increaseFormStep: PropTypes.func,
};

export default Apply;