import xml2js from "xml2js";

const API_BASE_URL =
  "http://192.168.240.14:8080/WFRestFulWebServices/ngone/Restful/casngone";
const DEFAULT_USER = "Supervisor";
const PASSWORD = "System@123";

const parseXmlResponse = async (responseText) => {
  try {
    return await xml2js.parseStringPromise(responseText);
  } catch (error) {
    throw new Error("Failed to parse XML response", error);
  }
};

const handleApiResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.text();
};

export const connectApi = async () => {
  const url = `${API_BASE_URL}/WMConnect/?userName=${DEFAULT_USER}&UserExist=N`;
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

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/xml",
        Password: PASSWORD,
      },
      body: xmlBody,
    });

    const responseText = await handleApiResponse(response);
    const result = await parseXmlResponse(responseText);

    const sessionId = result?.WMConnect_Output?.SessionId?.[0];
    if (!sessionId) throw new Error("Session ID not found in response");

    return sessionId;
  } catch (error) {
    throw new Error(`Connection failed: ${error.message}`);
  }
};

export const uploadWorkItem = async (sessionId, doc) => {
  const url = `${API_BASE_URL}/WFUploadWorkItem`;
  const attributes = [
    `LCcifID${doc.cif_id}`,
    `LCtype${doc.custom_trade_services}`,
    `LCrequestType${doc.custom_request_type}`,
    `LCtypeFlat${doc.custom_nature_of_lc}`,
    `LCShipmentDate${doc.custom_date_of_issue}`,
    `LCapplicantName${doc.applicant_name}`,
  ].join("");

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        sessionId,
      },
      body: new URLSearchParams({
        processDefId: "13",
        initiateFromActivityId: "3",
        attributes,
        documents: "",
      }).toString(),
    });

    const responseText = await handleApiResponse(response);
    const result = await parseXmlResponse(responseText);

    const processId = result?.WFUploadWorkItem_Output?.ProcessInstanceId?.[0];
    if (!processId) throw new Error("ProcessInstanceId not found in response");

    return processId;
  } catch (error) {
    throw new Error(`Data upload failed: ${error.message}`);
  }
};

export const disconnectApi = async (sessionId) => {
  const url = `${API_BASE_URL}/WMDisconnect?userName=${DEFAULT_USER}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/xml",
        sessionId,
      },
    });

    await handleApiResponse(response);
    return true;
  } catch (error) {
    throw new Error(`Session disconnect failed: ${error.message}`);
  }
};
