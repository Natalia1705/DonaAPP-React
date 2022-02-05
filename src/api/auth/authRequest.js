import config from '../../config';

const { URL_BASE } = config;
export const signIn = (user) => {
  const query = fetch(`${URL_BASE}/user/signin`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return query;
};

export const signUp = (user) => {
  const query = fetch(`${URL_BASE}/user/signup`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  return query;
};
