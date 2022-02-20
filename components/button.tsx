import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: rgb(250, 104, 49);
  border-radius: 2px;
  border: 1px solid rgb(224, 93, 45);
  color: white;
  padding: 0.65em 1em;
  width: 150px;
  text-align: left;
`;

type Props = {
  text: string;
};

const Button: FunctionComponent<Props> = function Button({ text }) {
  return (
    <StyledButton type="button">{text}</StyledButton>
  );
};

export default Button;
