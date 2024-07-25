import { render, screen, act } from '@testing-library/react';

test('renders learn react link', async () => {
  act(() => {
    render(<App />);
  });
  const linkElement = await screen.findByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
