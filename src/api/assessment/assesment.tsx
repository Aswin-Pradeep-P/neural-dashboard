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

export const useCreateStudentAssessment = () => {
  const {
    loading: creatingStudentAssessment,
    callApi: createStudentAssessment,
    error: createStudentAssessmentError,
    response: createStudentAssessmentResponse,
  } = useApi({ method: HttpMethod.POST, url: `${apiUrl}/student-assessment/create` });

  return { createStudentAssessment, creatingStudentAssessment, createStudentAssessmentError, createStudentAssessmentResponse };
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

export const useGetAssessmentsById = (studentId: string) => {
  const {
    loading: gettingAssessments,
    callApi: getAssessmentsById,
    error: getAssessmentsByIdError,
    response: getAssessmentsByIdResponse,
  } = useApi({ method: HttpMethod.POST, url: `${apiUrl}/student-assessment/list/${studentId}` });

  return { getAssessmentsById, gettingAssessments, getAssessmentsByIdError, getAssessmentsByIdResponse };
};

export const useGetReport = () => {
  const {
    loading: gettingReport,
    callApi: getReport,
    error: getReportError,
    response: getReportResponse,
  } = useApi({ method: HttpMethod.POST, url: `${mlUrl}/api/reports/generate`, withAuth : false });

  return { getReport, gettingReport, getReportError, getReportResponse };
};

export const useGetComment = () => {
  const {
    loading: gettingComment,
    callApi: getComment,
    error: getCommentError,
    response: getCommentResponse,
  } = useApi({ method: HttpMethod.POST, url: `${mlUrl}/api/reports/comment-enhance`, withAuth : false });

  return { getComment, gettingComment, getCommentError, getCommentResponse };
};