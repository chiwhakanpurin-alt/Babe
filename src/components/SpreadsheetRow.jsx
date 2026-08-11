import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useData } from '../context/DataContext';
import TagSelect from './TagSelect';
import { AlignLeft, X } from 'lucide-react';

const SpreadsheetRow = ({ row, index }) => {
  const { columns, updateRow } = useData();
  const [activeModalCol, setActiveModalCol] = useState(null);

  const handleCellChange = (colId, value) => {
    updateRow(row.id, colId, value);
  };

  return (
    <tr>
      <td className="row-number-cell">{index + 1}</td>
      {columns.map(col => (
        <td key={col.id}>
          {col.type === 'select' ? (
            <TagSelect 
              value={row[col.id]} 
              optionsGroup={col.optionsGroup} 
              onChange={(val) => handleCellChange(col.id, val)}
            />
          ) : col.type === 'longtext' ? (
            <div className="longtext-cell" onClick={() => setActiveModalCol(col.id)}>
              <div className="longtext-preview" title={row[col.id] || ''}>
                {row[col.id] ? (
                  row[col.id].length > 20 ? row[col.id].substring(0, 20) + '...' : row[col.id]
                ) : (
                  <span className="placeholder">คลิกเพื่อเพิ่มข้อมูล</span>
                )}
              </div>
              <AlignLeft size={14} className="longtext-icon" />
              
              {activeModalCol === col.id && createPortal(
                <div className="modal-overlay" onClick={(e) => { e.stopPropagation(); setActiveModalCol(null); }}>
                  <div className="modal-content text-modal" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                      <h2>{col.label}</h2>
                      <button className="close-btn" onClick={() => setActiveModalCol(null)}><X size={20} /></button>
                    </div>
                    <div className="modal-body">
                      <textarea 
                        className="longtext-textarea"
                        value={row[col.id] || ''} 
                        onChange={(e) => handleCellChange(col.id, e.target.value)}
                        placeholder={`กรอก${col.label}...`}
                        autoFocus
                      />
                    </div>
                  </div>
                </div>,
                document.body
              )}
            </div>
          ) : (
            <textarea 
              className="text-input-cell"
              value={row[col.id] || ''} 
              onChange={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = (e.target.scrollHeight) + 'px';
                handleCellChange(col.id, e.target.value);
              }}
              onFocus={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = (e.target.scrollHeight) + 'px';
              }}
              placeholder="-"
              rows={1}
            />
          )}
        </td>
      ))}
    </tr>
  );
};

export default SpreadsheetRow;
