import React, { useState } from 'react';
import { DataProvider } from './context/DataContext';
import Spreadsheet from './components/Spreadsheet';
import ColorSettingsModal from './components/ColorSettingsModal';
import SyncModal from './components/SyncModal';
import PenguinMascot from './components/PenguinMascot';
import './App.css';

function App() {
  const [showColorSettings, setShowColorSettings] = useState(false);
  const [showSyncModal, setShowSyncModal] = useState(false);

  return (
    <DataProvider>
      <div className="app-container">
        <header className="app-header">
          <div className="header-title">
            <h1>เพนกวินจัดงาน 🐧</h1>
          </div>
          <div className="header-actions">
            <button 
              className="icon-btn sync-btn"
              onClick={() => setShowSyncModal(true)}
              title="ซิงค์ข้อมูลข้ามเครื่อง"
            >
              🔗 ซิงค์ข้อมูล
            </button>
            <ColorSettingsModal />
            {showSyncModal && <SyncModal onClose={() => setShowSyncModal(false)} />}
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
