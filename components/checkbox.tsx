import React, { FunctionComponent } from 'react';

type Props = {
  label: string;
  onChange: () => void;
};

const Checkbox: FunctionComponent<Props> = function Checkbox({ label, onChange }) {
  const handleChange = () => {
    onChange();
  };

  return (
    <>
      <input type="checkbox" id={label} name={label} onChange={handleChange} />
      <label htmlFor={label}>{label}</label>
    </>
  );
};

export default Checkbox;
