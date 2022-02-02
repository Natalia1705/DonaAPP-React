const URL_BASE = 'https://fast-shelf-59848.herokuapp.com/api';

export const createCardToken = (card) => {
  const query = fetch(`${URL_BASE}/payment/card-token`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(card),
  });
  return query;
};

export const createCustomer = (customer) => {
  const query = fetch(`${URL_BASE}/payment/create-customer`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customer),
  });

  return query;
};

export const makePayment = (data) => {
  const query = fetch(`${URL_BASE}/payment/make-payment`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return query;
};
