import React, { FunctionComponent } from 'react';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Data } from '../types/DataType';
import { Row } from '../types/RowType';
import Button from './button';

type Props = {
  columns: Data[];
  row: Row;
  handleHideRow: () => void;
  isHidden: boolean;
};

const TableRow: FunctionComponent<Props> = function TableRow({
  columns, row, handleHideRow, isHidden,
}) {
  return (
    <tr style={{ display: isHidden ? 'none' : 'table-row' }}>
      <td>
        {row.name}
        <FontAwesomeIcon icon={faEye} onClick={handleHideRow} />
      </td>
      {columns.map((column) => {
        if (column[row.key] && (row.key === 'diyKit' || row.key === 'builtPrinter')) {
          return <td key={column.id}><Button text={row.name} /></td>;
        }
        return <td key={column.id}>{column[row.key]}</td>;
      })}
    </tr>
  );
};

export default TableRow;
