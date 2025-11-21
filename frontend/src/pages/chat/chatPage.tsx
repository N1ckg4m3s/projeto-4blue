import './style.css'
import React, { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../../providers/userProvider"
import { useNavigate } from "react-router-dom"

export const ChatPage = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [cacheMessages, setCacheMessages] = useState([]);
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
        const userMessage = inputRef.current?.value;
        const [valido, mensagem] = validadeMessage(userMessage)

        if (valido) {
            console.log('envia a mensagem para o banco.')
            console.log('mensagem:', mensagem)
        }
    }

    const handleNavigateToHistory = () => {
        navigate('/history')
    }

    useEffect(() => {

    }, [])

    /** VIEW **/
    const BackIcon: React.ReactNode = (<>
        <svg
            onClick={() => navigate(-1)}
            width="26"
            height="26"
            viewBox="0 0 24 24"
            style={{ cursor: "pointer" }}
        >
            <path
                d="M15 18l-6-6 6-6"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </>)

    return (
        <div className='fullPage'>
            <header className="header">
                {BackIcon}
                <span>Chat do {user}</span>
                <button onClick={handleNavigateToHistory}>Ver historico</button>
            </header>
            <div className="chatBox">

            </div>
            <form className="inputArea" onSubmit={handleSubmit}>
                <input id="mensagemInput" placeholder="Digite sua mensagem..." ref={inputRef} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}