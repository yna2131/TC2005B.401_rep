// en este archivo esta la logica de la pagina 

//const { request, response } = require('express');
const express = require('express');
const path = require("path");
const router = express.Router();
const hasCreate= require('../util/has-create');


const hot_cakesController = require("../controller/hot_cakes.controller");


router.get('/lista/:id', hot_cakesController.get_lista);

router.get('/lista', hot_cakesController.get_lista);

router.get("/nuevo", hasCreate, hot_cakesController.get_nuevo);

router.post("/nuevo", hasCreate ,hot_cakesController.post_nuevo);

router.get("/pedir", hot_cakesController.get_pedir);

router.post("/pedir", hot_cakesController.post_pedir);

router.get('/pedido', hot_cakesController.get_pedido);


module.exports = router; //exportar la ruta