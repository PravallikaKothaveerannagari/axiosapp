import { render, screen } from '@testing-library/react';
import App from './App'; // Replace with your actual component import

test('renders learn react link', () => {
  render(<App />);
  
  const linkElement = screen.getByText((content, element) => {
    // Use a regular expression to match text case-insensitively
    const textContent = element.textContent || '';
    return textContent.match(/learn react/i);
  });

  expect(linkElement).toBeInTheDocument();
});
