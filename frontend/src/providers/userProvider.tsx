import { createContext, useState } from "react";

interface ProviderProps {
    children: React.ReactNode
}

export const UserContext = createContext<any>(null);

export const UserProvider: React.FC<ProviderProps> = ({ children }) => {
    const [user, setUser] = useState<any | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}