/* eslint-disable react/function-component-definition */

function Step2({ formData, setFormData }) {
  return (
    <div className="form-register__body">
      <div className="step active" id="step-2">
        <div className="step__header" />
        <div className="step__body">
          <p>¿Cuánto te gustaría recaudar?</p>
          <input
            type="number"
            name="objetive"
            value={formData.objetive}
            onChange={(e) => {
              setFormData({ ...formData, objetive: e.target.value });
            }}
            id="objetive"
            placeholder="USD"
            className="step__input"
          />
          <p className="smalltext">
            Ten en cuenta que de cada donativo se deducen comisiones por
            transacción de pago, incluidos cargos por operaciones con tarjetas
            de crédito y débito.
          </p>
          <p>¿Cuál es la fecha límite de recaudación?</p>
          <input
            type="date"
            name="targetdate"
            value={formData.targetdate}
            onChange={(e) => {
              setFormData({ ...formData, targetdate: e.target.value });
            }}
            id="date"
            placeholder=""
            className="step__input"
          />
        </div>
      </div>
    </div>
  );
}

export default Step2;
