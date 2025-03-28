import React, { forwardRef } from "react";

interface IInputFieldProps {
  placeholder?: string;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = forwardRef<HTMLInputElement, IInputFieldProps>(
  ({ placeholder, onClick, onChange }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        className="border border-black p-2"
        placeholder={placeholder}
        onClick={onClick}
        onChange={onChange}
      />
    );
  }
);

export default InputField;
