import React from 'react';

const CutePenguinSVG = () => (
  <svg 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg" 
    style={{ width: '70px', height: '70px' }}
  >
    {/* Head */}
    <circle cx="50" cy="35" r="28" fill="#1e293b" />
    
    {/* Body */}
    <ellipse cx="50" cy="65" rx="35" ry="32" fill="#1e293b" />
    
    {/* Belly */}
    <ellipse cx="50" cy="68" rx="25" ry="26" fill="#ffffff" />
    <ellipse cx="50" cy="42" rx="22" ry="16" fill="#ffffff" />

    {/* Left Flipper */}
    <ellipse cx="15" cy="60" rx="8" ry="22" fill="#1e293b" transform="rotate(30 15 60)" />
    
    {/* Right Flipper */}
    <ellipse cx="85" cy="60" rx="8" ry="22" fill="#1e293b" transform="rotate(-30 85 60)" />

    {/* Left Foot */}
    <path d="M 28 92 C 28 88, 42 88, 42 92 C 42 98, 28 98, 28 92 Z" fill="#fbbf24" />
    
    {/* Right Foot */}
    <path d="M 58 92 C 58 88, 72 88, 72 92 C 72 98, 58 98, 58 92 Z" fill="#fbbf24" />

    {/* Eyes */}
    <circle cx="38" cy="35" r="4.5" fill="#0f172a" />
    <circle cx="62" cy="35" r="4.5" fill="#0f172a" />
    
    {/* Eye Sparkles */}
    <circle cx="39.5" cy="33.5" r="1.5" fill="#ffffff" />
    <circle cx="63.5" cy="33.5" r="1.5" fill="#ffffff" />

    {/* Blush */}
    <ellipse cx="30" cy="42" rx="5" ry="3" fill="#fbcfe8" />
    <ellipse cx="70" cy="42" rx="5" ry="3" fill="#fbcfe8" />

    {/* Beak */}
    <path d="M 44 42 Q 50 40 56 42 L 50 49 Z" fill="#f59e0b" />
  </svg>
);

export default CutePenguinSVG;
