import React from "react";
import { useField } from "formik";
import { Icon } from "@iconify/react/dist/iconify.js";

const InputGroupIconField = ({ label, required, placeholder, type, icon, ...props }) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;
  return (
    <div>
      <label
        htmlFor={props.id || props.name}
        className="block text-secondary-800 text-base mb-2 font-semibold"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <Icon icon={icon} />
        </span>
        <input
          {...field}
          {...props}
          type={type}
          placeholder={placeholder}
          className={`rounded-lg pl-10 appearance-none border w-full p-3 text-gray-700 leading-tight focus:outline-none focus:-outline placeholder:text-sm ${
            isError ? "border-red-500" : ""
          }`}
        />
      </div>
      {isError && <span className="text-red-500 text-xs">{meta.error}</span>}
    </div>
  );
};

export default InputGroupIconField;
