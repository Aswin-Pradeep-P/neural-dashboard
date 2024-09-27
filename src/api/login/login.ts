import { apiUrl } from '../../constants';
import { HttpMethod } from '../enums';
import useApi from '../useApi';

export const useLogin = () => {
  const {
    loading: loggingIn,
    callApi: login,
    error: loginError,
    response: loginResponse,
  } = useApi({ method: HttpMethod.GET, url: `${apiUrl}/products` });

  return { loggingIn, login, loginError, loginResponse };
};
