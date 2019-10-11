import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import App from './App';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<App />);
});

it('matches snapshot', () => {
  expect(wrapper.container).toMatchSnapshot();
});

it('can increase from 0 to 1 by clicking button', async () => {
  const button = wrapper.queryByText(/increase/);

  expect(wrapper.queryByText(/the count is 0/)).toBeInTheDocument()
  expect(wrapper.queryByText(/the count is 1/)).not.toBeInTheDocument();

  rtl.fireEvent.click(button)

  expect(await wrapper.findByText(/the count is 1/)).toBeInTheDocument();
});