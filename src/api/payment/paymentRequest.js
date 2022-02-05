import Auth from '../../utils/Auth';
import config from '../../config';

const { URL_BASE } = config;

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
