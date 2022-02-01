import { Container } from 'react-bootstrap';
import CreditCardComponent from './components/CreditCardComponent';

const PaymentPage = () => (
  <Container>
    <div className="pt-5">
      <div className="pt-5">
        <CreditCardComponent />
      </div>
    </div>
  </Container>
);

export default PaymentPage;
