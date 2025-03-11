import Button from "@/components/ui/Button";
import InputCheckbox from "@/components/ui/formik-form/InputCheckbox";
import InputDateField from "@/components/ui/formik-form/InputDateField";
import InputField from "@/components/ui/formik-form/InputField";
import InputSelect from "@/components/ui/formik-form/InputSelect";
import { handleCustomizer } from "@/store/layout";
import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  designation: Yup.string().required("Designation title is required"),
  company: Yup.string().required("Company name is required"),
  employeeType: Yup.string().required("Employee type is required"),
  completionStatus: Yup.string().required("Completion status is required"),
  selectStartMonth: Yup.string().required("Start month is required"),
  selectStartYear: Yup.string().required("Start year is required"),
  selectEndMonth: Yup.string().required("Start month is required"),
  selectEndYear: Yup.string().required("Start year is required"),
  location: Yup.string().required("Location is required"),
});

const Experience = ({ updateForm }) => {
  const dispatch = useDispatch();
  const initialValues = {
    designation: "",
    company: "",
    employeeType: "",
    completionStatus: "",
    startDate: "",
    endDate: "",
    location: "",
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
        {({ errors, touched, isSubmitting }) => (
          <Form id="education-form">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div>
                <InputField
                  label="Designation"
                  name="designation"
                  required={true}
                  error={
                    touched.designation && errors.designation
                      ? errors.designation
                      : ""
                  }
                />
              </div>
              <div>
                <InputField
                  label="Company"
                  name="company"
                  required={true}
                  error={
                    touched.company && errors.company
                      ? errors.company
                      : ""
                  }
                />
              </div>
              <div>
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
              </div>
              <div className="mb-5">
                <InputCheckbox label="I am currently working here" name="completionStatus" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1">
              <label className="inline-block text-black-900 text-base mb-2" for="employeeType">Start Date <span class="text-red-500">*</span></label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <div>
                  <InputSelect 
                    name="selectStartMonth"
                    options={[
                      { value: "jan", label: "Jan" },
                      { value: "feb", label: "Feb" },
                      { value: "mar", label: "Mar" },
                      { value: "apr", label: "Apr" },
                      { value: "may", label: "May" },
                      { value: "jun", label: "Jun" },
                      { value: "jul", label: "Jul" },
                      { value: "aug", label: "Aug" },
                      { value: "sep", label: "Sep" },
                      { value: "oct", label: "Oct" },
                      { value: "nov", label: "Nov" },
                      { value: "dec", label: "Dec" },
                    ]}
                    required={true}
                    error={
                      touched.selectStartMonth && errors.selectStartMonth
                        ? errors.selectStartMonth
                        : ""
                    }
                  />
                </div>
                <div>
                  <InputSelect 
                    name="selectStartYear"
                    options={Array.from({length: new Date().getFullYear() - 1975}, (v, k) => k + 1975).map(year => ({ value: year, label: year }))}
                    required={true}
                    error={
                      touched.selectStartYear && errors.selectStartYear
                        ? errors.selectStartYear
                        : ""
                    }
                  />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1">
              <label className="inline-block text-black-900 text-base mb-2" for="employeeType">End Date <span class="text-red-500">*</span></label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <div>
                  <InputSelect 
                    name="selectEndMonth"
                    options={[
                      { value: "jan", label: "Jan" },
                      { value: "feb", label: "Feb" },
                      { value: "mar", label: "Mar" },
                      { value: "apr", label: "Apr" },
                      { value: "may", label: "May" },
                      { value: "jun", label: "Jun" },
                      { value: "jul", label: "Jul" },
                      { value: "aug", label: "Aug" },
                      { value: "sep", label: "Sep" },
                      { value: "oct", label: "Oct" },
                      { value: "nov", label: "Nov" },
                      { value: "dec", label: "Dec" },
                    ]}
                    required={true}
                    error={
                      touched.selectEndMonth && errors.selectEndMonth
                        ? errors.selectEndMonth
                        : ""
                    }
                  />
                </div>
                <div>
                  <InputSelect 
                    name="selectEndYear"
                    options={Array.from({length: new Date().getFullYear() - 1975}, (v, k) => k + 1975).map(year => ({ value: year, label: year }))}
                    required={true}
                    error={
                      touched.selectEndYear && errors.selectEndYear
                        ? errors.selectEndYear
                        : ""
                    }
                  />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1">
              <InputField label="Description" name="description" type="textarea" required={true} error={touched.description && errors.description ? errors.description : ""} />
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
};

export default Experience;
