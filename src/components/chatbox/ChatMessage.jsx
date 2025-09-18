import React from 'react';
import PropTypes from 'prop-types'; 
import Chatboticon from './Chatboticon';

const ChatMessage = ({ chat }) => {
    const formatMessage = (text) => {
        // Handle line breaks and basic formatting
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                {index < text.split('\n').length - 1 && <br />}
            </React.Fragment>
        ));
    };

    return (
        <div className={`message ${chat.role === "model" ? 'bot' : 'user'}-message`}>
            {chat.role === "model" && <Chatboticon />}
            <div className='message-content'>
                <p className='message-text'>{formatMessage(chat.text)}</p>
                <span className='message-time'>
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>
        </div>
    );
};

ChatMessage.propTypes = {
    chat: PropTypes.shape({
        role: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
};

export default ChatMessage;