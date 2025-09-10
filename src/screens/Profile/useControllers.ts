
import { useTranslation } from "@utils/translations";
import { UserContext } from "@data/contexts";
import { useContext } from "react";

export const useControllers = () => {

    const { t } = useTranslation();
    const { user } = useContext(UserContext);

    return {
        t,
        user
    }
}