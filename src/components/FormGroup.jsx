import React from "react";

const FormGroup = ({
  label,
  inputType = "text",
  placeholder,
  values,
  onInput,
  onKeyUp,
  onChange,
  readonly = false,
  className,
  reference,
}) => {
  return (
    <div className=" flex flex-col">
      <label htmlFor="">{label}</label>
      <input
        className={`${className ?? "border mt-3 pl-3"}`}
        type={inputType}
        placeholder={placeholder}
        value={values}
        onInput={onInput}
        onChange={onChange}
        onKeyUp={onKeyUp}
        readOnly={readonly}
        ref={reference}
      />
    </div>
  );
};

export default FormGroup;
