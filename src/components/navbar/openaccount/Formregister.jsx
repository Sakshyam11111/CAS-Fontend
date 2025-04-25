import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';

const Formregister = ({ data, handleChange, errors, updateCurrent }) => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className="p-4 md:p-8 bg-gray-50 flex flex-col">
      <div className="bg-white z-10 shadow-md">
        <div className="flex items-center p-4">
          <button
            onClick={() => navigate('/registeropening')}
            className="border border-gray-300 rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition duration-200"
            aria-label="Go back to account selection"
          >
            <IoIosArrowBack className="text-gray-600 w-7 h-7" />
          </button>
          <h2 className="text-xl md:text-2xl font-bold ml-4">Account Registration Form</h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-4">
        <div className="w-full" data-aos="fade-left">
          <form className="bg-white p-6 rounded-lg shadow-md">
            {/* Customer Relation */}
            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                Basic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div>
                  <label htmlFor="customer_relation">Customer Relation</label>
                  <select
                    id="customer_relation"
                    name="customer_relation"
                    value={data.customer_relation}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    aria-describedby={errors.customer_relation ? 'customer_relation_error' : undefined}
                  >
                    <option value="">Select</option>
                    <option value="Existing">Existing</option>
                    <option value="Non-Existing">Non-Existing</option>
                  </select>
                  {errors.customer_relation && (
                    <p id="customer_relation_error" className="text-red-500 text-sm">
                      {errors.customer_relation}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="salutation">Salutation</label>
                  <select
                    id="salutation"
                    name="salutation"
                    value={data.salutation}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    aria-describedby={errors.salutation ? 'salutation_error' : undefined}
                  >
                    <option value="">Select</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Dr.">Dr.</option>
                    <option value="Er.">Er.</option>
                  </select>
                  {errors.salutation && (
                    <p id="salutation_error" className="text-red-500 text-sm">
                      {errors.salutation}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="full_name">Full Name</label>
                  <input
                    id="full_name"
                    type="text"
                    name="full_name"
                    value={data.full_name}
                    onChange={handleChange}
                    className={`border border-gray-300 rounded-lg p-3 w-full ${errors.full_name ? 'border-red-500' : ''}`}
                    aria-describedby={errors.full_name ? 'full_name_error' : undefined}
                  />
                  {errors.full_name && (
                    <p id="full_name_error" className="text-red-500 text-sm">
                      {errors.full_name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="full_name_nepali">Full Name (Nepali)</label>
                  <input
                    id="full_name_nepali"
                    type="text"
                    name="full_name_nepali"
                    value={data.full_name_nepali}
                    onChange={handleChange}
                    className={`border border-gray-300 rounded-lg p-3 w-full ${errors.full_name_nepali ? 'border-red-500' : ''}`}
                    aria-describedby={errors.full_name_nepali ? 'full_name_nepali_error' : undefined}
                  />
                  {errors.full_name_nepali && (
                    <p id="full_name_nepali_error" className="text-red-500 text-sm">
                      {errors.full_name_nepali}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Personal Details */}
            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div>
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={data.gender}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    aria-describedby={errors.gender ? 'gender_error' : undefined}
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender && (
                    <p id="gender_error" className="text-red-500 text-sm">
                      {errors.gender}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="marital_status">Marital Status</label>
                  <select
                    id="marital_status"
                    name="marital_status"
                    value={data.marital_status}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    aria-describedby={errors.marital_status ? 'marital_status_error' : undefined}
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
                  {errors.marital_status && (
                    <p id="marital_status_error" className="text-red-500 text-sm">
                      {errors.marital_status}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="date_of_birth_ad">Date of Birth</label>
                  <input
                    id="date_of_birth_ad"
                    type="date"
                    name="date_of_birth_ad"
                    value={data.date_of_birth_ad}
                    onChange={handleChange}
                    className={`border border-gray-300 rounded-lg p-3 w-full ${errors.date_of_birth_ad ? 'border-red-500' : ''}`}
                    aria-describedby={errors.date_of_birth_ad ? 'date_of_birth_ad_error' : undefined}
                  />
                  {errors.date_of_birth_ad && (
                    <p id="date_of_birth_ad_error" className="text-red-500 text-sm">
                      {errors.date_of_birth_ad}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="customer_nationality">Nationality</label>
                  <select
                    id="customer_nationality"
                    name="customer_nationality"
                    value={data.customer_nationality}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    aria-describedby={errors.customer_nationality ? 'customer_nationality_error' : undefined}
                  >
                    <option value="">Select</option>
                    <option value="Nepali">Nepali</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.customer_nationality && (
                    <p id="customer_nationality_error" className="text-red-500 text-sm">
                      {errors.customer_nationality}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="type_of_id">Type of ID</label>
                  <select
                    id="type_of_id"
                    name="type_of_id"
                    value={data.type_of_id}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    aria-describedby={errors.type_of_id ? 'type_of_id_error' : undefined}
                  >
                    <option value="">Select</option>
                    <option value="NID">Citizenship</option>
                    <option value="Passport">Passport</option>
                  </select>
                  {errors.type_of_id && (
                    <p id="type_of_id_error" className="text-red-500 text-sm">
                      {errors.type_of_id}
                    </p>
                  )}
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
                    aria-describedby={errors.age ? 'age_error' : undefined}
                  />
                  {errors.age && (
                    <p id="age_error" className="text-red-500 text-sm">
                      {errors.age}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                Contact Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div>
                  <label htmlFor="country_code">Country Mobile Code</label>
                  <input
                    id="country_code"
                    type="text"
                    name="country_code"
                    value={data.country_code}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="+977"
                    aria-describedby={errors.country_code ? 'country_code_error' : undefined}
                  />
                  {errors.country_code && (
                    <p id="country_code_error" className="text-red-500 text-sm">
                      {errors.country_code}
                    </p>
                  )}
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
                    aria-describedby={errors.mobile_number ? 'mobile_number_error' : undefined}
                  />
                  {errors.mobile_number && (
                    <p id="mobile_number_error" className="text-red-500 text-sm">
                      {errors.mobile_number}
                    </p>
                  )}
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
                    aria-describedby={errors.home_number ? 'home_number_error' : undefined}
                  />
                  {errors.home_number && (
                    <p id="home_number_error" className="text-red-500 text-sm">
                      {errors.home_number}
                    </p>
                  )}
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
                    aria-describedby={errors.email_address ? 'email_address_error' : undefined}
                  />
                  {errors.email_address && (
                    <p id="email_address_error" className="text-red-500 text-sm">
                      {errors.email_address}
                    </p>
                  )}
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
                    aria-describedby={errors.office_number ? 'office_number_error' : undefined}
                  />
                  {errors.office_number && (
                    <p id="office_number_error" className="text-red-500 text-sm">
                      {errors.office_number}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Citizenship Details */}
            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                Citizenship Details
              </h3>
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
                    aria-describedby={errors.citizenship_number ? 'citizenship_number_error' : undefined}
                  />
                  {errors.citizenship_number && (
                    <p id="citizenship_number_error" className="text-red-500 text-sm">
                      {errors.citizenship_number}
                    </p>
                  )}
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
                    aria-describedby={errors.citizenship_place_of_issue ? 'citizenship_place_of_issue_error' : undefined}
                  />
                  {errors.citizenship_place_of_issue && (
                    <p id="citizenship_place_of_issue_error" className="text-red-500 text-sm">
                      {errors.citizenship_place_of_issue}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="citizenship_issued_date">Date of Issue</label>
                  <input
                    id="citizenship_issued_date"
                    type="date"
                    name="citizenship_issued_date"
                    value={data.citizenship_issued_date}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    aria-describedby={errors.citizenship_issued_date ? 'citizenship_issued_date_error' : undefined}
                  />
                  {errors.citizenship_issued_date && (
                    <p id="citizenship_issued_date_error" className="text-red-500 text-sm">
                      {errors.citizenship_issued_date}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Education and Other Details */}
            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                Education and Other Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div>
                  <label htmlFor="education">Education</label>
                  <select
                    id="education"
                    name="education"
                    value={data.education}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    aria-describedby={errors.education ? 'education_error' : undefined}
                  >
                    <option value="">Select</option>
                    <option value="HighSchool">High School</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="Masters">Masters</option>
                    <option value="PhD">PhD</option>
                  </select>
                  {errors.education && (
                    <p id="education_error" className="text-red-500 text-sm">
                      {errors.education}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="occupation">Occupation</label>
                  <select
                    id="occupation"
                    name="occupation"
                    value={data.occupation}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    aria-describedby={errors.occupation ? 'occupation_error' : undefined}
                  >
                    <option value="">Select</option>
                    <option value="Employed">Employed</option>
                    <option value="Business">Business</option>
                    <option value="Student">Student</option>
                    <option value="Retired">Retired</option>
                  </select>
                  {errors.occupation && (
                    <p id="occupation_error" className="text-red-500 text-sm">
                      {errors.occupation}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="nature_of_business">Nature of Business</label>
                  <select
                    id="nature_of_business"
                    name="nature_of_business"
                    value={data.nature_of_business}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    aria-describedby={errors.nature_of_business ? 'nature_of_business_error' : undefined}
                  >
                    <option value="">Select</option>
                    <option value="Retail">Retail</option>
                    <option value="IT">IT Services</option>
                    <option value="Manufacturing">Manufacturing</option>
                  </select>
                  {errors.nature_of_business && (
                    <p id="nature_of_business_error" className="text-red-500 text-sm">
                      {errors.nature_of_business}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="source_of_fund">Source of Fund</label>
                  <select
                    id="source_of_fund"
                    name="source_of_fund"
                    value={data.source_of_fund}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    aria-describedby={errors.source_of_fund ? 'source_of_fund_error' : undefined}
                  >
                    <option value="">Select</option>
                    <option value="Salary">Salary</option>
                    <option value="Business">Business</option>
                    <option value="Investment">Investment</option>
                  </select>
                  {errors.source_of_fund && (
                    <p id="source_of_fund_error" className="text-red-500 text-sm">
                      {errors.source_of_fund}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="purpose_of_account">Purpose of Account</label>
                  <select
                    id="purpose_of_account"
                    name="purpose_of_account"
                    value={data.purpose_of_account}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    aria-describedby={errors.purpose_of_account ? 'purpose_of_account_error' : undefined}
                  >
                    <option value="">Select</option>
                    <option value="Savings">Savings</option>
                    <option value="Business">Business</option>
                    <option value="Investment">Investment</option>
                  </select>
                  {errors.purpose_of_account && (
                    <p id="purpose_of_account_error" className="text-red-500 text-sm">
                      {errors.purpose_of_account}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="panvat_number">PAN/VAT Number</label>
                  <input
                    id="panvat_number"
                    type="number"
                    name="panvat_number"
                    value={data.panvat_number}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    aria-describedby={errors.panvat_number ? 'panvat_number_error' : undefined}
                  />
                  {errors.panvat_number && (
                    <p id="panvat_number_error" className="text-red-500 text-sm">
                      {errors.panvat_number}
                    </p>
                  )}
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
                    aria-describedby={errors.institution_name ? 'institution_name_error' : undefined}
                  />
                  {errors.institution_name && (
                    <p id="institution_name_error" className="text-red-500 text-sm">
                      {errors.institution_name}
                    </p>
                  )}
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
                    aria-describedby={errors.institution_address ? 'institution_address_error' : undefined}
                  />
                  {errors.institution_address && (
                    <p id="institution_address_error" className="text-red-500 text-sm">
                      {errors.institution_address}
                    </p>
                  )}
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
                    aria-describedby={errors.designation ? 'designation_error' : undefined}
                  />
                  {errors.designation && (
                    <p id="designation_error" className="text-red-500 text-sm">
                      {errors.designation}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="nature_of_business_risk_status">Business Risk Status</label>
                  <input
                    id="nature_of_business_risk_status"
                    type="text"
                    name="nature_of_business_risk_status"
                    value={data.nature_of_business_risk_status}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    aria-describedby={errors.nature_of_business_risk_status ? 'nature_of_business_risk_status_error' : undefined}
                  />
                  {errors.nature_of_business_risk_status && (
                    <p id="nature_of_business_risk_status_error" className="text-red-500 text-sm">
                      {errors.nature_of_business_risk_status}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="anticipated_annual_income">Annual Income</label>
                  <input
                    id="anticipated_annual_income"
                    type="text"
                    name="anticipated_annual_income"
                    value={data.anticipated_annual_income}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    aria-describedby={errors.anticipated_annual_income ? 'anticipated_annual_income_error' : undefined}
                  />
                  {errors.anticipated_annual_income && (
                    <p id="anticipated_annual_income_error" className="text-red-500 text-sm">
                      {errors.anticipated_annual_income}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* SMS and Email Details */}
            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                SMS and Email Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div>
                  <label htmlFor="sms_mobile_number">Mobile Number</label>
                  <input
                    id="sms_mobile_number"
                    type="number"
                    name="sms_mobile_number"
                    value={data.sms_mobile_number}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="+977"
                    aria-describedby={errors.sms_mobile_number ? 'sms_mobile_number_error' : undefined}
                  />
                  {errors.sms_mobile_number && (
                    <p id="sms_mobile_number_error" className="text-red-500 text-sm">
                      {errors.sms_mobile_number}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="sms_email_address">Email Address</label>
                  <input
                    id="sms_email_address"
                    type="text"
                    name="sms_email_address"
                    value={data.sms_email_address}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    aria-describedby={errors.sms_email_address ? 'sms_email_address_error' : undefined}
                  />
                  {errors.sms_email_address && (
                    <p id="sms_email_address_error" className="text-red-500 text-sm">
                      {errors.sms_email_address}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => navigate('/registeropening')}
                className="bg-green-600 text-white rounded-lg px-10 py-3 hover:bg-green-700 transition duration-200"
                aria-label="Go back to account selection"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={() => updateCurrent('FamilyDetails')}
                className="bg-green-600 text-white rounded-lg px-8 py-3 hover:bg-green-700 transition duration-200"
                aria-label="Continue to family details"
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
    salutation: PropTypes.string,
    full_name: PropTypes.string,
    full_name_nepali: PropTypes.string,
    date_of_birth_ad: PropTypes.string,
    gender: PropTypes.string,
    marital_status: PropTypes.string,
    customer_nationality: PropTypes.string,
    type_of_id: PropTypes.string,
    age: PropTypes.string,
    country_code: PropTypes.string,
    mobile_number: PropTypes.string,
    home_number: PropTypes.string,
    email_address: PropTypes.string,
    office_number: PropTypes.string,
    citizenship_number: PropTypes.string,
    citizenship_place_of_issue: PropTypes.string,
    citizenship_issued_date: PropTypes.string,
    education: PropTypes.string,
    occupation: PropTypes.string,
    nature_of_business: PropTypes.string,
    source_of_fund: PropTypes.string,
    purpose_of_account: PropTypes.string,
    panvat_number: PropTypes.string,
    institution_name: PropTypes.string,
    institution_address: PropTypes.string,
    designation: PropTypes.string,
    nature_of_business_risk_status: PropTypes.string,
    anticipated_annual_income: PropTypes.string,
    sms_mobile_number: PropTypes.string,
    sms_email_address: PropTypes.string,
    termsAccepted: PropTypes.bool,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  updateCurrent: PropTypes.func.isRequired,
};

export default Formregister;