import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('does not render learn react link', () => {
  const { queryByText } = render(<App />);
  const linkElement = screen.queryByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});
