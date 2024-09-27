import { useState, useCallback } from 'react';
import axios, { AxiosRequestHeaders } from 'axios';

// Enum for HTTP Methods
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

// Define the arguments for initializing the hook
interface UseApiArgs {
  method: HttpMethod;
  url: string;
  data?: any;
  headers?: AxiosRequestHeaders;
  withAuth?: boolean;
}

// Define the shape of the callApi parameters
interface CallApiArgs<T> {
  data?: any;
  onCompleted?: (data: T) => void;
  onError?: (error: string) => void;
}

// Define the shape of the data returned by the hook
interface ApiResponse<T> {
  response: T | null;
  error: string | null;
  loading: boolean;
  callApi: (args?: CallApiArgs<T>) => Promise<void>;
}

// Custom Hook
const useApi = <T = any>({ method, url, headers = {} as AxiosRequestHeaders, withAuth = true }: UseApiArgs): ApiResponse<T> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<T | null>(null);

  const callApi = useCallback(
    async ({ onCompleted, onError, data }: CallApiArgs<T> = {}) => {
      setLoading(true);
      setError(null); // Reset error before a new request
      setResponse(null); // Reset response before a new request

      try {
        const config = {
          method,
          url,
          headers,
          data: method === HttpMethod.POST ? data : null, // Only include data for POST-like methods
          params: method === HttpMethod.GET ? data : null, // For GET, send data as query params
        };

        // headers['Content-Type'] = 'application/json'; // Set the default content type to JSON
        withAuth && (headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`); // Set the Authorization header

        const result = await axios(config);
        setResponse(result.data); // Set the response data from API

        if (onCompleted) {
          onCompleted(result.data); // Call onCompleted callback if provided
        }
      } catch (err: any) {
        const errorMessage = err.message || 'Something went wrong';
        setError(errorMessage); // Handle the error

        if (onError) {
          onError(errorMessage); // Call onError callback if provided
        }
      } finally {
        setLoading(false); // Always stop loading after request completes
      }
    },
    [method, url, headers]
  );

  return { callApi, loading, error, response };
};

export default useApi;
