// import { signUp } from '../../api/auth/authRequest';
import { Container } from 'react-bootstrap';
import SignupFormComponent from './components/SignupComponent';

const RegisterPage = () => (
  <Container>
    <div className="mt-5 row justify-content-center">
      <div className="border border-light bg-light p-4 col-10 col-sm-8 col-md-6 col-lg-6 col-xl-6">
        <h2 className="mb-4 text-center">Registro</h2>
        <SignupFormComponent />
      </div>
    </div>
  </Container>
);
export default RegisterPage;
