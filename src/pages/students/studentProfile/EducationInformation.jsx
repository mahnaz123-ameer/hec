import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import EducationForm from '@/components/ui/formik-form/EducationForm';
import StudentInfoEducationCard from '@/components/ui/StudentInfoEducationCard';

const EducationInformation = ({ onPrevious, onNext }) => {
  const [formData, setFormData] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [initialValues, setInitialValues] = useState({
    examTitle: '',
    institute: '',
    department: '',
    completionStatus: '',
    grade: '',
    passingYear: '',
  });

  const handleSubmit = (values, { setSubmitting }) => {
    if (values !== null) {
      setFormData([...formData, values]);
      setShowPreview(true);
      setSubmitting(false);
    }
  };

  const handleEdit = (id) => {
    setInitialValues(formData[id]);
    setShowPreview(false);
  };

  return (
    <>
      <div className="bg-white rounded-lg">
        {showPreview ? (
          <>
            {formData.length > 0 && formData.map((item, index) => (
              <StudentInfoEducationCard indexNumber={index} key={index} data={item} onEdit={handleEdit} />
            ))}
            <div className='flex items-center justify-start'>
              <Button
                  type="button"
                  className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  icon="material-symbols:add"
                  onClick={() => setShowPreview(false)}
                >
                  Add Education
                </Button>
            </div>
            <div className="flex gap-2 items-center justify-end flex-wrap sticky bottom-0 bg-white pt-5 z-50">
              <Button
                onClick={() => setShowPreview(false)}
                type="button"
                className="bg-secondary-950 text-black-950 hover:bg-blue-600 hover:text-white transition-all duration-300"
                icon="gg:arrow-left"
              >
                Back
              </Button>
              <Button
                onClick={onNext}
                icon="gg:arrow-right"
                type="submit"
                className="bg-secondary-200 text-black-600 hover:bg-primary-900 hover:text-white transition-all duration-300"
                iconPosition="right"
              >
                Enroll
              </Button>
            </div>
          </>
        ) : (
          <>
           {formData.length > 0 &&
            <div className='flex items-center justify-end'>
              <Button
                  type="button"
                  className="bg-white border border-danger-600 text-danger-600 hover:bg-danger-600 hover:text-white transition-all duration-300"
                  icon="system-uicons:cross"
                  onClick={() => setShowPreview(true)}
                >
                  Close
                </Button>
            </div>}
            <EducationForm onSubmit={handleSubmit} onPrevious={onPrevious} />
          </>
        )}
      </div>
    </>
  );
};

export default EducationInformation;
