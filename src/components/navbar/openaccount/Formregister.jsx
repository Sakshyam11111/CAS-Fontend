import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

const Formregister = ({ formattedTitle, data, handleChange, updateCurrent }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  const showNepaliAddressFields = data.customer_nationality === "Nepali";
  const showForeignAddressFields = data.customer_nationality === "Other";
  const showCifIdField = data.customer_relation === "Existing";
  const showCitizenshipFields = data.type_of_id === "Citizenship";
  const showPassportFields = data.type_of_id === "Passport";
  const showOtherIdFields = data.type_of_id === "Driving License";

  return (
    <div className="p-4 md:p-8 bg-gray-50 flex flex-col">
      <div className="bg-white z-10 shadow-md">
        <div className="flex items-center p-4">
          <h2 className="text-xl md:text-2xl font-bold ml-4">{formattedTitle}</h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-4">
        <div className="w-full" data-aos="fade-left">
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                  Customer Details
                </h3>
                <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <label htmlFor="customer_relation">Customer Relation</label>
                    <select
                      id="customer_relation"
                      name="customer_relation"
                      value={data.customer_relation}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                    >
                      <option value="">Select</option>
                      <option value="Existing">Existing</option>
                      <option value="Joint">Non-Existing</option>
                    </select>
                  </div>

                  {/* Conditionally render CIF ID field */}
                  {showCifIdField && (
                    <div>
                      <label htmlFor="customer_cif_id">CIF ID</label>
                      <input
                        id="customer_cif_id"
                        type="text"
                        name="customer_cif_id"
                        value={data.customer_cif_id || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                        placeholder="Enter CIF ID"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div>
                  <label htmlFor="salutation">Salutation</label>
                  <select
                    id="salutation"
                    name="salutation"
                    value={data.salutation}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                    <option value="Dr">Dr</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="full_name">Full Name</label>
                  <input
                    id="full_name"
                    type="text"
                    name="full_name"
                    value={data.full_name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="full_name_nepali">Full Name (Nepali)</label>
                  <input
                    id="full_name_nepali"
                    type="text"
                    name="full_name_nepali"
                    value={data.full_name_nepali}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Full Name in Nepali"
                  />
                </div>
              </div>
              <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
              <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                Personal Information
              </h3>
              <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div>
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={data.gender}
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
                  <label htmlFor="marital_status">Marital Status</label>
                  <select
                    id="marital_status"
                    name="marital_status"
                    value={data.marital_status}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Single">Unmarried</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widow">Widow</option>
                    <option value="Widower">Widower</option>
                    <option value="Separated">Legally Separated</option>
                    <option value="Live-In">Live-In Relationship</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date_of_birth_ad">Date of Birth (AD)</label>
                  <input
                    id="date_of_birth_ad"
                    type="date"
                    name="date_of_birth_ad"
                    value={data.date_of_birth_ad}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="customer_nationality">Nationality</label>
                  <select
                    id="customer_nationality"
                    name="customer_nationality"
                    value={data.customer_nationality}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Nepali">Nepali</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="type_of_id">Type of ID</label>
                  <select
                    id="type_of_id"
                    name="type_of_id"
                    value={data.type_of_id}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Citizenship">Citizenship</option>
                    <option value="Passport">Passport</option>
                    <option value="Driving License">Others</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="age">Age</label>
                  <input
                    id="age"
                    type="number"
                    name="age"
                    value={data.age}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                Contact Information
              </h3>
              <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div>
                  <label htmlFor="country_code">Country Code</label>
                  <input
                    id="country_code"
                    type="text"
                    name="country_code"
                    value={data.country_code}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Country Code"
                  />
                </div>
                <div>
                  <label htmlFor="mobile_number">Mobile Number</label>
                  <input
                    id="mobile_number"
                    type="text"
                    name="mobile_number"
                    value={data.mobile_number}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Mobile Number"
                  />
                </div>
                <div>
                  <label htmlFor="home_number">Home Number</label>
                  <input
                    id="home_number"
                    type="text"
                    name="home_number"
                    value={data.home_number}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Home Number"
                  />
                </div>
                <div>
                  <label htmlFor="email_address">Email Address</label>
                  <input
                    id="email_address"
                    type="email"
                    name="email_address"
                    value={data.email_address}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div>
                  <label htmlFor="office_number">Office Number</label>
                  <input
                    id="office_number"
                    type="text"
                    name="office_number"
                    value={data.office_number}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Office Number"
                  />
                </div>
              </div>
            </div>

            {/* Address Information Section */}
            {showNepaliAddressFields && (
              <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                {/* Permanent Address */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">Permanent Address</h3>
                  <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                    <div>
                      <label htmlFor="province">Province</label>
                      <input
                        id="province"
                        type="text"
                        name="province"
                        value={data.province || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                        placeholder="Enter Province"
                      />
                    </div>
                    <div>
                      <label htmlFor="district">District</label>
                      <input
                        id="district"
                        type="text"
                        name="district"
                        value={data.district || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                        placeholder="Enter District"
                      />
                    </div>
                    <div>
                      <label htmlFor="vdc_municipality">VDC/Municipality</label>
                      <input
                        id="vdc_municipality"
                        type="text"
                        name="vdc_municipality"
                        value={data.vdc_municipality || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                        placeholder="Enter VDC/Municipality"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="ward_number">Ward Number</label>
                    <input
                      id="ward_number"
                      type="text"
                      name="ward_number"
                      value={data.ward_number || ""}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                      placeholder="Enter Ward Number"
                    />
                  </div>
                  <div className="mb-4">
                    <label>
                      <input
                        type="checkbox"
                        name="is_current_same_as_permanent"
                        checked={data.is_current_same_as_permanent || false}
                        onChange={handleChange}
                        className="mr-2"
                      />{" "}
                      Is current address same as permanent address?
                    </label>
                  </div>
                </div>

                {/* Current Address (conditionally rendered based on checkbox) */}
                {!data.is_current_same_as_permanent && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">Current Address</h3>
                    <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                      <div>
                        <label htmlFor="current_province">Current Province</label>
                        <input
                          id="current_province"
                          type="text"
                          name="current_province"
                          value={data.current_province || ""}
                          onChange={handleChange}
                          className="border border-gray-300 rounded-lg p-3 w-full"
                          placeholder="Enter Current Province"
                        />
                      </div>
                      <div>
                        <label htmlFor="current_district">Current District</label>
                        <input
                          id="current_district"
                          type="text"
                          name="current_district"
                          value={data.current_district || ""}
                          onChange={handleChange}
                          className="border border-gray-300 rounded-lg p-3 w-full"
                          placeholder="Enter Current District"
                        />
                      </div>
                      <div>
                        <label htmlFor="current_vdc__municipality">Current VDC/Municipality</label>
                        <input
                          id="current_vdc__municipality"
                          type="text"
                          name="current_vdc__municipality"
                          value={data.current_vdc__municipality || ""}
                          onChange={handleChange}
                          className="border border-gray-300 rounded-lg p-3 w-full"
                          placeholder="Enter Current VDC/Municipality"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="current_ward_number">Current Ward Number</label>
                      <input
                        id="current_ward_number"
                        type="text"
                        name="current_ward_number"
                        value={data.current_ward_number || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                        placeholder="Enter Current Ward Number"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Foreign Address Information Section */}
            {showForeignAddressFields && (
              <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                {/* Permanent Foreign Address */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">Permanent Foreign Address</h3>
                  <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                    <div>
                      <label htmlFor="state">State</label>
                      <input
                        id="state"
                        type="text"
                        name="state"
                        value={data.state || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                        placeholder="Enter State"
                      />
                    </div>
                    <div>
                      <label htmlFor="streettole">Street/Tole</label>
                      <input
                        id="streettole"
                        type="text"
                        name="streettole"
                        value={data.streettole || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                        placeholder="Enter Street/Tole"
                      />
                    </div>
                    <div>
                      <label htmlFor="city">City</label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={data.city || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                        placeholder="Enter City"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                    <div>
                      <label htmlFor="house_number">House Number</label>
                      <input
                        id="house_number"
                        type="text"
                        name="house_number"
                        value={data.house_number || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                        placeholder="Enter House Number"
                      />
                    </div>
                    <div>
                      <label htmlFor="ward_no">Ward No.</label>
                      <input
                        id="ward_no"
                        type="text"
                        name="ward_no"
                        value={data.ward_no || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                        placeholder="Enter Ward No."
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label>
                      <input
                        type="checkbox"
                        name="is_current_address_same_as_permanent_foreign_address"
                        checked={data.is_current_address_same_as_permanent_foreign_address || false}
                        onChange={handleChange}
                        className="mr-2"
                      />{" "}
                      Is current address same as permanent address?
                    </label>
                  </div>
                </div>

                {/* Current Foreign Address (conditionally rendered based on checkbox) */}
                {!data.is_current_address_same_as_permanent_foreign_address && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">Current Foreign Address</h3>
                    <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                      <div>
                        <label htmlFor="current_state">Current State</label>
                        <input
                          id="current_state"
                          type="text"
                          name="current_state"
                          value={data.current_state || ""}
                          onChange={handleChange}
                          className="border border-gray-300 rounded-lg p-3 w-full"
                          placeholder="Enter Current State"
                        />
                      </div>
                      <div>
                        <label htmlFor="current_streettole">Current Street/Tole</label>
                        <input
                          id="current_streettole"
                          type="text"
                          name="current_streettole"
                          value={data.current_streettole || ""}
                          onChange={handleChange}
                          className="border border-gray-300 rounded-lg p-3 w-full"
                          placeholder="Enter Current Street/Tole"
                        />
                      </div>
                      <div>
                        <label htmlFor="current_city">Current City</label>
                        <input
                          id="current_city"
                          type="text"
                          name="current_city"
                          value={data.current_city || ""}
                          onChange={handleChange}
                          className="border border-gray-300 rounded-lg p-3 w-full"
                          placeholder="Enter Current City"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                      <div>
                        <label htmlFor="current_house_number">Current House Number</label>
                        <input
                          id="current_house_number"
                          type="text"
                          name="current_house_number"
                          value={data.current_house_number || ""}
                          onChange={handleChange}
                          className="border border-gray-300 rounded-lg p-3 w-full"
                          placeholder="Enter Current House Number"
                        />
                      </div>
                      <div>
                        <label htmlFor="current_ward_no">Current Ward No.</label>
                        <input
                          id="current_ward_no"
                          type="text"
                          name="current_ward_no"
                          value={data.current_ward_no || ""}
                          onChange={handleChange}
                          className="border border-gray-300 rounded-lg p-3 w-full"
                          placeholder="Enter Current Ward No."
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Citizenship Details (Conditionally Rendered) */}
            {showCitizenshipFields && (
              <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                  Citizenship Details
                </h3>
                <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div>
                    <label htmlFor="citizenship_number">Citizenship Number</label>
                    <input
                      id="citizenship_number"
                      type="text"
                      name="citizenship_number"
                      value={data.citizenship_number}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                      placeholder="Enter Citizenship Number"
                    />
                  </div>
                  <div>
                    <label htmlFor="citizenship_place_of_issue">Place of Issue</label>
                    <input
                      id="citizenship_place_of_issue"
                      type="text"
                      name="citizenship_place_of_issue"
                      value={data.citizenship_place_of_issue}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                      placeholder="Enter Place of Issue"
                    />
                  </div>
                  <div>
                    <label htmlFor="citizenship_issued_date">Issued Date</label>
                    <input
                      id="citizenship_issued_date"
                      type="date"
                      name="citizenship_issued_date"
                      value={data.citizenship_issued_date}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Passport Details (Conditionally Rendered) */}
            {showPassportFields && (
              <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                  Passport Details
                </h3>
                <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div>
                    <label htmlFor="passport_number">Passport Number</label>
                    <input
                      id="passport_number"
                      type="text"
                      name="passport_number"
                      value={data.passport_number}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                      placeholder="Enter Passport Number"
                    />
                  </div>
                  <div>
                    <label htmlFor="visa_date_of_issue">Visa Date of Issue</label>
                    <input
                      id="visa_date_of_issue"
                      type="date"
                      name="visa_date_of_issue"
                      value={data.visa_date_of_issue}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="place_of_issue_passport">Place of Issue (Passport)</label>
                    <input
                      id="place_of_issue_passport"
                      type="text"
                      name="place_of_issue_passport"
                      value={data.place_of_issue_passport}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                      placeholder="Enter Place of Issue"
                    />
                  </div>
                  <div>
                    <label htmlFor="visa_expiry_date">Visa Expiry Date</label>
                    <input
                      id="visa_expiry_date"
                      type="date"
                      name="visa_expiry_date"
                      value={data.visa_expiry_date}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="date_of_issue_passport">Date of Issue (Passport)</label>
                    <input
                      id="date_of_issue_passport"
                      type="date"
                      name="date_of_issue_passport"
                      value={data.date_of_issue_passport}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="passport_issued_country">Passport Issued Country</label>
                    <input
                      id="passport_issued_country"
                      type="text"
                      name="passport_issued_country"
                      value={data.passport_issued_country}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                      placeholder="Enter Passport Issued Country"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ID Details (if others) (Conditionally Rendered) */}
            {showOtherIdFields && (
              <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                  ID Details (if others)
                </h3>
                <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div>
                    <label htmlFor="id_number">ID Number</label>
                    <input
                      id="id_number"
                      type="text"
                      name="id_number"
                      value={data.id_number}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                      placeholder="Enter ID Number"
                    />
                  </div>
                  <div>
                    <label htmlFor="issued_organization">Issued Organization</label>
                    <input
                      id="issued_organization"
                      type="text"
                      name="issued_organization"
                      value={data.issued_organization}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                      placeholder="Enter Issued Organization"
                    />
                  </div>
                  <div>
                    <label htmlFor="reference_number">Reference Number</label>
                    <input
                      id="reference_number"
                      type="text"
                      name="reference_number"
                      value={data.reference_number}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                      placeholder="Enter Reference Number"
                    />
                  </div>
                  <div>
                    <label htmlFor="current_association">Current Association</label>
                    <input
                      id="current_association"
                      type="text"
                      name="current_association"
                      value={data.current_association}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                      placeholder="Enter Current Association"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                Education and Other Details
              </h3>
              <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div>
                  <label htmlFor="education">Education</label>
                  <select
                    id="education"
                    name="education"
                    value={data.education}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="High School">High School</option>
                    <option value="Bachelor's">Bachelor</option>
                    <option value="Master's">Master</option>
                    <option value="PhD">PhD</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="occupation">Occupation</label>
                  <input
                    id="occupation"
                    type="text"
                    name="occupation"
                    value={data.occupation}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Occupation"
                  />
                </div>
                <div>
                  <label htmlFor="nature_of_business">Nature of Business</label>
                  <input
                    id="nature_of_business"
                    type="text"
                    name="nature_of_business"
                    value={data.nature_of_business}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Nature of Business"
                  />
                </div>
                <div>
                  <label htmlFor="nature_of_business_risk_status">Nature of Business Risk Status</label>
                  <select
                    id="nature_of_business_risk_status"
                    name="nature_of_business_risk_status"
                    value={data.nature_of_business_risk_status}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="source_of_fund">Source of Fund</label>
                  <select
                    id="source_of_fund"
                    name="source_of_fund"
                    value={data.source_of_fund}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Saving">Saving</option>
                    <option value="Salary">Salary</option>
                    <option value="Inheritance Gift">Inheritance Gift</option>
                    <option value="Disposal of Assets">Disposal of Assets</option>
                    <option value="Return of Investment">Return of Investment</option>
                    <option value="Sales Proceeds">Sales Proceeds</option>
                    <option value="Trusts Funds">Trusts Funds</option>
                    <option value="Service Rendered">Service Rendered</option>
                    <option value="Funding from Donors">Funding from Donors</option>
                    <option value="SSF Social Security Fund">SSF Social Security Fund</option>
                    <option value="Family Income">Family Income</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Allowance">Allowance</option>
                    <option value="Foreign Employment">Foreign Employment</option>
                    <option value="Agency Income">Agency Income</option>
                    <option value="Commission">Commission</option>
                    <option value="Retail Income">Retail Income</option>
                    <option value="ERF Earthquake Relief Fund">ERF Earthquake Relief Fund</option>
                    <option value="Business Income">Business Income</option>
                    <option value="Wages">Wages</option>
                    <option value="Pension">Pension</option>
                    <option value="Charity">Charity</option>
                    <option value="Dividend">Dividend</option>
                    <option value="Government Allowance">Government Allowance</option>
                    <option value="Stipend">Stipend</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="purpose_of_account">Purpose of Account</label>
                  <select
                    id="purpose_of_account"
                    name="purpose_of_account"
                    value={data.purpose_of_account}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Saving">Saving</option>
                    <option value="Investment">Investment</option>
                    <option value="Loan Repayment">Loan Repayment</option>
                    <option value="Payroll">Payroll</option>
                    <option value="Remittance">Remittance</option>
                    <option value="Transactional">Transactional</option>
                    <option value="IPO Application">IPO Application</option>
                    <option value="Govt Allowance">Govt Allowance</option>
                    <option value="SSF Social Security Fund">SSF Social Security Fund</option>
                    <option value="ERF Earthquake Relief Fund">ERF Earthquake Relief Fund</option>
                    <option value="Dividend">Dividend</option>
                    <option value="Demat Account Link">Demat Account Link</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="institution_name">Institution Name</label>
                  <input
                    id="institution_name"
                    type="text"
                    name="institution_name"
                    value={data.institution_name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Institution Name"
                  />
                </div>
                <div>
                  <label htmlFor="institution_address">Institution Address</label>
                  <input
                    id="institution_address"
                    type="text"
                    name="institution_address"
                    value={data.institution_address}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Institution Address"
                  />
                </div>
                <div>
                  <label htmlFor="designation">Designation</label>
                  <input
                    id="designation"
                    type="text"
                    name="designation"
                    value={data.designation}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Designation"
                  />
                </div>
                <div>
                  <label htmlFor="anticipated_annual_income">Anticipated Annual Income</label>
                  <select
                    id="anticipated_annual_income"
                    name="anticipated_annual_income"
                    value={data.anticipated_annual_income}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Up to 1 lac">Up to 1 lac</option>
                    <option value="About 1 lac to 10 lac">About 1 lac to 10 lac</option>
                    <option value="About 10 lac to 25 lac">About 10 lac to 25 lac</option>
                    <option value="About 25 lac to 50 lac">About 25 lac to 50 lac</option>
                    <option value="Above 50 lacs">Above 50 lacs</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="do_you_have_pan_no">Do you have PAN no?</label>
                  <select
                    id="do_you_have_pan_no"
                    name="do_you_have_pan_no"
                    value={data.do_you_have_pan_no}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                SMS/Email Information
              </h3>
              <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div>
                  <label htmlFor="sms_mobile_number">SMS Mobile Number</label>
                  <input
                    id="sms_mobile_number"
                    type="text"
                    name="sms_mobile_number"
                    value={data.sms_mobile_number}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter SMS Mobile Number"
                  />
                </div>
                <div>
                  <label htmlFor="sms_email_address">SMS Email Address</label>
                  <input
                    id="sms_email_address"
                    type="email"
                    name="sms_email_address"
                    value={data.sms_email_address}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter SMS Email Address"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={() => updateCurrent("FamilyDetails")}
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

Formregister.propTypes = {
  data: PropTypes.shape({
    customer_relation: PropTypes.string,
    customer_cif_id: PropTypes.string,
    salutation: PropTypes.string,
    full_name: PropTypes.string,
    full_name_nepali: PropTypes.string,
    date_of_birth_ad: PropTypes.string,
    gender: PropTypes.string,
    marital_status: PropTypes.string,
    customer_nationality: PropTypes.string,
    type_of_id: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    country_code: PropTypes.string,
    mobile_number: PropTypes.string,
    home_number: PropTypes.string,
    email_address: PropTypes.string,
    office_number: PropTypes.string,
    citizenship_number: PropTypes.string,
    citizenship_place_of_issue: PropTypes.string,
    citizenship_issued_date: PropTypes.string,
    passport_number: PropTypes.string,
    visa_date_of_issue: PropTypes.string,
    place_of_issue_passport: PropTypes.string,
    visa_expiry_date: PropTypes.string,
    date_of_issue_passport: PropTypes.string,
    passport_issued_country: PropTypes.string,
    id_number: PropTypes.string,
    issued_organization: PropTypes.string,
    reference_number: PropTypes.string,
    current_association: PropTypes.string,
    education: PropTypes.string,
    occupation: PropTypes.string,
    nature_of_business: PropTypes.string,
    source_of_fund: PropTypes.string,
    purpose_of_account: PropTypes.string,
    do_you_have_pan_no: PropTypes.string,
    institution_name: PropTypes.string,
    institution_address: PropTypes.string,
    designation: PropTypes.string,
    nature_of_business_risk_status: PropTypes.string,
    anticipated_annual_income: PropTypes.string,
    sms_mobile_number: PropTypes.string,
    sms_email_address: PropTypes.string,
    province: PropTypes.string,
    district: PropTypes.string,
    vdc_municipality: PropTypes.string,
    ward_number: PropTypes.string,
    is_current_same_as_permanent: PropTypes.bool,
    current_province: PropTypes.string,
    current_district: PropTypes.string,
    current_vdc__municipality: PropTypes.string,
    current_ward_number: PropTypes.string,
    state: PropTypes.string,
    streettole: PropTypes.string,
    city: PropTypes.string,
    house_number: PropTypes.string,
    ward_no: PropTypes.string,
    is_current_address_same_as_permanent_foreign_address: PropTypes.bool,
    current_state: PropTypes.string,
    current_streettole: PropTypes.string,
    current_city: PropTypes.string,
    current_house_number: PropTypes.string,
    current_ward_no: PropTypes.string,
  }),
  handleChange: PropTypes.func,
  updateCurrent: PropTypes.func,
  formattedTitle: PropTypes.string,
};

Formregister.defaultProps = {
  data: {
    customer_relation: "",
    customer_cif_id: "",
    salutation: "",
    full_name: "",
    full_name_nepali: "",
    date_of_birth_ad: "",
    gender: "",
    marital_status: "",
    customer_nationality: "",
    type_of_id: "",
    age: "",
    country_code: "",
    mobile_number: "",
    home_number: "",
    email_address: "",
    office_number: "",
    citizenship_number: "",
    citizenship_place_of_issue: "",
    citizenship_issued_date: "",
    passport_number: "",
    visa_date_of_issue: "",
    place_of_issue_passport: "",
    visa_expiry_date: "",
    date_of_issue_passport: "",
    passport_issued_country: "",
    id_number: "",
    issued_organization: "",
    reference_number: "",
    current_association: "",
    education: "",
    occupation: "",
    nature_of_business: "",
    source_of_fund: "",
    purpose_of_account: "",
    do_you_have_pan_no: "",
    institution_name: "",
    institution_address: "",
    designation: "",
    nature_of_business_risk_status: "",
    anticipated_annual_income: "",
    sms_mobile_number: "",
    sms_email_address: "",
    province: "",
    district: "",
    vdc_municipality: "",
    ward_number: "",
    is_current_same_as_permanent: false,
    current_province: "",
    current_district: "",
    current_vdc__municipality: "",
    current_ward_number: "",
    state: "",
    streettole: "",
    city: "",
    house_number: "",
    ward_no: "",
    is_current_address_same_as_permanent_foreign_address: false,
    current_state: "",
    current_streettole: "",
    current_city: "",
    current_house_number: "",
    current_ward_no: "",
  },
  handleChange: () => console.log("Handle change triggered"),
  updateCurrent: () => console.log("Navigating to FamilyDetails"),
  formattedTitle: "Customer Registration",
};

export default Formregister;