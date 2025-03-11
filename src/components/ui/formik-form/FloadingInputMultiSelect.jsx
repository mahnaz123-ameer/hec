import React from "react";
import { useField } from "formik";
import Select from "react-select";
import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "./input.module.scss"

const FloadingInputMultiSelect = ({ label, options, valueKey, labelKey, icon, placeholder, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  const customStyles = {
    control: (base, state) => ({
      ...base,
    }),
  };

  const handleChange = (value) => {
    helpers.setValue(value);
  };

  const formattedOptions = options.map((option) => ({
    value: option[valueKey],
    label: option[labelKey],
  }));

  return (
    <div class="flex mb-4 border rounded-lg py-1.5">
      <div class="w-10 flex items-center justify-center bg-blue-lighter border-blue-lighter rounded-l text-blue-dark pl-2">
        <Icon
          icon={icon}
          className="h-6 w-6 text-eminence-900"
        />
      </div>
      <div class={`relative w-full ${styles.multiSelect_warpper}`}>
        <Select
          {...field}
          {...props}
          options={formattedOptions}
          styles={customStyles}
          isMulti
          onChange={handleChange}
          onBlur={() => helpers.setTouched(true)}
          placeholder={placeholder}
          className="border-0"
        />
        <label
          htmlFor={props.name}
          className="absolute text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-1 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          {label}
        </label>
        {meta.touched && meta.error ? (
          <div className="text-red-500 text-xs mt-1">{meta.error}</div>
        ) : null}
      </div>
    </div>
    // <div className="mb-4">
    //   <label className="block text-gray-700 font-bold mb-2" htmlFor={props.name}>
    //     {label}
    //   </label>
    //   <Select
    //     {...field}
    //     {...props}
    //     options={formattedOptions}
    //     styles={customStyles}
    //     isMulti
    //     onChange={handleChange}
    //     onBlur={() => helpers.setTouched(true)}
    //   />
    //   {meta.touched && meta.error ? (
    //     <div className="text-red-500 text-xs mt-1">{meta.error}</div>
    //   ) : null}
    // </div>
  );
};

export default FloadingInputMultiSelect;
