import React from "react";
import { useField } from "formik";

const InputCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;
  return (
    <div className="flex items-center">
      <input
        {...field}
        {...props}
        type="checkbox"
        className={`form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out ${
          isError ? "border-red-500" : ""
        }`}
      />
      {label && (
        <label htmlFor={props.id || props.name} className="ml-3 block text-gray-700 text-sm">
          {label}
        </label>
      )}
      {isError && <span className="text-red-500 text-xs">{meta.error}</span>}
    </div>
  );
};

export default InputCheckbox;

