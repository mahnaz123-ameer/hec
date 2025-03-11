import React, { useState } from 'react'
import BasicInformation from './BasicInformation'
import AddressInformation from './AddressInformation'
import { Icon } from '@iconify/react'

const steps = [
  { id: 1, name: 'Basic Information', component: BasicInformation },
  { id: 2, name: 'Address', component:  AddressInformation },

]

const   ParentsProfileWrapper = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const CurrentStepComponent = steps.find(step => step.id === currentStep)?.component

  return (
    <div className="w-full">
      {/* Step Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-start gap-2">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Circle with Number */}
              <div className="flex items-center">
                <button
                  onClick={() => setCurrentStep(step.id)}
                  className={`w-[18px] h-[18px] rounded-full flex items-center justify-center ${
                    step.id === currentStep
                      ? ' bg-white border-black-800 border-[4px]'
                      : step.id < currentStep
                      ? 'bg-green-600 text-white border-green-600'
                      : 'bg-white border-black-800 border-[2px]'
                  }`}
                >
                  {step.id < currentStep ? (
                    <svg className="w-2 h-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <>
                    </>
                  )}
                </button>
                <span
                  className={`ml-2 text-sm font-medium text-gray-950`}
                >
                  {step.name}
                </span>
              </div>
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div>
                    <Icon icon="material-symbols-light:chevron-right-rounded" width="24" height="24" />
                </div>
                // <div
                //   className={`flex-1 h-[2px] mx-4 ${
                //     step.id < currentStep ? 'bg-blue-600' : 'bg-gray-300'
                //   }`}
                // />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="mt-5">
        {CurrentStepComponent && <CurrentStepComponent onNext={handleNext} onPrevious={handlePrevious} />}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-5 flex justify-between hidden">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className={`px-4 py-2 rounded ${
            currentStep === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length}
          className={`px-4 py-2 rounded ${
            currentStep === steps.length
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {currentStep === steps.length ? 'Complete' : 'Next'}
        </button>
      </div>
    </div>
  )
}

export default ParentsProfileWrapper;
