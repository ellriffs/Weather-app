import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders weather app in the DOM', () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
