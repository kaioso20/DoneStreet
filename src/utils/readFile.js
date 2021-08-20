const fs = require('fs');
const swaggerUi = require('swagger-ui-express');
const swaggerTools = require('swagger-tools');
const jsyaml = require('js-yaml');
const path = require('path');
const { validationJWT } = require('./auth');

module.exports.swaggerReader = (app) => {
  const spec = fs.readFileSync(
    path.join(__dirname, './../swagger/swagger-output.yaml'),
    'utf8'
  );
  const swaggerDoc = jsyaml.load(spec);

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

  swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
    app.use(middleware.swaggerMetadata());

    app.use(
      middleware.swaggerSecurity({
        Bearer: validationJWT,
      })
    );
  });
};
