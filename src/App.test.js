import React from 'react';
// STEP 1 pull deps in
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

// react testing library requires a "cleanup" operation
// after each test
// STEP 2 set up cleaning up in afterEach
afterEach(rtl.cleanup);

// STEP 3 take care of repetitive operations inside
// a beforeEach function
let wrapper;
beforeEach(() => {
  // we want the "wrapper" recreated at every test
  wrapper = rtl.render(<App />)
});

it('renders without crashing', () => {
  expect(wrapper.container).toMatchSnapshot()
});

it('can increase the count to 1, asynchronously', async () => {
  rtl.fireEvent.click(wrapper.queryByText(/async/))
  expect(await wrapper.findByText(/the count is 1/))
})

it('can increase the count to 2, asynchronously', async () => {
  rtl.fireEvent.click(wrapper.queryByText(/async/))
  rtl.fireEvent.click(wrapper.queryByText(/async/))
  expect(await wrapper.findByText(/the count is 2/))
})
