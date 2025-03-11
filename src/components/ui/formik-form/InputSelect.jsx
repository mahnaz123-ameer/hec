import React from "react";
import Select from "react-select";
import { useField } from "formik";

const InputSelect = ({
  label,
  options = [],
  valueKey = "value",
  labelKey = "label",
  required = false,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const isError = meta.touched && meta.error;

  const handleChange = (selectedOption) => {
    helpers.setValue(selectedOption.value);
  };

  const formattedOptions = options.map((option) => ({
    value: option[valueKey],
    label: option[labelKey],
  }));

  const handleKeyup = (selectedOption) => {
  }

  return (
    <div className="w-full">
      {label && 
        <label
          className="inline-block text-black-900 text-base mb-2 uppercase"
          htmlFor={props.id || props.name}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      }
      <Select
        value={formattedOptions.find((opt) => opt.value === field.value) || null}
        options={formattedOptions}
        onChange={handleChange}
        onKeyUp={handleKeyup}
        onBlur={() => helpers.setTouched(true)}
        classNamePrefix="react-select"
        className={`react-select-container rounded-md ${isError ? "border-red-500 border" : "border border-gray-300"}`}
        styles={{
          control: (base, state) => ({
            ...base,
            boxShadow: 'none',
            border: 'none',
            '&:hover': {
              border: 'none'
            }
          }),
          input: (base) => ({
            ...base,
            minHeight: "40px",  // Sets the minimum height for the input field
          }),
          valueContainer: (base) => ({
            ...base,
            minHeight: "40px",  // Ensures value container has the same height
            display: "flex",
            alignItems: "center",
          }),
          container: (base) => ({
            ...base,
            minHeight: "50px",  // Set the minimum height for the entire container
          }),
        }}
      />

      {field.touched && field.error ? <div>{field.error}</div> : null}
    </div>
  );
};

export default InputSelect;
