import React, { FunctionComponent } from 'react';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Data } from '../types/DataType';
import { Row } from '../types/RowType';
import { TR, TD, Icon } from '../styles/table';

type Props = {
  columns: Data[];
  row: Row;
  handleHideRow: () => void;
};

const TableRow: FunctionComponent<Props> = function TableRow({ columns, row, handleHideRow }) {
  return (
    <TR>
      <TD>
        {row.name}
        <Icon><FontAwesomeIcon icon={faEye} onClick={handleHideRow} /></Icon>
      </TD>
      {columns.map((column) => {
        return <td key={column.id}>{column[row.key as keyof Data]}</td>;
      })}
    </TR>
  );
};

export default TableRow;
