import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Button from '@/components/ui/Button';
import InputField from '@/components/ui/formik-form/InputField';
import { Icon } from '@iconify/react';
import PasswordInputField from '@/components/ui/formik-form/PasswordInputField';

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required('Current password is required'),
  newPassword: Yup.string()
    .required('New password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
      'Password must contain at least one uppercase letter, one special character, and one number'
    ),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
});

const ChangePassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const calculatePasswordStrength = (password) => {
    if (!password) return 0;
    
    let strength = 0;
    if (password.length >= 8) strength += 20;
    if (password.match(/[A-Z]/)) strength += 20;
    if (password.match(/[a-z]/)) strength += 20;
    if (password.match(/[0-9]/)) strength += 20;
    if (password.match(/[!@#$%^&*]/)) strength += 20;
    
    return strength;
  };

  const getStrengthColor = (strength) => {
    if (strength <= 20) return 'bg-red-500';
    if (strength <= 40) return 'bg-orange-500';
    if (strength <= 60) return 'bg-yellow-500';
    if (strength <= 80) return 'bg-blue-500';
    return 'bg-green-500';
  };

  const getStrengthText = (strength) => {
    if (strength <= 20) return 'Very Weak';
    if (strength <= 40) return 'Weak';
    if (strength <= 60) return 'Medium';
    if (strength <= 80) return 'Strong';
    return 'Very Strong';
  };

  const initialValues = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched }) => (
        <Form className="space-y-4">
          <div>
          <PasswordInputField
              label="CURRENT PASSWORD"
              name="currentPassword"
              type={showCurrentPassword ? 'text' : 'password'}
              required
              placeholder="Enter current password"
            />
          </div>

          <div>
            <PasswordInputField
              label="NEW PASSWORD"
              name="newPassword"
              type={showNewPassword ? 'text' : 'password'}
              required
              placeholder="Enter new password"
              suffix={
                <div 
                  className="cursor-pointer text-slate-400 hover:text-slate-600"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  <Icon icon={showNewPassword ? 'mdi:eye-off' : 'mdi:eye'} width="20" />
                </div>
              }
            />
            {values.newPassword && (
              <div className="mt-2">
                <div className="flex justify-between mb-1">
                  <div className="h-2 flex-1 rounded-full bg-slate-100 overflow-hidden">
                    <div 
                      className={`h-full transition-all ${getStrengthColor(calculatePasswordStrength(values.newPassword))}`}
                      style={{ width: `${calculatePasswordStrength(values.newPassword)}%` }}
                    />
                  </div>
                </div>
                <p className={`text-xs ${getStrengthColor(calculatePasswordStrength(values.newPassword)).replace('bg-', 'text-')}`}>
                  {getStrengthText(calculatePasswordStrength(values.newPassword))}
                </p>
              </div>
            )}
          </div>

          <div>
            <PasswordInputField
              label="CONFIRM NEW PASSWORD"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              required
              placeholder="Confirm new password"
            />
            {values.confirmPassword && !errors.confirmPassword && touched.confirmPassword && (
              <p className="text-xs text-green-500 mt-1">
                <Icon icon="mdi:check-circle" className="inline mr-1" /> Password matched
              </p>
            )}
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

export default ChangePassword;