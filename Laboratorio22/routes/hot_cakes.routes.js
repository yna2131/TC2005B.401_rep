const express = require('express');
const path = require('path');
const hasCreate = require('../util/has-create');

const router = express.Router();

const hot_cakesController = require('../controllers/hot_cakes.controller');

router.get('/buscar/:valor_busqueda', hot_cakesController.get_buscar);

router.get('/lista/:id', hot_cakesController.get_lista);

router.get('/lista', hot_cakesController.get_lista);

router.get('/nuevo', hasCreate, hot_cakesController.get_nuevo);

router.post('/nuevo', hasCreate, hot_cakesController.post_nuevo);

router.get('/pedir', hot_cakesController.get_pedir);

router.post('/pedir', hot_cakesController.post_pedir);

router.get('/pedido', hot_cakesController.get_pedido);

module.exports = router;