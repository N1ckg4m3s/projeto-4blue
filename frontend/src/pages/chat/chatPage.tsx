import './style.css'
import React, { cache, useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../../providers/userProvider"
import { useNavigate } from "react-router-dom"
import { ChatMessage } from '../../components/chatBubble/mensage'
import { BackIcon } from '../../components/backIcon'

export const ChatPage = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [cacheMessages, setCacheMessages] = useState([
        {
            mensage: 'oi ',
            selfMessage: true,
        },
        {
            mensage: 'resposta para -> teste',
            selfMessage: false,
        }
    ]);
    const inputRef = useRef<HTMLInputElement>(null);

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
            // Adicionar a mensagem
            setCacheMessages([...cacheMessages, {
                mensage: mensagem,
                selfMessage: true
            }])

            // Apaga o texto do input
            inputRef.current.value = '';
            console.log('envia a mensagem para o banco.')
            console.log('mensagem:', mensagem)
        }
    }

    const handleNavigateToHistory = () => {
        navigate('/history')
    }

    useEffect(() => { }, [])

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
                {cacheMessages.map((msg) => (
                    <ChatMessage
                        mensage={msg.mensage}
                        selfMessage={msg.selfMessage}
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