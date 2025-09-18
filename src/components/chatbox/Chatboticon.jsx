import React from 'react';

const Chatboticon = () => {
  return (
    <div className="chatbot-icon-wrapper">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="40" 
        height="40" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="chatbot-icon"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <circle cx="12" cy="5" r="2"/>
        <path d="M12 7v4"/>
        <line x1="8" y1="16" x2="8" y2="16"/>
        <line x1="16" y1="16" x2="16" y2="16"/>
        <path d="M8 21l4-4 4 4"/>
      </svg>
    </div>
  );
};

export default Chatboticon;