import React from "react";
import "./style.scss"
export const ShareModal = () => {
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
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p className="modal__subtitle">
              Las campañas que se comparten en redes sociales tienen 5 veces más
              posibilidade de alcanzar su meta
            </p>
            <div className="modal__social-media">
              <ul>
                <li>
                  <a href="www.facebook.com">
                    <i className="fab fa-facebook "></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="www.facebook.com">
                    <i className="fab fa-youtube "></i>Email
                  </a>
                </li>
                <li>
                  <a href="www.facebook.com">
                    <i className="fab fa-twitter "></i>Twitter
                  </a>
                </li>
                <li>
                  <a href="www.facebook.com">
                    <i className="fab fa-instagram "></i>Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <div className="modal__link">
                <input
                  type="text"
                  value="https://donapp.com/123"
                  readOnly="readonly"
                />
                <button type="button" className="btn btn-primary">
                  Copiar
                </button>
              </div>
              <p className="modal__tip">
                <span>Consejo:</span> Pega el enlace de esta recaudación de
                fondos en cualquier lugar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
