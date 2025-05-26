import { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

const FamilyDetails = ({ data, handleChange, updateCurrent, accountType }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  // Function to convert hyphenated lowercase to sentence case
  const toSentenceCase = (str) => {
    return str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const formattedTitle = accountType ? toSentenceCase(accountType) : "Family Details";

  return (
    <div className="p-4 md:p-8 bg-gray-50 flex flex-col">
      <div className="bg-white z-10 shadow-md">
        <div className="flex items-center p-4">
          <button
            onClick={() => updateCurrent("Registration")}
            className="border border-gray-300 rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition duration-200"
            aria-label="Go back to registration form"
          >
            <IoIosArrowBack className="text-gray-600 w-9 h-9" />
          </button>
          <h2 className="text-xl md:text-2xl font-bold ml-4">{formattedTitle}</h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-4">
        <div className="w-full" data-aos="fade-left">
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                Family Information
              </h3>
              <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div>
                  <label htmlFor="father_name">Father's Name</label>
                  <input
                    id="father_name"
                    type="text"
                    name="father_name"
                    value={data.father_name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Father's Name"
                  />
                </div>
                <div>
                  <label htmlFor="mother_name">Mother's Name</label>
                  <input
                    id="mother_name"
                    type="text"
                    name="mother_name"
                    value={data.mother_name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Mother's Name"
                  />
                </div>
                <div>
                  <label htmlFor="grand_father_name">Grandfather's Name</label>
                  <input
                    id="grand_father_name"
                    type="text"
                    name="grand_father_name"
                    value={data.grand_father_name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Grandfather's Name"
                  />
                </div>
                <div>
                  <label htmlFor="spouse_name">Spouse's Name</label>
                  <input
                    id="spouse_name"
                    type="text"
                    name="spouse_name"
                    value={data.spouse_name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Spouse's Name"
                  />
                </div>
                <div>
                  <label htmlFor="sons_name">Son's Name</label>
                  <input
                    id="sons_name"
                    type="text"
                    name="sons_name"
                    value={data.sons_name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Son's Name"
                  />
                </div>
                <div>
                  <label htmlFor="grand_mother_name">Grandmother's Name</label>
                  <input
                    id="grand_mother_name"
                    type="text"
                    name="grand_mother_name"
                    value={data.grand_mother_name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                    placeholder="Enter Grandmother's Name"
                  />
                </div>
                {data.marital_status === "Married" && (
                  <>
                    <div>
                      <label htmlFor="more_than_one_son">Do you have more than one son?</label>
                      <select
                        id="more_than_one_son"
                        name="more_than_one_son"
                        value={data.more_than_one_son}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    {data.more_than_one_son === "Yes" && (
                      <>
                        <div>
                          <label htmlFor="first_son_name">Son Name</label>
                          <input
                            id="first_son_name"
                            type="text"
                            name="first_son_name"
                            value={data.first_son_name || ''}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                            placeholder="Enter First Son's Name"
                          />
                        </div>
                        <div>
                          <label htmlFor="second_son_name">Son Name</label>
                          <input
                            id="second_son_name"
                            type="text"
                            name="second_son_name"
                            value={data.second_son_name || ''}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                            placeholder="Enter Second Son's Name"
                          />
                        </div>
                      </>
                    )}
                    <div>
                      <label htmlFor="more_than_one_daughter">Do you have more than one daughter?</label>
                      <select
                        id="more_than_one_daughter"
                        name="more_than_one_daughter"
                        value={data.more_than_one_daughter}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    {data.more_than_one_daughter === "Yes" && (
                      <>
                        <div>
                          <label htmlFor="first_daughter_name">Daughter Name</label>
                          <input
                            id="first_daughter_name"
                            type="text"
                            name="first_daughter_name"
                            value={data.first_daughter_name || ''}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                            placeholder="Enter First Daughter's Name"
                          />
                        </div>
                        <div>
                          <label htmlFor="second_daughter_name">Daughter Name</label>
                          <input
                            id="second_daughter_name"
                            type="text"
                            name="second_daughter_name"
                            value={data.second_daughter_name || ''}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                            placeholder="Enter Second Daughter's Name"
                          />
                        </div>
                      </>
                    )}
                  </>
                )}
                {data.marital_status === "Single" && (
                  <>
                    <div>
                      <label htmlFor="has_adopted_child">Have you adopted a child?</label>
                      <select
                        id="has_adopted_child"
                        name="has_adopted_child"
                        value={data.has_adopted_child}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    {data.has_adopted_child === "Yes" && (
                      <>
                        <div>
                          <label htmlFor="adopted_son">Adopted Son</label>
                          <input
                            id="adopted_son"
                            type="text"
                            name="adopted_son"
                            value={data.adopted_son || ''}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                            placeholder="Enter Adopted Son's Name"
                          />
                        </div>
                        <div>
                          <label htmlFor="adopted_daughter">Adopted Daughter</label>
                          <input
                            id="adopted_daughter"
                            type="text"
                            name="adopted_daughter"
                            value={data.adopted_daughter || ''}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-3 w-full"
                            placeholder="Enter Adopted Daughter's Name"
                          />
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>

            {data.marital_status === "Married" && data.more_than_one_son === "Yes" && (
              <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-semibold mb-4 text-green-500 hover:underline hover:text-green-500 transition-all duration-200">
                  In Case of Married Sons
                </h3>
                <div className="border-b border-gray-300 my-2 mt-5 mb-5"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div>
                    <label htmlFor="more_than_one_daughter_in_law">Do you have more than one daughter in law?</label>
                    <select
                      id="more_than_one_daughter_in_law"
                      name="more_than_one_daughter_in_law"
                      value={data.more_than_one_daughter_in_law}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  {data.more_than_one_daughter_in_law === "Yes" && (
                    <>
                      <div>
                        <label htmlFor="first_daughter_in_law_name">Daughter in Law Name</label>
                        <input
                          id="first_daughter_in_law_name"
                          type="text"
                          name="first_daughter_in_law_name"
                          value={data.first_daughter_in_law_name || ''}
                          onChange={handleChange}
                          className="border border-gray-300 rounded-lg p-3 w-full"
                          placeholder="Enter First Daughter in Law Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="second_daughter_in_law_name">Daughter in Law Name</label>
                        <input
                          id="second_daughter_in_law_name"
                          type="text"
                          name="second_daughter_in_law_name"
                          value={data.second_daughter_in_law_name || ''}
                          onChange={handleChange}
                          className="border border-gray-300 rounded-lg p-3 w-full"
                          placeholder="Enter Second Daughter in Law Name"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => updateCurrent("Registration")}
                className="bg-green-600 text-white rounded-lg px-10 py-3 hover:bg-green-700 transition duration-200"
                aria-label="Go back to registration form"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={() => updateCurrent('CustomerDeclaration')}
                className="bg-green-600 text-white rounded-lg px-8 py-3 hover:bg-green-700 transition duration-200"
                aria-label="Continue to customer declaration"
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

FamilyDetails.propTypes = {
  data: PropTypes.shape({
    father_name: PropTypes.string,
    mother_name: PropTypes.string,
    grand_father_name: PropTypes.string,
    grand_mother_name: PropTypes.string,
    spouse_name: PropTypes.string,
    sons_name: PropTypes.string,
    first_son_name: PropTypes.string,
    second_son_name: PropTypes.string,
    first_daughter_name: PropTypes.string,
    second_daughter_name: PropTypes.string,
    first_daughter_in_law_name: PropTypes.string,
    second_daughter_in_law_name: PropTypes.string,
    marital_status: PropTypes.string,
    has_adopted_child: PropTypes.string,
    more_than_one_son: PropTypes.string,
    more_than_one_daughter: PropTypes.string,
    more_than_one_daughter_in_law: PropTypes.string,
    adopted_son: PropTypes.string,
    adopted_daughter: PropTypes.string,
  }),
  handleChange: PropTypes.func,
  updateCurrent: PropTypes.func,
  accountType: PropTypes.string,
};

export default FamilyDetails;