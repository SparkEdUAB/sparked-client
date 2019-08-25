import React, { useState } from 'react';

/**
 * @name useFormInput
 * @param {String} initialValue
 * @description use state hooks to set the current value from the input field
 * @returns { string, function }  containing the value and the onChange function
 */
export function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  };
}
