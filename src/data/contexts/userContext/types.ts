import { ErrorType, User } from "@utils/types";

export interface IUserContext {
    user: User | null
    setUser: React.Dispatch<User | null>
    signinError: ErrorType | null
    setSigninError: React.Dispatch<ErrorType | null>
}

export const UserContextInitialState:IUserContext = {
    user: null,
    setUser: () => {},
    signinError: null,
    setSigninError: () => {},
};