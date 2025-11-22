import './style.css'
import React, { useContext, useRef, useState } from "react"
import { UserContext } from "../../providers/userProvider"
import { useNavigate } from "react-router-dom"
import { ChatMessage } from '../../components/chatBubble/mensage'
import { BackIcon } from '../../components/backIcon'
import { ApiCaller } from '../../controller/ApiCaller'
import { message } from '../../controller/types'

export const ChatPage = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [cacheMessages, setCacheMessages] = useState<message[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSalvarMensagem = (msg: string) => {
        const payload = {
            "user_id": user,
            "mensage": msg
        }

        ApiCaller({
            url: 'http://127.0.0.1:8000/api/messages/',
            method: 'POST',
            body: payload,
            onSuccess(data) {
                const userMsg: message = data.user_message
                const botMsg: message = data.bot_message
                if (!userMsg || !botMsg) {
                    console.error('Sem resposta do bot')
                    return;
                }

                setCacheMessages([
                    ...cacheMessages,
                    userMsg,
                    botMsg
                ])
            },
            onError(error) {
                console.error('Erro ao obter os dados', error)
            },
        })
    }

    /* Valida se tem mensagem */
    const validadeMessage = (message: string | undefined): [boolean, string] => {
        if (!message) return [false, 'Sem mensagem'];
        const trinMessage = message.trim();

        if (!trinMessage) return [false, 'Sem mensagem'];
        return [true, trinMessage]
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!inputRef.current) return;

        const userMessage = inputRef.current?.value;
        const [valido, mensagem] = validadeMessage(userMessage)

        if (valido) {
            handleSalvarMensagem(mensagem)
            inputRef.current.value = ''
        }
    }

    const handleNavigateToHistory = () => {
        navigate('/history')
    }

    return (
        <div className='fullPage'>
            <header className="header">
                <BackIcon
                    onClick={() => navigate(-1)}
                />
                <span>Chat do {user}</span>
                <button onClick={handleNavigateToHistory}>Ver historico</button>
            </header>
            <div className="chatBox">
                {cacheMessages && cacheMessages.map((msg) => (
                    <ChatMessage
                        mensage={msg.mensage}
                        selfMessage={msg.self_message}
                    />
                ))}
            </div>
            <form className="inputArea" onSubmit={handleSubmit}>
                <input id="mensagemInput" placeholder="Digite sua mensagem..." ref={inputRef} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}