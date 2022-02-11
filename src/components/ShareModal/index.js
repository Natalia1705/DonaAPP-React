import React from 'react';
import { useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import './style.scss';
import config from '../../config';

const { NETLIFY_BASE } = config;

const ShareModal = () => {
  const location = useLocation();
  const currentPath = `${NETLIFY_BASE}${location.pathname}`;
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              ¡Compartir tambien es una forma de ayudar!
            </h5>
          </div>
          <div className="modal-body">
            <p className="modal__subtitle">
              Las campañas que se comparten en redes sociales tienen 5 veces más
              posibilidade de alcanzar su meta
            </p>
            <div className="modal-footer">
              <div className="modal__link">
                <input type="text" value={currentPath} readOnly="readonly" />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    navigator.clipboard.writeText(`${currentPath}`);
                    swal(
                      '¡Enlace copiado con éxito!',
                      'Ahora puedes compartirlo en redes',
                      'success',
                    );
                  }}
                >
                  Copiar
                </button>
              </div>
              <p className="modal__tip">
                <span>Consejo: </span>
                Pega el enlace de esta recaudación de fondos en cualquier lugar.
              </p>
              <button
                type="button"
                className="close btn btn-secondary share-modal__close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">Continuar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
