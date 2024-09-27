import { apiUrl } from "../../constants";
import useApi, { HttpMethod } from "../useApi";

export const useGetStudents = () => {
    const {
        callApi: getStudents,
        error: getStudentsError,
        loading: gettingStudents,
        response: getStudentsResponse
    } = useApi({ method: HttpMethod.POST, url: `${apiUrl}/user/list/students` });

    return { getStudents, getStudentsError, getStudentsResponse, gettingStudents };
};