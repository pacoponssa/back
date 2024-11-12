const express = require('express');
const { login, refreshToken, register } = require('../controllers/auth.controllers');

const router = express.Router();

router.post('/login', login);
router.post('refresh', refreshToken);
router.post('/register', register);

module.exports = router;
