import React, { ChangeEvent } from 'react';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  type?: 'text' | 'number' | 'select';
  options?: { value: string; label: string }[];
  onChange: (name: string, value: string) => void;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  name,
  label,
  value,
  type = 'text',
  options = [],
  onChange,
  required = false,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-purple-800 font-medium mb-2">
        {label}
      </label>
      
      {type === 'select' ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          required={required}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          required={required}
        />
      )}
    </div>
  );
};

export default FormField;