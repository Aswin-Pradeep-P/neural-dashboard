import { apiUrl, mlUrl } from "../../constants";
import useApi, { HttpMethod } from "../useApi";

export const useGetAnswer = () => {
  const {
    loading: gettingAnswer,
    callApi: getAnswer,
    error: getAnswerError,
    response: getAswerResponse,
  } = useApi({ method: HttpMethod.POST, url: `${mlUrl}/api/answer`, withAuth : false });

  return { getAnswer, gettingAnswer, getAnswerError, getAswerResponse };
};

export const useGenerateAssessment = () => {
  const {
    loading: generatingAssessment,
    callApi: generateAssessment,
    error: generateAssessmentError,
    response: generateAssessmentResponse,
  } = useApi({ method: HttpMethod.POST, url: `${mlUrl}/api/generate-assessment`, withAuth: false });

  return { generateAssessment, generatingAssessment, generateAssessmentError, generateAssessmentResponse };
};

export const useCreateAssessment = () => {
  const {
    loading: creatingAssessment,
    callApi: createAssessment,
    error: createAssessmentError,
    response: createAssessmentResponse,
  } = useApi({ method: HttpMethod.POST, url: `${apiUrl}/assessment/create` });

  return { createAssessment, creatingAssessment, createAssessmentError, createAssessmentResponse };
};

export const useGetAssessments = () => {
  const {
    loading: gettingAssessments,
    callApi: getAssessments,
    error: getAssessmentsError,
    response: getAssessmentsResponse,
  } = useApi({ method: HttpMethod.POST, url: `${apiUrl}/assessment/list` });

  return { getAssessments, gettingAssessments, getAssessmentsError, getAssessmentsResponse };
};