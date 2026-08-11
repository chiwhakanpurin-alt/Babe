import React from 'react';
import { useData } from '../context/DataContext';
import SpreadsheetRow from './SpreadsheetRow';
import { Plus } from 'lucide-react';

const Spreadsheet = () => {
  const { columns, rows, addRow } = useData();

  return (
    <div className="spreadsheet-wrapper">
      <div className="table-container">
        <table className="spreadsheet-table">
          <thead>
            <tr>
              <th className="row-number-col">#</th>
              {columns.map(col => (
                <th key={col.id}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <SpreadsheetRow key={row.id} row={row} index={index} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="spreadsheet-actions">
        <button className="add-row-btn" onClick={addRow}>
          <Plus size={16} />
          <span>เพิ่มแถวใหม่</span>
        </button>
      </div>
    </div>
  );
};

export default Spreadsheet;
