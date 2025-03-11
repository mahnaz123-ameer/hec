import React from "react";
import { useField } from "formik";
import Select from "react-select";
import styles from "./input.module.scss";

const InputMultiSelect = ({ label, options, valueKey, labelKey, required = false, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderColor: state.isFocused ? "#3498db" : "#d2d6dc",
      boxShadow: state.isFocused ? "0 0 0 1px #3498db" : null,
      "&:hover": {
        borderColor: state.isFocused ? "#3498db" : "#d2d6dc",
      },
      minHeight: 50,
    }),
  };

  const handleChange = (selectedOptions) => {
    helpers.setValue(selectedOptions);
  };

  const formattedOptions = options.map((option) => ({
    value: option[valueKey],
    label: option[labelKey],
  }));

  return (
    <div className={styles.multiSelect_warpper}>
      <label
        className="inline-block text-black-900 text-base mb-2"
        htmlFor={props.id || props.name}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Select
        {...field}
        {...props}
        options={options}
        styles={customStyles}
        onChange={handleChange}
        onBlur={() => helpers.setTouched(true)}
        isMulti // Enables multiple selection
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-xs mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputMultiSelect;
