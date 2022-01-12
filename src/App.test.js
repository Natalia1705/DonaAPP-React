import { render, screen } from './test/setup';
import App from './App';

const setup = (path) => {
  window.history.pushState({}, '', path);
  render(<App />);
};

describe('Routing', () => {
  it.each`
    path           | pageTestId
    ${'/login'}    | ${'login-page'}
    ${'/register'} | ${'register-page'}
  `('displays $pageTestId when path is $path', ({ path, pageTestId }) => {
    setup(path);
    const page = screen.queryByTestId(pageTestId);
    expect(page).toBeInTheDocument();
  });
});
