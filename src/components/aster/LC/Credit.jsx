import { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';

const Credit = ({ data, handleChange, updateCurrent }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    return (
        <div className="p-4 md:p-8 bg-gray-50 flex flex-col">
            <div className="bg-white z-10 shadow-md">
                <div className="flex items-center p-4">
                    <button
                        onClick={() => updateCurrent("Description")}
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
                        {/* Confirming Bank */}
                        <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                            <h3 className='text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>Credit Available with</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                                <div>
                                    <label className="block text-gray-700 mb-2">Bank Name</label>
                                    <input
                                        type="text"
                                        name="credit_bank_name"
                                        value={data.credit_bank_name}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2">Swift Code</label>
                                    <input
                                        type="text"
                                        name="credit_swift_code"
                                        value={data.credit_swift_code}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Any Bank</label>
                                    <input
                                        type="number"
                                        name="credit_any_bank"
                                        value={data.credit_any_bank}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Beneficiary Drafts at</label>
                                    <select
                                        name="beneficiary_drafts_at"
                                        value={data.beneficiary_drafts_at}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                    >
                                        <option value="">Select</option>
                                        <option value="LC1">Sight</option>
                                        <option value="LC2">Usance</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Drawee</label>
                                    <input
                                        type="text"
                                        name="credit_drawee"
                                        value={data.credit_drawee}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Mixed Payment Details</label>
                                    <input
                                        type="text"
                                        name="credit_mixed_payment"
                                        value={data.credit_mixed_payment}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Place of taking in charge/dispatch</label>
                                    <input
                                        type="text"
                                        name="place_of_taking_in_charge"
                                        value={data.place_of_taking_in_charge}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Port of loading</label>
                                    <input
                                        type="text"
                                        name="credit_port_of_loading"
                                        value={data.credit_port_of_loading}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Port of discharge</label>
                                    <input
                                        type="text"
                                        name="credit_port_of_discharge"
                                        value={data.credit_port_of_discharge}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Place of final destination</label>
                                    <input
                                        type="text"
                                        name="credit_place_of_destination"
                                        value={data.credit_place_of_destination}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Latest date of Shipment</label>
                                    <input
                                        type="date"
                                        name="credit_latest_date_of_shipment"
                                        value={data.credit_latest_date_of_shipment}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Customs Entry Point</label>
                                    <input
                                        type="text"
                                        name="customs_entry_point"
                                        value={data.customs_entry_point}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Intransit to</label>
                                    <input
                                        type="text"
                                        name="intransit_to"
                                        value={data.intransit_to}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Shipment Period</label>
                                    <input
                                        type="date"
                                        name="credit_shipment_period"
                                        value={data.credit_shipment_period}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Period for presentation</label>
                                    <input
                                        type="date"
                                        name="credit_period_of_presentation"
                                        value={data.credit_period_of_presentation}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">House Airway bill allowed</label>
                                    <select
                                        name="credit_house_airway"
                                        value={data.credit_house_airway}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                    >
                                        <option value="">Select an option...</option>
                                        <option value="Option 1">Yes</option>
                                        <option value="Option 2">No</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Non Conference line Shipment allowed</label>
                                    <select
                                        name="credit_non_conference_line"
                                        value={data.credit_non_conference_line}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                    >
                                        <option value="">Select an option...</option>
                                        <option value="Option 1">Yes</option>
                                        <option value="Option 2">No</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">On Deck Shipment allowed</label>
                                    <select
                                        name="on_deck_shipment_allowed"
                                        value={data.on_deck_shipment_allowed}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg p-3 w-full"
                                    >
                                        <option value="">Select an option...</option>
                                        <option value="Option 1">Yes</option>
                                        <option value="Option 2">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                            <h3 className='text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>Credit Available with</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                {["Payment", "Negotiation", "Acceptance", "Deferred Payment", "Mixed Payment"].map((option, index) => (
                                    <div className="flex items-center" key={index}>
                                        <input
                                            type="radio"
                                            id={option.toLowerCase()}
                                            name="credit_available_with_check_session"
                                            value={option}
                                            onChange={handleChange}
                                            className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                        />
                                        <label htmlFor={option.toLowerCase()} className="ml-2">{option}</label>
                                    </div>
                                ))}
                            </div>

                            <h3 className='text-xl font-semibold mb-4 mt-10 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>Tenor</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                {["Deferred ", "Mixed ", "Sight", "Usance", "Days / Months"].map((option, index) => (
                                    <div className="flex items-center" key={index}>
                                        <input
                                            type="radio"
                                            id={option.toLowerCase()}
                                            name="tenor_section"
                                            value={option}
                                            onChange={handleChange}
                                            className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                        />
                                        <label htmlFor={option.toLowerCase()} className="ml-2">{option}</label>
                                    </div>
                                ))}
                            </div>

                            <h3 className='text-xl font-semibold mb-4 mt-10 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>Due Date Indicator</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                {["Lodge Date ", "Shipment Date ", "Bill date", "Acceptance Date", "Invoice Date", "Others"].map((option, index) => (
                                    <div className="flex items-center" key={index}>
                                        <input
                                            type="radio"
                                            id={option.toLowerCase()}
                                            name="due_date_indicator_section"
                                            value={option}
                                            onChange={handleChange}
                                            className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                        />
                                        <label htmlFor={option.toLowerCase()} className="ml-2">{option}</label>
                                    </div>
                                ))}
                            </div>

                            <h3 className='text-xl font-semibold mb-4 mt-10 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>Partial Shipment</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                {["Allow", "Not Allowed", "Conditional"].map((option, index) => (
                                    <div className="flex items-center" key={index}>
                                        <input
                                            type="radio"
                                            id={option.toLowerCase()}
                                            name="partial_shipment_section"
                                            value={option}
                                            onChange={handleChange}
                                            className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                        />
                                        <label htmlFor={option.toLowerCase()} className="ml-2">{option}</label>
                                    </div>
                                ))}
                            </div>

                            <h3 className='text-xl font-semibold mb-4 mt-10 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>Transhipment</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                {["Allow ", "Not Allowed", "Conditional"].map((option, index) => (
                                    <div className="flex items-center" key={index}>
                                        <input
                                            type="radio"
                                            id={option.toLowerCase()}
                                            name="transhipment_section"
                                            value={option}
                                            onChange={handleChange}
                                            className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                        />
                                        <label htmlFor={option.toLowerCase()} className="ml-2">{option}</label>
                                    </div>
                                ))}
                            </div>


                            <h3 className='text-xl font-semibold mb-4 mt-10 text-green-500 hover:underline hover:text-green-500 transition-all duration-200'>Shipment Mode</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                {["Road ", "Rail", "Sea", "Air", "Courier", "Others"].map((option, index) => (
                                    <div className="flex items-center" key={index}>
                                        <input
                                            type="radio"
                                            id={option.toLowerCase()}
                                            name="shipment_mode_section"
                                            value={option}
                                            onChange={handleChange}
                                            className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                        />
                                        <label htmlFor={option.toLowerCase()} className="ml-2">{option}</label>
                                    </div>
                                ))}
                            </div>
                        </div>



                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                onClick={() => updateCurrent("Description")}
                                className="bg-green-600 text-white rounded-lg px-10 py-3 hover:bg-green-700 transition duration-200"
                            >
                                ← Back
                            </button>

                            <button
                                type="button"
                                onClick={() => updateCurrent("Submit")}
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

Credit.propTypes = {
    data: PropTypes.shape({
        credit_bank_name: PropTypes.string,
        credit_swift_code: PropTypes.string,
        credit_any_bank: PropTypes.string,
        beneficiary_drafts_at: PropTypes.string,
        credit_drawee: PropTypes.string,
        credit_mixed_payment: PropTypes.string,
        deferredPaymentDetails: PropTypes.string,
        place_of_taking_in_charge: PropTypes.string,
        credit_port_of_loading: PropTypes.string,
        credit_port_of_discharge: PropTypes.string,
        credit_place_of_destination: PropTypes.string,
        credit_latest_date_of_shipment: PropTypes.string,
        customs_entry_point: PropTypes.string,
        intransit_to: PropTypes.string,
        credit_shipment_period: PropTypes.string,
        credit_period_of_presentation: PropTypes.string,
        credit_house_airway: PropTypes.string,
        credit_non_conference_line: PropTypes.string,
        on_deck_shipment_allowed: PropTypes.string,
    }),
    handleChange: PropTypes.func,
    updateCurrent: PropTypes.func,
};

export default Credit;