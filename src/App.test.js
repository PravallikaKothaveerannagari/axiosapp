import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils'; // Import act from react-dom/test-utils
import App from './App'; // Replace with your actual component import

test('renders learn react link', () => {
  act(() => {
    render(<App />);
  });
  
  const linkElement = screen.getByText(/learn react/i);
  
  expect(linkElement).toBeInTheDocument();
});
