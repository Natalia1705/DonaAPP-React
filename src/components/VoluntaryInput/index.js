import React from 'react';

const VoluntaryInput = ({ voluntaryInput, setVoluntaryInput }) => (
  <div className="voluntary">
    <p className="voluntary__title">
      Aportación voluntaria a los servicios de Donapp
    </p>
    <p className="voluntary__subtitle">
      La aportación voluntaria es una donación extra y opcional que puede hacer
      para ayudar a financiar esta aplicación.
    </p>
    <div className="voluntary__input">
      <div className="value">{`${voluntaryInput}%`}</div>
      <input
        type="range"
        min={0}
        max={30}
        step={3}
        value={voluntaryInput}
        onChange={(e) => setVoluntaryInput(e.target.value)}
      />
    </div>
  </div>
);

export default VoluntaryInput;
