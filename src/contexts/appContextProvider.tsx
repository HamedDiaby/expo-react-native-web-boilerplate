import { FC, ReactNode } from "react";
import { UserContextProvider } from "./userContext";

interface IAppContextProvider {
    children: ReactNode
}

export const AppContextProvider:FC<IAppContextProvider> = ({ children })=> {
    return (
        <UserContextProvider>
            {children}
        </UserContextProvider>
    )
}