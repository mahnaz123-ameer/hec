import React from 'react'
import Button from "@/components/ui/Button";
import InputCheckbox from "@/components/ui/formik-form/InputCheckbox";
import InputField from "@/components/ui/formik-form/InputField";
import InputSelect from "@/components/ui/formik-form/InputSelect";
import { handleCustomizer } from "@/store/layout";
import { Form, Formik } from "formik";
import { useDispatch } from 'react-redux';
import * as Yup from "yup";
import Textarea from '@/components/ui/formik-form/Textarea';

const validationSchema = Yup.object().shape({
  selectStudent: Yup.string().required("Student is required"),
  jobTitle: Yup.string().required("Job title is required"),
  slotType: Yup.string().required("Slot is required"),
  days: Yup.string().required("Days is required"),
  salaryType: Yup.string().required("Salary is required"),
  traningTimeType: Yup.string().required("Traning type is required"),
  medium: Yup.string().required("Medium year is required"),
  selectSubject: Yup.string().required("Subject is required"),
  notes: Yup.string().required("Start year is required"),
});
const CreateJobs = ({ updateForm }) => {
  const dispatch = useDispatch();
  const initialValues = {
    selectStudent: "",
    jobTitle: "",
    slotType: "",
    days: "",
    salaryType: "",
    traningTimeType: "",
    medium: "",
    selectSubject: "",
    notes: "",
  };

  const handleCloseDrawer = () => {
    dispatch(handleCustomizer(false));
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting, values }) => (
          <Form id="education-form">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 ">
              <div className='flex items-center justify-start'>
                  <InputSelect
                    label="Employee Type"
                    name="employeeType"
                    options={[
                      { value: "full-time", label: "Full-time" },
                      { value: "part-time", label: "Part-time" },
                      { value: "contract", label: "Contract" },
                    ]}
                    required={true}
                    error={
                      touched.employeeType && errors.employeeType
                        ? errors.employeeType
                        : ""  
                    }
                  />
                  <div className='mt-[33px] ml-[-2px]'>
                    <Button icon="ic:round-plus" className='h-[50px] bg-primary-900 text-white rounded-[0px]' />
                  </div>
                </div>
                <div>
                  <InputField 
                    label="Job Title"
                    name="jobTitle"
                    type="text"
                    values={values?.jobTitle}
                    required={true}

                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1">
                    <label className="inline-block text-black-900 text-base mb-2 uppercase" htmlFor="slotType">Slot <span class="text-red-500">*</span></label>
                    <div>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                          <div>
                            <InputSelect
                              name="slotType"
                              options={[
                                { value: "morning", label: "Morning" },
                                { value: "afternoon", label: "Afternoon" },
                                { value: "evening", label: "Evening" },
                              ]}
                              required={true}
                              error={
                                touched.slotType && errors.slotType
                                  ? errors.slotType
                                  : ""  
                              }
                            />
                          </div>
                          <div>
                            <InputField
                              name="days"
                              type="text"
                              value={values?.days}
                              placeholder="Days per week / month"
                              required={true}
                            />
                          </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1">
                    <label className="inline-block text-black-900 text-base mb-2 uppercase" for="salaryType">salary <span class="text-red-500">*</span></label>
                    <div>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                          <div>
                            <InputSelect
                              name="salaryType"
                              options={[
                                { value: "hourly", label: "Hourly" },
                                { value: "daily", label: "Daily" },
                                { value: "monthly", label: "Monthly" },
                              ]}
                              required={true}
                              error={
                                touched.salaryType && errors.salaryType
                                  ? errors.salaryType
                                  : ""  
                              }
                            />
                          </div>
                          <div>
                            <InputField
                              name="salary"
                              type="text"
                              value={values?.salary}
                              placeholder="Days per week / month"
                              required={true}
                            />
                          </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1">
                    <label className="inline-block text-black-900 text-base mb-2 uppercase" htmlFor="traningTimeType">Training Time <span class="text-red-500">*</span></label>
                    <div>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                          <div>
                            <InputSelect
                              name="traningTimeType"
                              options={[
                                { value: "fullTime", label: "Full Time" },
                                { value: "partTime", label: "Part Time" },
                              ]}
                              required={true}
                              error={
                                touched.traningTimeType && errors.traningTimeType
                                  ? errors.traningTimeType
                                  : ""  
                              }
                            />
                          </div>
                          <div>
                            <InputField
                              name="salary"
                              type="text"
                              value={values?.salary}
                              placeholder="Days per week / month"
                              required={true}
                            />
                          </div>
                        </div>
                    </div>
                </div>
                <div>
                  <InputSelect
                    label="medium"
                    name="medium"
                    options={[
                      { value: "online", label: "Online" },
                      { value: "offline", label: "Offline" },
                    ]}
                    required={true}
                    error={
                      touched.medium && errors.medium
                        ? errors.medium
                        : ""  
                    }
                  />
                </div>
                <div>
                  <InputSelect
                    label="subject"
                    name="subject"
                    options={[
                      { value: "online", label: "Online" },
                      { value: "offline", label: "Offline" },
                    ]}
                    required={true}
                    error={
                      touched.subject && errors.subject
                        ? errors.subject
                        : ""  
                    }
                  />
                </div>
                <div>
                  <Textarea
                    label="Note"
                    name="notes"
                    type="text"
                    value={values?.notes}
                  />
                </div>
            </div>
            <div className="flex gap-2 items-center justify-end flex-wrap sticky bottom-0 bg-white pt-5 z-1">
              <Button
                onClick={handleCloseDrawer}
                type="button"
                className="bg-secondary-950 text-black-950 hover:bg-secondary-900 hover:text-white transition-all duration-300"
                icon=""
              >
                Cancel
              </Button>
              <Button
                icon={!updateForm && "gg:arrow-right"}
                type="submit"
                className="bg-secondary-200 text-black-600 hover:bg-primary-900 hover:text-white transition-all duration-300"
                iconPosition="right"
                disabled={isSubmitting}
              >
                {!updateForm
                  ? isSubmitting
                    ? "Saving..."
                    : "Save & next"
                  : isSubmitting
                  ? "submitting..."
                  : "Submit"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateJobs