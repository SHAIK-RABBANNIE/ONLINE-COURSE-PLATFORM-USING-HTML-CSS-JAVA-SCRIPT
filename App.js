import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar2 from './components/NavBar2';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Assignments from './components/Assignments';
import Calendar from './components/Calendar';
import Resources from './components/Resources';
import Feedback from './components/Feedback';
import Logout from './components/Logout';
import Support from './components/Support';
import LiveStreaming from './components/LiveStreaming';
import Chatbot from './components/Chatbot';
import FAQPage from './components/FAQPage';
import Certificate from './components/Certificate';
import Quiz from './components/Quiz';
import Training from './components/Training';
import HandBook from './components/HandBook';
import Template from './components/Template';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Assuming user is authenticated for now
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <BrowserRouter>
        {!isAuthenticated ? <NavBar /> : <NavBar2 onLogout={handleLogout} />}
        
        <Routes>
          <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />
          <Route path="/dashboard" 
                 element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/Chatbot" 
                 element={isAuthenticated ? <Chatbot/> : <Navigate to="/login" />} />
          <Route path="/profile" 
                 element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
                  <Route path="/quiz" element={<Quiz onQuizComplete={() => setIsQuizComplete(true)} />} />

                  <Route path="/assignments" element={<Assignments isQuizComplete={isQuizComplete} />} />
          <Route path="/calendar" 
                 element={isAuthenticated ? <Calendar /> : <Navigate to="/login" />} />
<Route path="/" element={<Quiz onQuizComplete={() => setIsQuizComplete(true)} />} />
          <Route path="/feedback" 
                 element={isAuthenticated ? <Feedback /> : <Navigate to="/login" />} />
                 <Route path="/handbook" element={isAuthenticated ? <HandBook /> : <Navigate to="/login" />} />
                 <Route path="/templates" element={<Template />} /> {/* Template page route */}
                  <Route path="/training/:course" element={<Training />} /> {/* Training route with course parameter */}
          <Route path="/resources" 
                 element={isAuthenticated ? <Resources /> : <Navigate to="/login" />} />
          <Route path="/support" 
                 element={isAuthenticated ? <Support /> : <Navigate to="/login" />} />
          <Route path="/FAQPage" 
                 element={isAuthenticated ? <FAQPage /> : <Navigate to="/login" />} />    
          <Route path="/livestreaming" 
                 element={isAuthenticated ? <LiveStreaming /> : <Navigate to="/login" />} />
          <Route path="/logout" 
                 element={<Logout onLogout={handleLogout} />} />
          <Route path="/certificate" 
                 element={isAuthenticated ? (
                   <Certificate 
                     name="Shaik Rabbannie" 
                     course="Java Full Stack Development" 
                     date={new Date().toLocaleDateString()} 
                     instructor="Suresh Kumar" 
                   />
                 ) : (
                   <Navigate to="/login" />
                 )}
          />
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
