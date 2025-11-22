import './style.css'


export const ChatTypingAnimation: React.FC = () => {
    return (
        <div className="bubble system typingEffect">
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
        </div>
    )
}