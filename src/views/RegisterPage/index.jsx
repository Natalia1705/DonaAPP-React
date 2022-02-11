// import { signUp } from '../../api/auth/authRequest';

import styled from 'styled-components';
import SignupFormComponent from './components/SignupComponent';

const RegisterPage = () => (
  <Container data-testid="register-page">
    <Content>
      <Image>
        <img
          src="https://images.pexels.com/photos/7394344/pexels-photo-7394344.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt="donate"
        />
      </Image>
      <FormContent>
        <div className="formBx">
          <h2>Registrarse</h2>
          <SignupFormComponent />
        </div>
      </FormContent>
    </Content>
  </Container>
);
export default RegisterPage;

const Container = styled.div``;
const Content = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  margin-top: 90px;
`;
const Image = styled.div`
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(225deg, #e91e63, #03a9f4);
    z-index: 1;
    mix-blend-mode: screen;
  }
  position: relative;
  width: 50%;
  height: 100%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const FormContent = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  .formBx {
    width: 50%;
    h2 {
      color: #607d8b;
      font-weight: 600;
      font-size: 1.5em;
      text-transform: uppercase;
      margin-bottom: 20px;
      border-bottom: 4px solid #ff0157;
      display: inline-block;
      letter-spacing: 1px;
    }
    .inputBx {
      margin-bottom: 20px;
      span {
        font-size: 16px;
        margin-bottom: 5px;
        display: inline-block;
        color: #607d8b;
        font-weight: 300;
        letter-spacing: 1px;
        font-size: 16px;
      }
      input {
        width: 100%;
        padding: 10px 20px;
        outline: none;
        font-weight: 400;
        border: 1px solid #607d8b;
        font-size: 16px;
        letter-spacing: 1px;
        color: #607d8b;
        background: transparent;
        border-radius: 30px;
      }
    }
  }
`;
