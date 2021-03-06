import React from 'react';

const DonateAmountInput = ({ donateAmount, setDonateAmount }) => {
  // prettier-ignore
  const blockInvalidChar = (e) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

  return (
    <div className="donate__amount">
      <label htmlFor="donate__amount">¿Cuánto vas a donar?</label>
      <label htmlFor="donate__amount" className="donate__exchange">
        USD
      </label>
      <label htmlFor="donate__amount" className="donate__decimal">
        .00
      </label>
      <input
        type="number"
        name="donate__amount"
        id="donate__amount"
        value={donateAmount}
        onKeyDown={blockInvalidChar}
        onChange={(e) => setDonateAmount(e.target.value)}
      />
    </div>
  );
};

export default DonateAmountInput;
