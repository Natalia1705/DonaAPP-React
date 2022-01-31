const URL_BASE = 'https://fast-shelf-59848.herokuapp.com/api';

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
