
import { useTranslation } from "@utils/translations";

export const useControllers = () => {

    const { t } = useTranslation();

    return {
        t
    }
}