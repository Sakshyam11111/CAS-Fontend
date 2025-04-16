import { useState } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Chatboticon from './Chatboticon';
import ChatForm from './ChatForm';
import ChatMessage from './ChatMessage';

const Chatbox = () => {
    const [chatHistory, setChatHistory] = useState([]);
    const [showChatbot, setShowChatbot] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const generateBotResponse = async (userRequestText) => {
        const requestData = {
            contents: [{
                parts: [{ text: userRequestText }]
            }]
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        };

        setIsPending(true);
        const response = await fetch(url, requestOptions);
        const result = await response.json();
        console.log("API Response:", result); // Log the entire response
        console.log("API Key:", apiKey); // Check if the API key is defined

        if (result && result.candidates && result.candidates.length > 0) {
            const botResponse = result.candidates[0].content.parts[0]?.text || "No response available."; // Fallback text
            setChatHistory((chatHistory) => [...chatHistory, {
                role: "model",
                text: botResponse
            }]);
        } else {
            console.error("No valid candidates returned from API");
            setChatHistory((chatHistory) => [...chatHistory, {
                role: "model",
                text: "Error: No response from the bot."
            }]);
        }
        setIsPending(false);
    };

    return (
        <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
            <button onClick={() => setShowChatbot(prev => !prev)} id='chatbot-toggler'>
                <span className="material-symbols-rounded">Open</span>
                <span className="material-symbols-rounded">close</span>
            </button>
            <div className="chatbot-popup">
                {/* Chatbot Header  */}
                <div className="chat-header">
                    <div className="header-info">
                        <Chatboticon />
                        <h2 className="logo-text">Chatbot</h2>
                    </div>
                    <button onClick={() => setShowChatbot(prev => !prev)} className="material-symbols-rounded">
                        <AiOutlineArrowDown size={24} />
                    </button>
                </div>

                {/* Chatbot Body  */}
                <div className="chat-body">
                    <div className='message bot-message'>
                        <Chatboticon />
                        <p className='message-text'>
                            Hey there 👋 <br /> How can I help you today?
                        </p>
                    </div>

                    {/* Render the chat history dynamically  */}
                    {chatHistory.map((chat, index) => (
                        <ChatMessage key={index} chat={chat} />
                    ))}
                </div>

                {/* Chatbot Footer  */}
                <div className="chat-footer">
                    <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} isPending={isPending} />
                </div>
            </div>
        </div>
    );
}

export default Chatbox;