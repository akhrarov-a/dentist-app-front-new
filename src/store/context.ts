import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { History } from 'history';
import { Store } from 'redux';
import { AuthService } from '@api';

/**
 * Get context
 */
const getContext = (history: History, store: Store) => {
  const request = (defaults: AxiosRequestConfig) => {
    const instance = axios.create({
      baseURL: process.env.apiUrl,
      ...defaults
    });

    return async (
      { headers = {}, ...config }: AxiosRequestConfig,
      enabled = true,
      disabledToken = false
    ) => {
      try {
        headers.channel = 'admin';
        headers['Cache-Control'] = 'no-cache';
        const token = localStorage.getItem('idtoken');
        const response = await instance({
          ...config,
          headers: token
            ? {
                idtoken: token,
                ...headers
              }
            : headers
        });

        const idToken =
          response?.headers?.idtoken || response?.headers?.idToken;

        if (idToken && !disabledToken) {
          localStorage.setItem('idtoken', idToken);
        }

        return response;
      } catch (e) {
        const error: AxiosError = e;

        switch (true) {
          case enabled && error.response.status == 401: {
            // TODO: Dispatch logout action: store.dispatch(logout())

            break;
          }

          default: {
            throw error;
          }
        }
      }
    };
  };

  return {
    store,
    history,
    auth: new AuthService(request)
  };
};

/**
 * Saga context
 */
type StoreContext = ReturnType<typeof getContext>;

export { StoreContext, getContext };
