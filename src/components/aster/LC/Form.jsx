import { useEffect, useState } from "react";
import Apply from "./Apply";
import Bene from "./Bene";
import Mode from "./Mode"; 
import Tenure from "./Tenure";
import Trans from "./Trans";
import Submit from "./Submit";
import Preview from "./Preview";

const Form = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    panCardNo: '',
    addressLine: '',
    city: '',
    zip: '',
    phoneNumber: '',
    
    beneFirstName: '',
    beneLastName: '',
    benePanCardNo: '',
    beneAddressLine: '',
    beneCity: '',
    beneZip: '',
    benePhoneNumber: '',

    transmissionMode: '',
    modeCurrency: '',
    modePercentage: '',
    modeIncoterms: '',
    modeDeliveryTerm: '',
    modeAmount: '',
    modeNamePlaced: '',
    modeTolerance: '',

    tenureType: '',
    creditAvailable: '',
    partialPayments: '',

    customEntryPoint: '',
    shipmentFrom: '',
    departurePort: '',
    otherDetails: '',
    shipmentDetails: '',
  });

  const [formStep, setFormStep] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value, 
    }));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const increaseFormStep = (value) => {
    setFormStep(prevStep => prevStep + value);
  };

  const decreaseFormStep = (value) => {
    setFormStep(prevStep => prevStep - value);
  };

  return (
    <div>
      {formStep == 0 ? (
        <Apply
          data={data}
          handleChange={handleChange}
          increaseFormStep={() => increaseFormStep(1)}
        />
      ) : formStep == 1 ? (
        <Bene
          data={data}
          handleChange={handleChange}
          increaseFormStep={() => increaseFormStep(1)}
          decreaseFormStep={() => decreaseFormStep(1)}
        />
      ) : formStep === 2 ? (
        <Mode
          data={data}
          handleChange={handleChange}
          increaseFormStep={() => increaseFormStep(1)}
          decreaseFormStep={() => decreaseFormStep(1)}
        />
      ) : formStep === 3 ? (
        <Tenure
          data={data}
          handleChange={handleChange}
          increaseFormStep={() => increaseFormStep(1)}
          decreaseFormStep={() => decreaseFormStep(1)}
        />
      ) : formStep === 4 ? (
        <Trans
          data={data}
          handleChange={handleChange}
          increaseFormStep={() => increaseFormStep(1)}
          decreaseFormStep={() => decreaseFormStep(1)}
        />
      ) : formStep === 5 ? (
        <Submit
          data={data}
          handleChange={handleChange}
          increaseFormStep={() => increaseFormStep(1)}
          decreaseFormStep={() => decreaseFormStep(1)}
        />
      ) : formStep === 6 ? (
        <Preview
          data={data}
          handleChange={handleChange}
          increaseFormStep={() => increaseFormStep(1)}
          decreaseFormStep={() => decreaseFormStep(1)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Form;