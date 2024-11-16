import React, { useState, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Loader state

    useEffect(() => {
        // Set a timeout for 3 seconds to display the loader video
        const timer = setTimeout(() => setIsLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleSendMessage = () => {
        if (input.trim()) {
            const userMessage = { text: input, sender: 'user' };
            setMessages((prevMessages) => [...prevMessages, userMessage]);
            setInput('');
            setIsTyping(true);

            // Simulate bot response after a short delay
            setTimeout(() => {
                const botResponse = { text: generateBotResponse(input), sender: 'bot' };
                setMessages((prevMessages) => [...prevMessages, botResponse]);
                setIsTyping(false);
            }, 1000);  // 1-second delay to mimic typing
        }
    };

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const generateBotResponse = (userInput) => {
        // Check if the user input contains a math expression
        if (isMathQuestion(userInput)) {
            try {
                const result = eval(userInput);  // Caution: eval can be unsafe; only use in controlled environments
                return `The answer is ${result}`;
            } catch {
                return "I couldn't understand the math question. Please try again.";
            }
        } else if (isProgrammingQuestion(userInput)) {
            return answerProgrammingQuestion(userInput);
        } else {
            return "I'm here to help you! Feel free to ask any questions.";
        }
    };

    const isMathQuestion = (text) => {
        // Simple check for math operators
        return /[\d\s\+\-\*\/\(\)]+/.test(text);
    };

    const isProgrammingQuestion = (text) => {
        // Check for common programming keywords
        return /how to|program|code|JavaScript|Python/.test(text.toLowerCase());
    };

    const answerProgrammingQuestion = (text) => {
        // Basic responses to common programming questions
        if (text.toLowerCase().includes("javascript")) {
            return "JavaScript is a versatile language commonly used for web development. You can ask me for code snippets!";
        } else if (text.toLowerCase().includes("python")) {
            return "Python is great for data science, web development, and automation. Let me know if you need any examples.";
        } else if (text.toLowerCase().includes("how to")) {
            return "Can you tell me more about what you're trying to do? I can help with programming advice!";
        } else {
            return "I'm here to help with your programming questions!";
        }
    };

    return (
        <div className="chatbot-wrapper">
            {isLoading ? (
                // Loader Video
                <div className="loader-container">
                    <video autoPlay loop muted className="loader-video">
                        <source src="https://videos.pexels.com/video-files/18069164/18069164-uhd_1440_2560_24fps.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : (
                // Chatbot Interface
                <div className="chatbot-container">
                    <div className="chatbot-header">Chatbot</div>
                    <div className="chatbot-messages">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
                            >
                                {message.text}
                            </div>
                        ))}
                        {isTyping && <div className="bot-typing">Bot is typing...</div>}
                    </div>
                    <div className="chatbot-input-container">
                        <input
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            className="chatbot-input"
                            placeholder="Type a message..."
                        />
                        <button onClick={handleSendMessage} className="chatbot-send-button">Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
