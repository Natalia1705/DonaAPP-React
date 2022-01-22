/* eslint-disable react/function-component-definition */

function Step3({ formData, setFormData }) {
  return (
    <div className="form-register__body">
      <div className="step active" id="step-3">
        <div className="step__header" />
        <div className="step__body">
          <p>¿Cuál es el titulo de tu campaña?</p>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
            }}
            id="title"
            placeholder="Título"
            className="step__input"
          />
          <p>¿Porque vas a recaudar fondos? </p>
          <div className="editor de texto">
            <textarea />
          </div>
          <p>Recuerda agregar una imagen</p>
          <input
            type="file"
            name="img"
            value={formData.img}
            onChange={(e) => {
              setFormData({ ...formData, img: e.target.value });
            }}
            id="img"
          />
        </div>
      </div>
    </div>
  );
}

export default Step3;
