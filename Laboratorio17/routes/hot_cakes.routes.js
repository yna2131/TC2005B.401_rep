const express = require('express');
const path = require('path');

const router = express.Router();

const hot_cakesController = require('../controllers/hot_cakes.controller');

// 루트를 정의할 때에는, 언제나 좀 더 정밀한 수준에서 general 한 표현으로 넘어간다.

router.get('/lista/:id', hot_cakesController.get_lista);

router.get('/lista', hot_cakesController.get_lista);

router.get('/nuevo', hot_cakesController.get_nuevo);

router.post('/nuevo', hot_cakesController.post_nuevo);

router.get('/pedir', hot_cakesController.get_pedir);

router.post('/pedir', hot_cakesController.post_pedir);

router.get('/pedido', hot_cakesController.get_pedido);

module.exports = router;