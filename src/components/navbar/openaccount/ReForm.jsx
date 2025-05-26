import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FamilyDetails from "./Familydetails";
import Formregister from "./Formregister";
import RegistrationSidebar from "./RegistrationSidebar";
import CustomerDeclaration from "./CustomerDeclaration";
import NomineeDetails from "./NomineeDetails";
import { useParams } from "react-router-dom";
import DocumentUpload from "./DocumentUpload";

const ReForm = () => {
  const [isActive, setIsActive] = useState("Registration");
  const [hasChanges, setHasChanges] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { accountType } = useParams(); // Capture the dynamic accountType from the URL

  // Function to convert hyphenated lowercase to sentence case
  const toSentenceCase = (str) =>
    str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

  const formattedTitle = accountType ? toSentenceCase(accountType) : "Registration Form"; // Transform the title

  const [data, setData] = useState({
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
    father_name: "",
    mother_name: "",
    grand_father_name: "",
    grand_mother_name: "",
    spouse_name: "",
    sons_name: "",
    first_son_name: "",
    second_son_name: "",
    first_daughter_name: "",
    second_daughter_name: "",
    first_daughter_in_law_name: "",
    second_daughter_in_law_name: "",
    has_adopted_child: "",
    more_than_one_son: "",
    more_than_one_daughter: "",
    more_than_one_daughter_in_law: "",
    adopted_son: "",
    adopted_daughter: "",
    anticipated_transactions_amount_per_year: "",
    anticipated_no_of_transactions_per_year: "",
    high_level_officialpep: "",
    do_you_have_beneficial_owner: "",
    are_you_associated_with_foreign_country: "",
    have_you_been_punished_to_any_crime: "",
    name_of_partyoffice: "",
    name_of_officialpep: "",
    relation_with_politician: "",
    designation_of_official: "",
    name_of_benificial: "",
    relation_with_benificial: "",
    name_of_country: "",
    residential_status: "",
    nature_of_crime: "",
    nominee_customer_relation: "",
    nominees_name: "",
    nominees_relationship: "",
    nominee_dob: "",
    nominees_age_: "",
    nominees_father_name: "",
    nominees_country: "",
    nominees_id_type: "",
    nominees_id_no: "",
    name_of_guardian: "",
    nominee_gender: "",
    date_of_attaining_majority: "",
    nominee_mobile_number: "",
    guardian_account_number: "",
    relationship_with_guradian: "",
    relation_with_minor: "",
    guardian_country: "",
    nominee_province: "",
    nominee_district: "",
    nominee_vdcmunicipality: "",
    nominee_ward_no: "",
    nominee_streettole: "",
    nominee_phone_number: "",
    guardian_province: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("registrationFormData");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("registrationFormData", JSON.stringify(data));
  }, [data]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    let updatedValue = value;
    if (type === "number") {
      updatedValue = value ? Number(value) : value;
    } else if (type === "checkbox") {
      updatedValue = checked;
    }

    setData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
    setHasChanges(true);
  };

  const updateCurrent = (currentStep) => {
    // if (hasChanges && !window.confirm('You have unsaved changes. Are you sure you want(long to leave?')) {
    //   return;
    // }
    setIsActive(currentStep);
    setHasChanges(false);
    setTimeout(() => {
      const firstInput = document.querySelector(
        `#${currentStep === "Registration"
          ? "customer_relation"
          : currentStep === "FamilyDetails"
            ? "father_name"
            : currentStep === "CustomerDeclaration"
              ? "anticipated_transactions_amount_per_year"
              : currentStep === "NomineeDetails"
                ? "nominee_customer_relation"
                : "document_upload"
        }`
      );
      firstInput?.focus();
    }, 0);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Submission failed");
      toast.success("Form submitted successfully!");
      setData({
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
        father_name: "",
        mother_name: "",
        grand_father_name: "",
        grand_mother_name: "",
        spouse_name: "",
        sons_name: "",
        first_son_name: "",
        second_son_name: "",
        first_daughter_name: "",
        second_daughter_name: "",
        first_daughter_in_law_name: "",
        second_daughter_in_law_name: "",
        has_adopted_child: "",
        more_than_one_son: "",
        more_than_one_daughter: "",
        more_than_one_daughter_in_law: "",
        adopted_son: "",
        adopted_daughter: "",
        anticipated_transactions_amount_per_year: "",
        anticipated_no_of_transactions_per_year: "",
        high_level_officialpep: "",
        do_you_have_beneficial_owner: "",
        are_you_associated_with_foreign_country: "",
        have_you_been_punished_to_any_crime: "",
        name_of_partyoffice: "",
        name_of_officialpep: "",
        relation_with_politician: "",
        designation_of_official: "",
        name_of_benificial: "",
        relation_with_benificial: "",
        name_of_country: "",
        residential_status: "",
        nature_of_crime: "",
        nominee_customer_relation: "",
        nominees_name: "",
        nominees_relationship: "",
        nominee_dob: "",
        nominees_age_: "",
        nominees_father_name: "",
        nominees_country: "",
        nominees_id_type: "",
        nominees_id_no: "",
        name_of_guardian: "",
        nominee_gender: "",
        date_of_attaining_majority: "",
        nominee_mobile_number: "",
        guardian_account_number: "",
        relationship_with_guradian: "",
        relation_with_minor: "",
        guardian_country: "",
        nominee_province: "",
        nominee_district: "",
        nominee_vdcmunicipality: "",
        nominee_ward_no: "",
        nominee_streettole: "",
        nominee_phone_number: "",
        guardian_province: "",
      });
      localStorage.removeItem("registrationFormData");
      setIsActive("Registration");
    } catch (error) {
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = ["Registration", "FamilyDetails", "CustomerDeclaration", "NomineeDetails", "DocumentUpload"];
  const progress = ((steps.indexOf(isActive) + 1) / steps.length) * 100;

  return (
    <div className="flex flex-col md:flex-row max-w-8xl mx-auto p-4 bg-gray-50">
      <RegistrationSidebar isActive={isActive} onStepChange={updateCurrent} />
      <div className="flex-1 mt-8 md:mt-0">
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">Step {steps.indexOf(isActive) + 1} of {steps.length}</p>
        </div>
        {isActive === "Registration" && (
          <Formregister
            formattedTitle={formattedTitle}
            data={data}
            handleChange={handleChange}
            updateCurrent={updateCurrent}
          />
        )}
        {isActive === "FamilyDetails" && (
          <FamilyDetails
            data={data}
            handleChange={handleChange}
            updateCurrent={updateCurrent}
          />
        )}
        {isActive === "CustomerDeclaration" && (
          <CustomerDeclaration
            data={data}
            handleChange={handleChange}
            updateCurrent={updateCurrent}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}
        {isActive === "NomineeDetails" && (
          <NomineeDetails
            data={data}
            handleChange={handleChange}
            updateCurrent={updateCurrent}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}
        {isActive === "DocumentUpload" && (
          <DocumentUpload
            data={data}
            handleChange={handleChange}
            updateCurrent={updateCurrent}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ReForm;