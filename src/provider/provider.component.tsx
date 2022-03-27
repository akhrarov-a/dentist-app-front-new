import React from 'react';
import { Router } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { ProviderProps } from './provider.props';

/**
 * <Provider />
 */
const Provider: React.FC<ProviderProps> = ({ children, store, history }) => (
  <StoreProvider store={store}>
    <Router history={history}>{children}</Router>
  </StoreProvider>
);

export { Provider };
