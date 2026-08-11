import React from 'react';
import { DataProvider } from './context/DataContext';
import Spreadsheet from './components/Spreadsheet';
import ColorSettingsModal from './components/ColorSettingsModal';
import PenguinMascot from './components/PenguinMascot';
import './App.css';

function App() {
  return (
    <DataProvider>
      <div className="app-container">
        <header className="app-header">
          <div className="header-title">
            <h1>เพนกวินจัดงาน 🐧</h1>
          </div>
          <div className="header-actions">
            <ColorSettingsModal />
          </div>
        </header>
        <main className="app-main">
          <Spreadsheet />
        </main>
      </div>
      <PenguinMascot />
    </DataProvider>
  );
}

export default App;
