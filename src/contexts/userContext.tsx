import { ErrorType, User } from "@utils/types";
import { createContext, FC, ReactNode, useState } from "react";

interface IUserContextProvider {
    children: ReactNode
}

interface IUserContext {
    user: User | null
    setUser: React.Dispatch<User | null>
    signinError: ErrorType | null
    setSigninError: React.Dispatch<ErrorType | null>
}

export const UserContext = createContext<IUserContext>({
    user: null,
    setUser: () => {},
    signinError: null,
    setSigninError: () => {},
});

export const UserContextProvider:FC<IUserContextProvider> = ({ children })=> {

    const [user, setUser] = useState<User | null>(null);
    const [signinError, setSigninError] = useState<ErrorType | null>(null);

    return (
        <UserContext.Provider 
            value={{ 
                user, setUser, 
                signinError, setSigninError ,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}