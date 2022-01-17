import { Modal, Spinner } from 'react-bootstrap';

const LoaderComponent = ({ loading }) => (
  <Modal show={loading} backdrop="static" keyboard={false} centered size="sm">
    <Modal.Header className="flex-column">
      <Spinner animation="grow" variant="danger" />
      <Modal.Title className="pt-2">Cargando ...</Modal.Title>
    </Modal.Header>
  </Modal>
);

export default LoaderComponent;
