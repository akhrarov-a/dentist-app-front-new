import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { History } from 'history';
import { Store } from 'redux';
import { AuthService } from '@api';
import { logOut } from '@auth/store';
import { getCookie } from '@core';

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
      enabled = true
    ) => {
      try {
        headers.channel = 'admin';
        headers['Cache-Control'] = 'no-cache';
        const token = getCookie('idToken');

        return await instance({
          ...config,
          headers: token
            ? {
                Authorization: `Bearer ${token}`,
                ...headers
              }
            : headers
        });
      } catch (e) {
        const error: AxiosError = e;

        switch (true) {
          case enabled && error.response?.status == 401: {
            store.dispatch(logOut());

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
