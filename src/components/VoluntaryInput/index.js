import React from 'react'

export const VoluntaryInput = ({voluntaryInput, setVoluntaryInput}) => {
    return (
        <div className="voluntary">
        <p className="voluntary__title">
          Aportación voluntaria a los servicios de Donapp
        </p>
        <p className="voluntary__subtitle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
          fugit id libero atque saepe labore voluptates.
        </p>
        <div className="voluntary__input">
          <div className="value">{voluntaryInput}%</div>
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
    )
}
