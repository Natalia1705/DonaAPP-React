import Auth from '../../utils/Auth';

const URL_BASE = 'https://fast-shelf-59848.herokuapp.com/api';

export const createCardToken = (card) => {
  const session = Auth.getSession();
  const query = fetch(`${URL_BASE}/payment/card-token`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.token}`,
    },
    body: JSON.stringify(card),
  });
  return query;
};

export const createCustomer = () => {
  const session = Auth.getSession();
  const query = fetch(`${URL_BASE}/payment/create-customer`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.token}`,
    },
  });

  return query;
};

export const makePayment = (data) => {
  const session = Auth.getSession();
  const query = fetch(`${URL_BASE}/payment/make-payment`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.token}`,
    },
    body: JSON.stringify(data),
  });

  return query;
};
