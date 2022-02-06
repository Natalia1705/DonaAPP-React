import Auth from '../../../utils/Auth';
import config from '../../../config';

const { URL_BASE } = config;

const usePUT = async (id, values) => {
  await fetch(`${URL_BASE}/campaigns/${id}`, {
    method: 'PUT',
    body: JSON.stringify(values),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
      usertoken: Auth.getSession().token,
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error('Error:', error))
    .then((response) => console.log('Success:', response));
};

export default usePUT;
