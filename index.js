const fs = require('fs');
const path = require('path');
const app = require('express')();
const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');

// docs
try {
  const filename = path.join(__dirname, 'swagger.yaml');
  const contents = fs.readFileSync(filename, 'utf8');
  const swaggerDocument = yaml.load(contents);
  app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} catch (err) {
  console.log(err.stack || String(err));
}

const port = process.env.PORT || 10010;
console.log(`Open swagger docs at http://localhost:${port}/`);
app.listen(port);
