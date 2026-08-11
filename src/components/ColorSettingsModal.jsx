import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { X, Plus, Trash2, Settings } from 'lucide-react';

const ColorSettingsModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState('statusOptions');
  const { selectOptions, updateOption, addOption, deleteOption, columns } = useData();

  const groups = columns.filter(c => c.type === 'select').map(c => ({ id: c.optionsGroup, label: c.label }));

  const handleUpdate = (optId, field, value) => {
    const currentOpt = selectOptions[activeGroup].find(o => o.id === optId);
    if (currentOpt) {
      updateOption(activeGroup, optId, { ...currentOpt, [field]: value });
    }
  };

  const handleAdd = () => {
    const newId = `opt_${Date.now()}`;
    addOption(activeGroup, { id: newId, label: 'ตัวเลือกใหม่', bgColor: '#e2e8f0', textColor: '#0f172a' });
  };

  return (
    <>
      <button className="settings-btn" onClick={() => setIsOpen(true)}>
        <Settings size={18} />
        <span>ตั้งค่าสีและป้ายกำกับ</span>
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>ตั้งค่าตัวเลือกและสี</h2>
              <button className="close-btn" onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>
            
            <div className="modal-body">
              <div className="tabs">
                {groups.map(g => (
                  <button 
                    key={g.id} 
                    className={`tab-btn ${activeGroup === g.id ? 'active' : ''}`}
                    onClick={() => setActiveGroup(g.id)}
                  >
                    {g.label}
                  </button>
                ))}
              </div>

              <div className="options-list">
                {selectOptions[activeGroup]?.map(opt => (
                  <div key={opt.id} className="option-edit-row">
                    <input 
                      type="text" 
                      value={opt.label} 
                      onChange={(e) => handleUpdate(opt.id, 'label', e.target.value)}
                      className="edit-input label-input"
                      placeholder="ชื่อป้ายกำกับ"
                    />
                    <div className="color-picker-group">
                      <label title="สีพื้นหลัง">Bg:</label>
                      <input 
                        type="color" 
                        value={opt.bgColor} 
                        onChange={(e) => handleUpdate(opt.id, 'bgColor', e.target.value)}
                        className="color-input"
                      />
                    </div>
                    <div className="color-picker-group">
                      <label title="สีตัวอักษร">Tx:</label>
                      <input 
                        type="color" 
                        value={opt.textColor} 
                        onChange={(e) => handleUpdate(opt.id, 'textColor', e.target.value)}
                        className="color-input"
                      />
                    </div>
                    <div className="preview-container">
                      <div 
                        className="preview-badge" 
                        style={{ backgroundColor: opt.bgColor, color: opt.textColor }}
                      >
                        {opt.label || 'ตัวอย่าง'}
                      </div>
                    </div>
                    <button className="delete-btn" onClick={() => deleteOption(activeGroup, opt.id)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
              <button className="add-option-btn" onClick={handleAdd}>
                <Plus size={16} /> เพิ่มตัวเลือกในกลุ่มนี้
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ColorSettingsModal;
