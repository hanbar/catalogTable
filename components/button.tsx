import React, { FunctionComponent } from 'react';

type Props = {
  text: string;
};

const Button: FunctionComponent<Props> = function Button({ text }) {
  return (
    <button type="button">{text}</button>
  );
};

export default Button;
