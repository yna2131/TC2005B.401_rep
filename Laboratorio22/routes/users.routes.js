const express = require('express');
const path = require('path');

const router = express.Router();

const usersController = require('../controllers/users.controller');

router.get('/login', usersController.get_login);

router.post('/login', usersController.post_login);

router.get('/signup', usersController.get_signup);

router.post('/signup', usersController.post_signup);

router.get('/logout', usersController.logout);

module.exports = router;
