import { useContext } from "react"
import { UserContext } from "../../providers/userProvider"

export const ChatHistoryPage = () => {
    const { user } = useContext(UserContext);

    console.log(user)

    return (<>
        <div>HISTORICO DO {user}</div>
    </>)
}