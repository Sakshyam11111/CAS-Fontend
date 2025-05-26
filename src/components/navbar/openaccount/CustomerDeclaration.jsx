import { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

const CustomerDeclaration = ({ data, handleChange, updateCurrent }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className="p-4 md:p-8 bg-gray-50 flex flex-col">
      <div className="bg-white z-10 shadow-md">
        <div className="flex items-center p-4">
          <button
            onClick={() => updateCurrent("FamilyDetails")}
            className="border border-gray-300 rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition duration-200"
            aria-label="Go back to family details"
          >
            <IoIosArrowBack className="text-gray-600 w-9 h-9" />
          </button>
          <h2 className="text-xl md:text-2xl font-bold ml-4">Customer Declaration</h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-4">
        <div className="w-full" data-aos="fade-left">
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                Customer Declaration
              </h3>
              <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div>
                  <label htmlFor="anticipated_transactions_amount_per_year">Anticipated transaction amount per year</label>
                  <select
                    id="anticipated_transactions_amount_per_year"
                    name="anticipated_transactions_amount_per_year"
                    value={data.anticipated_transactions_amount_per_year}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Below 1 Up to 1 lac">Up to 1 lac</option>
                    <option value="About 1 lac to 10 lacs">About 1 lac to 10 lacs</option>
                    <option value="About 10 lacs to 25 lacs">About 10 lacs to 25 lacs</option>
                    <option value="About 25 lacs to 50 lacs">About 25 lacs to 50 lacs</option>
                    <option value="Above 50 lacs">Above 50 lacs</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="anticipated_no_of_transactions_per_year">Anticipated No. of transactions per year</label>
                  <select
                    id="anticipated_no_of_transactions_per_year"
                    name="anticipated_no_of_transactions_per_year"
                    value={data.anticipated_no_of_transactions_per_year}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Up to 10">Up to 20</option>
                    <option value="10 to 50">About 20 to 50</option>
                    <option value="50 to 100">About 50 to 100</option>
                    <option value="Above 100">Above 100</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="high_level_officialpep">High level official/PEP?</label>
                  <select
                    id="high_level_officialpep"
                    name="high_level_officialpep"
                    value={data.high_level_officialpep}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Relative of Politician">Relative of Politician</option>
                    <option value="High Level Official/PEP">High Level Official/PEP</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              {/* Conditionally render Details of Official/PEP if "Relative of Politician" is selected */}
              {data.high_level_officialpep === "Relative of Politician" && (
                <>
                  <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
                  <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">Details of Official/PEP</h3>
                  <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <label htmlFor="name_of_partyoffice">Name of Party/Office</label>
                      <input
                        id="name_of_partyoffice"
                        type="text"
                        name="name_of_partyoffice"
                        value={data.name_of_partyoffice || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                        placeholder="Enter Name of Party/Office"
                      />
                    </div>
                    <div>
                      <label htmlFor="relation_with_politician">Relation with Politician</label>
                      <select
                        id="relation_with_politician"
                        name="relation_with_politician"
                        value={data.relation_with_politician || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                      >
                        <option value="">Select</option>
                        <option value="Aunt">Aunt</option>
                        <option value="Brother">Brother</option>
                        <option value="Brother In Law">Brother In Law</option>
                        <option value="Shareholder">Shareholder</option>
                        <option value="Cousin">Cousin</option>
                        <option value="Daughter">Daughter</option>
                        <option value="Daughter In Law">Daughter In Law</option>
                        <option value="Father">Father</option>
                        <option value="Father In Law">Father In Law</option>
                        <option value="Friend">Friend</option>
                        <option value="Granddaughter">Granddaughter</option>
                        <option value="Gradfather">Gradfather</option>
                        <option value="Grandmother">Grandmother</option>
                        <option value="Grandson">Grandson</option>
                        <option value="LegialGardian">LegialGardian</option>
                        <option value="Mother">Mother</option>
                        <option value="Mother In Law">Mother In Law</option>
                        <option value="Nephew">Nephew</option>
                        <option value="Niece">Niece</option>
                        <option value="Partner">Partner</option>
                        <option value="Sister">Sister</option>
                        <option value="Sister In Law">Sister In Law</option>
                        <option value="Son">Son</option>
                        <option value="Son In Law">Son In Law</option>
                        <option value="Spouse">Spouse</option>
                        <option value="Trustee">Trustee</option>
                        <option value="Uncle">Uncle</option>
                        <option value="Board Of Directors">Board Of Directors</option>
                        <option value="Grandniece">Grandniece</option>
                        <option value="Grandnephew">Grandnephew</option>
                        <option value="Second Wife">Second Wife</option>
                        <option value="Legal Son">Legal Son</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="name_of_officialpep">Name of Official/PEP</label>
                      <input
                        id="name_of_officialpep"
                        type="text"
                        name="name_of_officialpep"
                        value={data.name_of_officialpep || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                        placeholder="Enter Name of Official/PEP"
                      />
                    </div>
                    <div>
                      <label htmlFor="designation_of_official">Designation</label>
                      <input
                        id="designation_of_official"
                        type="text"
                        name="designation_of_official"
                        value={data.designation_of_official || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                        placeholder="Enter Designation"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Conditionally render Details of Official/PEP if "High Level Official/PEP" is selected */}
              {data.high_level_officialpep === "High Level Official/PEP" && (
                <>
                  <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
                  <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">Details of Official/PEP</h3>
                  <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <label htmlFor="name_of_partyoffice">Name of Party/Office</label>
                      <input
                        id="name_of_partyoffice"
                        type="text"
                        name="name_of_partyoffice"
                        value={data.name_of_partyoffice || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                        placeholder="Enter Name of Party/Office"
                      />
                    </div>
                    <div>
                      <label htmlFor="designation_of_official">Designation</label>
                      <input
                        id="designation_of_official"
                        type="text"
                        name="designation_of_official"
                        value={data.designation_of_official || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                        placeholder="Enter Designation"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div>
                  <label htmlFor="do_you_have_beneficial_owner">Do you have Beneficial Owner?</label>
                  <select
                    id="do_you_have_beneficial_owner"
                    name="do_you_have_beneficial_owner"
                    value={data.do_you_have_beneficial_owner}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                {/* Conditionally render Name of Beneficial and Relation with Beneficial */}
                {data.do_you_have_beneficial_owner === "Yes" && (
                  <>
                    <div>
                      <label htmlFor="name_of_benificial">Name of Beneficial</label>
                      <input
                        id="name_of_benificial"
                        type="text"
                        name="name_of_benificial"
                        value={data.name_of_benificial || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                        placeholder="Enter Name of Beneficial"
                      />
                    </div>
                    <div>
                      <label htmlFor="relation_with_benificial">Relation with Beneficial</label>
                      <select
                        id="relation_with_benificial"
                        name="relation_with_benificial"
                        value={data.relation_with_benificial || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                      >
                        <option value="">Select</option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Son">Son</option>
                        <option value="Daughter">Daughter</option>
                        <option value="Spouse">Spouse</option>
                      </select>
                    </div>
                  </>
                )}
              </div>

              <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div>
                  <label htmlFor="are_you_associated_with_foreign_country">Are you associated with foreign country?</label>
                  <select
                    id="are_you_associated_with_foreign_country"
                    name="are_you_associated_with_foreign_country"
                    value={data.are_you_associated_with_foreign_country}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                {/* Conditionally render Foreign Country details if "Yes" is selected */}
                {data.are_you_associated_with_foreign_country === "Yes" && (
                  <>
                    <div>
                      <label htmlFor="name_of_country">Name of Country</label>
                      <input
                        id="name_of_country"
                        type="text"
                        name="name_of_country"
                        value={data.name_of_country || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                        placeholder="Enter Country Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="residential_status">Residential Status</label>
                      <select
                        id="residential_status"
                        name="residential_status"
                        value={data.residential_status || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                      >
                        <option value="">Select</option>
                        <option value="Citizen">Citizen</option>
                        <option value="Greencard Holder">Greencard Holder</option>
                        <option value="Resident">Resident</option>
                        <option value="Non-Resident Nepali">Non-Resident Nepali (NRN)</option>
                      </select>
                    </div>
                  </>
                )}
              </div>

              <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label htmlFor="have_you_been_punished_to_any_crime">Have you been punished by any crime?</label>
                  <select
                    id="have_you_been_punished_to_any_crime"
                    name="have_you_been_punished_to_any_crime"
                    value={data.have_you_been_punished_to_any_crime}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                {/* Conditionally render Nature of Crime if "Yes" is selected */}
                {data.have_you_been_punished_to_any_crime === "Yes" && (
                  <>
                    <div>
                      <label htmlFor="nature_of_crime">Nature of Crime</label>
                      <select
                        id="nature_of_crime"
                        name="nature_of_crime"
                        value={data.nature_of_crime || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                      >
                        <option value="">Select</option>
                        <option value="Murder">Murder</option>
                        <option value="Attempted Murder">Attempted Murder</option>
                        <option value="Fraud">Fraud</option>
                        <option value="Human Trafficking">Human Trafficking</option>
                        <option value="Rape">Rape</option>
                        <option value="Attempted Rape">Attempted Rape</option>
                        <option value="Kidnapping">Kidnapping</option>
                        <option value="Drug Smuggling">Drug Smuggling</option>
                        <option value="Robbery">Robbery</option>
                        <option value="Dealing in Small Arms">Dealing in Small Arms</option>
                        <option value="Theft">Theft</option>
                        <option value="Cyber Crimes and Social Crimes">Cyber Crimes and Social Crimes</option>
                      </select>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => updateCurrent("FamilyDetails")}
                className="bg-green-600 text-white rounded-lg px-10 py-3 hover:bg-green-700 transition duration-200"
                aria-label="Go back to family details"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={() => updateCurrent('NomineeDetails')}
                className="bg-green-600 text-white rounded-lg px-8 py-3 hover:bg-green-700 transition duration-200"
                aria-label="Continue to nominee details"
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

CustomerDeclaration.propTypes = {
  data: PropTypes.shape({
    anticipated_transactions_amount_per_year: PropTypes.string,
    anticipated_no_of_transactions_per_year: PropTypes.string,
    high_level_officialpep: PropTypes.string,
    do_you_have_beneficial_owner: PropTypes.string,
    are_you_associated_with_foreign_country: PropTypes.string,
    have_you_been_punished_to_any_crime: PropTypes.string,
    name_of_partyoffice: PropTypes.string,
    name_of_officialpep: PropTypes.string,
    relation_with_politician: PropTypes.string,
    designation_of_official: PropTypes.string,
    name_of_benificial: PropTypes.string,
    relation_with_benificial: PropTypes.string,
    name_of_country: PropTypes.string,
    residential_status: PropTypes.string,
    nature_of_crime: PropTypes.string,
  }),
  handleChange: PropTypes.func,
  updateCurrent: PropTypes.func,
};

export default CustomerDeclaration;