import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Button from '@/components/ui/Button';
import InputField from '@/components/ui/formik-form/InputField';
import InputSelect from '@/components/ui/formik-form/InputSelect';
import Textarea from '@/components/ui/formik-form/Textarea';

const validationSchema = Yup.object().shape({
  division: Yup.string().required('Division is required'),
  district: Yup.string().required('District is required'),
  area: Yup.string().required('Area is required'),
  address: Yup.string().required('Address is required'),
});

const AddressEdit = () => {
  // Mock data for dropdowns
  const divisions = [
    { value: 'dhaka', label: 'Dhaka' },
    { value: 'chittagong', label: 'Chittagong' },
    { value: 'rajshahi', label: 'Rajshahi' },
    { value: 'khulna', label: 'Khulna' },
    { value: 'barishal', label: 'Barishal' },
    { value: 'sylhet', label: 'Sylhet' },
  ];

  const districts = {
    dhaka: [
      { value: 'dhaka', label: 'Dhaka' },
      { value: 'gazipur', label: 'Gazipur' },
      { value: 'narayanganj', label: 'Narayanganj' },
    ],
    chittagong: [
      { value: 'chittagong', label: 'Chittagong' },
      { value: 'coxs_bazar', label: "Cox's Bazar" },
    ],
  };

  const areas = {
    dhaka: [
      { value: 'ramna', label: 'Ramna' },
      { value: 'dhanmondi', label: 'Dhanmondi' },
      { value: 'gulshan', label: 'Gulshan' },
      { value: 'mirpur', label: 'Mirpur' },
    ],
  };

  const [selectedDivision, setSelectedDivision] = useState('dhaka');
  const [selectedDistrict, setSelectedDistrict] = useState('dhaka');

  const initialValues = {
    division: 'dhaka',
    district: 'dhaka',
    area: 'ramna',
    address: 'Banasree Block C, Rampura, Dhaka',
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="relative">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                  <InputSelect
                    name="division"
                    label="DIVISION"
                    required
                    options={divisions}
                    value={values.division}
                    onChange={(e) => {
                      setFieldValue('division', e.target.value);
                      setSelectedDivision(e.target.value);
                      // Reset district and area when division changes
                      setFieldValue('district', '');
                      setFieldValue('area', '');
                    }}
                  />
                  <InputSelect
                    name="district"
                    label="DISTRICT"
                    required
                    options={districts[selectedDivision] || []}
                    value={values.district}
                    onChange={(e) => {
                      setFieldValue('district', e.target.value);
                      setSelectedDistrict(e.target.value);
                      // Reset area when district changes
                      setFieldValue('area', '');
                    }}
                  />
                  <InputSelect
                    name="area"
                    label="AREA"
                    required
                    options={areas[selectedDistrict] || []}
                    value={values.area}
                    onChange={(e) => {
                      setFieldValue('area', e.target.value);
                    }}
                  />
                </div>
                <div>
                  <Textarea
                    name="address"
                    label="ADDRESS"
                    required
                    placeholder="Enter your address"
                    rows={3}
                  />
                </div>
            </div>
          </div>
          <div className="sticky bottom-0 right-0 flex justify-end pt-5 gap-3 bg-white">
            <Button 
              text="Cancel" 
              className="bg-secondary-950 hover:bg-secondary-200" 
              iconPosition="right" 
              icon="bitcoin-icons:cross-outline"
            />
            <Button 
              type="submit"
              text="Save" 
              className="bg-secondary-200 hover:bg-primary-500 hover:text-white" 
              iconPosition="right" 
              icon="material-symbols:check"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddressEdit;