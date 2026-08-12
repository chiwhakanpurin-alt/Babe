import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useData } from '../context/DataContext';

const TagSelect = ({ value, optionsGroup, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState('bottom');
  const { selectOptions } = useData();
  const options = selectOptions[optionsGroup] || [];
  const dropdownRef = useRef(null);

  const selectedOption = options.find(opt => opt.id === value) || null;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    if (!isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const scrollContainer = dropdownRef.current.closest('.table-container') || document.body;
      const containerRect = scrollContainer.getBoundingClientRect();
      
      const spaceBelowContainer = containerRect.bottom - rect.bottom;
      const spaceAboveContainer = rect.top - containerRect.top;
      
      // If space below in the container is less than 250px and there's more space above
      if (spaceBelowContainer < 250 && spaceAboveContainer > spaceBelowContainer) {
        setDropdownPosition('top');
      } else {
        setDropdownPosition('bottom');
      }
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="tag-select-container" ref={dropdownRef}>
      <div 
        className="tag-select-value" 
        onClick={toggleDropdown}
        style={{
          backgroundColor: selectedOption ? selectedOption.bgColor : 'transparent',
          color: selectedOption ? selectedOption.textColor : 'inherit',
          borderColor: selectedOption ? 'transparent' : '#e2e8f0'
        }}
      >
        <span className="tag-select-text">{selectedOption ? selectedOption.label : 'ไม่มี'}</span>
        <ChevronDown size={14} opacity={0.6} />
      </div>

      {isOpen && (
        <div 
          className="tag-select-dropdown"
          style={{
            bottom: dropdownPosition === 'top' ? '100%' : 'auto',
            top: dropdownPosition === 'bottom' ? '100%' : 'auto',
            marginBottom: dropdownPosition === 'top' ? '4px' : '0',
            marginTop: dropdownPosition === 'bottom' ? '4px' : '0'
          }}
        >
          <div 
            className="tag-select-option empty-option"
            onClick={() => { onChange(''); setIsOpen(false); }}
          >
            (ไม่มี)
          </div>
          {options.map(opt => (
            <div 
              key={opt.id} 
              className="tag-select-option"
              onClick={() => { onChange(opt.id); setIsOpen(false); }}
            >
              <span 
                className="tag-badge"
                style={{ backgroundColor: opt.bgColor, color: opt.textColor }}
              >
                {opt.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagSelect;
