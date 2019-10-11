import React from 'react';
import '@testing-library/jest-dom';
import * as rtl from '@testing-library/react';
import App from './App';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<App />);
});

it('matches snapshot', () => {
  expect(wrapper.container).toMatchSnapshot()
});
