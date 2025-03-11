import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputSelect from "./InputSelect";
import InputField from "./InputField";
import Button from "../Button";
import { handleCustomizer } from "@/store/layout";
import { useDispatch } from "react-redux";

const validationSchema = Yup.object().shape({
  examTitle: Yup.string().required("Exam title is required"),
  institute: Yup.string().required("Institute is required"),
  department: Yup.string().required("Department is required"),
  completionStatus: Yup.string().required("Completion status is required"),
  grade: Yup.string().required("Grade is required"),
  passingYear: Yup.string().required("Passing year is required"),
});

const EducationForm = ({ onSubmit, onPrevious, title, updateForm }) => {
  const dispatch = useDispatch();
  const initialValues = {
    examTitle: "",
    institute: "",
    department: "",
    completionStatus: "",
    grade: "",
    passingYear: "",
  };

  const handleCloseDrawer = () => {
    dispatch(handleCustomizer(false));
}

  return (
    <div>
        <div className="flex justify-between items-center mb-5 gap-5">
            <h4 className="card-title md:whitespace-nowrap">Education {1}</h4>
            <div className="h-[1px] bg-slate-200 dark:bg-slate-700 w-full hidden md:block"></div>
        </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form id="education-form">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div>
                <InputSelect
                  label="EXAM TITLE"
                  name="examTitle"
                  options={[
                    { value: "ssc", label: "SSC" },
                    { value: "hsc", label: "HSC" },
                    { value: "bachelor", label: "Bachelor" },
                  ]}
                  required={true}
                  error={
                    touched.examTitle && errors.examTitle
                      ? errors.examTitle
                      : ""
                  }
                />
              </div>
              <div>
                <InputSelect
                  label="INSTITUTE"
                  name="institute"
                  options={[
                    { value: "du", label: "Dhaka University" },
                    { value: "ru", label: "Rajshahi University" },
                    { value: "cu", label: "Chittagong University" },
                  ]}
                  required={true}
                  error={
                    touched.institute && errors.institute
                      ? errors.institute
                      : ""
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
              <div>
                <InputSelect
                  label="DEPARTMENT"
                  name="department"
                  options={[
                    { value: "cse", label: "Computer Science" },
                    { value: "eee", label: "Electrical Engineering" },
                    { value: "bba", label: "Business Administration" },
                  ]}
                  required={true}
                  error={
                    touched.department && errors.department
                      ? errors.department
                      : ""
                  }
                />
              </div>
              <div>
                <InputSelect
                  label="COMPLETION STATUS"
                  name="completionStatus"
                  options={[
                    { value: "completed", label: "Completed" },
                    { value: "running", label: "Running" },
                    { value: "dropped", label: "Dropped" },
                  ]}
                  required={true}
                  error={
                    touched.completionStatus && errors.completionStatus
                      ? errors.completionStatus
                      : ""
                  }
                />
              </div>
              <div>
                <InputField
                  label="GRADE"
                  name="grade"
                  type="text"
                  placeholder="ex: 4.00"
                  required={true}
                  error={touched.grade && errors.grade ? errors.grade : ""}
                />
              </div>
              <div>
                <InputField
                  label="PASSING YEAR"
                  name="passingYear"
                  type="date"
                  placeholder="Enter passing year"
                  required={true}
                  error={
                    touched.passingYear && errors.passingYear
                      ? errors.passingYear
                      : ""
                  }
                />
              </div>
            </div>
            <div className='flex gap-2 items-center justify-end flex-wrap sticky bottom-0 bg-white pt-5 z-50'>
              <Button onClick={handleCloseDrawer} type="button" className='bg-secondary-950 text-black-950 hover:bg-secondary-900 hover:text-white transition-all duration-300' icon="">
                Cancel
              </Button>
              <Button icon={!updateForm && "gg:arrow-right"} type="submit" className='bg-secondary-200 text-black-600 hover:bg-primary-900 hover:text-white transition-all duration-300' iconPosition="right" disabled={isSubmitting}>
                {!updateForm ? (isSubmitting ? 'Saving...' : 'Save & next') : (isSubmitting ? 'submitting...' : 'Submit')}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EducationForm;
