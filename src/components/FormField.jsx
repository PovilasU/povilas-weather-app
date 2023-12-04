import React from "react";

const FormField = ({ title, name, placeholder }) => (
  <div className="form-field">
    <label>{title}</label>
    <input
      type="text"
      name={name}
      autoComplete="off"
      placeholder={placeholder}
    />
  </div>
);

export default React.memo(FormField);
