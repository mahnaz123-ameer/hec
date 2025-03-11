import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import InputField from "@/components/ui/formik-form/InputField";
import InputSelect from "@/components/ui/formik-form/InputSelect";
import InputDateField from "@/components/ui/formik-form/InputDateField";
import ProfileImageUpload from "@/components/ui/ProfileImageUpload";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  primaryPhone: Yup.string().required("Primary Phone is required"),
  alternatePhone: Yup.string(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  gender: Yup.string().required("Gender is required"),
  registrationDate: Yup.date().required("Registration Date is required"),
});

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const BasicInformationEdit = ({ activeModal, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const initialValues = {
    firstName: "Admin First Name",
    lastName: "Admin Last Name",
    primaryPhone: "(+880) 19XXXXXXXX",
    alternatePhone: "(+880) 19XXXXXXXX",
    email: "tutor123@gamil.com",
    gender: "male",
    registrationDate: "2024-01-27",
    code: "TUT001",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form values:", values);
    // Handle form submission here
    setSubmitting(false);
  };

  return (
    <div className="p-5 relative flex flex-col">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="relative">
            <>
              <ProfileImageUpload />
              <div className="mt-3 md:grid grid-cols-2 gap-5">
                <div>
                  <InputField
                    label="First Name"
                    placeholder="First Name"
                    name="firstName"
                  />
                </div>
                <div>
                  <InputField
                    label="Last Name"
                    placeholder="Last Name"
                    name="lastName"
                  />
                </div>
              </div>
              <div className="mt-3 md:grid grid-cols-2 gap-5">
                  <div>
                    <InputField
                      label="Primary Phone"
                      placeholder="Primary Phone"
                      name="primaryPhone"
                      formPreappend="+880"
                    />
                  </div>
                <div>
                  <InputField
                    label="Alternate Phone"
                    placeholder="Alternate Phone"
                    name="alternatePhone"
                    formPreappend="+880"
                  />
                </div>
              </div>
              <div className="mt-3 md:grid grid-cols-2 gap-5">
                  <div>
                    <InputField
                    type="email"
                      label="Email"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                <div>
                  <InputSelect
                    label="Gender"
                    name="gender"
                    options={genderOptions}
                  />
                </div>
              </div>
              <div className="mt-3 md:grid grid-cols-2 gap-5">
                  <div>
                    <InputDateField
                      type="date"
                      label="Registration Date"
                      placeholder="Registration Date"
                      name="registrationDate"
                      className="h-[50px]"
                    />
                  </div>
                  <div>
                    <InputField
                      label="Code"
                      placeholder="Code"
                      name="code"
                      value={initialValues.code}
                      disabled={true}
                    />
                  </div>
              </div>
              <div className="sticky bottom-0 right-0 flex justify-end pt-5 gap-3 bg-white">
                <Button text="Cancel" className="bg-secondary-950 hover:bg-secondary-200" iconPosition="right" icon={`bitcoin-icons:cross-outline`}></Button>
                <Button text="Save" className="bg-secondary-200 hover:bg-primary-500 hover:text-white" iconPosition="right" icon={`material-symbols:check`}></Button>
              </div>
            </>
          </Form>
        )
      }
      </Formik>
    </div>
  );
};

export default BasicInformationEdit;