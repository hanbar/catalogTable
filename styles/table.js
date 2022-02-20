import styled from 'styled-components';

export const StyledTable = styled.table`
  background: #eee;
  width: 100%;
  border-collapse: collapse;
  border: 1em solid #eee;
  td {
    padding: 1em;
    border: 1px #ddd;
    border-style: solid dotted solid;
  }
`;

export const TR = styled.tr`
  :nth-child(2n) {
    background: white;
  }
`;

export const TH = styled.th`
  color: rgb(255, 102, 0);
  padding: 1em;
  font-weight: bold;
`;

export const TD = styled.td`
  font-weight: bold;
`;

export const TFoot = styled.tfoot`
  td {
    background: white;
    padding: 0.5em 1em;
    border: 0;
    border-right: 1px dotted #ddd;
  }
`;

export const Icon = styled.span`
  margin-left: 1em;
  cursor: pointer;
  float: right;
`;

export const TableFilter = styled.div`
  margin-bottom: 1em;
  label {
    margin-right: 0.5em;
  }
  input[type=search] {
    margin-right: 2em;
  }
`;

export const ParamsList = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    li {
      float: left;
      display: block;
      padding: 0.5em;
      cursor: pointer;
    }
  }
  span {
    float: left;
    padding: 0.5em;
  }
`;
