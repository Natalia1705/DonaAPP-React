const URL_BASE = '';

export const signIn = () => {
  const query = fetch(`${URL_BASE}/user/signin`).then((res) => res.json());
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
