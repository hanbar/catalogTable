import React, { FunctionComponent } from 'react';

type Props = {
  onChange: () => void;
};

const Filter: FunctionComponent<Props> = function Filter({ onChange }) {
  return (
    <>
      <label htmlFor="table-search">Search the table:</label>
      <input type="search" id="table-search" name="q" aria-label="Search through table" onChange={onChange} />
    </>
  );
};

export default Filter;
