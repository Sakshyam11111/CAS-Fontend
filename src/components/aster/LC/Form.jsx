import { useEffect, useState } from "react";
import Apply from "./Apply";
import Bene from "./Bene";
import LCDetails from "./LCdetails";
import Tenure from "./Tenure";
import Trans from "./Trans";
import Submit from "./Submit";
import Preview from "./Preview";
import Conform from "./Conform";

const Form = () => {
  const [data, setData] = useState({
    applicant_name: "",
    applicant_email: "",
    applicant_address: "",
    applicant_phone: "",
    applicant_postal_code: "",
    applicant_country: "",
    account_number: "",
    applicant_exim_code: "",

    beneficiary_name: "",
    beneficiary_account_number: "",
    country: "",
    benePanCardNo: "",
    beneficiary_address_1: "",
    beneficiary_address_2: "",
    beneficiary_address_3: "",
    phone_number: "",
    email: "",
    mobile_code: "",
    exim_code: "",
    pan_no: "",

    LCdetailsPercentage: "",
    LCdetailsIncoterms: "",
    LCdetailsCurrency: "",
    LCdetailsDeliveryTerm: "",
    LCdetailsAmount: "",
    LCdetailsNamePlaced: "",
    LCdetailsTolerance: "",
    form_of_documentary_credit: "",
    date_of_issue: "",
    applicable_rules: "",
    lctransferable: "",
    lcrevolving: "",
    lc_transferred_to: "",
    date_of_expiry: "",
    place_of_expire: "",
    amount_amount: 0,
    tolerance_positive: "",
    tolerance_negative: "",
    add_amount_covered: "",
    ref_to_pre_advice: "",

    credit_bank_name: "",
    credit_swift_code: "",
    credit_any_bank: "",
    beneficiary_drafts_at: "",
    credit_drawee: "",
    credit_mixed_payment: "",
    deferredPaymentDetails: "",
    place_of_taking_in_charge: "",
    credit_port_of_loading: "",
    credit_port_of_discharge: "",
    credit_place_of_destination: "",
    credit_latest_date_of_shipment: "",
    customs_entry_point: "",
    intransit_to: "",
    credit_shipment_period: "",
    credit_period_of_presentation: "",
    credit_house_airway: "",
    credit_non_conference_line: "",
    on_deck_shipment_allowed: "",

    description_goods: "",
    type_of_goods: "",
    hs_code: "",
    description_license_code: "",
    description_license_description: "",
    quality: "",
    description_unit_price: "",
    description_amount: "",
    description_capital_goods: "",
    description_delivery_terms: "",
    description_place: "",
    cif: "",
    fob: "",
    incoterms: "",
    covered_by_details: "",
    insurance_no: "",
    insurance_policy_no: "",
    insurance_details_amount: "",
    insurance_company_name: "",
    insurance_details_expiry: "",
    insurance_details_premium_amount: "",
    insurance_details_paid_date: "",
    proforma_reference_number: "",
    proforma_date: "",
    proforma_valid_until: "",
    proforma_origin_of_goods: "",

    confirmation_instruction: "",
    confirming_bank: "",
    confirming_swift_code: "",
    confirmation_charges: "",
    other_charges_outside_country: "",
    advisingBankName: "",
    advisingSWIFT: "",
    advising_bank_charges: "",
    bank_name: "",
    advising_swift_code: "",
    advisingBankschargesifany: "",
    direct_reimbursement: ""
  });

  const [formStep, setFormStep] = useState(0);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    let updatedValue = value;

    if (type === "number") {
      updatedValue = value ? Number(value) : value; // Convert to number or keep it empty
    }

    setData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
  };

  useEffect(() => {
    console.log("The data: ", data);
  }, [data]);

  const increaseFormStep = (value) => {
    setFormStep((prevStep) => prevStep + value);
  };

  const decreaseFormStep = (value) => {
    setFormStep((prevStep) => prevStep - value);
  };


  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://192.168.10.3:8001/api/resource/Letter of Credit`, {
        method: 'POST',
        headers: {
          'Authorization': 'f22c7e0d8ad50b0:5bb29f1008f8d7b',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  return (
    <div>
      {formStep === 0 && (
        <Apply
          data={data}
          handleChange={handleChange}
          increaseFormStep={() => increaseFormStep(1)}
        />
      )}
      {formStep === 1 && (
        <Bene
          data={data}
          handleChange={handleChange}
          increaseFormStep={() => increaseFormStep(1)}
          decreaseFormStep={() => decreaseFormStep(1)}
        />
      )}
      {formStep === 2 && (
        <LCDetails
          data={data}
          handleChange={handleChange}
          increaseFormStep={() => increaseFormStep(1)}
          decreaseFormStep={() => decreaseFormStep(1)}
        />
      )}
      {formStep === 3 && (
        <Conform
          data={data}
          handleChange={handleChange}
          increaseFormStep={() => increaseFormStep(1)}
          decreaseFormStep={() => decreaseFormStep(1)}
        />
      )}
      {formStep === 4 && (
        <Trans
          data={data}
          handleChange={handleChange}
          increaseFormStep={() => increaseFormStep(1)}
          decreaseFormStep={() => decreaseFormStep(1)}
        />
      )}
      {formStep === 5 && (
        <Tenure
          data={data}
          handleChange={handleChange}
          increaseFormStep={() => increaseFormStep(1)}
          decreaseFormStep={() => decreaseFormStep(1)}
        />
      )}
      {formStep === 6 && (
        <Submit
          data={data}
          handleChange={handleChange}
          increaseFormStep={() => increaseFormStep(1)}
          decreaseFormStep={() => decreaseFormStep(1)}
          handleSubmit={handleSubmit}
        />
      )}
      {formStep === 7 && (
        <Preview
          data={data}
          handleChange={handleChange}
          increaseFormStep={() => increaseFormStep(1)}
          decreaseFormStep={() => decreaseFormStep(1)}
        />
      )}
    </div>
  );
};

export default Form;