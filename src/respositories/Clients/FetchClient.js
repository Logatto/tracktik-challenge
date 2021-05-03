async function Client(url = '', data = {}, method = 'GET') {
  const body = Object.keys(data).length > 0 ? JSON.stringify(data) : null;

  const options = {
    method,
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body,
  };

  const response = await fetch(url, options);
  const totalCount = response.headers.get('X-Total-Count');

  return { result: await response.json(), status: response.status, meta: { totalCount } };
}

export default Client;
