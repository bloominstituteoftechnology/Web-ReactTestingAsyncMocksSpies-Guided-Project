import React from 'react';
import ReactDOM from 'react-dom';
// STEP 1 pull deps in
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

// react testing library requires a "cleanup" operation
// after each test
// STEP 2 set up cleaning up in afterEach
afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
