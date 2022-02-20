import Image from 'next/image';
import React, { FunctionComponent, useState } from 'react';
import { cloneDeep, find, isEmpty } from 'lodash';
import { Data } from '../types/DataType';
import TableRow from './tableRow';
import TableFooterRow from './tableFooterRow';
import {
  StyledTable, TH, ParamsList, TFoot,
} from '../styles/table';
import thumbnail from '../images/MK3S.jpg';
import { rows, tfooterRows } from './rows';

type Props = {
  data: Data[];
};

const Table: FunctionComponent<Props> = function Table({ data }) {
  const [hiddenParams, setHiddenParams] = useState<string[]>([]);

  const hideRow = (rowKey: string) => {
    const hiddenRows = cloneDeep(hiddenParams);
    hiddenRows.push(rowKey);
    setHiddenParams(hiddenRows);
  };

  const showRow = (rowKey: string) => {
    const hiddenRows = cloneDeep(hiddenParams);
    const index = hiddenRows.indexOf(rowKey);
    hiddenRows.splice(index, 1);
    setHiddenParams(hiddenRows);
  };

  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <th />
            {data.map((column) => (
              <TH key={column.id}>
                <div><Image src={thumbnail} alt="Thumbnail" width="150px" height="150px" /></div>
                <span>{column.title}</span>
              </TH>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.filter((row) => (hiddenParams.indexOf(row.key) === -1))
            .map((row) => (
              <TableRow
                key={row.key}
                columns={data}
                row={row}
                handleHideRow={hideRow.bind(null, row.key)}
              />
            ))}
        </tbody>
        <TFoot>
          {tfooterRows.map((row) => (
            <TableFooterRow
              key={row.key}
              columns={data}
              row={row}
            />
          ))}
        </TFoot>
      </StyledTable>
      {!isEmpty(hiddenParams)
        && (
          <ParamsList>
            <span>Skryté parametry:</span>
            <ul>
              {hiddenParams.map((param) => (
                <li key={param} onClick={showRow.bind(null, param)}>
                  {(find(rows, ['key', param]) || {}).name}
                </li>
              ))}
            </ul>
          </ParamsList>
        )}
    </>
  );
};

export default Table;
