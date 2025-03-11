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
import InputDateField from '@/components/ui/formik-form/InputDateField';

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  age: Yup.number().required("Age is required").min(1, "Age must be at least 1"),
  gender: Yup.string().required("Gender is required"),
  class: Yup.string().required("Class is required"),
  instiute: Yup.string().required("Institute is required"),
});
const AddKids = ({updateForm}) => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    age: "",
    gender: "",
    class: "",
    instiute: "",
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
              <div>
                <InputField 
                  name="name"
                  label="Name"
                  required={true}
                  value={values?.name}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                  <InputField
                    type="number"
                    name="age"
                    label="Age"
                    value={values?.age}
                    required={true}
                  />  
                </div>
                <div>
                  <InputSelect
                    name="gender"
                    label="Gender"
                    options={[
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" },
                      { value: "other", label: "Other" },
                    ]}
                    value={values?.gender}
                    required={true}
                  />
                </div>
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

export default AddKids