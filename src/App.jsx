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
          <th className="header">null</th>
          <th className="header">Inventory</th>
          <th className="header">Loading</th>
          <th className="header">Shipping</th>
          </Table.HeaderRow>
          <Table.HeaderRow>
          <th className="header">null</th>
          <th className="permissions">IO</th>
          <th className="permissions"><span>IO</span> SP</th>
          <th className="permissions"><span>SP</span> LM</th>
          </Table.HeaderRow>
          <Table.HeaderRow>
          <th className="header">null</th>
          <th className="permissions"><span>View</span> Manage</th>
          <th className="permissions"><span>View</span> Manage</th>
          <th className="permissions"><span>View</span> Manage</th>
          </Table.HeaderRow>
        </Table.Header>
        <tbody>
          {sampleData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td className="check">
              <input  type="checkbox"/>
              <input type="checkbox" />

              </td>
              <td className="check">
              <input type="checkbox" />
              <input type="checkbox" />

              </td>
              <td className="check">
              <input type="checkbox" />
              <input type="checkbox" />
                  </td>
            </tr>
          ))}
        </tbody>
        </Table>
    </div>
  );
}

export default EditSecurity;
