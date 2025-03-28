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
        className="bg-white w-full text-dark px-4 py-2 rounded-2xl border border-gray-gray-dark"
        placeholder={placeholder}
        disabled={isDisabled}
        onClick={onClick}
        onChange={onChange}
      />
    );
  }
);

export default InputField;
