import { FetchResponseType } from "@utils/types";
import { fetchRequest } from "./request";
import { PathRequestEnum } from "@utils/enums";

export class ProfileService {

    static async getUserProfile(): Promise<FetchResponseType> {
        return await fetchRequest({
            method: 'GET',
            route: PathRequestEnum.GET_USER_PROFILE,
        });
    }

}