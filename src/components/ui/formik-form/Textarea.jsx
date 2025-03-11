import React from "react";
import { useField } from "formik";

const Textarea = ({ label, required, placeholder,type, ...props }) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;
  return (
    <div>
      <label
        htmlFor={props.id || props.name}
        className="inline-block text-black-900 text-base mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        {...field}
        {...props}
        type={type}
        placeholder={placeholder}
        className={`appearance-none border rounded-md w-full px-4 py-[14px] text-base text-black-900 leading-tight focus:outline-none focus:-outline placeholder:text-sm ${
          isError ? "border-red-500" : ""
        }`}

      >
      </textarea>
      {isError && <span className="text-red-500 text-xs">{meta.error}</span>}
    </div>
  );
};

export default Textarea;
