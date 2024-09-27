import { apiUrl } from '../../constants';
import { HttpMethod } from '../enums';
import useApi from '../useApi';

export const useLogin = () => {
  const {
    loading: loggingIn,
    callApi: login,
    error: loginError,
    response: loginResponse,
  } = useApi({ method: HttpMethod.POST, url: `${apiUrl}/user/login`, withAuth : false });

  return { loggingIn, login, loginError, loginResponse };
};

export const useGetProfile = () => {
  const {
    loading: gettingProfile,
    callApi: getProfile,
    error: getProfileError,
    response: getProfileResponse,
  } = useApi({ method: HttpMethod.POST, url: `${apiUrl}/user/profile` });

  return { getProfile, gettingProfile, getProfileError, getProfileResponse };
};
