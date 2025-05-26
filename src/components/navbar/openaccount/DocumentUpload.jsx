import { useEffect, useState, useCallback } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

const DocumentUpload = ({ updateCurrent, isSubmitting, handleSubmit }) => {
  const documentTypes = [
    { id: "application_form", label: "Application Form", storageKey: "application_form_upload" },
    { id: "customer_signature", label: "Customer Signature", storageKey: "customer_signature_upload" },
    { id: "customer_photo", label: "Customer Photo", storageKey: "customer_photo_upload" },
    { id: "address_map", label: "Address Map", storageKey: "address_map_upload" },
    { id: "id_document", label: "ID Document", storageKey: "id_document_upload" },
    { id: "other_document", label: "Other Document", storageKey: "other_document_upload" },
  ];

  const [fileGroups, setFileGroups] = useState(
    documentTypes.reduce((acc, doc) => ({ ...acc, [doc.id]: [] }), {})
  );
  const [dragOver, setDragOver] = useState(
    documentTypes.reduce((acc, doc) => ({ ...acc, [doc.id]: false }), {})
  );

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();

    // Load saved file metadata from localStorage for each document type
    documentTypes.forEach((doc) => {
      const savedFiles = localStorage.getItem(doc.storageKey);
      if (savedFiles) {
        setFileGroups((prev) => ({ ...prev, [doc.id]: JSON.parse(savedFiles) }));
      }
    });
  }, []);

  useEffect(() => {
    // Save file metadata to localStorage for each document type
    documentTypes.forEach((doc) => {
      localStorage.setItem(
        doc.storageKey,
        JSON.stringify(
          fileGroups[doc.id].map((file) => ({
            name: file.name,
            size: file.size,
            type: file.type,
          }))
        )
      );
    });
  }, [fileGroups]);

  const validateFile = (file) => {
    const allowedTypes = ["application/pdf", "image/png", "image/jpeg", "image/jpg"];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      toast.error("Only PDF, PNG, JPEG, or JPG files are allowed.");
      return false;
    }
    if (file.size > maxSize) {
      toast.error("File size must be less than 5MB.");
      return false;
    }
    return true;
  };

  const handleFileChange = (docId, newFiles) => {
    const validFiles = Array.from(newFiles).filter(validateFile);
    setFileGroups((prev) => ({
      ...prev,
      [docId]: [...prev[docId], ...validFiles],
    }));
  };

  const handleDrop = useCallback(
    (docId) => (e) => {
      e.preventDefault();
      setDragOver((prev) => ({ ...prev, [docId]: false }));
      const droppedFiles = e.dataTransfer.files;
      handleFileChange(docId, droppedFiles);
    },
    []
  );

  const handleDragOver = (docId) => (e) => {
    e.preventDefault();
    setDragOver((prev) => ({ ...prev, [docId]: true }));
  };

  const handleDragLeave = (docId) => () => {
    setDragOver((prev) => ({ ...prev, [docId]: false }));
  };

  const handleInputChange = (docId) => (e) => {
    const selectedFiles = e.target.files;
    handleFileChange(docId, selectedFiles);
  };

  const handleRemoveFile = (docId, index) => {
    setFileGroups((prev) => ({
      ...prev,
      [docId]: prev[docId].filter((_, i) => i !== index),
    }));
  };

  const handleFormSubmit = async () => {
    // Check that each document type has at least one file
    for (const doc of documentTypes) {
      if (fileGroups[doc.id].length === 0) {
        toast.error(`Please upload at least one ${doc.label.toLowerCase()}.`);
        return;
      }
    }

    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
      toast.success("Documents submitted successfully!");
      handleSubmit(); // Call the passed handleSubmit function
      // Clear all files and localStorage
      setFileGroups(
        documentTypes.reduce((acc, doc) => ({ ...acc, [doc.id]: [] }), {})
      );
      documentTypes.forEach((doc) => localStorage.removeItem(doc.storageKey));
    } catch (error) {
      toast.error("Submission failed. Please try again.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 bg-gray-50">
      <div className="p-4 md:p-8 bg-gray-50 flex flex-col">
        <div className="bg-white z-10 shadow-md">
          <div className="flex items-center p-4">
            <button
              onClick={() => updateCurrent("NomineeDetails")}
              className="border border-gray-300 rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition duration-200"
              aria-label="Go back to nominee details"
            >
              <IoIosArrowBack className="text-gray-600 w-9 h-9" />
            </button>
            <h2 className="text-xl md:text-2xl font-bold ml-4">Document Upload</h2>
          </div>
        </div>

        <div className="mt-4">
          <div className="w-full" data-aos="fade-left">
            {documentTypes.map((doc) => (
              <div key={doc.id} className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                  {doc.label}
                </h3>
                <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center ${
                    dragOver[doc.id] ? "border-green-600 bg-green-100" : "border-gray-300"
                  }`}
                  onDrop={handleDrop(doc.id)}
                  onDragOver={handleDragOver(doc.id)}
                  onDragLeave={handleDragLeave(doc.id)}
                >
                  <p className="text-gray-500 mb-4">
                    Drag and drop your {doc.label.toLowerCase()} files here or click to select files
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.png,.jpeg,.jpg"
                    onChange={handleInputChange(doc.id)}
                    className="hidden"
                    id={`fileInput-${doc.id}`}
                  />
                  <label
                    htmlFor={`fileInput-${doc.id}`}
                    className="bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition duration-200 cursor-pointer"
                  >
                    Select Files
                  </label>
                </div>


                {fileGroups[doc.id].length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-2">Uploaded {doc.label} Files</h4>
                    <div className="border rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="p-3 text-left">File Name</th>
                            <th className="p-3 text-left">Size</th>
                            <th className="p-3 text-left">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {fileGroups[doc.id].map((file, index) => (
                            <tr key={index} className="border-t">
                              <td className="p-3">{file.name}</td>
                              <td className="p-3">{(file.size / 1024 / 1024).toFixed(2)} MB</td>
                              <td className="p-3">
                                <button
                                  onClick={() => handleRemoveFile(doc.id, index)}
                                  className="text-red-600 hover:underline"
                                >
                                  Remove
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={() => updateCurrent("NomineeDetails")}
                className="bg-green-600 text-white rounded-lg px-10 py-3 hover:bg-green-700 transition duration-200"
                aria-label="Go back to nominee details"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={handleFormSubmit}
                disabled={isSubmitting}
                className="bg-green-600 text-white rounded-lg px-10 py-3 hover:bg-green-700 transition duration-200"
                aria-label="Submit documents"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

DocumentUpload.propTypes = {
  updateCurrent: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default DocumentUpload;