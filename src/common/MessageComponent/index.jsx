import { Alert } from 'react-bootstrap';

const MessageComponent = ({ variant, message }) => (
  <Alert variant={variant} className="mt-2">
    {message}
  </Alert>
);

export default MessageComponent;
