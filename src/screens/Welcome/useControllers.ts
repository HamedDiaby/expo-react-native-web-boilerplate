
import { useTranslation } from "@utils/translations";

export const useControllers = () => {

    const { t } = useTranslation();

    const handlePrimaryAction = () => {
        // TODO: Implementer l'action principale (ex: navigation vers la page d'inscription)
        console.log('Primary action pressed');
    };

    const handleSecondaryAction = () => {
        // TODO: Implementer l'action secondaire (ex: navigation vers plus d'informations)
        console.log('Secondary action pressed');
    };

    return {
        t,
        handlePrimaryAction,
        handleSecondaryAction,
    }
};
