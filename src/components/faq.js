// src/components/FAQSection.js
import React from 'react';
import CollapsibleTab from './common/collapsibleTab';

const FAQSection = () => {
  return (
    <div className="faq-container">
      <h1 class="collapsible-tab__title">Frequently asked <span class="collapsible-tab__title-span">questions</span></h1>
      
      <CollapsibleTab
        question="1. What services does your IT company offer?"
        answer="We implement advanced cybersecurity measures, including encryption, firewalls, and regular system audits, to protect your sensitive."
      />

      <CollapsibleTab
        question="2. How do you ensure data security?"
        answer="We implement advanced cybersecurity measures, including encryption, firewalls, and regular system audits, to protect your sensitive."
      />

      <CollapsibleTab
        question="3. Do you offer 24/7 support?"
        answer="We implement advanced cybersecurity measures, including encryption, firewalls, and regular system audits, to protect your sensitive."
      /> 
    </div>
  );
};

export default FAQSection;