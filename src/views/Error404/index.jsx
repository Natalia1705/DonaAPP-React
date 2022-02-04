import styled from 'styled-components';

const Error404 = () => (
  <Container>
    <Error>
      <div className="content">
        <img
          src="https://c.tenor.com/LSDeBe2JAfoAAAAC/cat-coding.gif"
          alt="404 error"
        />

        <h2>404</h2>
        <h1 className="Title1">Oooopsss página no disponible </h1>
        <p>Estamos trabajando en ello</p>
        <a href="/" className="boton">
          Ir a DonApp
        </a>
      </div>
    </Error>
  </Container>
);

export default Error404;

const Container = styled.div``;
const Error = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .content img {
    justify-content: center;
    width: 30rem;
  }
  .content h2 {
    padding-top: 0;
    font-size: 5rem;
    text-align: center;
  }
  .content h1 {
    font-size: 2rem;
    text-align: center;
  }
  .content p {
    text-align: center;
  }
  .content a {
    display: flex;
    justify-content: center;
  }

  content boton {
    color: #fff;
    font-weight: 400;
    cursor: pointer;
    :hover {
      color: black;
    }
`;
