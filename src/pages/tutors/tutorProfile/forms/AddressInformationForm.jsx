import React, { useState } from "react";
import Button from "@/components/ui/Button";
import InformationCard from "@/components/ui/InformationCard";
import Card from "@/components/ui/Card";
import { Formik, Form } from "formik";
import Textarea from "@/components/ui/formik-form/Textarea";
import * as Yup from "yup";
import InputSelect from "@/components/ui/formik-form/InputSelect";
import { useDispatch } from "react-redux";
import { handleCustomizer } from "@/store/layout";

const AddressInformationForm = ({ updateForm }) => {
  const dispatch = useDispatch();
  const [addressInitialValues, setAddressInitialValues] = useState({
    presentDivision: "",
    presentAddress: "",
    presentDistrict: "",
    presentArea: "",
    permanentDivision: "",
    permanentAddress: "",
    permanentDistrict: "",
    permanentArea: "",
  });

  const validationSchema = Yup.object().shape({
    presentDivision: Yup.string().required("Division is required"),
    presentAddress: Yup.string().required("Address is required"),
    presentDistrict: Yup.string().required("District is required"),
    presentArea: Yup.string().required("Area is required"),
    permanentDivision: Yup.string().required("Division is required"),
    permanentAddress: Yup.string().required("Address is required"),
    permanentDistrict: Yup.string().required("District is required"),
    permanentArea: Yup.string().required("Area is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleCloseDrawer = () => {
    dispatch(handleCustomizer(false));
  };

  return (
    <>
      <Formik
        initialValues={addressInitialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, isSubmitting, setFieldValue }) => {
          console.log("values", values);
          return (
            <Form>
              <InformationCard title="Present Address">
                <Card>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      {/* division */}
                      <div className="mb-4">
                        <InputSelect
                          label="Division"
                          name="presentDivision"
                          options={[
                            { value: "Dhaka", label: "Dhaka" },
                            { value: "Chattogram", label: "Chattogram" },
                            { value: "Rajshahi", label: "Rajshahi" },
                            { value: "Khulna", label: "Khulna" },
                            { value: "Barishal", label: "Barishal" },
                            { value: "Sylhet", label: "Sylhet" },
                            { value: "Rangpur", label: "Rangpur" },
                            { value: "Mymensingh", label: "Mymensingh" },
                          ]}
                          value={values.presentDivision}
                          required={true}
                          error={
                            touched.presentDivision && errors.presentDivision
                              ? errors.presentDivision
                              : ""
                          }
                        />
                        {errors.presentDivision && touched.presentDivision && (
                          <div className="text-red-500 text-base mt-1">
                            {errors.presentDivision}
                          </div>
                        )}
                      </div>
                      {/* district */}
                      <div className="mb-4">
                        <InputSelect
                          label="District"
                          name="presentDistrict"
                          options={[
                            { value: "Dhaka", label: "Dhaka" },
                            { value: "Narayanganj", label: "Narayanganj" },
                            { value: "Gazipur", label: "Gazipur" },
                            { value: "Manikganj", label: "Manikganj" },
                            { value: "Munshiganj", label: "Munshiganj" },
                            { value: "Rajbari", label: "Rajbari" },
                            { value: "Faridpur", label: "Faridpur" },
                            { value: "Madaripur", label: "Madaripur" },
                          ]}
                          value={values.presentDistrict}
                          required={true}
                          error={
                            touched.presentDistrict && errors.presentDistrict
                              ? errors.presentDistrict
                              : ""
                          }
                        />
                        {errors.presentDistrict && touched.presentDistrict && (
                          <div className="text-red-500 text-base mt-1">
                            {errors.presentDistrict}
                          </div>
                        )}
                      </div>
                      <div className="mb-4">
                        <InputSelect
                          label="Area"
                          name="presentArea"
                          options={[
                            { value: "Uttara", label: "Uttara" },
                            { value: "Dhanmondi", label: "Dhanmondi" },
                            { value: "Gulshan", label: "Gulshan" },
                            { value: "Banani", label: "Banani" },
                            { value: "Mirpur", label: "Mirpur" },
                            { value: "Mohammadpur", label: "Mohammadpur" },
                            { value: "Bashundhara", label: "Bashundhara" },
                            { value: "Baridhara", label: "Baridhara" },
                          ]}
                          value={values.presentArea}
                          required={true}
                          error={
                            touched.presentArea && errors.presentArea
                              ? errors.presentArea
                              : ""
                          }
                        />
                        {errors.presentArea && touched.presentArea && (
                          <div className="text-red-500 text-base mt-1">
                            {errors.presentArea}
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <Textarea
                        label="Address"
                        name="presentAddress"
                        type="text"
                        placeholder={values.presentAddress}
                        value={values.presentAddress}
                        required={true}
                        error={
                          touched.presentAddress && errors.presentAddress
                            ? errors.presentAddress
                            : ""
                        }
                      />
                      {errors.presentAddress && touched.presentAddress && (
                        <div className="text-red-500 text-base mt-1">
                          {errors.area}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </InformationCard>
              <div className="my-3"></div>
              <InformationCard title="Parmanent Address">
                <Card>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      {/* division */}
                      <div className="mb-4">
                        <InputSelect
                          label="Division"
                          name="parmanentDivision"
                          options={[
                            { value: "Dhaka", label: "Dhaka" },
                            { value: "Chattogram", label: "Chattogram" },
                            { value: "Rajshahi", label: "Rajshahi" },
                            { value: "Khulna", label: "Khulna" },
                            { value: "Barishal", label: "Barishal" },
                            { value: "Sylhet", label: "Sylhet" },
                            { value: "Rangpur", label: "Rangpur" },
                            { value: "Mymensingh", label: "Mymensingh" },
                          ]}
                          value={values.parmanentDivision}
                          required={true}
                          error={
                            touched.parmanentDivision && errors.parmanentDivision
                              ? errors.parmanentDivision
                              : ""
                          }
                        />
                        {errors.parmanentDivision && touched.parmanentDivision && (
                          <div className="text-red-500 text-base mt-1">
                            {errors.parmanentDivision}
                          </div>
                        )}
                      </div>
                      {/* district */}
                      <div className="mb-4">
                        <InputSelect
                          label="District"
                          name="parmanentDistrict"
                          options={[
                            { value: "Dhaka", label: "Dhaka" },
                            { value: "Narayanganj", label: "Narayanganj" },
                            { value: "Gazipur", label: "Gazipur" },
                            { value: "Manikganj", label: "Manikganj" },
                            { value: "Munshiganj", label: "Munshiganj" },
                            { value: "Rajbari", label: "Rajbari" },
                            { value: "Faridpur", label: "Faridpur" },
                            { value: "Madaripur", label: "Madaripur" },
                          ]}
                          value={values.parmanentDistrict}
                          required={true}
                          error={
                            touched.parmanentDistrict && errors.parmanentDistrict
                              ? errors.parmanentDistrict
                              : ""
                          }
                        />
                        {errors.parmanentDistrict && touched.parmanentDistrict && (
                          <div className="text-red-500 text-base mt-1">
                            {errors.parmanentDistrict}
                          </div>
                        )}
                      </div>
                      <div className="mb-4">
                        <InputSelect
                          label="Area"
                          name="permanentArea"
                          options={[
                            { value: "Uttara", label: "Uttara" },
                            { value: "Dhanmondi", label: "Dhanmondi" },
                            { value: "Gulshan", label: "Gulshan" },
                            { value: "Banani", label: "Banani" },
                            { value: "Mirpur", label: "Mirpur" },
                            { value: "Mohammadpur", label: "Mohammadpur" },
                            { value: "Bashundhara", label: "Bashundhara" },
                            { value: "Baridhara", label: "Baridhara" },
                          ]}
                          value={values.permanentArea}
                          required={true}
                          error={touched.permanentArea && errors.permanentArea ? errors.permanentArea : ""}
                        />
                        {errors.permanentArea && touched.permanentArea && (
                          <div className="text-red-500 text-base mt-1">
                            {errors.permanentArea}
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <Textarea
                        label="Address"
                        name="parmanentAddress"
                        type="text"
                        placeholder={values.parmanentAddress}
                        value={values.parmanentAddress}
                        required={true}
                        error={touched.parmanentAddress && errors.parmanentAddress ? errors.parmanentAddress : ""}
                      />
                      {errors.parmanentAddress && touched.parmanentAddress && (
                        <div className="text-red-500 text-base mt-1">
                          {errors.parmanentAddress}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </InformationCard>
              <div className="flex gap-2 items-center justify-end flex-wrap sticky bottom-0 bg-white pt-5 z-50">
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
          );
        }}
      </Formik>
    </>
  );
};

export default AddressInformationForm;
