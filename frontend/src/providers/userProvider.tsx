import { createContext, useEffect, useState } from "react";

interface ProviderProps {
    children: React.ReactNode
}

export const UserContext = createContext<any>(null);

export const UserProvider: React.FC<ProviderProps> = ({ children }) => {
    const [user, setUser] = useState<any | null>(null);

    // Carrega do localStorage no provider
    useEffect(() => {
        const saved = localStorage.getItem("currentUser");
        if (saved) setUser(saved);
    }, []);

    // Salva ao alterar o user.
    useEffect(() => {
        if (user) localStorage.setItem("currentUser", user);
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}