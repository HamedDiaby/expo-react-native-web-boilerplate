import { UserContext } from "@contexts";
import { useContext } from "react";

export const useUserSelector = ()=> {

    const { user, signinError } = useContext(UserContext);

    return {
        user,
        signinError,
    }
}
