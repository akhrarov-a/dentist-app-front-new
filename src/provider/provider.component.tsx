import React, { FC } from 'react';
import { Router } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { ProviderProps } from './provider.props';

/**
 * <Provider />
 */
const Provider: FC<ProviderProps> = ({ children, store, history }) => (
  <StoreProvider store={store}>
    <Router history={history}>{children}</Router>
  </StoreProvider>
);

export { Provider };
