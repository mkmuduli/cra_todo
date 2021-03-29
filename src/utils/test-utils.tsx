import { render as rtlRender } from '@testing-library/react';
import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from '../redux/create-store';

interface Option { hasRedux?: boolean, hasRouter?: boolean, store?: any };

const RouterWrapper: React.FC = ({ children }) => {
  return (
    <Router>
      {children}
    </Router>
  );
};

const render = (ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>, options = {}) => {
  const { hasRedux, hasRouter, store = createStore(), ...restOptions } = options as Option;
  let wrapper: React.FC | undefined;
  if (hasRouter && hasRouter) {
    wrapper = ({ children }) => {
      return (
        <Provider store={store}>
          <Router>
            {children}
          </Router>
        </Provider>
      );
    };;
  } else if (hasRouter && !hasRedux) {
    wrapper = RouterWrapper;
  } else if (hasRedux && !hasRouter) {
    wrapper = ({ children }) => {
      return (
        <Provider store={store}>
          {children}
        </Provider>
      );
    };
  }

  return rtlRender(ui, {
    wrapper,
    ...restOptions,
  });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };