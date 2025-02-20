# api_integration.py
import requests
import frappe
from frappe import _
import xml.etree.ElementTree as ET

@frappe.whitelist()
def lc_api_submit(doc, method):
    try:
        # Get session ID from the third-party application
        session_id = get_session_id()
        
        
        # Push data to the third-party application
        push_data_to_third_party(doc, session_id)
        
        # Release the session or logout
        release_session(session_id)
    except Exception as e:
        frappe.throw(_("Error during third-party API interaction: {0}").format(str(e)))

def get_session_id():
    connect_url = "http://192.168.240.14:8080/WFRestFulWebServices/ngone/Restful/slcabone/WMConnect/?userName=Hemant&UserExist=N"
    xml_body = """<?xml version="1.0"?>
    <WMConnect_Input>
        <Option>WMConnect</Option>
        <EngineName>iBPSNMB</EngineName>
        <ApplicationInfo></ApplicationInfo>
        <Participant>
            <Scope></Scope>
            
            <Locale>en-us</Locale>
            <participantType>U</participantType>
        </Participant>
    </WMConnect_Input>
    """
    password = "System@123"
    
    headers = {
        "Content-Type": "application/xml",
        "Password": password
    }
    
    try:
        response = requests.post(connect_url, data=xml_body, headers=headers)
        root = ET.fromstring(response.content)
        session_id = root.findtext('.//SessionId')
        if session_id:
            frappe.msgprint(f"Session ID: {session_id}")
            return session_id
    except:
        frappe.throw("Session ID not found in the response. User might already be logged in.")

def push_data_to_third_party(doc, session_id):
    url = "http://192.168.240.14:8080/WFRestFulWebServices/ngone/Restful/slcabone/WFUploadWorkItem"
    
    params = {
        "processDefId": "2",
        "initiateFromActivityId": "2",
        "attributes": (
            f"LCcifID{doc.cif_id}"
            # Nature of lc 
            f"LCtype{doc.custom_trade_services}"
            f"LCrequestType{doc.custom_request_type}"
            f"LCtypeFlat{doc.custom_nature_of_lc}"
            f"LCShipmentDate{doc.custom_date_of_issue}"

            #APPLICANT NAME AND ADDRESS
            f"LCapplicantName{doc.applicant_name}"
            f"LCapplicantAddress{doc.applicant_address}"
            f"LcaccountNumber{doc.account_number}"
            f"LCapplicantPhone{doc.phone}"
            f"LCemail{doc.applicant_email}"
            f"LCpostalCode{doc.postal_code}"
            f"LCpanNo{doc.pan_no}"
            f"LCeximCode{doc.exim_code}"
            
            # #different 
            f"LCchannel{doc.channel}"

            # Beneficiary Name 
            f"LCbeneficiaryName{doc.custom_beneficiary_name}"
            f"LCcountry{doc.custom_country}"
            f"LCbEmail{doc.custom_email}"
            f"LCbPhone{doc.custom_phone_no}"
            
            #extra
            f"LCbProvince{doc.custom_province}"
            f"LCpostalCodeBeneficiary{doc.custom_postal}"
            f"LCbMobileCode{doc.custom_mobile_code}"
            f"lc_swiftcode{doc.custom_swift_code}"
            f"LCstreet{doc.custom_street}"
            f"LCcity{doc.custom_city}"
            f"lc_bankname{doc.custom_bank_name}"

            #  # mode of transmission 
            f"LCadvancePaymentLc{doc.custom_by_tele_transmission}"
            
            #  # currency and amount
            f"LCcurrencyCode{doc.custom_currency}"
            f"LCtransferredAmount{doc.custom_amount}"
            
            #  # Tolerance type
            f"LctoleranceType{doc.custom_type}"
            f"Lctolerance1{doc.custom_percentage}"
           
            # #CREDIT AVAILABLE WITH / NEGOTIATING BANK 
            f"LCbankName{doc.custom_negotiating_bank}"
            f"lcissuingbank{doc.custom_requesting_bank}"
            # # Partial Shipments 
            f"LCpartialShipment{doc.custom_allowed or doc.custom_not_allowed}"
        
            # # TRANSSHIPMENT
            f"LCtransshipment{doc.custom_allow or doc.custom_now_allow}"

            # TT REMBERSEMent 
            
            # #SHIPMENT FROM
            f"LCplaceofTakinginCharge{doc.custom_ship}"
         
            # # Custom Port of Departure/Loading
            f"LCportOfLoading{doc.custom_airport_of_departure}"
            f"LCportofDischarge{doc.custom_airport_of_destination}"
            # final destination
            f"LCplaceOfFinalDestin{doc.custom_place_of_delivery}"
        
            # CUSTOM ENTRY POINT 
            f"LCcustomEntryPoint{doc.custom_custom_entry}"
            # f"LCintransitTo{doc.custom_if_other_specific}"
         
            #EXPIRY / SHIPMENT DETAILS
            # errors datatype
            # f"LClatestDateOfShipment{doc.custom_latest_date_of_shipment}"
            # f"LClatestDateOfShipment{doc.custom_exipry_date}"
            
            
            f"LCperiodOfPresentation{doc.custom_document_presentation_period}"
             
         
            # DESCRIPTION, SPECIFICATION AND QUALITY OF GOODS AND/OR SERVICES
            f"LCgoods.description{doc.custom_desc}"
            f"LCgoods.code{doc.custom_hs_code}"
            f"LCgoods.noofunits{doc.custom_quantity}"
            f"LCgoods.priceperunit{doc.custom_rate}"
        
            
            
            #DOCUMENTS REQUIRED
            f"LCdocsName{doc.custom_description}"
           
           
            #Documents
            f"LCdocsName{doc.custom_if_other_specific}"
           
            # Custom Advising Bank Details
            f"LCadvisingBank{doc.custom_advisingbank}"
          
        ),
        "documents": ""
    }
    
    headers = {
        "sessionId": session_id
    }

    try:
        response = requests.post(url, params=params, headers=headers)
        
        # Logging request and response details for debugging
        frappe.logger().info(f"Request URL: {url}")
        frappe.logger().info(f"Request Headers: {headers}")
        frappe.logger().info(f"Request Params: {params}")
        frappe.logger().info(f"Response Status Code: {response.status_code}")
        frappe.logger().info(f"Response Content: {response.content}")

        if response.status_code == 200:
            # Parse XML response
            root = ET.fromstring(response.text)
            description_element = root.find('.//ProcessInstanceId')
            if description_element is not None:
                process_id = description_element.text
                frappe.msgprint(f"Data has been successfully pushed to the DMS with PID {process_id}.")
                
            else:
                frappe.msgprint("ProcessInstanceId tag not found in the XML response.")
        else:
            frappe.throw(_("Failed to push data to the third-party application. Status Code: {0}").format(response.status_code))

    except requests.exceptions.RequestException as e:
        frappe.logger().error(f"Request error occurred: {e}")
        frappe.throw(_("Request error occurred: {0}").format(e))
    except ET.ParseError as e:
        frappe.logger().error(f"Error parsing XML: {e}")
        frappe.throw(_("Error parsing XML: {0}").format(e))
    except Exception as err:
        frappe.logger().error(f"An error occurred while pushing data: {err}")
        frappe.throw(_("An error occurred while pushing data: {0}").format(err))

def release_session(session_id):
    url = "http://192.168.240.14:8080/WFRestFulWebServices/ngone/Restful/slcabone/WMDisconnect?userName=Hemant"
    headers = {
        "Content-Type": "application/xml",
        "sessionId": session_id
    }

    response = requests.post(url, headers=headers)

    if response.status_code == 200:
        frappe.msgprint("Session Released")
        


