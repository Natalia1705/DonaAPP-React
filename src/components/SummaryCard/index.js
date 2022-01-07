import React from 'react';
import './styles.scss';

const SummaryCard = ({ donateAmount, voluntaryInput }) => (
  <div className="summary">
    <p className="summary__title">Tu donativo</p>
    <div className="summary__sum">
      <p>Tu donativo</p>
      <p className="sumary__amount">
        {`${donateAmount === '' ? '0.00' : donateAmount} $`}
      </p>
      <p>Aportación para Donapp</p>
      <p className="sumary__amount">
        {`${
          donateAmount === '' ? '0.00' : (donateAmount * voluntaryInput) / 100
        } $`}
      </p>
    </div>
    <div className="summary__total">
      <p>Total a pagar</p>
      <p className="sumary__amount">
        {donateAmount === ''
          ? '0.00'
          : Number(donateAmount) + (donateAmount * voluntaryInput) / 100}
        $
      </p>
    </div>
  </div>
);

export default SummaryCard;
