import React, { FunctionComponent, useState } from 'react';
import { cloneDeep, find, isEmpty } from 'lodash';
import { Data } from '../types/DataType';
import { Row } from '../types/RowType';
import TableRow from './tableRow';

type Props = {
  data: Data[];
  rows: Row[];
};

const Table: FunctionComponent<Props> = function Table({ data, rows }) {
  const [hiddenParams, setHiddenParams] = useState([]);

  const hideRow = (rowKey) => {
    const hiddenRows = cloneDeep(hiddenParams);
    hiddenRows.push(rowKey);
    setHiddenParams(hiddenRows);
  };

  const showRow = (rowKey) => {
    const hiddenRows = cloneDeep(hiddenParams);
    const index = hiddenRows.indexOf(rowKey);
    hiddenRows.splice(index, 1);
    setHiddenParams(hiddenRows);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th/>
            {data.map(column => (
              <th key={column.id}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <TableRow
              key={row.key}
              columns={data}
              row={row}
              handleHideRow={hideRow.bind(null, row.key)}
              isHidden={hiddenParams.indexOf(row.key) !== -1}
            />)
          )}
        </tbody>
      </table>
      {!isEmpty(hiddenParams) &&
        <div>
          <span>Skryté parametry:</span>
          <ul>
            {hiddenParams.map(param => <li key={param} onClick={showRow.bind(null, param)}>{find(rows, ['key', param]).name}</li>)}
          </ul>
        </div>
      }
    </>
  );
};

export default Table;
