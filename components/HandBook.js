import React, { useState } from 'react';
import './HandBook.css';

const handbookSections = [
  {
    title: 'Introduction',
    content: 'This section covers the introduction to the handbook and general guidelines.',
  },
  {
    title: 'Company Policies',
    content: 'Learn about the company policies regarding attendance, leave, and code of conduct.',
  },
  {
    title: 'Workplace Ethics',
    content: 'Details on workplace ethics, professionalism, and respectful interactions.',
  },
  {
    title: 'Health and Safety',
    content: 'Guidelines to ensure a safe and healthy working environment.',
  },
  {
    title: 'Career Development',
    content: 'Information on training programs, skill development, and career progression.',
  },
];

const HandBook = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleToggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="handbook-container">
      <h1 className="handbook-title">Employee Handbook</h1>
      {handbookSections.map((section, index) => (
        <div key={index} className="handbook-section">
          <h2
            className="section-title"
            onClick={() => handleToggleSection(index)}
          >
            {section.title}
          </h2>
          {expandedSection === index && (
            <p className="section-content">{section.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default HandBook;
