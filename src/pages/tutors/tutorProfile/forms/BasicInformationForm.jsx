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
import Textarea from '@/components/ui/formik-form/Textarea'

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

const BasicInformationForm = ({ onNext, updateForm }) => {
  const dispatch = useDispatch();
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({});

  const [initialValues, setInitialValues] = useState({
    profileImage: null,
    name: '',
    email: '',
    primaryPhone: '',
    alternativePhone: '',
    dateOfBirth: '',
    religion: '',
    gender: '',
    class: '',
    fatherName: '',
    fatherPhone: '',
    motherName: '',
    maritialStatus: '',
    bloodGroup: '',
    descriptions: '',
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
                    {/* Student Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        NAME <span className="text-red-500">*</span>
                      </label>
                        <InputField 
                          name="name" 
                          type="text" 
                          placeholder={initialValues.name} 
                          value={values.name}
                          required={true}
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="flex gap-2">
                      <InputField 
                        label="Primary Number"
                        name="primaryPhone" 
                        type="text" 
                        placeholder={initialValues.primaryPhone} 
                        value={values.phone}
                        formPreappend="+880" 
                        required={true}
                      />
                    </div>

                    {/* Alternate Number */}
                    <div className="flex gap-2">
                      <InputField 
                        label="Alternate Number"
                        name="alternativePhone" 
                        type="text" 
                        placeholder={initialValues.alternativePhone} 
                        value={values.alternativePhone}
                        formPreappend="+880" 
                        required={true}
                      />
                    </div>

                    {/* Email */}
                    <div className="md:col-span-1">
                      <InputField 
                        required={true}
                        label="EMAIL"
                        name="email" 
                        type="text" 
                        placeholder={initialValues.email} 
                        value={values.email}
                      />
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <InputField 
                        label="DATE OF BIRTH"
                        name="dateOfBirth" 
                        type="date" 
                        placeholder={initialValues.dateOfBirth} 
                        value={values.dateOfBirth}
                        required={true}
                      />
                    </div>

                    {/* Religion */}
                    <div>
                      <InputSelect 
                        label="Religion"
                        name="religion" 
                        options={[
                          { value: 'islam', label: 'Islam' },
                          { value: 'hinduism', label: 'Hinduism' },
                          { value: 'christianity', label: 'Christianity' },
                          { value: 'buddhism', label: 'Buddhism' },
                          { value: 'other', label: 'Other' }, 
                        ]}
                        value={values.religion}
                        required={true}
                        error={touched.religion && errors.religion ? errors.religion : ''}
                      />
                      {errors.religion && touched.religion && (
                          <div className="text-red-500 text-base mt-1">{errors.religion}</div>
                      )}
                    </div>
                    {/* Father's Name */}
                    <div>
                      <InputField 
                        label="FATHER'S NAME"
                        name="fatherName" 
                        type="text" 
                        placeholder={initialValues.fatherName} 
                        value={values.fatherName}
                        required={true}
                      />
                    </div>

                    {/* Father's Phone */}
                    <div className="flex gap-2">
                      <InputField 
                        label="FATHER'S PHONE NUMBER"
                        name="fatherPhone" 
                        type="text" 
                        placeholder={initialValues.fatherPhone} 
                        value={values.fatherPhone}
                        formPreappend="+880" 
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
                        value={values.gender}
                        required={true}
                        error={touched.gender && errors.gender ? errors.gender : ''}
                      />
                      {errors.gender && touched.gender && (
                          <div className="text-red-500 text-base mt-1">{errors.gender}</div>
                      )}
                    </div>

                    {/* Marital Status */}
                    <div>
                      <InputSelect 
                        label="Marital Status"
                        name="maritialStatus" 
                        options={[
                          { value: 'unmarried', label: 'Unmarried' },
                          { value: 'married', label: 'Married' },
                          { value: 'divorced', label: 'Divorced' },
                          { value: 'widowed', label: 'Widowed' },
                        ]}
                        value={values.maritialStatus}
                        required={true}
                        error={touched.maritialStatus && errors.maritialStatus ? errors.maritialStatus : ''}
                      />
                      {errors.maritialStatus && touched.maritialStatus && (
                          <div className="text-red-500 text-base mt-1">{errors.maritialStatus}</div>
                      )}
                    </div>
                    {/* Class */}
                    <div>
                      <InputSelect 
                        label="CLASS"
                        name="class" 
                        options={[
                          { value: '6', label: 'Class 6' },
                          { value: '7', label: 'Class 7' },
                          { value: '8', label: 'Class 8' },
                          { value: '9', label: 'Class 9' },
                          { value: '10', label: 'Class 10' },
                        ]}
                        value={values.class}
                        required={true}
                        error={touched.class && errors.class ? errors.class : ''}
                      />
                      {errors.class && touched.class && (
                          <div className="text-red-500 text-base mt-1">{errors.class}</div>
                      )}
                    </div>

                    {/* Mother's Name */}
                    <div>
                      <InputField 
                        label="MOTHER'S NAME"
                        name="motherName" 
                        type="text" 
                        placeholder={initialValues.motherName} 
                        value={values.motherName}
                        required={true}
                      />
                    </div>

                    {/* Blood group */}
                    <div>
                      <InputField 
                        label="blood group"
                        name="bloodGroup" 
                        type="text" 
                        placeholder={initialValues.bloodGroup} z
                        value={values.bloodGroup} 
                        required={true}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className='grid grid-cols-1 gap-6 mt-5'>
                      <Textarea 
                        label="DESCRIPTIONS"
                        name="descriptions" 
                        type="text" 
                        placeholder={initialValues.descriptions} 
                        value={values.descriptions}
                        required={true}
                      />
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
    </>
  )
}

export default BasicInformationForm
