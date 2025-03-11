import React, { useState } from "react";
import { useField } from "formik";
import { Icon } from '@iconify/react';

const PasswordInputField = ({ label, required, placeholder,type, ...props }) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);
  const isError = meta.touched && meta.error;
  return (
    <>
      {label && <label
        htmlFor={props.id || props.name}
        className="inline-block text-black-900 text-base mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>}
      <div className="flex items-center justify-start border rounded-md">
        <input
          {...field}
          {...props}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className={`bg-transparent appearance-none w-full px-4 py-[14px] text-base text-black-900 leading-tight focus:outline-none focus:-outline placeholder:text-sm ${
            isError ? "border-red-500" : ""
          }`}
        />
        <div className="border-l">
          <button
            type="button"
            className="p-4"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            <Icon icon={!showPassword ? "mynaui:eye-slash" : "uiw:eye-o"} className="h-4 w-4 text-black-900" />
          </button>
        </div>
      </div>
      {isError && <span className="text-red-500 text-xs">{meta.error}</span>}
    </>
  );
};

export default PasswordInputField;
