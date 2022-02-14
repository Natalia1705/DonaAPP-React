import styled from 'styled-components';
import Footer from '../../components/Footer';

const How = () => (
  <Container>
    <div className="title">
      <h1>¿Cómo funciona DonApp?</h1>
    </div>
    <Section>
      <div className="section">
        <h1 className="number">1</h1>
        <h2 className="title">Crea tu campaña</h2>
        <h3 className="description">
          DonApp. te ayuda a crear una campaña y contar tu historia de manera
          rápida. Puedes recaudar dinero de manera individual o invitar a otros
          a unirte a su equipo de recaudación de fondos.
        </h3>
      </div>
      <div className="section">
        <h1 className="number">2</h1>
        <h2 className="title">Comparte tu campaña</h2>
        <h3 className="description">
          Nuestras herramientas para compartir campañas te ayudan a difundir tu
          historia a través de las redes sociales, por correo electrónico e
          incluso con mensajes de texto. Te facilitamos la tarea de mantener
          informada a tu red de amigos para que puedas recaudar más dinero.
        </h3>
      </div>
      <div className="section">
        <h1 className="number">3</h1>
        <h2 className="title">Acepta donativos </h2>
        <h3 className="description">
          DonApp permite conectar directamente los donativos con la cuenta
          bancaria de tu beneficiario para que puedas recibir la ayuda
          inmediatamente. Además, como no cobramos comisión por el uso de la
          plataforma, todos los donativos se destinan íntegramente a tu causa.
        </h3>
      </div>
    </Section>
    <Footer />
  </Container>
);

export default How;

const Container = styled.div`
  .title {
    display: flex;
    margin-top: 150px;
    justify-content: center;
  }
  h1 {
    font-size: 50px;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 70px;

  .section {
    padding: 20px;
    width: 450px;
  }

  .number {
    margin-top: 55px;
    font-weight: 800;
    color: #ff0157;
  }
  .description {
    margin-top: 25px;
    padding: 10px;
    font-size: 18px;
    text-align: justify;
    line-height: 25px;
    color: #4e4e4f;
  }
  .title {
    margin-top: 35px;
    margin-top: 10px;
    text-align: center;
    font-size: 25px;
  }
`;
