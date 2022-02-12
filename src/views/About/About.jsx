/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Footer from '../../components/Footer';

const About = () => (
  <Container>
    <div className="title">
      <h1>Acerca de nosotros...</h1>
    </div>
    <Section>
      <div className="content">
        <img
          src="https://img.genial.ly/62058424efb8cb0012d8b32b/1006e987-4f98-4355-8949-ff3d44527e65.jpeg"
          alt="DonApp"
        />
        <p>
          Hay una parte de cada uno de nosotros que sueña con un mundo mejor.
          Esa chispa de inspiración para ayudar a una persona, arreglar un
          vecindario o incluso cambiar una nación. En DonnApp, creemos que su
          inspiración debe compartirse con todos. Porque así es como sucede el
          cambio.
        </p>
      </div>
    </Section>
    <Footer />
  </Container>
);

export default About;
const Container = styled.div`
  .title {
    display: flex;
  }
  h1 {
    font-size: 60px;
    margin-top: 120px;
    margin-left: 100px;
    margin-bottom: 0px;
    color: #1c2833;
  }
`;
const Section = styled.section`
  display: flex;
  .content {
    display: flex;
    flex-direction: colum;
  }

  img {
    margin-top: 0;
    width: 700px;
  }

  p {
    font-size: 20px;
    line-height: 35px;
  }
`;
