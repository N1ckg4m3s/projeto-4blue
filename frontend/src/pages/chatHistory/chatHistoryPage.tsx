import './style.css'
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../providers/userProvider"
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";
import { BackIcon } from "../../components/backIcon";
import { ChatMessage } from "../../components/chatBubble/mensage";
import { ApiCaller } from '../../controller/ApiCaller';

export const ChatHistoryPage = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [historyMessages, setHistoryMessages] = useState([
        {
            mensage: 'oi ',
            self_message: true,
            created_at: '10/10/10'
        },
        {
            mensage: 'resposta para -> teste',
            self_message: false,
            created_at: '12/10/10'
        }
    ]);

    const formatDate = (dateString: string) => {
        return format(new Date(dateString), "dd/MM/yyyy");
    };

    useEffect(() => {
        if(!user) return;

        ApiCaller({
            url: 'http://127.0.0.1:8000/api/messages/history/',
            method: 'GET',
            params: {
                user_id: user
            },
            onError: (error: any) => {
                console.error('Erro ao obter dados', error)
            },
            onSuccess: (data: any) => {
                setHistoryMessages(data)
            }
        })
    }, [user])

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
                                selfMessage={msg.self_message}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}