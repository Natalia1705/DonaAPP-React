import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../state/store';

const RootWrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
// prettier-ignore
const customRender = (ui, options) => render(ui, { wrapper: RootWrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };
