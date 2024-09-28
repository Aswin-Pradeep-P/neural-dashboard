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

export const useGetStudent = (studentId: string) => {
    const {
        callApi: getStudent,
        error: getStudentError,
        loading: gettingStudent,
        response: getStudentResponse
    } = useApi({ method: HttpMethod.POST, url: `${apiUrl}/user/student/${studentId}` });

    return { getStudent, getStudentError, getStudentResponse, gettingStudent };
};

export const useGetLeaderboardStudents = () => {
    const {
        callApi: getLeaderboardStudents,
        error: getLeaderboardStudentsError,
        loading: gettingLeaderboardStudents,
        response: getLeaderboardStudentsResponse
    } = useApi({ method: HttpMethod.POST, url: `${apiUrl}/user/list/students?sort=score` });

    return { getLeaderboardStudents, getLeaderboardStudentsError, getLeaderboardStudentsResponse, gettingLeaderboardStudents };
};