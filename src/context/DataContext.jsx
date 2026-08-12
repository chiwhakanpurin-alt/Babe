import React, { createContext, useState, useEffect, useContext } from 'react';
import { initialColumns, initialRows, initialSelectOptions } from '../constants/defaultData';
import { db } from '../firebase';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [columns, setColumns] = useState(initialColumns);
  const [rows, setRows] = useState(initialRows);
  const [selectOptions, setSelectOptions] = useState(initialSelectOptions);
  const [isLoaded, setIsLoaded] = useState(false);

  // Subscribe to real-time updates from Firestore
  useEffect(() => {
    const docRef = doc(db, 'boards', 'shared');
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.rows) setRows(data.rows);
        if (data.selectOptions) setSelectOptions(data.selectOptions);
      }
      setIsLoaded(true);
    });

    return () => unsubscribe();
  }, []);

  // Helper function to sync changes to Firestore
  const syncToFirebase = async (newRows, newOptions) => {
    if (!isLoaded) return;
    try {
      await setDoc(doc(db, 'boards', 'shared'), {
        rows: newRows,
        selectOptions: newOptions
      }, { merge: true });
    } catch (e) {
      console.error("Error saving to Firebase:", e);
    }
  };

  const updateRow = (rowId, colId, value) => {
    const newRows = rows.map(row => 
      row.id === rowId ? { ...row, [colId]: value } : row
    );
    setRows(newRows);
    syncToFirebase(newRows, selectOptions);
  };

  const addRow = () => {
    const newRow = { id: `row_${Date.now()}` };
    columns.forEach(col => {
      newRow[col.id] = '';
    });
    const newRows = [...rows, newRow];
    setRows(newRows);
    syncToFirebase(newRows, selectOptions);
  };

  const addOption = (group, newOption) => {
    const newOptions = {
      ...selectOptions,
      [group]: [...(selectOptions[group] || []), newOption]
    };
    setSelectOptions(newOptions);
    syncToFirebase(rows, newOptions);
  };

  const updateOption = (group, optionId, updatedOption) => {
    const newOptions = {
      ...selectOptions,
      [group]: selectOptions[group].map(opt => opt.id === optionId ? updatedOption : opt)
    };
    setSelectOptions(newOptions);
    syncToFirebase(rows, newOptions);
  };

  const deleteOption = (group, optionId) => {
    const newOptions = {
      ...selectOptions,
      [group]: selectOptions[group].filter(opt => opt.id !== optionId)
    };
    setSelectOptions(newOptions);
    syncToFirebase(rows, newOptions);
  };

  const exportData = () => {
    const data = { rows, selectOptions };
    // encodeURIComponent handles special characters like Thai before converting to Base64
    return btoa(encodeURIComponent(JSON.stringify(data)));
  };

  const importData = (code) => {
    try {
      const data = JSON.parse(decodeURIComponent(atob(code)));
      if (data && data.rows && data.selectOptions) {
        setRows(data.rows);
        setSelectOptions(data.selectOptions);
        return true;
      }
      return false;
    } catch (e) {
      console.error("Failed to import data:", e);
      return false;
    }
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
      deleteOption,
      exportData,
      importData
    }}>
      {children}
    </DataContext.Provider>
  );
};
