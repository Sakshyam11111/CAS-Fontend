import { useRef, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import PropTypes from 'prop-types'; // Import PropTypes

const ChatForm = ({ setChatHistory, generateBotResponse, isPending }) => {
    const inputRef = useRef();
    const [thinking, setThinking] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return; // Prevent sending empty messages
        inputRef.current.value = ""; // Clear input

        // Update chat history with the user's message 
        setChatHistory(history => [...history, { role: "user", text: userMessage }]);
        setThinking(true);

        try {
            await generateBotResponse(userMessage);
        } catch (error) {
            console.error("Error generating bot response:", error);
            // Optionally, set an error message in the chat history here
        } finally {
            setThinking(false);
        }
    };

    return (
        <div className='form-section'>
            <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
                <input 
                    ref={inputRef} 
                    type="text" 
                    placeholder={thinking ? "Thinking ..." : "Message"} 
                    className="message-input" 
                    required 
                    disabled={isPending} 
                    aria-label="Message input" 
                />
                <button 
                    type='submit' 
                    disabled={isPending} 
                    className="send-button" 
                    aria-label="Send message" 
                >
                    <FaArrowUp size={24} />
                </button>
            </form>
        </div>
    );
}

ChatForm.propTypes = {
    setChatHistory: PropTypes.func.isRequired,
    generateBotResponse: PropTypes.func.isRequired,
    isPending: PropTypes.bool.isRequired,
};

export default ChatForm;