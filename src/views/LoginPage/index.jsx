import { Container } from 'react-bootstrap';
import SignInForm from './components/SignInForm';

const LoginPage = () => (
  <Container data-testid="login-page">
    <div className="mt-5 row justify-content-center">
      <div className="border border-light bg-light p-4 col-10 col-sm-8 col-md-6 col-lg-6 col-xl-6">
        <h2 className="mb-4 text-center">Iniciar sesión</h2>
        <SignInForm />
      </div>
    </div>
  </Container>
);

export default LoginPage;
