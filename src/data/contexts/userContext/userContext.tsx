import { ErrorType, User } from "@utils/types";
import { createContext, FC, PropsWithChildren, useState } from "react";
import { IUserContext, UserContextInitialState } from "./types";

export const UserContext = createContext<IUserContext>(UserContextInitialState);

export const UserContextProvider:FC<PropsWithChildren> = ({ children })=> {

    const [user, setUser] = useState<User | null>({
        firstname: 'Hamed',
        lastname: 'Diaby',
        email: 'hamed.diaby@example.com'
    });
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