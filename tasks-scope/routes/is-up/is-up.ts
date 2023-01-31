export function getİsUpRoute() {
  return {
    method: 'get',
    route: '/is-up',
    middlewares: [async (req, res) => res.send('is-up response')],
  };
}
