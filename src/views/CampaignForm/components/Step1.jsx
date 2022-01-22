/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/function-component-definition */
import '../style.scss';

function Step1({ formData, setFormData }) {
  return (
    <div className="form-register__body">
      <div className="step active" id="step-1">
        <div className="step__header" />
        <div className="step__body">
          <p>Nombre</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
            id="name"
            placeholder="Tu nombre ej:Juan Pérez"
            className="step__input"
          />
          <p>¿Dónde vives?</p>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={(e) => {
              setFormData({ ...formData, country: e.target.value });
            }}
            id="country"
            placeholder=""
            className="step__input"
          />
          <p>¿Para que estás recaudando fondos?</p>
          <select
            className="step__input"
            value={formData.category}
            onChange={(e) => {
              setFormData({ ...formData, category: e.target.value });
            }}
          >
            <option value="health">Salud</option>
            <option value="emergency">Emergency</option>
            <option value="funerals">In memoriam</option>
            <option value="animals">Animales</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Step1;
