
require('./bootstrap');
const app = require('./app');

const port = config.port || 5000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('App is running on port ', port);
});
