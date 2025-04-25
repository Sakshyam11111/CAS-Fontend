import { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

const FamilyDetails = ({ data, handleChange, errors, updateCurrent, handleSubmit }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className="p-4 md:p-8 bg-gray-50 flex flex-col">
      <div className="bg-white z-10 shadow-md">
        <div className="flex items-center p-4">
          <button
            onClick={() => updateCurrent("Registration")}
            className="border border-gray-300 rounded-full p-anything you want to add to this file?2 bg-gray-100 hover:bg-gray-200 transition duration-200"
          >
            <IoIosArrowBack className="text-gray-600 w-9 h-9" />
          </button>
          <h2 className="text-xl md:text-2xl font-bold ml-4">Family Details</h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-4">
        <div className="w-full" data-aos="fade-left">
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                Family Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h1>Father's Name</h1>
                  <input
                    type="text"
                    name="father_name"
                    value={data.father_name}
                    onChange={handleChange}
                    className={`border border-gray-300 rounded-lg p-3 w-full ${errors.father_name ? "border-red-500" : ""}`}
                    placeholder="Enter Father's Name"
                  />
                  {errors.father_name && <p className="text-red-500 text-sm">{errors.father_name}</p>}
                </div>
                <div>
                  <h1>Mother's Name</h1>
                  <input
                    type="text"
                    name="mother_name"
                    value={data.mother_name}
                    onChange={handleChange}
                    className={`border border-gray-300 rounded-lg p-3 w-full ${errors.mother_name ? "border-red-500" : ""}`}
                    placeholder="Enter Mother's Name"
                  />
                  {errors.mother_name && <p className="text-red-500 text-sm">{errors.mother_name}</p>}
                </div>
                <div>
                  <h1>Grandfather's Name</h1>
                  <input
                    type="text"
                    name="grand_father_name"
                    value={data.grand_father_name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Grandfather's Name"
                  />
                </div>
                <div>
                  <h1>Grandmother's Name</h1>
                  <input
                    type="text"
                    name="grand_mother_name"
                    value={data.grand_mother_name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Grandmother's Name"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => updateCurrent("Registration")}
                className="bg-green-600 text-white rounded-lg px-10 py-3 hover:bg-green-700 transition duration-200"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-green-600 text-white rounded-lg px-8 py-3 hover:bg-green-700 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

FamilyDetails.propTypes = {
  data: PropTypes.shape({
    father_name: PropTypes.string,
    mother_name: PropTypes.string,
    grand_father_name: PropTypes.string,
    grand_mother_name: PropTypes.string,
  }),
  handleChange: PropTypes.func,
  errors: PropTypes.object,
  updateCurrent: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default FamilyDetails;