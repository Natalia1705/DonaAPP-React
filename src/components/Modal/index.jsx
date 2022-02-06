/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Modal = ({ state }) => {
  const navigate = useNavigate();
  return (
    <>
      {state && (
        <Container>
          <Overlay>
            <ModalContainer>
              <div className="content">
                <img
                  src="https://n5b3y8j5.rocketcdn.me/wp-content/uploads/2020/10/donaciones-1024x358.png"
                  alt="404 error"
                />
                <h1 className="Title1">Tu historia se ha publicado</h1>
                <p>Gracias por confiar en DonApp.</p>
                <button
                  className="boton"
                  data-cy="new-campaign-modal-button"
                  onClick={() => {
                    navigate('/campaigns');
                  }}
                >
                  Ve a tus campañas
                </button>
              </div>
            </ModalContainer>
          </Overlay>
        </Container>
      )}
    </>
  );
};

export default Modal;
const Container = styled.div``;
const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;

  .content {
    display: flex;
    flex-direction: column;
  }
`;
const ModalContainer = styled.section`
  width: 500px;
  display: flex;
  background: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  z-index: 9999;
  border-radius: 15px;

  .content img {
    justify-content: center;
    width: 28rem;
    margin-top: 0px;
  }

  .content h1 {
    margin-top: 10px;
    font-size: 2rem;
    text-align: center;
  }
  .content p {
    text-align: center;
  }
  .content button.boton {
    color: blue;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
      color: black;
    }
  }
`;
