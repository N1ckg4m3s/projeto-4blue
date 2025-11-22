import './style.css'

interface componentProps {
    selfMessage: boolean
    mensage: string
}

export const ChatMessage: React.FC<componentProps> = ({ selfMessage, mensage }) => {
    const classe: string = selfMessage ? 'user' : 'system'
    return (
        <div className={`bubble ${classe}`}>
            {mensage}
        </div>
    )
}