import { UserContext } from "@contexts";
import { PathRequestEnum } from "@utils/enums";
import { fetchRequest } from "@utils/requests";
import { useCallback, useContext } from "react";

export const useUserDispatch = ()=> {

    const { setUser, setSigninError } = useContext(UserContext);

    const onSignin = useCallback(async(email: string, password: string)=> {
        try {
            const req = await fetchRequest({
                route: PathRequestEnum.LOGIN_USER,
                method: 'POST',
                data: { email, password }
            });

            if(req.code === 200){
                setUser(req.data);
            } else {
                setUser(null);
                setSigninError(req.data);
            }
        } catch (error: any) {
            setUser(null);
            setSigninError({message: error.message});
        }
    }, []);
    
    return {
        onSignin
    }
}
