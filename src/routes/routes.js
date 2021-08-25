const { getLogin } = require('../controller/loginController');
const { getUser } = require('../controller/userController');
const { swaggerReader } = require('../utils/readFile');
const { validationJWT } = require('../utils/auth');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

var router = express.Router();

swaggerReader(app);

//Rotas do projeto
router.get('/login', getLogin);

router.get('/userInfos', validationJWT, getUser);

app.use('/', router);
module.exports = app;
