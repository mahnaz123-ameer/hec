import React, { useState } from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import ProfileImageUploadFormik from '@/components/ui/formik-form/ProfileImageUploadFormik'
import InputField from '@/components/ui/formik-form/InputField'
import InputSelect from '@/components/ui/formik-form/InputSelect'
import Button from '@/components/ui/Button'
import { useDispatch } from 'react-redux'
import { handleCustomizer } from '@/store/layout'
import StudentInfoCard from '@/components/ui/StudentInfoCard'

const validationSchema = Yup.object().shape({
  profileImage: Yup.mixed()
    .required('Profile image is required'),
  name: Yup.string()
    .min(2, 'Name is too short')
    .max(50, 'Name is too long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number must contain only digits')
    .min(11, 'Phone number must be at least 11 digits')
    .max(11, 'Phone number must not exceed 11 digits')
    .required('Phone number is required'),
  dateOfBirth: Yup.date()
    .max(new Date(), 'Date of birth cannot be in the future')
    .required('Date of birth is required'),
  gender: Yup.string()
    .oneOf(['male', 'female', 'other'], 'Please select a valid gender')
    .required('Gender is required'),
  class: Yup.string().required('Class is required'),
  fatherName: Yup.string()
    .min(2, 'Father\'s name is too short')
    .max(50, 'Father\'s name is too long')
    .required('Father\'s name is required'),
  fatherPhone: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number must contain only digits')
    .min(11, 'Phone number must be at least 11 digits')
    .max(11, 'Phone number must not exceed 11 digits')
    .required('Father\'s phone number is required'),
  motherName: Yup.string()
    .min(2, 'Mother\'s name is too short')
    .max(50, 'Mother\'s name is too long')
    .required('Mother\'s name is required'),
  motherPhone: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number must contain only digits')
    .min(11, 'Phone number must be at least 11 digits')
    .max(11, 'Phone number must not exceed 11 digits')
    .required('Mother\'s phone number is required'),
})

const BasicInformation = ({ onNext, updateForm }) => {
  const dispatch = useDispatch();
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({});

  const [initialValues, setInitialValues] = useState({
    profileImage: null,
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    class: '',
    fatherName: '',
    fatherPhone: '',
    motherName: '',
    motherPhone: '',
    address: '',
  });

  const handleSubmit = (values, { setSubmitting }) => {
    if(values !== null){
      setShowPreview(true);
      setFormData(values);
    }
    setSubmitting(false)
  }

  const handleCloseDrawer = () => {
      dispatch(handleCustomizer(false));
  }

  const handleEdit = () => {
    setInitialValues(formData);
    setShowPreview(false);
  }

  return (
    <>
      {showPreview ? (
        <> 
          <StudentInfoCard data={formData} onEdit={handleEdit}/>
          <div className='flex gap-2 items-center justify-end flex-wrap sticky bottom-0 bg-white pt-5 z-50'>
            <Button onClick={() => setShowPreview(false)} type="button" className='bg-secondary-950 text-black-950 hover:bg-secondary-900 hover:text-white transition-all duration-300' icon="gg:arrow-left">
              Back
            </Button>
            <Button onClick={onNext} icon="gg:arrow-right" type="submit" className='bg-secondary-200 text-black-600 hover:bg-primary-900 hover:text-white transition-all duration-300' iconPosition="right">
              Continue
            </Button>
          </div>
        </>
      ) : 
        <div className="bg-white rounded-lg">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, isSubmitting, setFieldValue }) => {
              console.log('values', values);
              
              return (
                <Form className="mt-4">
                  {updateForm &&  values.profileImage === null ? (
                    <>
                      <div className="flex items-center flex-col gap-4">
                        <div className="h-[100px] w-[100px] rounded-full overflow-hidden border-4 border-slate-100">
                          <img 
                            src="https://shorturl.at/FCngH"
                            alt="Profile" 
                            className='h-[100px] w-[100px] object-cover'
                          />
                        </div>
                      </div>
                    </>
                  ) : ''}
                  <ProfileImageUploadFormik name="profileImage" required={true} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Student Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        NAME <span className="text-red-500">*</span>
                      </label>
                        <InputField 
                          name="name" 
                          type="text" 
                          placeholder="Parent Full Name" 
                          required={true}
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="flex gap-2">
                      <InputField 
                        label="PRIMARY NUMBER"
                        name="phone" 
                        type="text" 
                        placeholder="18XXXXXXXX" 
                        formPreappend="+880" 
                        required={true}
                      />
                    </div>
                     {/* Alternate Phone Number */}
                     <div className="flex gap-2">
                      <InputField 
                        label="ALTERNATE NUMBER"
                        name="phone" 
                        type="text" 
                        placeholder="18XXXXXXXX" 
                        formPreappend="+880" 
                        required={true}
                      />
                    </div>

                    {/* Email */}
                    <div className="md:col-span-1">
                      <InputField 
                        required={true}
                        label="EMAIL ADDRESS"
                        name="email" 
                        type="text" 
                        placeholder="Enter the email address" 
                      />
                    </div>

                    {/* REG. date */}
                    <div>
                      <InputField 
                        label="REG. DATE"
                        name="REG. DATE" 
                        type="date" 
                        placeholder="Select date" 
                        required={true}
                      />
                    </div>

                    {/* Gender */}
                    <div>
                      <InputSelect 
                        label="GENDER"
                        name="gender" 
                        options={[
                          { value: 'male', label: 'Male' },
                          { value: 'female', label: 'Female' },
                          { value: 'other', label: 'Other' },
                        ]}
                        required={true}
                        error={touched.gender && errors.gender ? errors.gender : ''}
                      />
                      {errors.gender && touched.gender && (
                          <div className="text-red-500 text-base mt-1">{errors.gender}</div>
                      )}
                    </div>
                     {/* code */}
                     <div>
                      <InputField 
                        label="CODE"
                        name="CODE" 
                        type="code" 
                        placeholder="GJF0FNRJVJ" 
                        
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
              )
            }}
          </Formik>
        </div>
      }
    </>
  )
}

export default BasicInformation
