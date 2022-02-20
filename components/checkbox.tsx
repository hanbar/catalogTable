import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.div`
  display: inline;
`;

type Props = {
  label: string;
  onChange: () => void;
};

const Checkbox: FunctionComponent<Props> = function Checkbox({ label, onChange }) {
  const handleChange = () => {
    onChange();
  };

  return (
    <StyledCheckbox>
      <input type="checkbox" id={label} name={label} onChange={handleChange} />
      <label htmlFor={label}>{label}</label>
    </StyledCheckbox>
  );
};

export default Checkbox;
