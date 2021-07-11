import { restAPICalls } from "../utils/CallRestAPI";

export const fetchPosts = () => {
    const { request } = restAPICalls();
    return request.get()
}
