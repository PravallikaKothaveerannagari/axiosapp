import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Adjust the import path as per your project structure

test('renders learn react link', () => {
  render(<App />);

  // Use a query selector to find the text case-insensitively
  const linkElement = screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});
