import React, { ReactElement } from 'react';
import { render as rtlRender, RenderOptions, RenderResult } from '@testing-library/react';
import { Store, AnyAction } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from '../src/store/reducers';
import { configureStore } from '@reduxjs/toolkit';

interface CustomRenderOptions extends RenderOptions {
  initialState?: any;
  store?: Store<any, AnyAction>;
}

// Custom render that includes Redux provider
const render = (
  ui: ReactElement,
  {
    initialState,
    store = configureStore({
      reducer,
      devTools: true,
    }),
    ...renderOptions
  }: CustomRenderOptions = {}
): RenderResult => {
  const Wrapper: React.FC<any> = ({ children }) => {
    return (<Provider store={store}>{children}</Provider>);
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { render };
