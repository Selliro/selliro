import React, { useState } from 'react';

const CollapsibleTab = ({ question, answer, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapsible-tab__container' onClick={toggleOpen}>
      <div className='collapsible-tab__question'
        
      >
        <div >{question}</div>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
            }}>
            <path d="M9 1L5 5L1 1" stroke="#7963FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      {isOpen && (
        <div className='collapsible-tab__answer'>
          {answer}
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleTab;