import React from 'react';

export default function CustomInput({
  type,
  placeholder,
  value,
  onChange,
  className,
}) {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}