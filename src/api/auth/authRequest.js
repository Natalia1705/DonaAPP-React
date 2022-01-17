const URL_BASE = 'http://localhost:5000/api';

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
