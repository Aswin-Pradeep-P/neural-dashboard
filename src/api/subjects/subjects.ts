import { apiUrl } from '../../constants';
import { HttpMethod } from '../enums';
import useApi from '../useApi';

export const useGetSubjects = (gradeId: string) => {
  const {
    loading: gettingSubjects,
    callApi: getSubjects,
    error: getSubjectsError,
    response: getSubjectsResponse,
  } = useApi({ method: HttpMethod.POST, url: `${apiUrl}/subject/list/${gradeId}` });

  return { getSubjects, gettingSubjects, getSubjectsError, getSubjectsResponse };
};