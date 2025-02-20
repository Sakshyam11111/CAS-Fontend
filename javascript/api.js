import { useState } from "react";

import xml2js from "xml2js";

const LcApiSubmit = () => {
  const [message, setMessage] = useState("");

  const lcApiSubmit = async (doc) => {
    try {
      const sessionId = await getSessionId();
      await pushDataToThirdParty(doc, sessionId);
      await releaseSession(sessionId);
    } catch (error) {
      setMessage(`Error during third-party API interaction: ${error.message}`);
    }
  };

  const getSessionId = async () => {
    const connectUrl =
      "http://192.168.240.14:8080/WFRestFulWebServices/ngone/Restful/slcabone/WMConnect/?userName=Hemant&UserExist=N";
    const xmlBody = `<?xml version="1.0"?>
        <WMConnect_Input>
            <Option>WMConnect</Option>
            <EngineName>iBPSNMB</EngineName>
            <ApplicationInfo></ApplicationInfo>
            <Participant>
                <Scope></Scope>
                <Locale>en-us</Locale>
                <participantType>U</participantType>
            </Participant>
        </WMConnect_Input>`;
    const password = "System@123";

    try {
      const response = await fetch(connectUrl, xmlBody, {
        method: "POST",
        headers: {
          "Content-Type": "application/xml",
          Password: password,
        },
      });
      const result = await xml2js.parseStringPromise(response.data);
      const sessionId = result.WMConnect_Output.SessionId[0];

      if (sessionId) {
        setMessage(`Session ID: ${sessionId}`);
        return sessionId;
      }
    } catch (error) {
      throw new Error(
        "Session ID not found in the response. User might already be logged in.",
        error
      );
    }
  };

  const pushDataToThirdParty = async (doc, sessionId) => {
    const url =
      "http://192.168.240.14:8080/WFRestFulWebServices/ngone/Restful/slcabone/WFUploadWorkItem";
    const params = new URLSearchParams({
      processDefId: "2",
      initiateFromActivityId: "2",
      attributes: createAttributesString(doc),
      documents: "",
    });

    try {
      const response = await fetch(url, params, {
        method: "POST",
        headers: {
          sessionId: sessionId,
        },
      });

      const result = await xml2js.parseStringPromise(response.data);
      const processId = result.WFUploadWorkItem_Output.ProcessInstanceId[0];

      if (processId) {
        setMessage(
          `Data has been successfully pushed to the DMS with PID ${processId}.`
        );
      } else {
        setMessage("ProcessInstanceId tag not found in the XML response.");
      }
    } catch (error) {
      throw new Error(
        `Failed to push data to the third-party application. Status Code: ${error.response?.status}`
      );
    }
  };

  const createAttributesString = (doc) => {
    return `
    LCcifID${doc.cif_id}
    LCtype${doc.custom_trade_services}
    LCrequestType${doc.custom_request_type}
    LCtypeFlat${doc.custom_nature_of_lc}
    LCShipmentDate${doc.custom_date_of_issue}
    LCapplicantName${doc.applicant_name}`;
  };

  const releaseSession = async (sessionId) => {
    const url =
      "http://192.168.240.14:8080/WFRestFulWebServices/ngone/Restful/slcabone/WMDisconnect?userName=Hemant";
    try {
      await fetch(url, null, {
        method: "POST",
        headers: {
          "Content-Type": "application/xml",
          sessionId: sessionId,
        },
      });
      setMessage("Session Released");
    } catch (error) {
      throw new Error("Failed to release session.", error);
    }
  };

  return (
    <div>
      <h1>LC API Submit</h1>
      <button onClick={() => lcApiSubmit(/* pass the doc object here */)}>
        Submit
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LcApiSubmit;
