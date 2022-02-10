import React from 'react';
import CreditCardComponent from '../../views/Donate/components/CreditCardComponent';
import './styles.scss';

const SummaryCard = ({ donateAmount, voluntaryInput, id }) => {
  const totalAmount =
    Number(donateAmount) + (donateAmount * voluntaryInput) / 100;
  return (
    <div>
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
              donateAmount === ''
                ? '0.00'
                : (donateAmount * voluntaryInput) / 100
            } $`}
          </p>
        </div>
        <div className="summary__total">
          <p>Total a pagar</p>
          <p className="sumary__amount">
            {donateAmount === '' ? '0.00' : totalAmount}$
          </p>
        </div>
      </div>
      <div className="summary mt-3">
        <CreditCardComponent
          totalAmount={totalAmount * 3965.24}
          donateAmount={donateAmount}
          id={id}
        />
      </div>
    </div>
  );
};

export default SummaryCard;
