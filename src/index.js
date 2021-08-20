const dotenv = require('dotenv');
dotenv.config();
const app = require('./routes/routes');

const port = process.env.ENV_SERVER_PORT;

const ambiente = {
  url: `http://localhost:${port}`,
  urlSwagger: `http://localhost:${port}/docs`,
};

app.listen(port, async () => {
  console.log(`listen in port ${port}`);
  console.log(`listen in URL ${ambiente.url}`);
  console.log(`listen Swagger URL ${ambiente.urlSwagger}`);
});
