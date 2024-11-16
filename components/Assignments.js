import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Alert,
  Modal,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AssignmentPage = () => {
  const [tasks, setTasks] = useState([]);
  const [submittedAssignments, setSubmittedAssignments] = useState({});
  const [taskFiles, setTaskFiles] = useState({});
  const [taskTimers, setTaskTimers] = useState({});
  const [allSubmitted, setAllSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [isLoading, setIsLoading] = useState(false); // Loading animation state
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const weeklyTasks = [
      { id: 1, title: 'Complete Project Report', questions: 'What are the key findings from the project?', deadline: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000) },
      { id: 2, title: 'Prepare Presentation Slides', questions: 'Outline the main points for the presentation.', deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) },
      { id: 3, title: 'Complete the First Review', questions: 'List the agenda items for discussion.', deadline: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000) },
    ];

    setTasks(weeklyTasks);
    startTimers(weeklyTasks);

    return () => {
      clearAllTimers();
    };
  }, []);

  useEffect(() => {
    setAllSubmitted(tasks.length > 0 && tasks.every(task => submittedAssignments[task.id]));
  }, [submittedAssignments, tasks]);

  const startTimers = (tasks) => {
    tasks.forEach((task) => {
      const countdown = setInterval(() => {
        const remainingTime = task.deadline - new Date();
        if (remainingTime <= 0) {
          clearInterval(countdown);
        }
        setTaskTimers((prev) => ({
          ...prev,
          [task.id]: remainingTime,
        }));
      }, 1000);
    });
  };

  const clearAllTimers = () => {
    tasks.forEach((task) => {
      clearInterval(taskTimers[task.id]);
    });
  };

  const handleAssignmentSubmit = (taskId) => {
    // Check if a file is attached
    if (!taskFiles[taskId]) {
      setErrorMessages((prev) => ({
        ...prev,
        [taskId]: 'File upload is required before submitting.',
      }));
      return;
    }

    // Show loading animation
    setIsLoading(true);

    // Simulate a delay for the loading animation
    setTimeout(() => {
      const fileName = taskFiles[taskId].name || 'No file attached';
      setSubmittedAssignments((prev) => ({
        ...prev,
        [taskId]: fileName,
      }));
      setTaskFiles((prev) => ({ ...prev, [taskId]: null }));
      setErrorMessages((prev) => ({ ...prev, [taskId]: undefined })); // Clear error message on successful submission
      setIsLoading(false); // Hide loading animation
    }, 3000); // Adjust the delay time as needed
  };

  const formatTimeRemaining = (remainingTime) => {
    const totalSeconds = Math.floor(remainingTime / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const calculateDaysLeft = (deadline) => {
    const remainingTime = deadline - new Date();
    return Math.ceil(remainingTime / (1000 * 60 * 60 * 24));
  };

  const generateCertificate = () => {
    navigate('/certificate'); // Navigate to Certificate.js
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: '#74c6f6', borderRadius: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 4 }}>
        Weekly Assignments
      </Typography>

      <Grid container spacing={4}>
        {tasks.map((task) => (
          <Grid item xs={12} md={4} key={task.id}>
            <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h5">{task.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Questions: {task.questions}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Deadline: {task.deadline.toLocaleString()} - Days left: {calculateDaysLeft(task.deadline)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Remaining: {taskTimers[task.id] ? formatTimeRemaining(taskTimers[task.id]) : '00:00:00'}
                </Typography>
                <input
                  type="file"
                  onChange={(e) => setTaskFiles((prev) => ({ ...prev, [task.id]: e.target.files[0] }))}
                  style={{ marginTop: 16 }}
                />
                {errorMessages[task.id] && (
                  <Alert severity="error" sx={{ marginTop: 1 }}>
                    {errorMessages[task.id]}
                  </Alert>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAssignmentSubmit(task.id)}
                  disabled={submittedAssignments[task.id] !== undefined}
                  sx={{ marginTop: 2 }}
                >
                  {submittedAssignments[task.id] !== undefined ? 'Submitted' : 'Submit'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5">Submitted Assignments</Typography>
        <ul>
          {Object.entries(submittedAssignments).map(([id, fileName], index) => (
            <li key={index}>Task ID: {id} - File: {fileName}</li>
          ))}
        </ul>
      </Box>

      {allSubmitted && (
        <Box sx={{ marginTop: 4 }}>
          <Button variant="contained" color="success" onClick={generateCertificate}>
            Generate Certificate
          </Button>
        </Box>
      )}

      {/* Modal for Loading Video */}
      <Modal open={isLoading} onClose={() => setIsLoading(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <video autoPlay loop muted style={{ width: '100%' }}>
  <source src="https://app.lottiefiles.com/animation/89ca3536-f2e7-4fd0-8216-1e4f65892612" type="video/mp4" />
  Your browser does not support the video tag.
</video>

          <Typography align="center" variant="h6" sx={{ mt: 2 }}>
            Validating submission, please wait...
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default AssignmentPage;
