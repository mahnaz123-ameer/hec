import React from "react";
import { useField } from "formik";

const InputDateField = ({ label, required, ...props }) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;
  return (
    <div>
      <label
        htmlFor={props.id || props.name}
        className="block text-gray-700 font-bold mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="date"
        {...field}
        {...props}
        className={`appearance-none border rounded h-[50px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline ${
          isError ? "border-red-500" : ""
        }`}
      />
      {isError && <span className="text-red-500 text-xs">{meta.error}</span>}
    </div>
  );
};

export default InputDateField;
