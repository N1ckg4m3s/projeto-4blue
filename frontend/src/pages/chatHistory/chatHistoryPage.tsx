import './style.css'
import { useContext, useState } from "react"
import { UserContext } from "../../providers/userProvider"
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";
import { BackIcon } from "../../components/backIcon";
import { ChatMessage } from "../../components/chatBubble/mensage";

export const ChatHistoryPage = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [historyMessages, setHistoryMessages] = useState([
        {
            mensage: 'oi ',
            selfMessage: true,
            created_at: '10/10/10'
        },
        {
            mensage: 'resposta para -> teste',
            selfMessage: false,
            created_at: '12/10/10'
        }
    ]);

    const formatDate = (dateString: string) => {
        return format(new Date(dateString), "dd/MM/yyyy");
    };

    return (
        <div className='fullPage'>
            <header className="header">
                <BackIcon
                    onClick={() => navigate(-1)}
                />
                <span>Historico do {user}</span>
            </header>
            <div className="chatBox">
                {historyMessages.map((msg, index) => {
                    const msgDate = formatDate(msg.created_at)

                    // Data da mensagem anterior
                    const prevDate = index > 0 ? formatDate(historyMessages[index - 1].created_at) : null;

                    // Verificar se deve mostrar o separador
                    const showSeparator = msgDate !== prevDate;

                    return (
                        <div key={index}>
                            {showSeparator && (
                                <div className="date-separator">
                                    — {msgDate} —
                                </div>
                            )}
                            <ChatMessage
                                mensage={msg.mensage}
                                selfMessage={msg.selfMessage}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}