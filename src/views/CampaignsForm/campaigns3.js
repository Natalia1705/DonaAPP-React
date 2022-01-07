import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextEditor from '../../components/TextEditor';
import './style.scss';

const Campaigns3 = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');

  return (
    <div className="root">
      <form className="form-register">
        <div className="form-register__header">
          <ul className="progressbar">
            <li className="progressbar__option active" />
            <li className="progressbar__option active" />
            <li className="progressbar__option active" />
          </ul>
          <h1 className="form-register__title">Cuenta tu historia</h1>
        </div>
        <div className="form-register__body">
          <div className="step active" id="step-1">
            <div className="step__header" />
            <div className="step__body">
              <p>¿Cuál es el titulo de tu campaña?</p>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                placeholder="Título"
                className="step__input"
              />
              <p>¿Porque vas a recaudar fondos? *Recuerda agregar una imagen</p>
              <div className="editor de texto">
                <TextEditor />
              </div>
            </div>
            <div className="step__footer">
              <button
                type="button"
                className="step__button step__button--back"
                onClick={() => navigate('/campaigns-form2')}
              >
                Regresar
              </button>
              <button
                type="submit"
                className="step__button"
                onClick={() => navigate('/')}
              >
                Terminar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Campaigns3;
