import React from 'react';

const Logo = ({ className = "w-12 h-12" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle */}
      <circle cx="50" cy="50" r="48" fill="#1F2937" stroke="#4F46E5" strokeWidth="2" />
      
      {/* House Shape */}
      <path
        d="M30 60V40L50 25L70 40V60H30Z"
        fill="#4F46E5"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
      
      {/* Door */}
      <rect x="45" y="45" width="10" height="15" fill="#FFFFFF" />
      
      {/* Windows */}
      <rect x="35" y="45" width="8" height="8" fill="#FFFFFF" />
      <rect x="57" y="45" width="8" height="8" fill="#FFFFFF" />
      
      {/* Om Symbol */}
      <path
        d="M50 20C45 20 40 22 37 25C34 28 32 33 32 38C32 43 34 48 37 51C40 54 45 56 50 56C55 56 60 54 63 51C66 48 68 43 68 38C68 33 66 28 63 25C60 22 55 20 50 20Z"
        fill="#4F46E5"
        stroke="#FFFFFF"
        strokeWidth="1"
      />
      
      {/* Decorative Elements */}
      <path
        d="M25 65H75"
        stroke="#4F46E5"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M25 70H75"
        stroke="#4F46E5"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo; 