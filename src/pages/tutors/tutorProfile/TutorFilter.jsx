import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputField from "@/components/ui/formik-form/InputField";
import Button from "@/components/ui/Button";
import { handleCustomizer } from "@/store/layout";
import { useDispatch } from "react-redux";
import InputSelect from "@/components/ui/formik-form/InputSelect";
import InputDateField from "@/components/ui/formik-form/InputDateField";
import InputCheckbox from './../../../components/ui/formik-form/InputCheckbox';
const TutorFilter = ({updateForm}) => {
  const validationSchema = Yup.object().shape({});
  const dispatch = useDispatch();
  const initialValues = {
    serachText: "",
    serachByUniversity: "",
    status: "",
    selectGender: "",
    selectMedium: "",
    selectSubject: "",
    searchByRegDate: "",
    selectDistrict: "",
    selectArea: "",
    onlyBacBonStuff: "",    
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
                  label="search by name, phone, email & reference code"
                  name="serachText"
                  type="text"
                  placeholder="Write Here"
                />
              </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="search By university"
                  name="serachByUniversity"
                  type="text"
                  placeholder="Write Here"
                />
                <InputSelect
                  label="STATUS"
                  name="status"
                    options={[
                      { value: "active", label: "Active" },
                      { value: "inactive", label: "Inactive" },
                    ]}
                  placeholder="Write Here"
                />
              </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputSelect
                      label="GENDER"
                      name="selectGender"
                      options={[
                        { value: "male", label: "Male" },
                        { value: "female", label: "Female" },
                        { value: "other", label: "Other" }, 
                      ]}
                        placeholder="Write Here"
                    />
                    <InputSelect
                      label="SELECT MEDIUM"
                      name="selectMedium"
                      options={[
                        { value: "bangla", label: "Bangla" },
                        { value: "english", label: "English" },]}
                        placeholder="Write Here"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputSelect
                      label="SELECT SUBJECT"
                      name="selectSubject"
                      options={[
                        { value: "bangla", label: "Bangla" },
                        { value: "english", label: "English" },]}
                        placeholder="Write Here"
                    />
                    <InputDateField
                      label="SEARCH BY REGISTRATION DATE"
                      name="searchByRegDate"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputSelect
                      label="SELECT DISTRICT"
                      name="selectDistrict"
                      options={[
                        { value: "dhaka", label: "Dhaka" },
                        { value: "barishal", label: "Barisal" },]}
                        placeholder="Write Here"
                    />
                    <InputSelect
                      label="SELECT AREA"
                      name="selectArea"
                      options={[
                        { value: "jatrabari", label: "Jatrabari" },
                        { value: "Banashal", label: "Banashal" },]}
                        placeholder="Write Here"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <InputCheckbox
                        label="Only BacBon Stuff"
                        name="onlyBacBonStuff"
                    />
                </div>
            </div>
            <div className="flex gap-2 items-center justify-end flex-wrap sticky bottom-0 bg-white pt-5 z-1">
              <Button
                onClick={handleCloseDrawer}
                type="button"
                className="bg-secondary-950 text-black-950 hover:bg-secondary-900 hover:text-white transition-all duration-300"
                icon="ix:clear-filter"
                iconPosition="right"
              >
                Clear All
              </Button>
              <Button
                icon="material-symbols-light:search"
                type="submit"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                iconPosition="right"
                disabled={isSubmitting}
              >
                {`Search`}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TutorFilter;
