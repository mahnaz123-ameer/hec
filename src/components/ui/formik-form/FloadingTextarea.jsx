import React from "react";
import { useField } from "formik";

const Textarea = ({ label, required, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const isError = meta.touched && meta.error;
  return (
    <>
      <div className="flex mb-4">
        <div className="relative w-full border rounded-lg">
          <textarea
            type="text"
            id="eventTitle"
            className={`block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm border-0appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-transparent ${
              isError ? "border-red-500" : ""
            }`}
            placeholder=" "
            {...field}
            {...props}
            rows={5}
          ></textarea>
          <label
            htmlFor={props.id || props.name}
            className="absolute text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-1 origin-[0] start-2.5 dark:border-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto p-3 pt-0"
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        </div>
      </div>
      {isError && <span className="text-red-500 text-xs">{meta.error}</span>}
    </>
  );
};

export default Textarea;
