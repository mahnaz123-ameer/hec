import React, { useState } from "react";
import InformationCard from "@/components/ui/InformationCard";
import StudentInfoEducationCard from "@/components/ui/StudentInfoEducationCard";
import { useSelector, useDispatch } from "react-redux";
import { handleCustomizer } from '@/store/layout';
import GlobalDrawer from '@/components/partials/globalDrawer';
import EducationForm from "@/components/ui/formik-form/EducationForm";
import Button from "@/components/ui/Button";
import img from "@/assets/images/all-img/view_certificate.png"
import Select from "@/components/ui/react-hook-form/Select";

const AcademicInformation = ({ profileData, columnSpan }) => {
  const [currentDrawer, setCurrentDrawer] = useState(null);
  const [currentDrawerTitle, setCurrentDrawerTitle] = useState(null);
  const {customizer} = useSelector((state) => state.layout);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(
    [
      {"examTitle": "eExam", "institute": "eInstitute", "department": "eDepartment", "completionStatus": "eCompletionStatus", "grade": "eGrade", "passingYear": "ePassingYear"}, 
      {"examTitle": "", "institute": "", "department": "", "completionStatus": "", "grade": "", "passingYear": ""}]
  );

  const handleEdit = (id) => {
    dispatch(handleCustomizer(true));
    setInitialValues(formData[id]);
  };

  const certifiacteList = [
    {
      "title" : "eExam",
      "img" : img,
    },
    {
      "title" : "eExam",
      "img" : img,
    },
    {
      "title" : "eExam",
      "img" : img,
    },
    {
      "title" : "eExam",
      "img" : img,
    },
  ]

  return (
    <>
      <InformationCard title="Education" >
        <div className="bg-white rounded-lg p-6 shadow-xl border relative mb-5">
            {formData.length > 0 && formData.map((item, index) => (
                <StudentInfoEducationCard indexNumber={index} key={index} data={item} onEdit={handleEdit} />
            ))}
        </div>
      </InformationCard>
      <InformationCard title="Certification" actionButton={<Button text="Add Education" icon={`material-symbols:upload`} iconPosition="right" className="bg-white border border-blue-500 text-blue-500">Upload</Button>}>
            <div className="bg-white rounded-lg p-6 shadow-xl border relative mb-5">
              <div className="flex items-start justify-start gap-5 flex-wrap">
                  {certifiacteList.map((item, index) => {
                    return (
                        <div className="flex flex-col items-center justify-center gap-2">
                            <img src={item.img} alt="certificate" className="w-20 h-20" />  
                        </div>
                      )
                  })}
              </div>
              <div className="flex items-center justify-start mt-5 w-100 first-letter md:w-[35%]">
                  <Select label="Select Certificate" options={["Certificate 1", "Certificate 2", "Certificate 3"]} />
              </div>
              <div className='absolute top-[7px] right-[0px]'>
                <span className={`bg-success-100 text-success-500 text-base px-5 py-2 rounded rounded-tr-lg capitalize`}>
                    Active
                </span>
              </div>
            </div>
      </InformationCard>
      {customizer && 
          <GlobalDrawer title="Edit">
              <EducationForm updateForm={true} />
          </GlobalDrawer>
      }
    </>
  );
};

export default AcademicInformation;
