
import PropTypes from 'prop-types'; 
import Chatboticon from './Chatboticon';

const ChatMessage = ({ chat }) => {
    return (
        <div className={`message ${chat.role === "model" ? 'bot' : 'user'}-message`}>
            {chat.role === "model" && <Chatboticon />}
            <p className='message-text'>{chat.text}</p>
        </div>
    );
};

// Define prop types
ChatMessage.propTypes = {
    chat: PropTypes.shape({
        role: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
};

export default ChatMessage;