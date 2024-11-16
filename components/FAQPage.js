import React, { useState } from 'react';
import './FAQPage.css';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the purpose of this application?",
      answer: "This application is designed to provide users with an easy way to learn about various topics through online courses."
    },
    {
      question: "How do I sign up?",
      answer: "You can sign up by clicking the 'Sign Up' button on the homepage and filling in the required information."
    },
    {
      question: "Can I access courses on my mobile device?",
      answer: "Yes, our application is mobile-friendly and can be accessed from any device with internet connectivity."
    },
    {
      question: "What if I forget my password?",
      answer: "If you forget your password, you can click the 'Forgot Password' link on the login page to reset it."
    },
    {
      question: "Are there any fees for the courses?",
      answer: "Some courses may have fees associated with them, while others are offered for free. Check the course details for more information."
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
        <h1>-----------------------------------</h1>
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h4>{faq.question}</h4>
              <span className="faq-arrow">{activeIndex === index ? '−' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
