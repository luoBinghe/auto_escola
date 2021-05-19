import React from 'react';
import { render } from '@testing-library/react';
import GlobalStyleComposed from './GlobalStyle';

test('aaaaaa', () => {
  render(<GlobalStyleComposed />);

  expect(document.head).toMatchSnapshot();
});