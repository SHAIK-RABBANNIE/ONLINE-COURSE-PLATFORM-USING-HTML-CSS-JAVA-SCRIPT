import React, { useState } from 'react';
import './Support.css';
import { Box, Typography, Button, Collapse, Card, CardContent } from '@mui/material';
import { FaPhoneAlt, FaEnvelope, FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Support() {
  const [showFAQ, setShowFAQ] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showMap, setShowMap] = useState(false); // State to toggle map visibility

  return (
    <Box className="support-container" sx={{ padding: 3, backgroundColor: '#e4ef81', borderRadius: 2 }}>
      <Typography variant="h4" className="support-title" sx={{ textAlign: 'center', marginBottom: 4, color: '#333' }}>
        Support
      </Typography>

      <Box className="support-section" sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Button
          className="faq-button"
          variant="contained"
          color="primary"
          onClick={() => setShowFAQ(!showFAQ)}
          sx={{ marginBottom: 2, transition: '0.3s' }}
        >
          <FaQuestionCircle style={{ marginRight: 8 }} />
          {showFAQ ? 'Hide FAQs' : 'Show FAQs'}
          {showFAQ ? <FaChevronUp style={{ marginLeft: 8 }} /> : <FaChevronDown style={{ marginLeft: 8 }} />}
        </Button>

        <Collapse in={showFAQ}>
          <Card className="faq-card" sx={{ marginTop: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Frequently Asked Questions
              </Typography>
              <Typography variant="body2">
                <strong>Q:</strong> How do I reset my password?<br />
                <strong>A:</strong> You can reset your password in the account settings.<br /><br />
                <strong>Q:</strong> Where do I find the onboarding materials?<br />
                <strong>A:</strong> The onboarding materials are available under the Resources section.
              </Typography>
            </CardContent>
          </Card>
        </Collapse>
      </Box>

      <Box className="support-section" sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Button
          className="contact-button"
          variant="contained"
          color="secondary"
          onClick={() => setShowContact(!showContact)}
          sx={{ marginBottom: 2, transition: '0.3s' }}
        >
          <FaPhoneAlt style={{ marginRight: 8 }} />
          {showContact ? 'Hide Contact Information' : 'Show Contact Information'}
          {showContact ? <FaChevronUp style={{ marginLeft: 8 }} /> : <FaChevronDown style={{ marginLeft: 8 }} />}
        </Button>

        <Collapse in={showContact}>
          <Card className="contact-card" sx={{ marginTop: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Contact Us
              </Typography>
              <Typography variant="body2">
                <FaPhoneAlt /> <strong>Phone:</strong> 
                <a href="tel:888555999000" style={{ marginLeft: 8, textDecoration: 'none', color: 'inherit' }}>
                  888-555-999-000
                </a>
                <br />
                <FaEnvelope /> <strong>Email:</strong> 2300090093@kluniversity.in<br />
              </Typography>
            </CardContent>
          </Card>
        </Collapse>
      </Box>

      <Box className="support-section live-chat" sx={{ textAlign: 'center' }}>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Still need help? Try our live chat:
        </Typography>
        <Button
          variant="contained"
          color="success"
          className="chat-button"
          onClick={() => setShowMap(!showMap)} // Toggle map visibility
        >
          {showMap ? 'Close Live Chat' : 'Start Live Chat'}
        </Button>

        {showMap && (
          <Box sx={{ marginTop: 3 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8394357388!2d77.06889706091137!3d28.527218515039264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d3620df56b7%3A0xf4f1d997bc0b1e!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1638354179051!5m2!1sen!2sus"
              width="100%"
              height="480"
              style={{ borderRadius: '2rem' }}
              title="Live Chat Location"
            ></iframe>
          </Box>
        )}
      </Box>
    </Box>
  );
}
