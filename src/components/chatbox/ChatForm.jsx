import React, { useRef, useState } from 'react';
import { FaArrowUp, FaPaperclip } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ChatForm = ({ setChatHistory, generateBotResponse, isPending }) => {
    const inputRef = useRef();
    const [isTyping, setIsTyping] = useState(false);

    const quickActions = [
        "Check Balance",
        "Transfer Money",
        "Transaction History",
        "Contact Support"
    ];

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage || isPending) return;
        
        inputRef.current.value = "";
        setIsTyping(true);

        setChatHistory(history => [...history, { 
            role: "user", 
            text: userMessage,
            timestamp: new Date().toISOString()
        }]);

        try {
            await generateBotResponse(userMessage);
        } catch (error) {
            console.error("Error generating bot response:", error);
            setChatHistory(history => [...history, {
                role: "model",
                text: "I apologize, but I'm experiencing technical difficulties. Please try again or contact our support team at 1-800-CAS-BANK.",
                timestamp: new Date().toISOString()
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleQuickAction = (action) => {
        if (isPending) return;
        inputRef.current.value = action;
        handleFormSubmit({ preventDefault: () => {} });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleFormSubmit(e);
        }
    };

    return (
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
                        placeholder={isTyping ? "Cas Bank Assistant is typing..." : "Ask about your account, transfers, or banking services..."} 
                        className="message-input" 
                        required 
                        disabled={isPending}
                        onKeyPress={handleKeyPress}
                        aria-label="Message input" 
                        maxLength={500}
                    />
                    <button 
                        type='submit' 
                        disabled={isPending || isTyping} 
                        className="send-button" 
                        aria-label="Send message" 
                    >
                        <FaArrowUp size={16} />
                    </button>
                </div>
            </form>
        </div>
    );
};

ChatForm.propTypes = {
    setChatHistory: PropTypes.func.isRequired,
    generateBotResponse: PropTypes.func.isRequired,
    isPending: PropTypes.bool.isRequired,
};

export default ChatForm;
