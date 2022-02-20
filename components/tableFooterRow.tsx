import React, { FunctionComponent } from 'react';
import { Data } from '../types/DataType';
import { Row } from '../types/RowType';
import Button from './button';

type Props = {
  columns: Data[];
  row: Row;
};

const TableFooterRow: FunctionComponent<Props> = function TableFooterRow({ columns, row }) {
  return (
    <tr>
      <td />
      {columns.map((column) => {
        if (column[row.key]) {
          return <td key={column.id}><Button text={row.name} /></td>;
        }
        return <td key={column.id} />;
      })}
    </tr>
  );
};

export default TableFooterRow;
