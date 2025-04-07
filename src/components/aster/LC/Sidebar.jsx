import PropTypes from "prop-types";


const Sidebar = ({ isActive }) => {
    return (
        <div className="w-full md:w-1/4 p-4 md:mr-8 bg-gray-50">
            <div className="sticky top-0 left-0">
                <h3 className="text-lg font-semibold mb-4">Steps</h3>
                <div className="mb-4">
                    <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full ${isActive == "Apply" || isActive === "Bene" || isActive == "Preview" || isActive == "Submit" ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-600'} flex items-center justify-center`}>
                            1
                        </div>
                        <div className={`ml-4 ${isActive == "Apply" || isActive === "Bene" ? ' text-gray-800 text-lg' : ' text-gray-600'}`}>
                            Applicant Details
                        </div>
                    </div>
                    <div className="border-l-2 border-gray-300 h-10" />
                </div>
                <div className="mb-4">
                    <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full ${isActive == "Apply" || isActive == "Preview" || isActive == "Submit" ? 'bg-gray-800' : 'bg-gray-300'} flex items-center justify-center`}></div>
                        <div className={`ml-4 ${isActive === "Apply" ? ' text-gray-800 text-lg' : ' text-gray-600'}`}>Name and Address</div>
                    </div>
                    <div className="border-l-2 border-gray-300 h-10" />
                </div>
                <div className="mb-4">
                    <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full ${isActive == "Bene" || isActive == "Preview" || isActive == "Submit" ? 'bg-gray-800' : 'bg-gray-300'} flex items-center justify-center`}></div>
                        <div className={`ml-4 ${isActive === "Bene" ? ' text-gray-800 text-lg' : ' text-gray-600'}`}>Beneficiary Details</div>
                    </div>
                    <div className="border-l-2 border-gray-300 h-10" />
                </div>
                <div className="mb-4">
                    <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full ${isActive == "LCDetails" || isActive == "Preview" || isActive == "Submit" ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-600'} flex items-center justify-center`}>2</div>
                        <div className={`ml-4 ${isActive === "LCDetails" ? ' text-gray-800 text-lg' : ' text-gray-600'}`}>LC Details</div>
                    </div>
                    <div className="border-l-2 border-gray-300 h-10" />
                </div>
                <div className="mb-4">
                    <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full ${isActive == "Associated" || isActive == "Preview" || isActive == "Submit" ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-600'} flex items-center justify-center`}>3</div>
                        <div className={`ml-4 ${isActive === "Associated" ? ' text-gray-800 text-lg' : ' text-gray-600'}`}>Associated Parties</div>
                    </div>
                    <div className="border-l-2 border-gray-300 h-10" />
                </div>
                <div className="mb-4">
                    <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full ${isActive == "Description" || isActive == "Preview" || isActive == "Submit" ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-600'} flex items-center justify-center`}>4</div>
                        <div className={`ml-4 ${isActive === "Description" ? ' text-gray-800 text-lg' : ' text-gray-600'}`}>Description</div>
                    </div>
                    <div className="border-l-2 border-gray-300 h-10" />
                </div>
                <div className="mb-4">
                    <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full ${isActive == "Credit" || isActive == "Preview" || isActive == "Submit" ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-600'} flex items-center justify-center`}>5</div>
                        <div className={`ml-4 ${isActive === "Credit" ? ' text-gray-800 text-lg' : ' text-gray-600'}`}>Credit</div>
                    </div>
                </div>
            </div>
        </div>
    );
};


Sidebar.propTypes = {
    isActive: PropTypes.func,
};

export default Sidebar;