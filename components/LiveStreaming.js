import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this line
import PaymentDialog from './PaymentDialog';  // Adjust the path based on where PaymentDialog.js is located

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
  TextField,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const events = [
  {
    title: 'Communication Skills',
    description: 'An online session to learn Communication Skills for new employees.',
    liveStreamUrl: 'https://www.youtube.com/embed/HAnw168huqA',
  },
  {
    title: 'Leadership Training',
    description: 'Developing skills for managing teams, making strategic decisions, and inspiring others.',
    liveStreamUrl: 'https://www.youtube.com/embed/qzoIAJYPQwo',
  },
  {
    title: 'Full Stack Development',
    description: 'Developing skills for managing teams, making strategic decisions, and inspiring others.',
    liveStreamUrl: 'https://www.youtube.com/embed/qzoIAJYPQwo',
  },
  {
    title: 'Mongo DB',
    description: 'Developing skills for managing teams, making strategic decisions, and inspiring others.',
    liveStreamUrl: 'https://www.youtube.com/embed/qzoIAJYPQwo',
  },
  {
    title: 'Webinar on AI Tools',
    description: 'Explore the top AI tools for engineers.',
    liveStreamUrl: 'https://www.youtube.com/embed/mEsleV16qdo',
  },
  {
    title: 'Skills for Building Front-End Projects using MERN Stack',
    description: 'Explore the beauty to build a website using the concepts of Node.js and React.js.',
    liveStreamUrl: 'https://www.youtube.com/embed/CvCiNeLnZ00',
  },
  {
    title: 'Skills for Building Front-End Projects using Python',
    description: 'Explore the beauty to build a website using the concepts of OOPs and Python.',
    liveStreamUrl: 'https://www.youtube.com/embed/jBzwzrDvZ18',
  },
  {
    title: 'Skill building using the knowledge of Java Full Course',
    description: 'Learn the concepts of Java from scratch.',
    liveStreamUrl: 'https://www.youtube.com/embed/4XTsAAHW_Tc',
  },
  {
    title: 'Learn C++',
    description: 'Let’s learn the booming subject in the industry, C++. ',
    liveStreamUrl: 'https://www.youtube.com/embed/SYd5F4gIH90',
  },
];
const LiveStreaming = () => {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [enrolledVideo, setEnrolledVideo] = useState(null);
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [paymentId, setPaymentId] = useState('');
  const navigate = useNavigate();

  const handleOpenVideo = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo(null);
  };

  const handleEnroll = (videoUrl) => {
    setPaymentId('');
    setPaymentDialogOpen(true);
    setEnrolledVideo(videoUrl);
  };

  const handlePaymentSubmit = (paymentInfo) => {
    console.log('Payment info submitted:', paymentInfo);
    setPaymentId(paymentInfo.id);  // Assuming the payment info contains an ID
    setPaymentDialogOpen(false);
    handleOpenVideo(enrolledVideo);
  };

  const handleQuizNavigation = () => {
    if (enrolledVideo && paymentId) {
      navigate('/quiz');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.pageTitle}>Self Learning and Training</h1>

      <div style={styles.eventsContainer}>
        {events.map((event, index) => (
          <div key={index} style={styles.eventWrapper}>
            <div style={styles.eventContent}>
              <h2 style={styles.eventTitle}>{event.title}</h2>
              <p style={styles.eventDescription}>{event.description}</p>
            </div>
            <div style={styles.videoWrapper}>
              <button
                style={{
                  ...styles.playButton,
                  opacity: enrolledVideo === event.liveStreamUrl && paymentId ? 1 : 0.5,
                  cursor: enrolledVideo === event.liveStreamUrl && paymentId ? 'pointer' : 'not-allowed',
                }}
                onClick={() => enrolledVideo === event.liveStreamUrl && paymentId && handleOpenVideo(event.liveStreamUrl)}
                disabled={enrolledVideo !== event.liveStreamUrl || !paymentId}
              >
                Watch Live
              </button>
              <button
                style={{
                  ...styles.enrollButton,
                  opacity: enrolledVideo && enrolledVideo !== event.liveStreamUrl ? 0.5 : 1,
                  cursor: enrolledVideo && enrolledVideo !== event.liveStreamUrl ? 'not-allowed' : 'pointer',
                }}
                onClick={() => enrolledVideo !== event.liveStreamUrl && handleEnroll(event.liveStreamUrl)}
                disabled={enrolledVideo && enrolledVideo !== event.liveStreamUrl}
              >
                Enroll
              </button>
              <button
                style={{
                  ...styles.quizButton,
                  opacity: enrolledVideo === event.liveStreamUrl && paymentId ? 1 : 0.5,
                  cursor: enrolledVideo === event.liveStreamUrl && paymentId ? 'pointer' : 'not-allowed',
                }}
                onClick={handleQuizNavigation}
                disabled={enrolledVideo !== event.liveStreamUrl || !paymentId}
              >
                Quiz
              </button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md" PaperProps={{ sx: { borderRadius: 2 } }}>
        <DialogTitle sx={{ m: 0, p: 2 }}>
          <Typography variant="h6">Live Stream</Typography>
          <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8, color: '#000' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
            {selectedVideo && (
              <iframe
                src={selectedVideo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Live Event Video"
                style={styles.videoIframe}
              ></iframe>
            )}
          </Box>
        </DialogContent>
      </Dialog>

      {/* Payment Dialog */}
      <PaymentDialog
        paymentDialogOpen={paymentDialogOpen}
        setPaymentDialogOpen={setPaymentDialogOpen}
        onPaymentSubmit={handlePaymentSubmit}
      />
    </div>
  );
};

const styles = {
  container: { maxWidth: '1200px', margin: '0 auto', padding: '20px', textAlign: 'center', backgroundColor: '#f4f4f9', borderRadius: '8px' },
  pageTitle: { fontSize: '36px', fontWeight: 'bold', color: '#333', marginBottom: '40px' },
  eventsContainer: { display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' },
  eventWrapper: { display: 'flex', flexDirection: 'column', flex: '1 1 calc(33% - 20px)', margin: '10px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' },
  eventContent: { flex: '1', textAlign: 'left' },
  eventTitle: { fontSize: '24px', fontWeight: '600', marginBottom: '10px', color: '#2c3e50' },
  eventDescription: { fontSize: '16px', color: '#7f8c8d' },
  videoWrapper: { textAlign: 'center' },
  playButton: { padding: '10px 20px', backgroundColor: '#2c3e50', color: '#fff', border: 'none', borderRadius: '8px', marginRight: '10px' },
  enrollButton: { padding: '10px 20px', backgroundColor: '#2980b9', color: '#fff', border: 'none', borderRadius: '8px' },
  quizButton: { padding: '10px 20px', backgroundColor: '#8e44ad', color: '#fff', border: 'none', borderRadius: '8px', marginLeft: '10px' },
  videoIframe: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
};

export default LiveStreaming;