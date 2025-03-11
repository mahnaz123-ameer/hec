import React from "react";
import { useField } from "formik";

const FloadTextarea = ({ label, required, placeholder, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const isError = meta.touched && meta.error;
  return (
    <>
      <label
        htmlFor={props.id || props.name}
        className="block text-gray-700 text-base"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
            type="text"
            id="eventTitle"
            className={`appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:-outline placeholder:text-sm  ${
              isError ? "border-red-500" : ""
            }`}
            placeholder={placeholder}
            {...field}
            {...props}
            rows={5}
          ></textarea>
          
      {isError && <span className="text-red-500 text-xs">{meta.error}</span>}
    </>
  );
};

export default FloadTextarea;
