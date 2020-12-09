import React from 'react';
import './App.css';
import sampleData from './sampleData';


// import { getGridTemplate } from "./getGridTemplate";

function TableHeader(props) {
  const { children, ...rest } = props;

  return <thead {...rest}>{children}</thead>;
}

function TableHeaderRow(props) {
  const { children, ...rest } = props;

  return <tr {...rest}>{children}</tr>;
}

function Table(props) {
  const { children, ...rest } = props;

  return <table {...rest}>{children}</table>;
}

Table.Header = TableHeader;
Table.HeaderRow = TableHeaderRow;
export { Table };




const EditSecurity = () => {
  return (
    <div style={{ background: 'white', hieght: '300px', padding: '1em '}}>
      <Table className="mainTable" style={{ gridTemplateColumns: 'min-content 1fr 1fr 1fr' }}>
        <Table.Header>
          <Table.HeaderRow>
          <th>null</th>
          <th>Inventory</th>
          <th>Loading</th>
          <th>Shipping</th>
          </Table.HeaderRow>
        </Table.Header>
        <tbody>
          {sampleData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
              <input type="checkbox" id="horns" name="horns" />
              <input type="checkbox" id="horns" name="horns" />

              </td>
              <td>
              <input type="checkbox" id="horns" name="horns" />
              <input type="checkbox" id="horns" name="horns" />

              </td>
              <td>
              <input type="checkbox" id="horns" name="horns" />
              <input type="checkbox" id="horns" name="horns" />
                  </td>
            </tr>
          ))}
        </tbody>
        </Table>
    </div>
  );
}

export default EditSecurity;
