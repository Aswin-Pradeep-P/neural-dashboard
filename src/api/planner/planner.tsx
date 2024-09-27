import { apiUrl, mlUrl } from "../../constants";
import useApi, { HttpMethod } from "../useApi";

export const useGetLessonPlan = () => {
  const {
    loading: gettingLessonPlan,
    callApi: getLessonPlan,
    error: getLessonPlanError,
    response: getLessonPlanResponse,
  } = useApi({ method: HttpMethod.POST, url: `${mlUrl}/api/lesson-plan/`, withAuth: false });

  return { getLessonPlan, gettingLessonPlan, getLessonPlanError, getLessonPlanResponse };
};

export const useSaveLessonPlan = (teacherId: string) => {
  const {
    loading: savingLessonPlan,
    callApi: saveLessonPlan,
    error: saveLessonPlanError,
    response: saveLessonPlanResponse,
  } = useApi({ method: HttpMethod.POST, url: `${apiUrl}/lesson-plan/create/${teacherId}`, withAuth: true });

  return { saveLessonPlan, savingLessonPlan, saveLessonPlanError, saveLessonPlanResponse };
};

export const useGetLessonPlans = (teacherId: string) => {
  const {
      callApi: getLessonPlans,
      error: getLessonPlansError,
      loading: gettingLessonPlans,
      response: getLessonPlansResponse
  } = useApi({ method: HttpMethod.POST, url: `${apiUrl}/lesson-plan/user/${teacherId}` });

  return { getLessonPlans, getLessonPlansError, getLessonPlansResponse, gettingLessonPlans };
};