import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';

const questions = [
    
  {
    questionText: 'Which of the following programming languages is known for its usage in AI and machine learning?',
    answerOptions: [
      { answerText: 'Python', isCorrect: true },
      { answerText: 'HTML', isCorrect: false },
      { answerText: 'CSS', isCorrect: false },
      { answerText: 'PHP', isCorrect: false },
    ],
  },
  {
    questionText: 'In Java, what is the purpose of the "final" keyword when applied to a variable?',
    answerOptions: [
      { answerText: 'Allows the variable to be modified only within a method', isCorrect: false },
      { answerText: 'Marks the variable as immutable', isCorrect: true },
      { answerText: 'Enables multi-threading', isCorrect: false },
      { answerText: 'None of the above', isCorrect: false },
    ],
  },
  {
    questionText: 'Which language is primarily associated with web development and is often referred to as the backbone of the web?',
    answerOptions: [
      { answerText: 'C++', isCorrect: false },
      { answerText: 'JavaScript', isCorrect: true },
      { answerText: 'Python', isCorrect: false },
      { answerText: 'Ruby', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of the following programming paradigms does Haskell primarily support?',
    answerOptions: [
      { answerText: 'Object-Oriented Programming', isCorrect: false },
      { answerText: 'Functional Programming', isCorrect: true },
      { answerText: 'Procedural Programming', isCorrect: false },
      { answerText: 'Event-Driven Programming', isCorrect: false },
    ],
  },
  {
    questionText: 'In C++, which of these features allows you to achieve polymorphism?',
    answerOptions: [
      { answerText: 'Pointers', isCorrect: false },
      { answerText: 'Inheritance', isCorrect: true },
      { answerText: 'Loops', isCorrect: false },
      { answerText: 'Templates', isCorrect: false },
    ],
  },
  {
    questionText: 'Which language introduced the concept of lambda expressions, influencing modern languages like Java and Python?',
    answerOptions: [
      { answerText: 'Lisp', isCorrect: true },
      { answerText: 'JavaScript', isCorrect: false },
      { answerText: 'C#', isCorrect: false },
      { answerText: 'Ruby', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the primary use of the Go programming language?',
    answerOptions: [
      { answerText: 'Web design', isCorrect: false },
      { answerText: 'Low-level systems programming', isCorrect: false },
      { answerText: 'Concurrent and distributed systems', isCorrect: true },
      { answerText: 'Game development', isCorrect: false },
    ],
  },
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const navigate = useNavigate();
  
    const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 1);
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
        
        // Show score for 2 seconds, then show loading video
        setTimeout(() => {
          setShowLoading(true);
        }, 2000);
      }
    };
  
    useEffect(() => {
      if (showLoading) {
        const timer = setTimeout(() => {
          navigate('/assignments');
        }, 5000); // 5 seconds for loading video
  
        return () => clearTimeout(timer);
      }
    }, [showLoading, navigate]);
  
    return (
      <div className="quiz-container">
        {showScore ? (
          showLoading ? (
            <div className="loading-video">
              <video src="https://media.istockphoto.com/id/1442799355/video/loading-progress-bar-animation-on-white-background-4k-video-pixel-preloader-downloading.mp4?s=mp4-640x640-is&k=20&c=WbFrEEBwiRghAkIZXfJ7X9y3iFzQMdQL6BeqZV7pdZ8=" autoPlay loop muted />
            </div>
          ) : (
            <div className="score-section">
              You scored {score} out of {questions.length}
            </div>
          )
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default Quiz;