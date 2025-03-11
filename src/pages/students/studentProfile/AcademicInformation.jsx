import React, { useState } from "react";
import InformationCard from "@/components/ui/InformationCard";
import StudentInfoEducationCard from "@/components/ui/StudentInfoEducationCard";
import { useSelector, useDispatch } from "react-redux";
import { handleCustomizer } from '@/store/layout';
import GlobalDrawer from '@/components/partials/globalDrawer';
import AddressInformation from "./AddressInformation";
import EducationForm from "@/components/ui/formik-form/EducationForm";

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

  return (
    <>
      <InformationCard title="Education" >
        {formData.length > 0 && formData.map((item, index) => (
            <StudentInfoEducationCard indexNumber={index} key={index} data={item} onEdit={handleEdit} />
        ))}
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
