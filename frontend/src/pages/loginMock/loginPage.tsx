import { useContext } from "react"
import { UserContext } from "../../providers/userProvider"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate();

    /* Redireciona o contexto para o chat */
    const redirectToChat = () => {
        navigate('/chat')
    }

    /* Modifica o context */
    const handleSelectUser = (user: string) => {
        // Define o usuario no provider
        setUser(user)

        // redireciona para o chat
        redirectToChat();
    }

    return (<>
        <button onClick={() => handleSelectUser('userA')}> USUARIO A </button>
        <button onClick={() => handleSelectUser('userB')}> USUARIO B </button>
    </>)
}