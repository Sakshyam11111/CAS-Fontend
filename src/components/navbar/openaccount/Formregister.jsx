import { useState } from 'react';
import { FaRegUser, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail, MdDateRange } from "react-icons/md";
import { RxCross2 } from "react-icons/rx"; 

const RegistrationForm = () => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [countryCode, setCountryCode] = useState('+977-');
    const [gender, setGender] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState({});

    const handleTermsChange = (e) => {
        setTermsAccepted(e.target.checked);
        if (e.target.checked) {
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!firstName) newErrors.firstName = "First name is required.";
        if (!lastName) newErrors.lastName = "Last name is required.";
        if (!dateOfBirth) newErrors.dateOfBirth = "Date of birth is required.";
        if (!email) {
            newErrors.email = "Email address is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email address is invalid.";
        }
        if (!termsAccepted) newErrors.termsAccepted = "You must accept the terms and conditions.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Submit form logic here
            console.log("Form submitted successfully!");
            // Reset the form if needed
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-start justify-center max-w-6xl mx-auto p-4">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 md:mb-0 w-full">
                <h2 className="text-2xl font-bold mb-4 text-green-600 hover:underline">Register for Online Account Opening</h2>
                <p className="mb-6 text-gray-500">Kindly provide your basic information, validate your email ID and start Online Account Opening.</p>

                <form onSubmit={handleSubmit}>
                    {[
                        { label: "First Name", value: firstName, setter: setFirstName, icon: <FaRegUser className='text-green-500 ml-2' />, error: errors.firstName },
                        { label: "Middle Name", value: middleName, setter: setMiddleName, icon: <FaRegUser className='text-green-500 ml-2' /> },
                        { label: "Last Name", value: lastName, setter: setLastName, icon: <FaRegUser className='text-green-500 ml-2' />, error: errors.lastName },
                    ].map((field, index) => (
                        <div key={index} className="mb-4">
                            <label className="block text-sm font-medium mb-1 text-green-600 hover:underline">{field.label}</label>
                            <div className="flex items-center border rounded-lg">
                                {field.icon}
                                <input
                                    type="text"
                                    value={field.value}
                                    onChange={(e) => field.setter(e.target.value)}
                                    className={`border-0 rounded-lg p-2 flex-1 ${field.error ? 'border-red-500' : ''}`}
                                    placeholder={field.label.toUpperCase()}
                                />
                            </div>
                            {field.error && <p className="text-red-500 text-sm">{field.error}</p>}
                        </div>
                    ))}

                    <label className="block text-sm font-medium mb-1 text-green-600 hover:underline">Date of Birth</label>
                    <div className="mb-4 flex items-center border rounded-lg">
                        <MdDateRange className='ml-2 text-green-500' />
                        <input
                            type="date"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            className={`border-0 rounded-lg p-2 w-full text-gray-400 ${errors.dateOfBirth ? 'border-red-500' : ''}`}
                        />
                    </div>
                    {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>}

                    <label className="block text-sm font-medium mb-1 text-green-600 hover:underline">Email Address</label>
                    <div className="mb-4 flex items-center border rounded-lg">
                        <MdOutlineMail className="ml-2 text-green-500" />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`border-0 rounded-lg p-2 flex-1 ${errors.email ? 'border-red-500' : ''}`}
                            placeholder="Email Address"
                        />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                    <label className="block text-sm font-medium mb-1 text-green-600 hover:underline">Country Code</label>
                    <div className="mb-4 flex items-center border rounded-lg">
                        <FaPhoneAlt className="ml-2 text-green-500" />
                        <input
                            type="text"
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="border-0 rounded-lg p-2 flex-1"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 text-green-600 hover:underline">Gender</label>
                        <div className="flex items-center mb-2">
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="Male"
                                checked={gender === 'Male'}
                                onChange={(e) => setGender(e.target.value)}
                                className="mr-2 w-5 h-5"
                            />
                            <label htmlFor="male" className="mr-4">Male</label>
                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="Female"
                                checked={gender === 'Female'}
                                onChange={(e) => setGender(e.target.value)}
                                className="mr-2 w-5 h-5"
                            />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>

                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={termsAccepted}
                            onChange={handleTermsChange}
                            className="mr-2 w-5 h-5"
                        />
                        <label htmlFor="terms" className="text-sm">
                            I agree to the terms and conditions. I hereby declare that I have not maintained a Remittance Savings Account with any other Bank and Financial Institution.
                        </label>
                    </div>
                    {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted}</p>}

                    <button type="submit" className="bg-green-500 text-white hover:bg-green-600 py-2 px-4 rounded-2xl">
                        Submit
                    </button>
                </form>
            </div>

            <div className="sticky top-0 w-full max-w-xs ml-8">
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-bold text-xl">CAS Premium Remittance Saving Account</h3>
                    <p className="mt-2">Maximize your returns with additional 1% on the Highest Savings Interest Rate.</p>
                    <h4 className="mt-4 font-semibold">Documents required:</h4>
                    <ul className="list-disc list-inside mt-2">
                        <li>National Identity Card</li>
                        <li>Copy of your Passport issued by Government of Nepal</li>
                        <li>Secondary School certificate (or equivalent)</li>
                        <li>Passport Size Photograph</li>
                    </ul>
                </div>
            </div>

            {/* Modal for Terms and Conditions */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 max-h-[80vh] overflow-auto relative">
                        <RxCross2 
                            className="absolute top-3 right-3 cursor-pointer text-gray-600" 
                            onClick={handleCloseModal} 
                            size={24} 
                        />
                        <h3 className="font-bold text-lg mb-4">Terms & Conditions</h3>
                        <p>Dear Sir,<br /><br />
                            In consideration of CAS Bank Limited (hereinafter referred to as the Bank) opening and/or continuing the current/Savings/Call or any other account(s) with us, I/We agree to be bound by the terms and conditions herein.</p>
                        {/* Rest of the modal content... */}
                        <div className="mt-4 text-right">
                            <button
                                onClick={handleCloseModal}
                                className="bg-green-500 text-white hover:bg-green-600 py-2 px-4 rounded-2xl"
                            >
                                Proceed to Account Opening Form
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RegistrationForm;