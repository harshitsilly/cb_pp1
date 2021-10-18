import React from "react";

interface TextInputInterface {
  label: string;
  onChange: () => void;
  onBlur: () => void;
  placeholder?: string;
  error?: string;
  value? : string;
}

const TextInput = ({
  label,
  onChange,
  onBlur,
  placeholder,
  error,
  value 


}: TextInputInterface) => {
  return (
    <div className="text-input">
      <label>{label}</label>
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        spellCheck="false"
        placeholder={placeholder}
        
      />
      <div className="text-input-error" data-testid="text-input-error">
        {error}
      </div>
    </div>
  );
};

export default TextInput;
