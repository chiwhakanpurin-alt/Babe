import React, { createContext, useState, useEffect, useContext } from 'react';
import { initialColumns, initialRows, initialSelectOptions } from '../constants/defaultData';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [columns, setColumns] = useState(initialColumns);
  const [rows, setRows] = useState(() => {
    const saved = localStorage.getItem('tracker_rows');
    return saved ? JSON.parse(saved) : initialRows;
  });
  const [selectOptions, setSelectOptions] = useState(() => {
    const saved = localStorage.getItem('tracker_options');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return { ...initialSelectOptions, ...parsed };
      } catch (e) {
        return initialSelectOptions;
      }
    }
    return initialSelectOptions;
  });

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('tracker_rows', JSON.stringify(rows));
  }, [rows]);

  useEffect(() => {
    localStorage.setItem('tracker_options', JSON.stringify(selectOptions));
  }, [selectOptions]);

  const updateRow = (rowId, colId, value) => {
    setRows(prev => prev.map(row => 
      row.id === rowId ? { ...row, [colId]: value } : row
    ));
  };

  const addRow = () => {
    const newRow = { id: `row_${Date.now()}` };
    columns.forEach(col => {
      newRow[col.id] = '';
    });
    setRows(prev => [...prev, newRow]);
  };

  const addOption = (group, newOption) => {
    setSelectOptions(prev => ({
      ...prev,
      [group]: [...(prev[group] || []), newOption]
    }));
  };

  const updateOption = (group, optionId, updatedOption) => {
    setSelectOptions(prev => ({
      ...prev,
      [group]: prev[group].map(opt => opt.id === optionId ? updatedOption : opt)
    }));
  };

  const deleteOption = (group, optionId) => {
    setSelectOptions(prev => ({
      ...prev,
      [group]: prev[group].filter(opt => opt.id !== optionId)
    }));
  };

  return (
    <DataContext.Provider value={{
      columns,
      rows,
      selectOptions,
      updateRow,
      addRow,
      addOption,
      updateOption,
      deleteOption
    }}>
      {children}
    </DataContext.Provider>
  );
};
