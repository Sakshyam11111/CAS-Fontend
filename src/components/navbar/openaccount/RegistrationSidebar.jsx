import PropTypes from 'prop-types';

const RegistrationSidebar = ({ isActive, onStepChange }) => {
  return (
    <div className="w-full md:w-72 p-4 bg-gray-50 md:mr-8 mt-8 md:mt-0">
      <div className="sticky top-20">
        <h3 className="text-lg font-semibold mb-4">Registration Steps</h3>
        <div className="mb-4">
          <button
            type="button"
            onClick={() => onStepChange('Registration')}
            className="flex items-center w-full text-left focus:outline-none"
            aria-current={isActive === 'Registration' ? 'step' : undefined}
          >
            <div
              className={`w-8 h-8 rounded-full ${['Registration', 'FamilyDetails', 'CustomerDeclaration', 'NomineeDetails', 'DocumentUpload'].includes(isActive)
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-300 text-gray-600'
                } flex items-center justify-center`}
            >
              1
            </div>
            <div
              className={`ml-4 ${isActive === 'Registration' ? 'text-green-600 text-lg font-semibold' : 'text-gray-600'}`}
            >
              Basic Information
            </div>
          </button>
          <div className="border-l-2 border-gray-300 h-10 ml-4" />
        </div>
        <div className="mb-4">
          <button
            type="button"
            onClick={() => onStepChange('FamilyDetails')}
            className="flex items-center w-full text-left focus:outline-none"
            aria-current={isActive === 'FamilyDetails' ? 'step' : undefined}
          >
            <div
              className={`w-8 h-8 rounded-full ${['FamilyDetails', 'CustomerDeclaration', 'NomineeDetails', 'DocumentUpload'].includes(isActive)
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-300 text-gray-600'
                } flex items-center justify-center`}
            >
              2
            </div>
            <div
              className={`ml-4 ${isActive === 'FamilyDetails' ? 'text-green-600 text-lg font-semibold' : 'text-gray-600'}`}
            >
              Family Details
            </div>
          </button>
          <div className="border-l-2 border-gray-300 h-10 ml-4" />
        </div>
        <div className="mb-4">
          <button
            type="button"
            onClick={() => onStepChange('CustomerDeclaration')}
            className="flex items-center w-full text-left focus:outline-none"
            aria-current={isActive === 'CustomerDeclaration' ? 'step' : undefined}
          >
            <div
              className={`w-8 h-8 rounded-full ${['CustomerDeclaration', 'NomineeDetails', 'DocumentUpload'].includes(isActive)
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-300 text-gray-600'
                } flex items-center justify-center`}
            >
              3
            </div>
            <div
              className={`ml-4 ${isActive === 'CustomerDeclaration' ? 'text-green-600 text-lg font-semibold' : 'text-gray-600'}`}
            >
              Customer Declaration
            </div>
          </button>
          <div className="border-l-2 border-gray-300 h-10 ml-4" />
        </div>
        <div className="mb-4">
          <button
            type="button"
            onClick={() => onStepChange('NomineeDetails')}
            className="flex items-center w-full text-left focus:outline-none"
            aria-current={isActive === 'NomineeDetails' ? 'step' : undefined}
          >
            <div
              className={`w-8 h-8 rounded-full ${['NomineeDetails', 'DocumentUpload'].includes(isActive)
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-300 text-gray-600'
                } flex items-center justify-center`}
            >
              4
            </div>
            <div
              className={`ml-4 ${isActive === 'NomineeDetails' ? 'text-green-600 text-lg font-semibold' : 'text-gray-600'}`}
            >
              Nominee Details
            </div>
          </button>
          <div className="border-l-2 border-gray-300 h-10 ml-4" />
        </div>
        <div className="mb-4">
          <button
            type="button"
            onClick={() => onStepChange('DocumentUpload')}
            className="flex items-center w-full text-left focus:outline-none"
            aria-current={isActive === 'DocumentUpload' ? 'step' : undefined}
          >
            <div
              className={`w-8 h-8 rounded-full ${isActive === 'DocumentUpload'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-300 text-gray-600'
                } flex items-center justify-center`}
            >
              5
            </div>
            <div
              className={`ml-4 ${isActive === 'DocumentUpload' ? 'text-green-600 text-lg font-semibold' : 'text-gray-600'}`}
            >
              Documents
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

RegistrationSidebar.propTypes = {
  isActive: PropTypes.string.isRequired,
  onStepChange: PropTypes.func.isRequired,
};

export default RegistrationSidebar;