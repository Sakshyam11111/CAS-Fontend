import { useEffect, useState } from 'react';
import FamilyDetails from './Familydetails';
import Formregister from './Formregister';
import RegistrationSidebar from './RegistrationSidebar';

const ReForm = () => {
  const [isActive, setIsActive] = useState('Registration');

  const updateCurrent = (currentStep) => {
    setIsActive(currentStep);
  };

  const [data, setData] = useState({
    customer_relation: '',
    salutation: '',
    full_name: '',
    full_name_nepali: '',
    date_of_birth_ad: '',
    gender: '',
    marital_status: '',
    customer_nationality: '',
    type_of_id: '',
    age: '',
    country_code: '',
    mobile_number: '',
    home_number: '',
    email_address: '',
    office_number: '',
    citizenship_number: '',
    citizenship_place_of_issue: '',
    citizenship_issued_date: '',
    education: '',
    occupation: '',
    nature_of_business: '',
    source_of_fund: '',
    purpose_of_account: '',
    panvat_number: '',
    institution_name: '',
    institution_address: '',
    designation: '',
    nature_of_business_risk_status: '',
    anticipated_annual_income: '',
    sms_mobile_number: '',
    sms_email_address: '',
    father_name: '',
    mother_name: '',
    grand_father_name: '',
    grand_mother_name: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    let updatedValue = value;

    if (type === 'number') {
      updatedValue = value ? Number(value) : value;
    } else if (type === 'checkbox') {
      updatedValue = checked;
    }

    setData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!data.full_name) newErrors.full_name = 'Full name is required.';
    if (!data.full_name_nepali) newErrors.full_name_nepali = 'Full name in Nepali is required.';
    if (!data.date_of_birth_ad) newErrors.date_of_birth_ad = 'Date of birth is required.';
    if (!data.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions.';
    if (!data.father_name) newErrors.father_name = "Father's name is required.";
    if (!data.mother_name) newErrors.mother_name = "Mother's name is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      console.log('Validation failed:', errors);
      return;
    }

    console.log('ReForm submitted successfully:', data);
    setData({
      customer_relation: '',
      salutation: '',
      full_name: '',
      full_name_nepali: '',
      date_of_birth_ad: '',
      gender: '',
      marital_status: '',
      customer_nationality: '',
      type_of_id: '',
      age: '',
      country_code: '',
      mobile_number: '',
      home_number: '',
      email_address: '',
      office_number: '',
      citizenship_number: '',
      citizenship_place_of_issue: '',
      citizenship_issued_date: '',
      education: '',
      occupation: '',
      nature_of_business: '',
      source_of_fund: '',
      purpose_of_account: '',
      panvat_number: '',
      institution_name: '',
      institution_address: '',
      designation: '',
      nature_of_business_risk_status: '',
      anticipated_annual_income: '',
      sms_mobile_number: '',
      sms_email_address: '',
      father_name: '',
      mother_name: '',
      grand_father_name: '',
      grand_mother_name: '',
      termsAccepted: false,
    });
    setIsActive('Registration');
  };

  useEffect(() => {
    console.log('ReForm data:', data);
  }, [data]);

  return (
    <div className="flex flex-col md:flex-row max-w-8xl mx-auto p-4 bg-gray-50">
      <RegistrationSidebar isActive={isActive} onStepChange={updateCurrent} />
      <div className="flex-1 mt-8 md:mt-0">
        {isActive === 'Registration' && (
          <Formregister
            data={data}
            handleChange={handleChange}
            errors={errors}
            updateCurrent={updateCurrent}
          />
        )}
        {isActive === 'FamilyDetails' && (
          <FamilyDetails
            data={data}
            handleChange={handleChange}
            errors={errors}
            updateCurrent={updateCurrent}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default ReForm;