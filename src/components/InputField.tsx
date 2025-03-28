import React, { forwardRef } from "react";

interface IInputFieldProps {
  placeholder?: string;
  isDisabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = forwardRef<HTMLInputElement, IInputFieldProps>(
  ({ placeholder, isDisabled = false, onClick, onChange }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        className="border border-black p-2"
        placeholder={placeholder}
        disabled={isDisabled}
        onClick={onClick}
        onChange={onChange}
      />
    );
  }
);

export default InputField;
