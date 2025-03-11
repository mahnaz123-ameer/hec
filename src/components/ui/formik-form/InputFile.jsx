import React from "react";
import { useField } from "formik";

const InputFile = ({ label, required, requiredIcon, bgWhite=false, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const isError = meta.touched && meta.error;
  
  return (
    <div>
     {label && <label
        className="inline-block text-black-900 text-base mb-2"
        htmlFor={props.id || props.name}
      >
        {label} {required && <span className="text-red-500">*</span>}
        {requiredIcon && <span className="text-red-500">*</span>}
      </label>}
      <input
        className={`appearance-none border rounded w-full px-4 py-[14px] text-gray-700 leading-tight focus:outline-none focus:-outline ${
          isError ? "border-red-500" : bgWhite ? "bg-white" : ""
        }`}
        type="file"
        onChange={(event) => {
          helpers.setValue(event.currentTarget.files[0]);
        }}
        onBlur={field.onBlur}
        name={field.name}
        id={field.name}
        required={ required ? required : '' }
        disabled={props.disabled ? props.disabled : false}
      />
      {isError && <span className="text-red-500 flex justify-start text-xs">{meta.error}</span>}
    </div>
  );
};

export default InputFile;
