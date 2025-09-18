import { useState, useRef, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMessage } from 'react-icons/ai';
import { FaShieldAlt, FaArrowUp } from 'react-icons/fa';

const Chatbox = () => {
    const [chatHistory, setChatHistory] = useState([]);
    const [showChatbot, setShowChatbot] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [isOnline, setIsOnline] = useState(true);
    const chatBodyRef = useRef();
    const inputRef = useRef();

    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`;

    // Banking-specific system prompt
    const systemPrompt = `You are Cas Bank's AI assistant. You help customers with banking inquiries, account information, and general banking services. 

Key guidelines:
- Always be professional, helpful, and security-conscious
- For sensitive operations like balance inquiries or transfers, remind users to log into their secure account
- Provide general information about banking services, but never ask for or handle actual account details
- If you cannot help with a specific request, direct them to call 1-800-CAS-BANK or visit a branch
- Keep responses concise but informative
- Always prioritize customer security and privacy

Common topics you can help with:
- General banking information
- Service hours and locations  
- Account types and features
- Loan and credit card information
- Online banking guidance
- Security tips and fraud prevention`;

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [chatHistory]);

    const generateBotResponse = async (userRequestText) => {
        if (!isOnline) {
            setChatHistory(prev => [...prev, {
                role: "model",
                text: "I'm currently offline. Please check your internet connection or try again later.",
                timestamp: new Date().toISOString()
            }]);
            return;
        }

        const requestData = {
            contents: [{
                parts: [{ 
                    text: `${systemPrompt}\n\nUser question: ${userRequestText}` 
                }]
            }],
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 1024,
            }
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        };

        setIsPending(true);
        
        try {
            const response = await fetch(url, requestOptions);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const result = await response.json();

            if (result?.candidates?.[0]?.content?.parts?.[0]?.text) {
                const botResponse = result.candidates[0].content.parts[0].text;
                setChatHistory(prev => [...prev, {
                    role: "model",
                    text: botResponse,
                    timestamp: new Date().toISOString()
                }]);
            } else {
                throw new Error("Invalid response format");
            }
        } catch (error) {
            console.error("API Error:", error);
            setChatHistory(prev => [...prev, {
                role: "model",
                text: "I apologize for the technical difficulty. For immediate assistance, please call our 24/7 support line at 1-800-CAS-BANK or visit your nearest branch.",
                timestamp: new Date().toISOString()
            }]);
        } finally {
            setIsPending(false);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage || isPending) return;
        
        inputRef.current.value = "";

        setChatHistory(history => [...history, { 
            role: "user", 
            text: userMessage,
            timestamp: new Date().toISOString()
        }]);

        try {
            await generateBotResponse(userMessage);
        } catch (error) {
            console.error("Error generating bot response:", error);
        }
    };

    const handleQuickAction = (action) => {
        if (isPending) return;
        inputRef.current.value = action;
        handleFormSubmit({ preventDefault: () => {} });
    };

    const toggleChatbot = () => {
        setShowChatbot(prev => !prev);
    };

    const clearChat = () => {
        setChatHistory([]);
    };

    const formatMessage = (text) => {
        return text.split('\n').map((line, index) => (
            <span key={index}>
                {line}
                {index < text.split('\n').length - 1 && <br />}
            </span>
        ));
    };

    const quickActions = [
        "Check Balance",
        "Transfer Money", 
        "Transaction History",
        "Contact Support"
    ];

    return (
        <>
            {/* Chatbot Toggle Button */}
            <button 
                onClick={toggleChatbot} 
                className={`chatbot-toggle ${showChatbot ? 'active' : ''}`}
                aria-label="Toggle Cas Bank Assistant"
            >
                {showChatbot ? <AiOutlineClose size={24} /> : <AiOutlineMessage size={24} />}
                <span className="toggle-text">
                    {showChatbot ? 'Close' : 'Help'}
                </span>
            </button>

            {/* Chatbot Container */}
            <div className={`chatbot-container ${showChatbot ? 'show' : ''}`}>
                <div className="chatbot-popup">
                    {/* Header */}
                    <div className="chat-header">
                        <div className="header-info">
                            <div className="bank-logo">
                                <FaShieldAlt className="logo-icon" style={{ fontSize: '28px', color: '#10b981' }} />
                                <div className="logo-text">
                                    <h3>Cas Bank</h3>
                                    <span className={`status ${isOnline ? 'online' : 'offline'}`}>
                                        {isOnline ? 'Online' : 'Offline'} • Assistant
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="header-actions">
                            <button 
                                onClick={clearChat}
                                className="clear-chat-btn"
                                aria-label="Clear chat"
                                title="Clear chat history"
                            >
                                🗑️
                            </button>
                            <button 
                                onClick={toggleChatbot} 
                                className="close-btn"
                                aria-label="Close chat"
                            >
                                <AiOutlineClose size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="chat-body" ref={chatBodyRef}>
                        {/* Welcome Message */}
                        <div className='message bot-message welcome-message'>
                            <div className="chatbot-icon-wrapper">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="40" 
                                    height="40" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    className="chatbot-icon"
                                >
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                    <circle cx="12" cy="5" r="2"/>
                                    <path d="M12 7v4"/>
                                    <line x1="8" y1="16" x2="8" y2="16"/>
                                    <line x1="16" y1="16" x2="16" y2="16"/>
                                </svg>
                            </div>
                            <div className='message-content'>
                                <p className='message-text'>
                                    Welcome to Cas Bank! 👋<br />
                                    I'm your virtual banking assistant. I can help you with:
                                    <br />• Account information
                                    <br />• Banking services
                                    <br />• Branch locations
                                    <br />• General support
                                    <br /><br />
                                    <strong>Note:</strong> For secure transactions, please log into your online banking account.
                                </p>
                                <span className='message-time'>
                                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>

                        {/* Chat History */}
                        {chatHistory.map((chat, index) => (
                            <div key={index} className={`message ${chat.role === "model" ? 'bot' : 'user'}-message`}>
                                {chat.role === "model" && (
                                    <div className="chatbot-icon-wrapper">
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="40" 
                                            height="40" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            className="chatbot-icon"
                                        >
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                            <circle cx="12" cy="5" r="2"/>
                                            <path d="M12 7v4"/>
                                        </svg>
                                    </div>
                                )}
                                <div className='message-content'>
                                    <p className='message-text'>{formatMessage(chat.text)}</p>
                                    <span className='message-time'>
                                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {/* Typing Indicator */}
                        {isPending && (
                            <div className="message bot-message typing-indicator">
                                <div className="chatbot-icon-wrapper">
                                    <div className="typing-dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="chat-footer">
                        <div className="security-notice">
                            <span style={{ color: '#10b981', marginRight: '6px' }}>🔒</span>
                            <small>Secure & encrypted conversation</small>
                        </div>
                        
                        <div className='form-section'>
                            {/* Quick Actions */}
                            <div className="quick-actions">
                                {quickActions.map((action, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className="quick-action-btn"
                                        onClick={() => handleQuickAction(action)}
                                        disabled={isPending}
                                    >
                                        {action}
                                    </button>
                                ))}
                            </div>

                            <form className="chat-form" onSubmit={handleFormSubmit}>
                                <div className="input-container">
                                    <input 
                                        ref={inputRef} 
                                        type="text" 
                                        placeholder="Ask about your account, transfers, or banking services..."
                                        className="message-input" 
                                        required 
                                        disabled={isPending}
                                        aria-label="Message input" 
                                        maxLength={500}
                                    />
                                    <button 
                                        type='submit' 
                                        disabled={isPending} 
                                        className="send-button" 
                                        aria-label="Send message" 
                                    >
                                        <FaArrowUp size={16} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add CSS styles inline for testing */}
            <style jsx="true">{`
                .typing-dots {
                    display: flex;
                    gap: 4px;
                    padding: 16px;
                }
                
                .typing-dots span {
                    width: 6px;
                    height: 6px;
                    background: #6b7280;
                    border-radius: 50%;
                    animation: typing 1.4s infinite;
                }
                
                .typing-dots span:nth-child(1) { animation-delay: 0s; }
                .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
                .typing-dots span:nth-child(3) { animation-delay: 0.4s; }
                
                @keyframes typing {
                    0%, 60%, 100% { transform: scale(1); opacity: 0.5; }
                    30% { transform: scale(1.2); opacity: 1; }
                }
                
                .message-time {
                    font-size: 11px;
                    color: rgba(107, 114, 128, 0.7);
                    margin-top: 6px;
                    display: block;
                }
                
                .security-notice {
                    display: flex;
                    align-items: center;
                    color: #6b7280;
                    margin-bottom: 12px;
                }
            `}</style>
        </>
    );
};

export default Chatbox;