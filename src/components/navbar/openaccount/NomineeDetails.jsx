import { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

const NomineeDetails = ({ data, handleChange, updateCurrent, handleSubmit, isSubmitting }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className="p-4 md:p-8 bg-gray-50 flex flex-col">
      <div className="bg-white z-10 shadow-md">
        <div className="flex items-center p-4">
          <button
            onClick={() => updateCurrent("CustomerDeclaration")}
            className="border border-gray-300 rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition duration-200"
            aria-label="Go back to customer declaration"
          >
            <IoIosArrowBack className="text-gray-600 w-9 h-9" />
          </button>
          <h2 className="text-xl md:text-2xl font-bold ml-4">Nominee Details</h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-4">
        <div className="w-full" data-aos="fade-left">
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                Nominee Details
              </h3>
              <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label htmlFor="nominee_customer_relation">Customer Relation</label>
                  <select
                    id="nominee_customer_relation"
                    name="nominee_customer_relation"
                    value={data.nominee_customer_relation}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Existing">Existing</option>
                    <option value="Non-Existing">Non-Existing</option>
                  </select>
                </div>
                {/* Conditionally render CIF ID if "Existing" is selected */}
                {data.nominee_customer_relation === "Existing" && (
                  <div>
                    <label htmlFor="nominee_cif_id">CIF ID</label>
                    <input
                      id="nominee_cif_id"
                      type="text"
                      name="nominee_cif_id"
                      value={data.nominee_cif_id || ""}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                      placeholder="Enter CIF ID"
                    />
                  </div>
                )}
              </div>
              <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label htmlFor="nominees_name">Nominee's Name</label>
                  <input
                    id="nominees_name"
                    type="text"
                    name="nominees_name"
                    value={data.nominees_name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Nominee's Name"
                  />
                </div>
                <div>
                  <label htmlFor="nominees_relationship">Nominee's Relationship</label>
                  <select
                    id="nominees_relationship"
                    name="nominees_relationship"
                    value={data.nominees_relationship}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Parent">Aunt</option>
                    <option value="Parent">Bother</option>
                    <option value="Parent">Bother In Law</option>
                    <option value="Parent">Shareholder</option>
                    <option value="Parent">Cousin</option>
                    <option value="Parent">Daughter</option>
                    <option value="Parent">Daughter In Law</option>
                    <option value="Parent">Father</option>
                    <option value="Sibling">Father In Law</option>
                    <option value="Other">Friend</option>
                    <option value="Parent">GrandDaughter</option>
                    <option value="Parent">GrandFather</option>
                    <option value="Parent">GranderMother</option>
                    <option value="Parent">GrandSon</option>
                    <option value="Parent">Legal Gardian</option>
                    <option value="Parent">Mother</option>
                    <option value="Parent">Mother In Law</option>
                    <option value="Parent">Nephew</option>
                    <option value="Parent">Niece</option>
                    <option value="Parent">Partner</option>
                    <option value="Parent">Sister</option>
                    <option value="Parent">Sister In Law</option>
                    <option value="Parent">Son</option>
                    <option value="Parent">Son In Law</option>
                    <option value="Parent">Spouse</option>
                    <option value="Parent">Trustee</option>
                    <option value="Parent">Uncle</option>
                    <option value="Parent">Board of Directors</option>
                    <option value="Parent">GrandNiece</option>
                    <option value="Parent">GrandNephew</option>
                    <option value="Parent">Second Wife</option>
                    <option value="Parent">Legal Son</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="nominee_dob">Date of Birth</label>
                  <input
                    id="nominee_dob"
                    type="date"
                    name="nominee_dob"
                    value={data.nominee_dob}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="nominees_age_">Nominee's Age</label>
                  <input
                    id="nominees_age_"
                    type="number"
                    name="nominees_age_"
                    value={data.nominees_age_}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Nominee's Age"
                  />
                </div>
                <div>
                  <label htmlFor="nominees_father_name">Nominee's Father Name</label>
                  <input
                    id="nominees_father_name"
                    type="text"
                    name="nominees_father_name"
                    value={data.nominees_father_name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Nominee's Father Name"
                  />
                </div>
                <div>
                  <label htmlFor="nominees_country">Nominee's Country</label>
                  <select
                    id="nominees_country"
                    name="nominees_country"
                    value={data.nominees_country}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="nominees_id_type">Nominee's ID Type</label>
                  <select
                    id="nominees_id_type"
                    name="nominees_id_type"
                    value={data.nominees_id_type}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Citizenship">Citizenship</option>
                    <option value="Passport">Passport</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="nominees_id_no">Nominee's ID No.</label>
                  <input
                    id="nominees_id_no"
                    type="text"
                    name="nominees_id_no"
                    value={data.nominees_id_no}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Nominee's ID No."
                  />
                </div>
              </div>
            </div>

            {/* Conditionally render Nominee's Full Address if "Nepal" is selected */}
            {data.nominees_country === "Nepal" && (
              <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                  Nominee's Full Address
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div>
                    <label htmlFor="nominee_province">Province/State</label>
                    <select
                      id="nominee_province"
                      name="nominee_province"
                      value={data.nominee_province || ""}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                    >
                      <option value="">Select</option>
                      <option value="Bagmati Province">Bagmati Province</option>
                      <option value="Gandaki Province">Gandaki Province</option>
                      <option value="Karnali Province">Karnali Province</option>
                      <option value="Koshi Province">Koshi Province</option>
                      <option value="Lumbini Province">Lumbini Province</option>
                      <option value="Madhesh Province">Madhesh Province</option>
                      <option value="Sudurpashchim Province">Sudurpashchim Province</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="nominee_district">District</label>
                    <select
                      id="nominee_district"
                      name="nominee_district"
                      value={data.nominee_district || ""}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                    >
                      <option value="">Select</option>
                      <option value="Bajhang">Bajhang</option>
                      <option value="Bajura">Bajura</option>
                      <option value="Dadeldhura">Dadeldhura</option>
                      <option value="Darchula">Darchula</option>
                      <option value="Doti">Doti</option>
                      <option value="Kailali">Kailali</option>
                      <option value="Kanchanpur">Kanchanpur</option>
                      <option value="Kathmandu">Kathmandu</option>
                      <option value="Rukum (East)">Rukum (East)</option>
                      <option value="Siraha">Siraha</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="nominee_vdcmunicipality">VDC/Municipality</label>
                    <select
                      id="nominee_vdcmunicipality"
                      name="nominee_vdcmunicipality"
                      value={data.nominee_vdcmunicipality || ""}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                    >
                      <option value="">Select</option>
                      <option value="Baudhimai">Baudhimai</option>
                      <option value="Dewahi Gonahi">Dewahi Gonahi</option>
                      <option value="Durga Bhagwati">Durga Bhagwati</option>
                      <option value="Gaur">Gaur</option>
                      <option value="Madhvar Narayan">Madhvar Narayan</option>
                      <option value="Maulapur">Maulapur</option>
                      <option value="Paroha">Paroha</option>
                      <option value="Phatuwa Bijapur">Phatuwa Bijapur</option>
                      <option value="Rajdev">Rajdev</option>
                      <option value="Yamunamati">Yamunamati</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="nominee_ward_no">Ward No.</label>
                    <input
                      id="nominee_ward_no"
                      type="text"
                      name="nominee_ward_no"
                      value={data.nominee_ward_no}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                      placeholder="Enter Ward No."
                    />
                  </div>
                  <div>
                    <label htmlFor="nominee_streettole">Street/Tole</label>
                    <input
                      id="nominee_streettole"
                      type="text"
                      name="nominee_streettole"
                      value={data.nominee_streettole}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                      placeholder="Enter Street/Tole"
                    />
                  </div>
                  <div>
                    <label htmlFor="nominee_phone_number">Phone Number</label>
                    <input
                      id="nominee_phone_number"
                      type="number"
                      name="nominee_phone_number"
                      value={data.nominee_phone_number}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                Nominee's Guardian Details (In case of Nominee is Minor)
              </h3>
              <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div>
                  <label htmlFor="name_of_guardian">Name of Guardian</label>
                  <input
                    id="name_of_guardian"
                    type="text"
                    name="name_of_guardian"
                    value={data.name_of_guardian}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Guardian's Name"
                  />
                </div>
                <div>
                  <label htmlFor="nominee_gender">Gender</label>
                  <select
                    id="nominee_gender"
                    name="nominee_gender"
                    value={data.nominee_gender}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date_of_attaining_majority">Date of Attaining Majority</label>
                  <input
                    id="date_of_attaining_majority"
                    type="date"
                    name="date_of_attaining_majority"
                    value={data.date_of_attaining_majority}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="nominee_mobile_number">Mobile Number</label>
                  <input
                    id="nominee_mobile_number"
                    type="text"
                    name="nominee_mobile_number"
                    value={data.nominee_mobile_number}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Guardian's Mobile Number"
                  />
                </div>
                <div>
                  <label htmlFor="guardian_account_number">Account Number</label>
                  <input
                    id="guardian_account_number"
                    type="text"
                    name="guardian_account_number"
                    value={data.guardian_account_number}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Guardian's Account Number"
                  />
                </div>
                <div>
                  <label htmlFor="relationship_with_guradian">Relationship with Guardian</label>
                  <select
                    id="relationship_with_guradian"
                    name="relationship_with_guradian"
                    value={data.relationship_with_guradian}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Parent">Aunt</option>
                    <option value="Parent">Bother</option>
                    <option value="Parent">Bother In Law</option>
                    <option value="Parent">Shareholder</option>
                    <option value="Parent">Cousin</option>
                    <option value="Parent">Daughter</option>
                    <option value="Parent">Daughter In Law</option>
                    <option value="Parent">Father</option>
                    <option value="Sibling">Father In Law</option>
                    <option value="Other">Friend</option>
                    <option value="Parent">GrandDaughter</option>
                    <option value="Parent">GrandFather</option>
                    <option value="Parent">GranderMother</option>
                    <option value="Parent">GrandSon</option>
                    <option value="Parent">Legal Gardian</option>
                    <option value="Parent">Mother</option>
                    <option value="Parent">Mother In Law</option>
                    <option value="Parent">Nephew</option>
                    <option value="Parent">Niece</option>
                    <option value="Parent">Partner</option>
                    <option value="Parent">Sister</option>
                    <option value="Parent">Sister In Law</option>
                    <option value="Parent">Son</option>
                    <option value="Parent">Son In Law</option>
                    <option value="Parent">Spouse</option>
                    <option value="Parent">Trustee</option>
                    <option value="Parent">Uncle</option>
                    <option value="Parent">Board of Directors</option>
                    <option value="Parent">GrandNiece</option>
                    <option value="Parent">GrandNephew</option>
                    <option value="Parent">Second Wife</option>
                    <option value="Parent">Legal Son</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="relation_with_minor">Relation with Minor</label>
                  <select
                    id="relation_with_minor"
                    name="relation_with_minor"
                    value={data.relation_with_minor}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Parent">Aunt</option>
                    <option value="Parent">Bother</option>
                    <option value="Parent">Bother In Law</option>
                    <option value="Parent">Shareholder</option>
                    <option value="Parent">Cousin</option>
                    <option value="Parent">Daughter</option>
                    <option value="Parent">Daughter In Law</option>
                    <option value="Parent">Father</option>
                    <option value="Sibling">Father In Law</option>
                    <option value="Other">Friend</option>
                    <option value="Parent">GrandDaughter</option>
                    <option value="Parent">GrandFather</option>
                    <option value="Parent">GranderMother</option>
                    <option value="Parent">GrandSon</option>
                    <option value="Parent">Legal Gardian</option>
                    <option value="Parent">Mother</option>
                    <option value="Parent">Mother In Law</option>
                    <option value="Parent">Nephew</option>
                    <option value="Parent">Niece</option>
                    <option value="Parent">Partner</option>
                    <option value="Parent">Sister</option>
                    <option value="Parent">Sister In Law</option>
                    <option value="Parent">Son</option>
                    <option value="Parent">Son In Law</option>
                    <option value="Parent">Spouse</option>
                    <option value="Parent">Trustee</option>
                    <option value="Parent">Uncle</option>
                    <option value="Parent">Board of Directors</option>
                    <option value="Parent">GrandNiece</option>
                    <option value="Parent">GrandNephew</option>
                    <option value="Parent">Second Wife</option>
                    <option value="Parent">Legal Son</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guardian_country">Country</label>
                  <select
                    id="guardian_country"
                    name="guardian_country"
                    value={data.guardian_country}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Conditionally render Guardian's Address if "Nepal" is selected for Guardian's Country */}
            {data.guardian_country === "Nepal" && (
              <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                  Guardian's Address
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div>
                    <label htmlFor="guardian_province">Province</label>
                    <select
                      id="guardian_province"
                      name="guardian_province"
                      value={data.guardian_province || ""}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                    >
                      <option value="">Select</option>
                      <option value="Bagmati Province">Bagmati Province</option>
                      <option value="Gandaki Province">Gandaki Province</option>
                      <option value="Karnali Province">Karnali Province</option>
                      <option value="Koshi Province">Koshi Province</option>
                      <option value="Lumbini Province">Lumbini Province</option>
                      <option value="Madhesh Province">Madhesh Province</option>
                      <option value="Sudurpashchim Province">Sudurpashchim Province</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guardian_district">District</label>
                    <select
                      id="guardian_district"
                      name="guardian_district"
                      value={data.guardian_district || ""}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                    >
                      <option value="">Select</option>
                      <option value="Bajhang">Bajhang</option>
                      <option value="Bajura">Bajura</option>
                      <option value="Dadeldhura">Dadeldhura</option>
                      <option value="Darchula">Darchula</option>
                      <option value="Doti">Doti</option>
                      <option value="Kailali">Kailali</option>
                      <option value="Kanchanpur">Kanchanpur</option>
                      <option value="Kathmandu">Kathmandu</option>
                      <option value="Rukum (East)">Rukum (East)</option>
                      <option value="Siraha">Siraha</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guardian_vdc_municipality">VDC/Municipality</label>
                    <select
                      id="guardian_vdc_municipality"
                      name="guardian_vdc_municipality"
                      value={data.guardian_vdc_municipality || ""}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                    >
                      <option value="">Select</option>
                      <option value="Baudhimai">Baudhimai</option>
                      <option value="Dewahi Gonahi">Dewahi Gonahi</option>
                      <option value="Durga Bhagwati">Durga Bhagwati</option>
                      <option value="Gaur">Gaur</option>
                      <option value="Madhvar Narayan">Madhvar Narayan</option>
                      <option value="Maulapur">Maulapur</option>
                      <option value="Paroha">Paroha</option>
                      <option value="Phatuwa Bijapur">Phatuwa Bijapur</option>
                      <option value="Rajdev">Rajdev</option>
                      <option value="Yamunamati">Yamunamati</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guardian_ward_no">Ward No.</label>
                    <input
                      id="guardian_ward_no"
                      type="text"
                      name="guardian_ward_no"
                      value={data.guardian_ward_no}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                      placeholder="Enter Ward No."
                    />
                  </div>
                  <div>
                    <label htmlFor="guardian_street_tole">Street/Tole</label>
                    <input
                      id="guardian_street_tole"
                      type="text"
                      name="guardian_street_tole"
                      value={data.guardian_street_tole}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                      placeholder="Enter Street/Tole"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => updateCurrent("CustomerDeclaration")}
                className="bg-green-600 text-white rounded-lg px-10 py-3 hover:bg-green-700 transition duration-200"
                aria-label="Go back to customer declaration"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={() => updateCurrent("DocumentUpload")}
                className="bg-green-600 text-white rounded-lg px-10 py-3 hover:bg-green-700 transition duration-200"
                aria-label="Go back to customer declaration"
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

NomineeDetails.propTypes = {
  data: PropTypes.shape({
    nominee_customer_relation: PropTypes.string,
    nominees_name: PropTypes.string,
    nominees_relationship: PropTypes.string,
    nominee_dob: PropTypes.string,
    nominees_age_: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    nominees_father_name: PropTypes.string,
    nominees_country: PropTypes.string,
    nominees_id_type: PropTypes.string,
    nominees_id_no: PropTypes.string,
    name_of_guardian: PropTypes.string,
    nominee_gender: PropTypes.string,
    date_of_attaining_majority: PropTypes.string,
    nominee_mobile_number: PropTypes.string,
    guardian_account_number: PropTypes.string,
    relationship_with_guradian: PropTypes.string,
    relation_with_minor: PropTypes.string,
    guardian_country: PropTypes.string,
    nominee_cif_id: PropTypes.string,
    nominee_province: PropTypes.string,
    nominee_district: PropTypes.string,
    nominee_vdcmunicipality: PropTypes.string,
    nominee_ward_no: PropTypes.string,
    nominee_streettole: PropTypes.string,
    nominee_phone_number: PropTypes.string,
    guardian_province: PropTypes.string,
    guardian_district: PropTypes.string,
    guardian_vdc_municipality: PropTypes.string,
    guardian_ward_no: PropTypes.string,
    guardian_street_tole: PropTypes.string,
  }),
  handleChange: PropTypes.func,
  updateCurrent: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
};

export default NomineeDetails;