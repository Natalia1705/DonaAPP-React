import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import SignInForm from './components/SignInForm';

const LoginPage = () => (
  <Container data-testid="login-page">
    <Content>
      <div className="mt-5 row justify-content-center">
        <div className="border border-light bg-light p-4 col-10 col-sm-8 col-md-6 col-lg-6 col-xl-6">
          <h2 className="mb-4 text-center">Iniciar sesión</h2>
          <SignInForm />
        </div>
      </div>
    </Content>
  </Container>
);

export default LoginPage;

const Content = styled.div`
  margin-top: 150px;
`;
