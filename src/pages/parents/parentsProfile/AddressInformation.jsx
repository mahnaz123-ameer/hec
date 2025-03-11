import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/formik-form/Textarea";
import InputSelect from "@/components/ui/formik-form/InputSelect";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import StudentInfoAddressCard from "@/components/ui/StudentInfoAddressCard";
import { handleCustomizer } from "@/store/layout";
import { useDispatch } from "react-redux";

const validationSchema = Yup.object().shape({
  division: Yup.string().required("Division is required"),
  district: Yup.string().required("District is required"),
  area: Yup.string().required("Area is required"),
  address: Yup.string().required("Address is required"),
});

const AddressInformation = ({ onPrevious, onNext }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [showPreview, setShowPreview] = useState(false);
  const [initialValues, setInitialValues] = useState({
    division: "",
    district: "",
    area: "",
    address: "",
  });
  
  const handleSubmit = (values, { setSubmitting }) => {
    if(values !== null){
      setFormData(values); 
      setSubmitting(false);
      setShowPreview(true);
    }
    // onNext();
  };

  const handleConfirmFOrmData = () => {
    onNext();
  };

  const handleEdit = () => {
    setInitialValues(formData);
    setShowPreview(false);
  };
  
  return (
    <>
      <div className="bg-white rounded-lg">
        {showPreview ? (
          <>
            <StudentInfoAddressCard data={formData} onEdit={handleEdit} />
            <div className='flex gap-2 items-center justify-end flex-wrap sticky bottom-0 bg-white pt-5 z-50'>
              <Button onClick={() => setShowPreview(false)} type="button" className='bg-secondary-950 text-black-950 hover:bg-secondary-900 hover:text-white transition-all duration-300' icon="gg:arrow-left">
                Back
              </Button>
              <Button onClick={onNext} icon="gg:arrow-right" type="submit" className='bg-secondary-200 text-black-600 hover:bg-primary-900 hover:text-white transition-all duration-300' iconPosition="right">
                Continue
              </Button>
            </div>
          </>
        ) : (
          <>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting, setFieldValue }) => (
                <Form className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <InputSelect 
                          label="Division"
                          name="division" 
                          options={[
                            { value: 'dhaka', label: 'Dhaka' },
                            { value: 'comilla', label: 'Comilla' },
                            { value: 'chittagong', label: 'Chittagong' },
                          ]}
                          required={true}
                          error={touched.division && errors.division ? errors.division : ''}
                        />
                        {errors.division && touched.division && (
                            <div className="text-red-500 text-base mt-1">{errors.division}</div>
                        )}
                      </div>
                      <div>
                        <InputSelect 
                          label="District"
                          name="district" 
                          options={[
                            { value: 'dhaka', label: 'Dhaka' },
                            { value: 'comilla', label: 'Comilla' },
                            { value: 'chittagong', label: 'Chittagong' },
                          ]}
                          required={true}
                          error={touched.district && errors.district ? errors.district : ''}
                        />
                        {errors.district && touched.district && (
                            <div className="text-red-500 text-base mt-1">{errors.district}</div>
                        )}
                      </div>
                      <div>
                        <InputSelect 
                          label="Area"
                          name="area" 
                          options={[
                            { value: 'jatrabari', label: 'Jatrabari' },
                            { value: 'banani', label: 'Banani' },
                            { value: 'gulshan', label: 'Gulshan' },
                          ]}
                          required={true}
                          error={touched.area && errors.area ? errors.area : ''}
                        />
                        {errors.area && touched.area && (
                            <div className="text-red-500 text-base mt-1">{errors.area}</div>
                        )}
                      </div>
                      <div>
                        <Textarea
                          name="address"
                          label="Address"
                          required={true}
                          placeholder="Enter your address"
                          error={touched.address && errors.address ? errors.address : ''}
                          rows={4}
                        />
                      </div>
                  </div>
                  <div className="flex w-full items-center justify-end flex-wrap sticky bottom-0 bg-white pt-5 z-1 gap-2">
                    <Button icon="material-symbols:close-rounded" onClick={() => dispatch(handleCustomizer(false))} type="button" className='bg-secondary-950 text-black-950 hover:bg-secondary-900 hover:text-white transition-all duration-300'>
                      Cancel
                    </Button>
                    <Button icon="material-symbols-light:check" type="submit" className='bg-secondary-200 text-black-600 hover:bg-primary-900 hover:text-white transition-all duration-300' iconPosition="right" disabled={isSubmitting}>
                      {isSubmitting ? 'Saving...' : 'Save'}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik> 
          </>
        )
        }
      </div>
    </>
  );
};

export default AddressInformation;
