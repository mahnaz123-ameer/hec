import React from "react";
import { useField } from "formik";

const InputField = ({ label, required, placeholder,type, formPreappend, ...props }) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;
  return (
    <div>
      {label && <label
        htmlFor={props.id || props.name}
        className="inline-block text-black-900 text-base mb-2 uppercase"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>}
      <div className={`${formPreappend ? "flex items-center justify-start gap-3 " : ""}`}>
        {formPreappend &&
          <div className="bg-gray-200 order rounded-md  px-4 py-[14px] text-base text-black-900 leading-tight focus:outline-none focus:-outline placeholder:text-sm">
            {formPreappend}
          </div>
        }
        <input
          {...field}
          {...props}
          type={type}
          placeholder={placeholder}
          className={`appearance-none border rounded-md w-full px-4 py-[14px] text-base text-black-900 leading-tight focus:outline-none focus:-outline placeholder:text-sm ${
            isError ? "border-red-500" : ""
          } ${props.className}`}

        />
      </div>
      {isError && <span className="text-red-500 text-base flex justify-start mt-1">{meta.error}</span>}
    </div>
  );
};

export default InputField;
