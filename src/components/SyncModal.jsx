import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { X, Copy, Download, Upload } from 'lucide-react';
import './SyncModal.css';

const SyncModal = ({ onClose }) => {
  const { exportData, importData } = useData();
  const [importCode, setImportCode] = useState('');
  const [statusMsg, setStatusMsg] = useState('');
  
  const handleCopyExport = () => {
    const code = exportData();
    navigator.clipboard.writeText(code).then(() => {
      setStatusMsg('ก๊อปปี้โค้ดสำเร็จ! เอาไปวางในมือถือได้เลย');
      setTimeout(() => setStatusMsg(''), 3000);
    });
  };

  const handleImport = () => {
    if (!importCode.trim()) {
      setStatusMsg('⚠️ กรุณาวางโค้ดก่อนครับ');
      return;
    }
    const success = importData(importCode);
    if (success) {
      setStatusMsg('✅ โหลดข้อมูลสำเร็จแล้ว!');
      setTimeout(() => {
        setStatusMsg('');
        onClose();
      }, 1500);
    } else {
      setStatusMsg('❌ โค้ดไม่ถูกต้อง หรือข้อมูลเสียหายครับ');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content sync-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>🔗 เชื่อมโยงข้อมูล (Sync)</h2>
          <button className="close-btn" onClick={onClose}><X size={24} /></button>
        </div>
        
        <div className="modal-body">
          <p className="sync-desc">
            ก็อปปี้โค้ดด้านล่างนี้ ไปวางในเครื่องอื่นที่ต้องการให้ข้อมูลเหมือนกัน
          </p>

          <div className="sync-section">
            <h3>ส่งออกข้อมูล (เครื่องนี้ 👉 เครื่องอื่น)</h3>
            <button className="action-btn copy-btn" onClick={handleCopyExport}>
              <Copy size={18} /> ก๊อปปี้โค้ดข้อมูลปัจจุบัน
            </button>
          </div>

          <div className="sync-divider">หรือ</div>

          <div className="sync-section">
            <h3>นำเข้าข้อมูล (เครื่องอื่น 👉 เครื่องนี้)</h3>
            <textarea 
              className="sync-textarea"
              placeholder="วางโค้ดที่ก๊อปปี้มาลงตรงนี้..."
              value={importCode}
              onChange={e => setImportCode(e.target.value)}
            />
            <button className="action-btn paste-btn" onClick={handleImport}>
              <Upload size={18} /> โหลดข้อมูลแทนที่เครื่องนี้
            </button>
          </div>

          {statusMsg && <div className={`sync-status ${statusMsg.includes('❌') ? 'error' : 'success'}`}>{statusMsg}</div>}
        </div>
      </div>
    </div>
  );
};

export default SyncModal;
