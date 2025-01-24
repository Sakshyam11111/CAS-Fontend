import { useEffect } from 'react';
import PropTypes from 'prop-types';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

const Preview = ({ data, decreaseFormStep }) => {
    useEffect(() => {
        AOS.init();
    }, []);

    Preview.propTypes = {
        data: PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            panCardNo: PropTypes.string,
            addressLine: PropTypes.string,
            zip: PropTypes.string,
            city: PropTypes.string,
            phoneNumber: PropTypes.string,
            beneFirstName: PropTypes.string,
            beneLastName: PropTypes.string,
            benePanCardNo: PropTypes.string,
            beneAddressLine: PropTypes.string,
            benePhoneNumber: PropTypes.string,
            transmission: PropTypes.string,
            percentage: PropTypes.string,
            incoTerms: PropTypes.string,
            currency: PropTypes.string,
            amount: PropTypes.string,
            paymentDetails: PropTypes.string,
            shipmentFrom: PropTypes.string,
            departurePort: PropTypes.string,
            otherDetails: PropTypes.string,
            shipmentDetails: PropTypes.string,
        }).isRequired,
        decreaseFormStep: PropTypes.func.isRequired,
    };

    return (
        <div className="w-full md:w-3/4 mx-auto" data-aos="fade-left">
            <form className="bg-white p-6 rounded-lg shadow-md mt-10 mb-10">
                {/* Personal Information */}
                <h3 className="text-lg font-semibold mb-4" data-aos="fade-up">Name</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div data-aos="fade-up">
                        <input
                            type="text"
                            name="firstName"
                            value={data.firstName}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                            placeholder="First name"
                        />
                    </div>
                    <div data-aos="fade-up">
                        <input
                            type="text"
                            name="panCardNo"
                            value={data.panCardNo}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                            placeholder="PAN card no."
                        />
                    </div>
                    <div data-aos="fade-up">
                        <input
                            type="text"
                            name="lastName"
                            value={data.lastName}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                            placeholder="Last name"
                        />
                    </div>
                </div>

                {/* Address Information */}
                <h3 className="text-lg font-semibold mb-4 mt-10" data-aos="fade-up">Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div data-aos="fade-up">
                        <input
                            type="text"
                            name="addressLine"
                            value={data.addressLine}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                            placeholder="Address line"
                        />
                    </div>
                    <div data-aos="fade-up">
                        <input
                            type="text"
                            name="zip"
                            value={data.zip}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                            placeholder="ZIP code"
                        />
                    </div>
                    <div data-aos="fade-up">
                        <input
                            type="text"
                            name="city"
                            value={data.city}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                            placeholder="City"
                        />
                    </div>
                    <div data-aos="fade-up">
                        <input
                            type="text"
                            name="phoneNumber"
                            value={data.phoneNumber}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                            placeholder="Phone no."
                        />
                    </div>
                </div>

                {/* Beneficiary Information */}
                <h3 className="text-lg font-semibold mb-4" data-aos="fade-up">Beneficiary Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div data-aos="fade-up">
                        <input
                            type="text"
                            name="beneFirstName"
                            value={data.beneFirstName}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                            placeholder="Beneficiary First Name"
                        />
                    </div>
                    <div data-aos="fade-up">
                        <input
                            type="text"
                            name="benePanCardNo"
                            value={data.benePanCardNo}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                            placeholder="Beneficiary PAN card no."
                        />
                    </div>
                    <div data-aos="fade-up">
                        <input
                            type="text"
                            name="beneLastName"
                            value={data.beneLastName}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                            placeholder="Beneficiary Last Name"
                        />
                    </div>
                </div>
                <h3 className="text-lg font-semibold mb-4" data-aos="fade-up">Beneficiary Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div data-aos="fade-up">
                        <input
                            type="text"
                            name="beneAddressLine"
                            value={data.beneAddressLine}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                            placeholder="Beneficiary Address line"
                        />
                    </div>
                    <div data-aos="fade-up">
                        <input
                            type="text"
                            name="benePhoneNumber"
                            value={data.benePhoneNumber}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                            placeholder="Beneficiary Phone no."
                        />
                    </div>
                </div>

                {/* Transmission Details */}
                <h3 className="text-lg font-semibold mb-4" data-aos="fade-up">By Tele Transmission</h3>
                <div className="mb-4" data-aos="fade-up">
                    <div className="grid grid-cols-2 gap-4">
                        {["NEP", "EURO", "INR", "SGD", "USD", "JYP", "AUD"].map((mode, index) => (
                            <div className="flex items-center mb-2" key={index}>
                                <input
                                    type="radio"
                                    id={mode.toLowerCase()}
                                    name="transmission"
                                    value={mode}
                                    className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                />
                                <label htmlFor={mode.toLowerCase()} className="ml-2">{mode}</label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Percentage and Inco Terms */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="mb-4 mt-4" data-aos="fade-up">
                        <label className="block text-gray-700 mb-2">Percentage</label>
                        <input
                            type="text"
                            name="percentage"
                            value={data.percentage}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                            placeholder="%"
                        />
                    </div>

                    <div className="mb-4 mt-4" data-aos="fade-up">
                        <label className="block text-gray-700 mb-2">Inco Terms</label>
                        <select
                            name="incoTerms"
                            value={data.incoTerms}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                        >
                            <option value="">Please select</option>
                            <option value="CIF">CIF</option>
                            <option value="FOB">FOB</option>
                            <option value="EXW">EXW</option>
                        </select>
                    </div>
                </div>

                {/* Currency and Amount */}
                <h3 className='mb-5 mt-8 text-lg' data-aos="fade-up">Currency and Amount</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4" data-aos="fade-up">
                        <label className="block text-gray-700 mb-2">Currency</label>
                        <select
                            name="currency"
                            value={data.currency}
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

                    <div className="mb-4" data-aos="fade-up">
                        <label className="block text-gray-700 mb-2">Amount</label>
                        <input
                            type="text"
                            name="amount"
                            value={data.amount}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                            placeholder="Amount"
                        />
                    </div>
                </div>

                {/* Payment Terms */}
                <h3 className='mb-5 text-lg' data-aos="fade-up">Tenure/Payment Terms</h3>
                <div className="mb-4" data-aos="fade-up">
                    <div className="grid grid-cols-2 gap-4">
                        {["Sight", "Mixed", "Usance", "Deferred"].map((type, index) => (
                            <div className="flex items-center mb-2" key={index}>
                                <input
                                    type="radio"
                                    id={type.toLowerCase()}
                                    name="tenure"
                                    value={type}
                                    className="h-6 w-6 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                />
                                <label htmlFor={type.toLowerCase()} className="ml-2">{type}</label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Payment Details */}
                <h3 className='mb-5 mt-8 text-lg' data-aos="fade-up">Payment Details</h3>
                <label className="block text-gray-700 mb-4">Credit Available With/ Negotiating Bank By</label>
                <div className="mb-10" data-aos="fade-up">
                    <select
                        name="paymentDetails"
                        value={data.paymentDetails}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                    >
                        <option value="">Select...</option>
                        <option value="Acceptance">Acceptance</option>
                        <option value="Negotiation">Negotiation</option>
                        <option value="Discount">Discount</option>
                    </select>
                </div>

                {/* Partial Payments */}
                <h3 className='mb-5 text-lg' data-aos="fade-up">Partial Payments</h3>
                <div className="mb-4" data-aos="fade-up">
                    <div className="grid grid-cols-2 gap-4">
                        {["Installment", "Prorated", "Balloon", "Split"].map((paymentType, index) => (
                            <div className="flex items-center mb-2" key={index}>
                                <input
                                    type="radio"
                                    id={paymentType.toLowerCase()}
                                    name="partialPayments"
                                    value={paymentType}
                                    className="h-6 w-6 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                />
                                <label htmlFor={paymentType.toLowerCase()} className="ml-2">{paymentType}</label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Shipment Details */}
                <h3 className='mb-5 text-lg' data-aos="fade-up">Shipment Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div data-aos="fade-up">
                        <label className="block text-gray-700 mb-2">Shipment From</label>
                        <input
                            type="text"
                            name="shipmentFrom"
                            value={data.shipmentFrom}
                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            placeholder="Shipment industry name..."
                        />
                        <label className="block text-gray-700 mb-2">Port of loading/airport of departure</label>
                        <input
                            type="text"
                            name="departurePort"
                            value={data.departurePort}
                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            placeholder="Departure name..."
                        />
                    </div>
                    <div data-aos="fade-up">
                        <label className="block text-gray-700 mb-2">If other (Specify)</label>
                        <input
                            type="text"
                            name="otherDetails"
                            value={data.otherDetails}
                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            placeholder="Details..."
                        />
                        <label className="block text-gray-700 mb-2">Expiry/shipment details</label>
                        <input
                            type="text"
                            name="shipmentDetails"
                            value={data.shipmentDetails}
                            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
                            placeholder="Details..."
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end mt-4">
                    <button
                        type="button"
                        onClick={() => decreaseFormStep(5)}
                        className="bg-green-600 text-white rounded-lg px-8 py-3 hover:bg-green-700 transition duration-200"
                    >
                        Continue →
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Preview;